import { Component, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { Observable, Subscription } from 'rxjs/Rx';
import { cloneDeep, isArray, isObject, isString } from 'lodash';


const FIELD_GROUP_EDITOR_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FieldGroupEditorComponent),
    multi: true
};

@Component({
    selector: 'field-group-editor',
    template: `
        <form [formGroup]="form" novalidate>
            <div class="card">
                <div class="card-header">
                    <div class="form-group">
                        <label>key</label>
                        <input formControlName="key" class="form-control">
                    </div>
                    <div *ngIf="showWrappers" class="form-group">
                        <label>wrappers</label>
                        <wrappers-picker [field]="field"
                            (selected)="onWrappersSelected($event)">
                        </wrappers-picker>
                    </div>
                </div>
                <div class="card-block">
                    <div class="form-group">
                        <label>child</label>
                        <field-picker (selected)="onFieldSelected($event)"></field-picker>
                    </div>
                    <ng-content></ng-content>
                </div>
            </div>
        </form>
        <div *ngIf="childFields.length > 0">
            <h4 class="mt-2">Children Preview</h4>
            <formly-designer class="mt-1" [disabled]="true" [preview]="true" [fields]="childFields">
            </formly-designer>
        </div>
    `,
    providers: [
        FIELD_GROUP_EDITOR_CONTROL_VALUE_ACCESSOR
    ]
})
export class FieldGroupEditorComponent implements ControlValueAccessor, OnDestroy, OnInit {
    @Input() showWrappers: boolean;
    @Output() invalid: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private formlyDesignerConfig: FormlyDesignerConfig
    ) {
        this.form = formBuilder.group({
            key: [''],
            fieldGroup: formBuilder.control([]),
            wrappers: formBuilder.control([])
        });
    }

    get key(): FormControl {
        return this.form.get('key') as FormControl;
    }

    get fieldGroup(): FormControl {
        return this.form.get('fieldGroup') as FormControl;
    }

    form: FormGroup;
    field: FormlyFieldConfig = {};
    childFields = new Array<FormlyFieldConfig>();
    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    private subscriptions = new Array<Subscription>();
    private valueChangesSubscription: Subscription;

    ngOnInit(): void {
        this.subscriptions.push(this.form.statusChanges
            .switchMap(() => Observable.timer())
            .subscribe(() => this.invalid = this.form.invalid));

        this.subscriptions.push(this.fieldGroup.valueChanges
            .debounceTime(0)
            .map(fieldGroup => isArray(fieldGroup) ? fieldGroup : [])
            .subscribe(fieldGroup => this.childFields = cloneDeep(fieldGroup)));

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

    onFieldSelected(field: FormlyFieldConfig): void {
        const fieldGroup = isArray(this.fieldGroup.value) ? this.fieldGroup.value.slice() : [];
        fieldGroup.push(field);
        this.fieldGroup.setValue(fieldGroup);
    }

    onWrappersSelected(field: FormlyFieldConfig): void {
        this.updateField(field);
    }

    private subscribeValueChanges(): void {
        this.valueChangesSubscription = this.form.valueChanges
            .switchMap(() => Observable.timer())
            .subscribe(() => this.updateValue());
    }

    private updateField(field: FormlyFieldConfig): void {
        if (!isObject(field)) {
            field = {};
        }
        this.key.setValue(isString(field.key) ? field.key : '');
        const fieldGroup = isArray(field.fieldGroup) ? field.fieldGroup : [];
        this.fieldGroup.setValue(fieldGroup);
        this.childFields = cloneDeep(fieldGroup);
        this.field = cloneDeep(field);
    }

    private updateValue(): void {
        if (!this.onChange) {
            return;
        }

        const field = this.field;
        field.key = this.key.value;
        field.fieldGroup = this.fieldGroup.value;
        this.onChange(field);
    }
}
