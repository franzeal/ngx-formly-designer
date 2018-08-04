import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';


@Component({
    selector: 'formly-wrapper-designer',
    template: `
        <ng-template #fieldComponent></ng-template>
    `
})
export class FormlyWrapperDesignerComponent extends FieldWrapper {
    @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;
}
