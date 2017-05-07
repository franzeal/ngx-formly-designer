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
                        key: "templateOptions.placeholder",
                        type: "input",
                        templateOptions: {
                            label: "placeholder"
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
                name: "select" 
            },
            { 
                name: "multicheckbox" 
            }
        ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
