import { Component } from '@angular/core';
import { FieldType } from 'ng-formly';


@Component({
    selector: 'formly-field-type-select',
    template: `
        <type-select [formControl]="formControl" [formlyAttributes]="field" 
            [ngClass]="{'form-control-danger': valid}">
        </type-select>
    `,
})
export class FormlyFieldTypeSelect extends FieldType { }