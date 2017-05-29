import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { Subscription } from 'rxjs/Subscription';


const WRAPPER_SELECT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WrapperSelectComponent),
    multi: true
};

@Component({
    selector: 'wrapper-select',
    template: `
        <select [formControl]="formControl" class="custom-select">
            <option selected></option>
            <option *ngFor="let wrapper of wrappers" [ngValue]="wrapper">{{ wrapper }}</option>
        </select>
    `,
    providers: [WRAPPER_SELECT_CONTROL_VALUE_ACCESSOR]
})
export class WrapperSelectComponent implements ControlValueAccessor, OnDestroy, OnInit {
    constructor(
        private formlyDesignerConfig: FormlyDesignerConfig
    ) {
        this.wrappers = Object.keys(this.formlyDesignerConfig.wrappers);
    }

    formControl = new FormControl();

    protected wrappers: string[];
    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    private valueChangesSubscription: Subscription;

    ngOnInit(): void {
        this.valueChangesSubscription = this.formControl.valueChanges.subscribe(value => {
            if (this.onChange) {
                this.onChange(value);
            }
        });
    }

    ngOnDestroy(): void {
        this.valueChangesSubscription.unsubscribe();
    }

    writeValue(obj: any) {
        this.formControl.setValue(obj);
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.formControl.disable();
        }
        else {
            this.formControl.enable();
        }
    }
}
