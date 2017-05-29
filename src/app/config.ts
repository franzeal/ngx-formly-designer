import { Component } from '@angular/core';
import { ConfigOption, FormlyFieldMultiCheckbox, FormlyFieldSelect } from 'ng-formly';
import { FormlyFieldCustomInputComponent } from './custom-input';

export const fieldComponents: Component[] = [
    FormlyFieldCustomInputComponent
];

export const config: ConfigOption = {
    types: [
        { name: 'customInput', component: FormlyFieldCustomInputComponent },
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
    ]
};
