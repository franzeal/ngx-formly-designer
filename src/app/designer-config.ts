import { DesignerConfigOption } from 'ngx-formly-designer';

const reserved = new Set(['label', 'fieldset', 'description', 'validation-message', 'form-field']);

export function formlyBootstrapfilterWrapper(wrapper: string) {
  return reserved.has(wrapper);
}

const tabFields = [
  {
    key: 'templateOptions.tabTitle',
    type: 'input',
    templateOptions: {
      label: 'tabTitle'
    }
  }
];

export const designerConfig: DesignerConfigOption = {
  settings: {
    filterWrapper: formlyBootstrapfilterWrapper
  },
  types: [
    {
      name: 'input',
      fields: [
        {
          key: 'templateOptions.label',
          type: 'input',
          templateOptions: {
            label: 'label'
          }
        },
        {
          key: 'templateOptions.type',
          type: 'select',
          templateOptions: {
            label: 'type',
            options: [
              {
                label: 'text',
                value: 'text'
              },
              {
                label: 'number',
                value: 'number'
              }
            ]
          },
          defaultValue: 'text'
        },
        {
          key: 'templateOptions.placeholder',
          type: 'input',
          templateOptions: {
            label: 'placeholder'
          }
        },
        {
          key: 'defaultValue',
          type: 'input',
          templateOptions: {
            label: 'default value'
          }
        },
        {
          key: 'templateOptions.description',
          type: 'input',
          templateOptions: {
            label: 'description'
          }
        },
        {
          key: 'templateOptions.pattern',
          type: 'input',
          templateOptions: {
            label: 'pattern'
          }
        },
        {
          key: 'templateOptions.required',
          type: 'checkbox',
          templateOptions: {
            label: 'required'
          },
          defaultValue: false
        }
      ]
    },
    {
      name: 'checkbox',
      fields: [
        {
          key: 'templateOptions.label',
          type: 'input',
          templateOptions: {
            label: 'label'
          }
        },
        {
          key: 'defaultValue',
          type: 'checkbox',
          templateOptions: {
            label: 'default value'
          }
        }
      ]
    },
    {
      name: 'select',
      fields: [
        {
          key: 'templateOptions.label',
          type: 'input',
          templateOptions: {
            label: 'label'
          }
        },
        {
          template: '<div class="mb-3">options</div>'
        },
        {
          key: 'templateOptions.options',
          type: 'repeatSection',
          templateOptions: {
            canAdd: true,
            canRemove: true
          },
          fieldArray: {
            className: 'ml-3',
            fieldGroup: [
              {
                key: 'label',
                type: 'input',
                templateOptions: {
                  label: 'label'
                }
              },
              {
                key: 'value',
                type: 'input',
                templateOptions: {
                  label: 'value'
                }
              }
            ]
          }
        },
        {
          template: '<div class="mb-3"></div>'
        },
        {
          key: 'templateOptions.required',
          type: 'checkbox',
          templateOptions: {
            label: 'required'
          },
          defaultValue: false
        }
      ]
    },
    {
      name: 'multicheckbox',
      fields: [
        {
          key: 'templateOptions.label',
          type: 'input',
          templateOptions: {
            label: 'label'
          }
        },
        {
          key: 'templateOptions.options',
          type: 'repeatSection',
          templateOptions: {
            canAdd: true,
            canRemove: true
          },
          fieldArray: {
            className: 'ml-3',
            fieldGroup: [
              {
                key: 'value',
                type: 'input',
                templateOptions: {
                  label: 'label'
                }
              },
              {
                key: 'key',
                type: 'input',
                templateOptions: {
                  label: 'value'
                }
              }
            ]
          }
        }
      ]
    },
    {
      name: 'repeatSection',
      fieldArray: true
    },
    {
      name: 'tabset',
      fieldGroup: true,
      fields: []
    },
    {
      name: 'tab',
      fieldGroup: true,
      fields: tabFields
    }
  ],
  wrappers: [
    {
      name: 'expander',
      fields: [
        {
          key: 'templateOptions.label',
          type: 'input',
          templateOptions: {
            label: 'label'
          }
        },
        {
          key: 'templateOptions.expanded',
          type: 'checkbox',
          templateOptions: {
            label: 'expanded'
          },
          defaultValue: true
        }
      ]
    }
  ]
};
