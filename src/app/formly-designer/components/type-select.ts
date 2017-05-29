import { AfterViewInit, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { Observable, Subscription } from 'rxjs/Rx';


const TYPE_SELECT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TypeSelectComponent),
    multi: true
};

@Component({
    selector: 'type-select',
    template: `
        <select [formControl]="formControl" style="width:100%" class="custom-select">
            <option *ngFor="let type of types; let i = index" [ngValue]="type">{{ type }}</option>
        </select>
    `,
    providers: [TYPE_SELECT_CONTROL_VALUE_ACCESSOR]
})
export class TypeSelectComponent implements AfterViewInit, ControlValueAccessor, OnDestroy, OnInit {
    constructor(
        private formlyDesignerConfig: FormlyDesignerConfig
    ) { }

    formControl = new FormControl();

    protected types: string[];
    protected onChange = (value: any) => { };
    protected onTouched = () => { };

    private valueChangesSubscription: Subscription;

    ngAfterViewInit(): void {
        Observable.timer().subscribe(() => {
            this.types = Object.keys(this.formlyDesignerConfig.types);
            if (this.types.length > 0) {
                this.formControl.setValue(this.types[0]);
            }
            this.types.push('fieldGroup');
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
        }
        else {
            this.formControl.enable();
        }
    }
}
