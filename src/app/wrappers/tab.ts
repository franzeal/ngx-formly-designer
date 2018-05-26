import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';


@Component({
    selector: 'formly-wrapper-tab',
    template: `
        <tab [title]="tabTitle">
            <ng-container #fieldComponent>
            </ng-container>
        </tab>
    `
})
export class FormlyWrapperTabComponent extends FieldWrapper {
    @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;

    get tabTitle() {
        return this.to.tabTitle;
    }
}
