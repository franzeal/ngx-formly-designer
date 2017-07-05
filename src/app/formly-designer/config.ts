import { Component } from '@angular/core';

import { ConfigOption } from 'ng-formly';

import { FormlyFieldFieldArrayComponent } from './types/field-array';
import { FormlyWrapperFieldDesignerComponent } from './wrappers/field-designer';
import { FormlyWrapperFieldGroupDesignerComponent } from './wrappers/field-group-designer';

import { TemplateDesigner } from './run/designer';


export const fieldComponents: Component[] = [
    FormlyFieldFieldArrayComponent
];

export const wrapperComponents: Component[] = [
    FormlyWrapperFieldDesignerComponent,
    FormlyWrapperFieldGroupDesignerComponent
];

export const config: ConfigOption = {
    types: [
        { name: 'fieldArray', component: FormlyFieldFieldArrayComponent }
    ],
    wrappers: [
        { name: 'fieldDesigner', component: FormlyWrapperFieldDesignerComponent },
        { name: 'fieldGroupDesigner', component: FormlyWrapperFieldGroupDesignerComponent }
    ],
    manipulators: [
        { class: TemplateDesigner, method: 'run' }
    ]
};

