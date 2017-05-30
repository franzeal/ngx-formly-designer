import { Component, forwardRef, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { Observable, Subscription } from 'rxjs/Rx';
import { cloneDeep, isArray, isString } from 'lodash';


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
                    <div class="form-group">
                        <label>child</label>
                        <field-picker (selected)="onfieldSelected($event)"></field-picker>
                    </div>
                </div>
                <div class="card-block">
                    <ng-content></ng-content>
                </div>
            </div>
        </form>
        <formly-designer *ngIf="childFields.length > 0" class="container mt-2" [active]="false" [fields]="childFields">
        </formly-designer>
    `,
    providers: [
        FIELD_GROUP_EDITOR_CONTROL_VALUE_ACCESSOR
    ]
})
export class FieldGroupEditorComponent implements ControlValueAccessor, OnChanges, OnDestroy, OnInit {
    @Input() field: FormlyFieldConfig = {};
    @Output() invalid: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private formlyDesignerConfig: FormlyDesignerConfig
    ) {
        this.form = formBuilder.group({
            key: [''],
            fieldGroup: formBuilder.array([])
        });
    }

    get key(): FormControl {
        return this.form.get('key') as FormControl;
    }

    get fieldGroup(): FormArray {
        return this.form.get('fieldGroup') as FormArray;
    }

    form: FormGroup;
    childFields = new Array<FormlyFieldConfig>();
    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    private subscriptions = new Array<Subscription>();
    private changeOverride = false;

    ngOnInit(): void {
        this.subscriptions.push(this.form.statusChanges
            .filter(() => this.changeOverride === false)
            .switchMap(() => Observable.timer())
            .subscribe(() => this.invalid = this.form.invalid));

        this.subscriptions.push(this.form.valueChanges
            .filter(() => this.changeOverride === false)
            .switchMap(() => Observable.timer())
            .subscribe(() => this.updateValue()));
    }

    ngOnDestroy(): void {
        this.subscriptions.splice(0).forEach(subscription => subscription.unsubscribe());
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['field']) {
            const field = this.field ? this.field : {};
            this.key.setValue(isString(field.key) ? field.key : '');
            while (this.fieldGroup.length > 0) {
                this.fieldGroup.removeAt(0);
            }
            if (isArray(field.fieldGroup)) {
                field.fieldGroup.forEach((childField, index) => {
                    this.fieldGroup.insert(index, new FormControl(childField));
                });
            }
            this.updateChildFields(this.fieldGroup.value);
        }
    }

    writeValue(obj: any) {
        let changed = false;
        const onChange = this.onChange;
        this.onChange = undefined;

        if (!obj) {
            obj = { key: '', fieldGroup: [] };
            changed = true;
        }
        else if (!('key' in obj) || !('fieldGroup' in obj)) {
            obj = { key: 'key' in obj ? obj.key : '', fieldGroup: 'fieldGroup' in obj ? obj.fieldGroup : [] };
            changed = true;
        }

        this.field = obj;
        this.form.setValue(obj);
        this.updateChildFields(obj.fieldGroup);

        this.onChange = onChange;
        if (changed && onChange) {
            Observable.timer().subscribe(() => {
                onChange(obj);
            });
        }
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

    onfieldSelected(field: FormlyFieldConfig): void {
        this.fieldGroup.push(new FormControl(field));
    }

    private updateChildFields(fields: FormlyFieldConfig[]) {
        this.childFields = isArray(fields) ? cloneDeep(fields) : [];
    }

    private updateValue(): void {
        if (!this.onChange) {
            return;
        }

        this.field.key = this.key.value;
        this.field.fieldGroup = this.fieldGroup.value;
        this.updateChildFields(this.field.fieldGroup);
        this.onChange(this.field);
    }
}
