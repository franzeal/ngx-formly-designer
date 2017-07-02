import { Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { Subscription } from 'rxjs/Rx';
import { cloneDeep, isObject, isString } from 'lodash';


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
                    <div *ngIf="formlyDesignerConfig.settings.showClassName" class="form-group">
                        <label>className</label>
                        <input formControlName="className" class="form-control">
                    </div>
                    <div *ngIf="showWrappers" class="form-group">
                        <label>wrappers</label>
                        <wrappers-picker [field]="field"
                            (selected)="onWrappersSelected($event)">
                        </wrappers-picker>
                    </div>
                </div>
                <div class="card-block">
                    <ng-content></ng-content>
                </div>
            </div>
        </form>
    `,
    styles: [`
        .card-header:last-child {
            border-bottom: 0;
        }
    `],
    providers: [
        FIELD_GROUP_EDITOR_CONTROL_VALUE_ACCESSOR
    ]
})
export class FieldGroupEditorComponent implements ControlValueAccessor, OnDestroy, OnInit {
    @Input() showWrappers: boolean;

    constructor(
        private formBuilder: FormBuilder,
        public formlyDesignerConfig: FormlyDesignerConfig
    ) {
        this.form = formBuilder.group({
            key: [''],
            className: [''],
            wrappers: formBuilder.control([])
        });
    }

    get key(): FormControl {
        return this.form.get('key') as FormControl;
    }

    get className(): FormControl {
        return this.form.get('className') as FormControl;
    }

    invalid: boolean;
    form: FormGroup;
    field: FormlyFieldConfig = {};
    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    private subscriptions = new Array<Subscription>();
    private valueChangesSubscription: Subscription;

    ngOnInit(): void {
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

    onWrappersSelected(field: FormlyFieldConfig): void {
        this.updateField(field);
    }

    private subscribeValueChanges(): void {
        this.valueChangesSubscription = this.form.valueChanges
            .debounceTime(0)
            .subscribe(() => this.updateValue());
    }

    private updateField(field: FormlyFieldConfig): void {
        if (!isObject(field)) {
            field = {};
        }
        this.key.setValue(isString(field.key) ? field.key : '');
        this.className.setValue(isString(field.className) ? field.className : '');
        this.field = cloneDeep(field);
    }

    private updateValue(): void {
        if (!this.onChange) {
            return;
        }

        const field = this.field;
        field.key = this.key.value;
        field.className = this.className.value;
        this.onChange(field);
    }
}
