import { Component, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { FieldsService } from '../fields.service';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { Observable, Subscription } from 'rxjs/Rx';
import { clone, cloneDeep, isObject, isString } from 'lodash';


const FIELD_EDITOR_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FieldEditorComponent),
    multi: true
};

@Component({
    selector: 'field-editor',
    template: `
        <form [formGroup]="form" novalidate>
            <div class="card">
                <div class="card-header">
                    <div class="form-group">
                        <label>key</label>
                        <input formControlName="key" class="form-control">
                    </div>
                    <div *ngIf="formlyDesignerConfig.settings.showClassName" class="form-group">
                        <label>className</label>
                        <input formControlName="className" class="form-control">
                    </div>
                    <div *ngIf="showType" class="form-group">
                        <label>type</label>
                        <type-select formControlName="type"></type-select>
                    </div>
                    <div *ngIf="showWrappers" class="form-group">
                        <label>wrappers</label>
                        <wrappers-picker [field]="field"
                            (selected)="onWrappersSelected($event)">
                        </wrappers-picker>
                    </div>
                </div>
                <div class="card-block">
                    <formly-form [form]="fieldForm" [fields]="fields" [model]="field">
                    </formly-form>
                    <ng-content></ng-content>
                </div>
            </div>
        </form>
    `,
    providers: [
        FIELD_EDITOR_CONTROL_VALUE_ACCESSOR
    ]
})
export class FieldEditorComponent implements ControlValueAccessor, OnDestroy, OnInit {
    @Input() showType: boolean;
    @Input() showWrappers: boolean;
    @Output() invalid: boolean;

    constructor(
        private fieldsService: FieldsService,
        private formBuilder: FormBuilder,
        public formlyDesignerConfig: FormlyDesignerConfig
    ) {
        this.form = formBuilder.group({
            key: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])],
            className: [''],
            type: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])]
        });
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

    form: FormGroup;
    fieldForm: FormGroup;
    field: FormlyFieldConfig = {};
    fields: FormlyFieldConfig[];
    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    private subscriptions = new Array<Subscription>();
    private valueChangesSubscription: Subscription;

    ngOnInit(): void {
        this.subscriptions.push(this.type.valueChanges
            .subscribe(() => this.onTypeChange()));

        this.subscriptions.push(this.form.statusChanges
            .debounceTime(0)
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
        }
        else {
            this.form.enable();
        }
    }

    private subscribeValueChanges(): void {
        this.valueChangesSubscription = Observable.merge(this.fieldForm.valueChanges, this.form.valueChanges)
            .debounceTime(0)
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
        this.fieldForm = this.formBuilder.group({});
        this.field = clone(this.field);
        this.subscribeValueChanges();
    }

    onWrappersSelected(field: FormlyFieldConfig): void {
        this.updateField(field);
    }
}
