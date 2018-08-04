import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';


@Component({
    selector: 'custom-formly-field-input',
    template: `
        <input [type]="type" [formControl]="formControl" class="form-control"
            [formlyAttributes]="field" [ngClass]="{'form-control-danger': formControl.valid}">
    `,
})
export class FormlyFieldCustomInputComponent extends FieldType {
    get type(): string {
        return this.to.type || 'text';
    }
}
