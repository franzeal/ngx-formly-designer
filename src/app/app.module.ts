import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormlyModule, FormlyBootstrapModule } from 'ng-formly';

import { FormlyDesignerModule } from './formly-designer/formly-designer.module';

import { config, fieldComponents } from './config';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,

        fieldComponents
    ],
    imports: [
        BrowserModule,
        HttpModule,

        FormlyModule.forRoot(config),
        FormlyBootstrapModule,

        FormlyDesignerModule.forRoot({
            types: [
                {
                    name: "input",
                    fields: [
                        {
                            key: "templateOptions.label",
                            type: "input",
                            templateOptions: {
                                label: "label"
                            }
                        },
                        {
                            key: "templateOptions.type",
                            type: "select",
                            templateOptions: {
                                label: "type",
                                options: [
                                    {
                                        label: "text",
                                        value: "text"
                                    },
                                    {
                                        label: "number",
                                        value: "number"
                                    }
                                ]
                            },
                            defaultValue: "text"
                        },
                        {
                            key: "templateOptions.placeholder",
                            type: "input",
                            templateOptions: {
                                label: "placeholder"
                            }
                        },
                        {
                            key: "templateOptions.description",
                            type: "input",
                            templateOptions: {
                                label: "description"
                            }
                        },
                        {
                            key: "templateOptions.pattern",
                            type: "input",
                            templateOptions: {
                                label: "pattern"
                            }
                        },
                        {
                            key: "templateOptions.required",
                            type: "checkbox",
                            templateOptions: {
                                label: "required"
                            }
                        }
                    ]
                },
                {
                    name: "checkbox",
                    fields: [
                        {
                            key: "templateOptions.label",
                            type: "input",
                            templateOptions: {
                                label: "label"
                            }
                        }
                    ]
                },
                {
                    name: "select",
                    fields: [
                        {
                            key: "templateOptions.label",
                            type: "input",
                            templateOptions: {
                                label: "label"
                            }
                        },
                        {
                            template: '<div class="mb-3">options</div>'
                        },
                        {
                            key: "templateOptions.options",
                            type: "repeatSection",
                            templateOptions: {
                                canAdd: true,
                                canRemove: true
                            },
                            fieldArray: {
                                className: "ml-3",
                                fieldGroup: [
                                    {
                                        key: "label",
                                        type: "input",
                                        templateOptions: {
                                            label: "label"
                                        }
                                    },
                                    {
                                        key: "value",
                                        type: "input",
                                        templateOptions: {
                                            label: "value"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            template: '<div class="mb-3"></div>'
                        },
                        {
                            key: "templateOptions.required",
                            type: "checkbox",
                            templateOptions: {
                                label: "required"
                            }
                        }
                    ]
                },
                {
                    name: "multicheckbox",
                    fields: [
                        {
                            key: "templateOptions.label",
                            type: "input",
                            templateOptions: {
                                label: "label"
                            }
                        }
                    ]
                }
            ]
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
