import { Component } from '@angular/core';

import { ConfigOption } from 'ng-formly';

import { FormlyFieldRepeatSectionComponent } from './types/repeat-section';
import { FormlyFieldTypeSelectComponent } from './types/type-select';
import { FormlyFieldWrapperSelectComponent } from './types/wrapper-select';
import { FormlyWrapperFieldDesignerComponent } from './wrappers/field-designer';
import { FormlyWrapperFieldArrayDesignerComponent } from './wrappers/field-array-designer';
import { FormlyWrapperFieldGroupDesignerComponent } from './wrappers/field-group-designer';

import { TemplateDesigner } from './run/designer';


export const fieldComponents: Component[] = [
    FormlyFieldRepeatSectionComponent,
    FormlyFieldTypeSelectComponent,
    FormlyFieldWrapperSelectComponent
];

export const wrapperComponents: Component[] = [
    FormlyWrapperFieldDesignerComponent,
    FormlyWrapperFieldArrayDesignerComponent,
    FormlyWrapperFieldGroupDesignerComponent
];

export const config: ConfigOption = {
    types: [
        { name: 'repeatSection', component: FormlyFieldRepeatSectionComponent },
        { name: 'typeSelect', component: FormlyFieldTypeSelectComponent },
        { name: 'wrapperSelect', component: FormlyFieldTypeSelectComponent }
    ],
    wrappers: [
        { name: 'fieldDesigner', component: FormlyWrapperFieldDesignerComponent },
        { name: 'fieldArrayDesigner', component: FormlyWrapperFieldArrayDesignerComponent },
        { name: 'fieldGroupDesigner', component: FormlyWrapperFieldGroupDesignerComponent }
    ],
    manipulators: [
        { class: TemplateDesigner, method: 'run' }
    ]
};

