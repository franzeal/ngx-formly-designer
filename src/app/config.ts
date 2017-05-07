import { Component } from '@angular/core';
import { ConfigOption } from 'ng-formly';
import { FormlyFieldCustomInput } from './custom-input';

export const fieldComponents: Component[] = [
    FormlyFieldCustomInput
];

export const config: ConfigOption = {
    types: [
        { name: "custom-input", component: FormlyFieldCustomInput }
    ],
    wrappers: [
    ]
};