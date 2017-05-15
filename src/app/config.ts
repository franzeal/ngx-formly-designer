import { Component } from '@angular/core';
import { ConfigOption, FormlyFieldMultiCheckbox, FormlyFieldSelect } from 'ng-formly';
import { FormlyFieldCustomInput } from './custom-input';

export const fieldComponents: Component[] = [
    FormlyFieldCustomInput
];

export const config: ConfigOption = {
    types: [
        { name: "customInput", component: FormlyFieldCustomInput },
        { name: "multicheckbox", component: FormlyFieldMultiCheckbox,
            defaultOptions: {
                templateOptions: {
                    options: []
                }
            }
        },
        { name: "select", component: FormlyFieldSelect,
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