import { Component } from '@angular/core';

import { ConfigOption } from 'ng-formly';

import { FormlyFieldRepeatSectionComponent } from './types/repeat-section';
import { FormlyFieldTypeSelectComponent } from './types/type-select';
import { FormlyFieldWrapperSelectComponent } from './types/wrapper-select';
import { FormlyWrapperControlDesignerComponent } from './wrappers/control-designer';
import { FormlyWrapperFieldGroupDesignerComponent } from './wrappers/field-group-designer';

import { TemplateDesigner } from './run/designer';


export const fieldComponents: Component[] = [
    FormlyFieldRepeatSectionComponent,
    FormlyFieldTypeSelectComponent,
    FormlyFieldWrapperSelectComponent
];

export const wrapperComponents: Component[] = [
    FormlyWrapperControlDesignerComponent,
    FormlyWrapperFieldGroupDesignerComponent
];

export const config: ConfigOption = {
    types: [
        { name: 'repeatSection', component: FormlyFieldRepeatSectionComponent },
        { name: 'typeSelect', component: FormlyFieldTypeSelectComponent },
        { name: 'wrapperSelect', component: FormlyFieldTypeSelectComponent }
    ],
    wrappers: [
        { name: 'controlDesigner', component: FormlyWrapperControlDesignerComponent },
        { name: 'fieldGroupDesigner', component: FormlyWrapperFieldGroupDesignerComponent }
    ],
    manipulators: [
        { class: TemplateDesigner, method: 'run' }
    ]
};

