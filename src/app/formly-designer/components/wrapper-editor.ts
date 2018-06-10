import { Component, forwardRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FieldsService } from '../fields.service';
import { Observable, Subscription } from 'rxjs/Rx';
import { clone, cloneDeep, isObject } from 'lodash';


const WRAPPER_EDITOR_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WrapperEditorComponent),
    multi: true
};

@Component({
    selector: 'wrapper-editor',
    template: `
        <form [formGroup]="fieldForm" novalidate>
            <div class="card">
                <div class="card-body">
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
    @Input() wrapper: string;

    constructor(
        private fieldsService: FieldsService,
        private formBuilder: FormBuilder
    ) {
        this.fieldForm = formBuilder.group({});
    }

    invalid: boolean;
    fieldForm: FormGroup;
    field: FormlyFieldConfig;
    fields = new Array<FormlyFieldConfig>();

    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    private readonly subscriptions = new Array<Subscription>();
    private valueChangesSubscription: Subscription;

    ngOnInit(): void {
        this.subscriptions.push(this.fieldForm.statusChanges
            .switchMap(() => Observable.timer())
            .subscribe(() => this.invalid = this.fieldForm.invalid));

        this.subscribeValueChanges();
    }

    ngOnDestroy(): void {
        this.valueChangesSubscription.unsubscribe();
        this.subscriptions.splice(0).forEach(subscription => subscription.unsubscribe());
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['wrapper']) {
            if (this.valueChangesSubscription) {
                this.valueChangesSubscription.unsubscribe();
            }
            this.fields = this.fieldsService.getWrapperFields(this.wrapper);
            this.fieldForm = this.formBuilder.group({});
            this.field = clone(this.field);
            if (this.valueChangesSubscription) {
                this.subscribeValueChanges();
            }
        }
    }

    writeValue(obj: any) {
        this.valueChangesSubscription.unsubscribe();
        if (!isObject(obj)) {
            obj = {};
        }
        this.fields = this.fieldsService.getWrapperFields(this.wrapper);
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
            this.fieldForm.disable();
        }
        else {
            this.fieldForm.enable();
        }
    }

    private subscribeValueChanges(): void {
        this.valueChangesSubscription = this.fieldForm.valueChanges
            .debounceTime(0)
            .subscribe(() => this.updateValue());
    }

    private updateValue(): void {
        if (!this.onChange) {
            return;
        }

        this.onChange(this.field);
    }
}
