import { Component } from '@angular/core';
import { ConfigOption, FormlyFieldMultiCheckbox, FormlyFieldSelect } from 'ng-formly';
import { FormlyFieldCustomInputComponent } from './types/custom-input';
import { FormlyFieldRepeatSectionComponent } from './types/repeat-section';
import { FormlyWrapperExpanderComponent } from './wrappers/expander';

export const fieldComponents: Component[] = [
    FormlyFieldCustomInputComponent,
    FormlyFieldRepeatSectionComponent,
    FormlyWrapperExpanderComponent
];

export const config: ConfigOption = {
    types: [
        { name: 'extended-input', extends: 'input' },
        { name: 'customInput', component: FormlyFieldCustomInputComponent },
        { name: 'repeatSection', component: FormlyFieldRepeatSectionComponent },
        { name: 'multicheckbox', component: FormlyFieldMultiCheckbox,
            defaultOptions: {
                templateOptions: {
                    options: []
                }
            }
        },
        { name: 'select', component: FormlyFieldSelect,
            defaultOptions: {
                templateOptions: {
                    options: []
                }
            }
        }
    ],
    wrappers: [
        { name: 'expander', component: FormlyWrapperExpanderComponent }
    ]
};
