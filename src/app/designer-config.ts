import { DesignerConfigOption } from './formly-designer/formly-designer-config';

export const designerConfig: DesignerConfigOption = {
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
        },
        {
            name: 'tabset',
            fields: []
        },
        {
            name: 'tab',
            fields: [
                {
                    key: 'templateOptions.tabTitle',
                    type: 'input',
                    templateOptions: {
                        label: 'tabTitle'
                    }
                }
            ]
        }
    ]
};
