import { Component } from '@angular/core';

import { ConfigOption } from 'ng-formly';

import { FormlyFieldRepeatSection } from './types/repeat-section';
import { FormlyFieldTypeSelect } from './types/type-select';
import { FormlyFieldWrapperSelect } from './types/wrapper-select';
import { FormlyWrapperControlDesigner } from './wrappers/control-designer';

import { TemplateDesigner } from './run/designer';


export const fieldComponents: Component[] = [
    FormlyFieldRepeatSection,
    FormlyFieldTypeSelect,
    FormlyFieldWrapperSelect
];

export const wrapperComponents: Component[] = [
    FormlyWrapperControlDesigner
];

export const config: ConfigOption = {
    types: [
        { name: 'repeatSection', component: FormlyFieldRepeatSection },
        { name: 'typeSelect', component: FormlyFieldTypeSelect },
        { name: 'wrapperSelect', component: FormlyFieldTypeSelect }
    ],
    wrappers: [
        { name: 'controlDesigner', component: FormlyWrapperControlDesigner }
    ],
    manipulators: [
        { class: TemplateDesigner, method: 'run' }
    ]
};

