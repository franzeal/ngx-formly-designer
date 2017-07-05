import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from 'ng-formly';

import { clone } from 'lodash';


@Component({
    selector: 'formly-field-field-array',
    template: `
        <formly-form [fields]="field.fieldGroup" [options]="newOptions" [form]="formlyGroup" [model]="model" [buildForm]="false">
        </formly-form>
    `
})
export class FormlyFieldFieldArrayComponent extends FieldType implements OnInit {
    static createControl(model: any, field: FormlyFieldConfig): AbstractControl {
        return new FormGroup(
            {},
            field.validators ? field.validators.validation : undefined,
            field.asyncValidators ? field.asyncValidators.validation : undefined
        );
    }

    private _newOptions: any;

    ngOnInit(): void {
        this._newOptions = clone(this.options);
    }

    get formlyGroup(): FormGroup {
        if (this.field.formControl) {
            return this.field.formControl as FormGroup;
        }
        return this.form;
    }

    get newOptions(): any {
        return this._newOptions;
    }
}
