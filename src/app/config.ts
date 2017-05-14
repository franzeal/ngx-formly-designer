import { Component } from '@angular/core';
import { ConfigOption, FormlyFieldSelect } from 'ng-formly';
import { FormlyFieldCustomInput } from './custom-input';

export const fieldComponents: Component[] = [
    FormlyFieldCustomInput
];

export const config: ConfigOption = {
    types: [
        { name: "customInput", component: FormlyFieldCustomInput },
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