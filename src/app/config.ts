import { ConfigOption } from '@ngx-formly/core';
import { FormlyFieldMultiCheckbox, FormlyFieldSelect } from '@ngx-formly/bootstrap';

import { FormlyFieldCustomInputComponent } from './types/custom-input';
import { FormlyFieldRepeatSectionComponent } from './types/repeat-section';
import { FormlyWrapperExpanderComponent } from './wrappers/expander';

export const fieldComponents = [
  FormlyFieldCustomInputComponent,
  FormlyFieldRepeatSectionComponent,
  FormlyWrapperExpanderComponent
];

export const config: ConfigOption = {
  types: [
    { name: 'extended-input', extends: 'input' },
    { name: 'customInput', component: FormlyFieldCustomInputComponent },
    { name: 'repeatSection', component: FormlyFieldRepeatSectionComponent },
    {
      name: 'multicheckbox', component: FormlyFieldMultiCheckbox,
      defaultOptions: {
        templateOptions: {
          options: []
        }
      }
    },
    {
      name: 'select', component: FormlyFieldSelect,
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
