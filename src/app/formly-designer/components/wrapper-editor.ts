import { Component, forwardRef, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { FieldsService } from '../fields.service';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { Observable, Subscription } from 'rxjs/Rx';
import { clone, isArray, isString } from 'lodash';


const WRAPPER_EDITOR_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WrapperEditorComponent),
    multi: true
};

@Component({
    selector: 'wrapper-editor',
    template: `
        <form [formGroup]="form" novalidate>
            <div class="card">
                <div *ngIf="showWrapper" class="card-header">
                    <div class="form-group">
                        <label>wrapper</label>
                        <wrapper-select formControlName="wrapper"></wrapper-select>
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
        WRAPPER_EDITOR_CONTROL_VALUE_ACCESSOR
    ]
})
export class WrapperEditorComponent implements ControlValueAccessor, OnChanges, OnDestroy, OnInit {
    @Input() field: FormlyFieldConfig = {};
    @Input() wrapperIndex: number;
    @Input() showWrapper: boolean;
    @Output() invalid: boolean;

    constructor(
        private fieldsService: FieldsService,
        private formBuilder: FormBuilder,
        private formlyDesignerConfig: FormlyDesignerConfig
    ) {
        this.form = formBuilder.group({
            wrapper: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])]
        });
        this.fieldForm = formBuilder.group({});
    }

    get wrapper(): FormControl {
        return this.form.get('wrapper') as FormControl;
    }

    form: FormGroup;
    fieldForm: FormGroup;
    fields: FormlyFieldConfig[];
    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    private subscriptions = new Array<Subscription>();
    private wrapperChangeOverride = false;
    private valueChangeOverride = false;

    ngOnInit(): void {
        this.subscriptions.push(this.wrapper.valueChanges
            .filter(() => this.wrapperChangeOverride === false)
            .subscribe(() => this.onWrapperChange()));

        this.subscriptions.push(this.form.statusChanges
            .switchMap(() => Observable.timer())
            .subscribe(() => this.invalid = this.form.invalid));

        this.subscriptions.push(Observable.merge(this.fieldForm.valueChanges, this.form.valueChanges)
            .filter(() => this.valueChangeOverride === false)
            .switchMap(() => Observable.timer())
            .subscribe(() => this.updateValue()));
    }

    ngOnDestroy(): void {
        this.subscriptions.splice(0).forEach(subscription => subscription.unsubscribe());
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['field'] || changes['wrapperIndex']) {
            this.wrapperChangeOverride = true;
            const field = this.field ? this.field : { };
            const wrappers = isArray(field.wrappers) ? field.wrappers : [];
            const wrapper = wrappers[this.wrapperIndex];
            this.wrapper.setValue(isString(wrapper) ? wrapper : '');
            this.fields = this.fieldsService.getWrapperFields(this.wrapper.value);
            this.wrapperChangeOverride = false;
        }
    }

    writeValue(obj: any) {
        this.valueChangeOverride = true;
        this.fieldForm.setValue(obj);
        this.valueChangeOverride = false;
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

    private updateValue(): void {
        if (!this.onChange) {
            return;
        }

        const wrappers = this.field.wrappers.slice();
        wrappers.splice(this.wrapperIndex, 1, this.wrapper.value);
        this.field.wrappers = wrappers;
        this.onChange(this.field);
    }

    private onWrapperChange(): void {
        this.fields = this.fieldsService.getWrapperFields(this.wrapper.value);
        this.fieldForm.setValue({});
        const field = clone(this.field);
        field.wrappers.splice(this.wrapperIndex, 1, this.wrapper.value);
        this.field = field;
    }
}
