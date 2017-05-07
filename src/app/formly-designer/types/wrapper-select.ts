import { Component } from '@angular/core';
import { FieldType } from 'ng-formly';


@Component({
    selector: 'formly-field-wrapper-select',
    template: `
        <wrapper-select [formControl]="formControl" [formlyAttributes]="field" 
            [ngClass]="{'form-control-danger': valid}">
        </wrapper-select>
    `,
})
export class FormlyFieldWrapperSelect extends FieldType { }