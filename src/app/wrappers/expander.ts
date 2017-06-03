import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from 'ng-formly';


@Component({
    selector: 'formly-wrapper-expander',
    template: `
        <expander [heading]="label" [expanded]="expanded">
            <ng-container #fieldComponent></ng-container>
        </expander>
    `
})
export class FormlyWrapperExpanderComponent extends FieldWrapper {
    @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;

    get expanded(): boolean {
        return !this.to || this.to['expanded'] === undefined || this.to['expanded'];
    }

    get label(): string {
        return this.to ? this.to.label : undefined;
    }
}
