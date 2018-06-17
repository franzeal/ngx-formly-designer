import { AfterContentInit, Component, ElementRef, ViewContainerRef, ViewChild } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

import { isString } from 'lodash-es';


declare var $: any;

@Component({
    selector: 'formly-wrapper-tabset',
    template: `
        <tabset>
            <ng-template #fieldComponent></ng-template>
        </tabset>
    `
})
export class FormlyWrapperTabsetComponent extends FieldWrapper implements AfterContentInit {
    @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;

    constructor(
        private elementRef: ElementRef
    ) {
        super();
    }

    get tabsetClassName() {
        return this.to.tabsetClassName;
    }

    ngAfterContentInit(): void {
        if (isString(this.tabsetClassName)) {
            $(this.elementRef.nativeElement as HTMLElement).addClass(this.tabsetClassName);
        }
    }
}
