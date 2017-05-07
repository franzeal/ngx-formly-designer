import { Component } from '@angular/core';

import { ConfigOption } from 'ng-formly';

import { FormlyFieldTypeSelect } from './types/type-select';
import { FormlyFieldWrapperSelect } from './types/wrapper-select';
import { FormlyWrapperControlDesigner } from './wrappers/control-designer';

import { TemplateDesigner } from './run/designer';


export const fieldComponents: Component[] = [
    FormlyFieldTypeSelect,
    FormlyFieldWrapperSelect
];

export const wrapperComponents: Component[] = [
    FormlyWrapperControlDesigner
];

export const config: ConfigOption = {
    types: [
        { name: 'type-select', component: FormlyFieldTypeSelect },
        { name: 'wrapper-select', component: FormlyFieldTypeSelect }
    ],
    wrappers: [
        { name: 'control-designer', component: FormlyWrapperControlDesigner }
    ],
    manipulators: [
        { class: TemplateDesigner, method: 'run' }
    ]
};

