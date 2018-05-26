import { ConfigOption } from '@ngx-formly/core';

import { FormlyWrapperDesignerComponent } from './wrappers/designer';
import { FormlyWrapperFieldDesignerComponent } from './wrappers/field-designer';
import { FormlyWrapperFieldGroupDesignerComponent } from './wrappers/field-group-designer';

import { TemplateDesigner } from './run/designer';


export const fieldComponents = [];

export const wrapperComponents = [
    FormlyWrapperDesignerComponent,
    FormlyWrapperFieldDesignerComponent,
    FormlyWrapperFieldGroupDesignerComponent
];

export const config: ConfigOption = {
    wrappers: [
        { name: 'designer', component: FormlyWrapperDesignerComponent },
        { name: 'fieldDesigner', component: FormlyWrapperFieldDesignerComponent },
        { name: 'fieldGroupDesigner', component: FormlyWrapperFieldGroupDesignerComponent }
    ],
    manipulators: [
        { class: TemplateDesigner, method: 'run' }
    ]
};

