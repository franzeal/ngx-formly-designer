import { ConfigOption } from '@ngx-formly/core';
import { FormlyDesignerWrapperComponent } from './wrappers/designer';
import { FormlyDesignerFieldWrapperComponent } from './wrappers/field-designer';
import { FormlyDesignerFieldGroupWrapperComponent } from './wrappers/field-group-designer';
import { TemplateDesigner } from './run/designer';

export const fieldComponents = [];

export const wrapperComponents = [
    FormlyDesignerWrapperComponent,
    FormlyDesignerFieldWrapperComponent,
    FormlyDesignerFieldGroupWrapperComponent
];

export const config: ConfigOption = {
    wrappers: [
        { name: 'designer', component: FormlyDesignerWrapperComponent },
        { name: 'fieldDesigner', component: FormlyDesignerFieldWrapperComponent },
        { name: 'fieldGroupDesigner', component: FormlyDesignerFieldGroupWrapperComponent }
    ],
    manipulators: [
        { class: TemplateDesigner, method: 'run' }
    ]
};
