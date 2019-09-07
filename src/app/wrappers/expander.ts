import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';


@Component({
  selector: 'formly-wrapper-expander',
  template: `
        <expander [heading]="label" [expanded]="expanded">
            <ng-template #fieldComponent></ng-template>
        </expander>
    `
})
export class FormlyWrapperExpanderComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef, static: true }) fieldComponent: ViewContainerRef;

  get expanded(): boolean {
    return !this.to || this.to['expanded'] === undefined || this.to['expanded'];
  }

  get label(): string {
    return this.to ? this.to.label : undefined;
  }
}
