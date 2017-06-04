import { Component, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { FieldsService } from '../fields.service';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { Observable, Subscription } from 'rxjs/Rx';
import { cloneDeep, isString } from 'lodash';


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
                    <div *ngIf="showType" class="form-group">
                        <label>type</label>
                        <type-select formControlName="type"></type-select>
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
    @Output() invalid: boolean;

    constructor(
        private fieldsService: FieldsService,
        private formBuilder: FormBuilder,
        private formlyDesignerConfig: FormlyDesignerConfig
    ) {
        this.form = formBuilder.group({
            key: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])],
            type: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])]
        });
        this.fieldForm = formBuilder.group({});
    }

    get key(): FormControl {
        return this.form.get('key') as FormControl;
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
            .switchMap(() => Observable.timer())
            .subscribe(() => this.invalid = this.form.invalid));

        this.subscribeValueChanges();
    }

    ngOnDestroy(): void {
        this.valueChangesSubscription.unsubscribe();
        this.subscriptions.splice(0).forEach(subscription => subscription.unsubscribe());
    }

    writeValue(obj: any) {
        this.valueChangesSubscription.unsubscribe();
        this.key.setValue(isString(obj.key) ? obj.key : '');
        this.type.setValue(isString(obj.type) ? obj.type : '');
        this.fields = this.fieldsService.getTypeFields(this.type.value);
        this.fieldForm = this.formBuilder.group({});
        this.field = cloneDeep(obj);
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
            .switchMap(() => Observable.timer())
            .subscribe(() => this.updateValue());
    }

    private updateValue(): void {
        if (!this.onChange) {
            return;
        }

        const field = this.field;
        field.key = this.key.value;
        field.type = this.type.value;
        this.onChange(field);
    }

    private onTypeChange(): void {
        this.valueChangesSubscription.unsubscribe();
        this.fields = this.fieldsService.getTypeFields(this.type.value);
        this.fieldForm = this.formBuilder.group({});
        this.subscribeValueChanges();
    }
}
