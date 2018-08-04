import { Component, ElementRef, forwardRef, Input, OnDestroy, OnInit, ViewChild, HostBinding } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FieldsService } from '../fields.service';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { merge, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { clone, cloneDeep, isObject, isString } from 'lodash-es';

const FIELD_EDITOR_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FieldEditorComponent),
    multi: true
};

@Component({
    selector: 'formly-designer-field-editor',
    template: `
        <form [formGroup]="form" novalidate>
            <div class="card">
                <div class="card-header" [ngClass]="{solo: !hasContent && fields.length === 0}">
                    <div class="form-group" [ngClass]="{'has-danger': form.hasError('key') && (key.dirty || key.touched)}">
                        <label class="form-control-label">key</label>
                        <input formControlName="key" class="form-control">
                        <div *ngIf="form.hasError('key') && (key.dirty || key.touched)" class="form-control-feedback">
                            key required.
                        </div>
                    </div>
                    <div *ngIf="formlyDesignerConfig.settings.showClassName" class="form-group">
                        <label class="form-control-label">className</label>
                        <input formControlName="className" class="form-control">
                    </div>
                    <div *ngIf="showType" class="form-group"
                        [ngClass]="{'has-danger': form.hasError('type') && (type.dirty || type.touched)}">
                        <label class="form-control-label">type</label>
                        <formly-designer-type-select formControlName="type"></formly-designer-type-select>
                        <div *ngIf="form.hasError('type') && (type.dirty || type.touched)" class="form-control-feedback">
                            type required.
                        </div>
                    </div>
                    <div *ngIf="showWrappers" class="form-group">
                        <label class="form-control-label">wrappers</label>
                        <formly-designer-wrappers-picker [field]="field"
                            (selected)="onWrappersSelected($event)">
                        </formly-designer-wrappers-picker>
                    </div>
                </div>
                <div #block class="card-body">
                    <formly-form *ngIf="fields.length > 0" [form]="fieldForm" [fields]="fields" [model]="field">
                    </formly-form>
                    <ng-content></ng-content>
                </div>
            </div>
        </form>
    `,
    styles: [`
        .card-header.solo {
            border-bottom: 0;
        }
        .card-header.solo + .card-body {
            display: none;
        }
    `],
    providers: [
        FIELD_EDITOR_CONTROL_VALUE_ACCESSOR
    ]
})
export class FieldEditorComponent implements ControlValueAccessor, OnDestroy, OnInit {
    @Input() showType: boolean;
    @Input() showWrappers: boolean;
    @Input() hasContent: boolean;
    @ViewChild('block') blockElRef: ElementRef;

    private readonly subscriptions = new Array<Subscription>();
    private valueChangesSubscription: Subscription;

    constructor(
        private fieldsService: FieldsService,
        private formBuilder: FormBuilder,
        public formlyDesignerConfig: FormlyDesignerConfig
    ) {
        this.form = formBuilder.group({
            key: [''],
            className: [''],
            type: ['']
        }, { validator: (control) => this.validator(control) });
        this.fieldForm = formBuilder.group({});
    }

    get key(): FormControl {
        return this.form.get('key') as FormControl;
    }

    get className(): FormControl {
        return this.form.get('className') as FormControl;
    }

    get type(): FormControl {
        return this.form.get('type') as FormControl;
    }

    invalid: boolean;
    form: FormGroup;
    fieldForm: FormGroup;
    field: FormlyFieldConfig = {};
    fields = new Array<FormlyFieldConfig>();
    fieldArray: boolean;
    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    ngOnInit(): void {
        this.subscriptions.push(this.type.valueChanges
            .subscribe(() => this.onTypeChange()));

        this.subscriptions.push(this.form.statusChanges
            .pipe(debounceTime(0))
            .subscribe(() => this.invalid = this.form.invalid));

        this.subscribeValueChanges();
    }

    ngOnDestroy(): void {
        this.valueChangesSubscription.unsubscribe();
        this.subscriptions.splice(0).forEach(subscription => subscription.unsubscribe());
    }

    writeValue(obj: any) {
        this.valueChangesSubscription.unsubscribe();
        this.updateField(obj);
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.subscribeValueChanges();
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    private subscribeValueChanges(): void {
        this.valueChangesSubscription = merge(this.fieldForm.valueChanges, this.form.valueChanges)
            .pipe(debounceTime(0))
            .subscribe(() => this.updateValue());
    }

    private updateField(field: FormlyFieldConfig): void {
        if (!isObject(field)) {
            field = {};
        }
        this.key.setValue(isString(field.key) ? field.key : '');
        this.className.setValue(isString(field.className) ? field.className : '');
        this.type.setValue(isString(field.type) ? field.type : '');
        this.fields = this.fieldsService.getTypeFields(this.type.value);
        this.fieldForm = this.formBuilder.group({});
        this.field = cloneDeep(field);
    }

    private updateValue(): void {
        if (!this.onChange) {
            return;
        }

        const field = this.field;
        field.key = this.key.value;
        field.className = this.className.value;
        field.type = this.type.value;
        this.onChange(field);
    }

    private onTypeChange(): void {
        this.valueChangesSubscription.unsubscribe();
        this.fields = this.fieldsService.getTypeFields(this.type.value);
        const designerType = this.formlyDesignerConfig.types[this.type.value];
        this.fieldArray = designerType ? designerType.fieldArray : false;
        this.fieldForm = this.formBuilder.group({});
        this.field = clone(this.field);
        this.subscribeValueChanges();
    }

    onWrappersSelected(field: FormlyFieldConfig): void {
        this.updateField(field);
    }

    private validator(control: FormGroup): { [key: string]: boolean } {
        const type = control.get('type') as FormControl;
        const hasType = isString(type.value) && type.value.trim().length > 0;

        const key = control.get('key') as FormControl;
        const result = { key: false, type: this.showType && !hasType, conflict: false };
        if (hasType && (!isString(key.value) || key.value.trim().length === 0)) {
            result.key = true;
        }

        return result.key || result.type ? result : null;
    }
}
