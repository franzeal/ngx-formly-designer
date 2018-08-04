import { AfterViewInit, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { Observable, Subscription, timer } from 'rxjs';


const WRAPPER_SELECT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WrapperSelectComponent),
    multi: true
};

@Component({
    selector: 'wrapper-select',
    template: `
        <select [formControl]="formControl" class="custom-select">
            <option *ngFor="let wrapper of wrappers" [ngValue]="wrapper">{{ wrapper }}</option>
        </select>
    `,
    styles: [`
        select {
            width: 100%;
        }
    `],
    providers: [WRAPPER_SELECT_CONTROL_VALUE_ACCESSOR]
})
export class WrapperSelectComponent implements AfterViewInit, ControlValueAccessor, OnDestroy, OnInit {
    constructor(
        private formlyDesignerConfig: FormlyDesignerConfig
    ) { }

    formControl = new FormControl();
    wrappers: string[];

    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    private valueChangesSubscription: Subscription;

    ngAfterViewInit(): void {
        Observable.create().pipe(timer()).subscribe(() => {
            this.wrappers = Object.keys(this.formlyDesignerConfig.wrappers);
            if (this.wrappers.length > 0) {
                this.formControl.setValue(this.wrappers[0]);
            }
        });
    }

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
        } else {
            this.formControl.enable();
        }
    }
}
