import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FieldEditorComponent } from './components/field-editor';
import { FormlyConfig, FormlyModule, FormlyBootstrapModule } from 'ng-formly';
import { FormlyDesignerComponent } from './formly-designer.component';
import { DesignerConfigOption, FormlyDesignerConfig, FORMLY_DESIGNER_CONFIG_TOKEN } from './formly-designer-config';
import { config, fieldComponents, wrapperComponents } from './config';
import { TypeFieldsPipe } from './type-fields.pipe';
import { TypeSelectComponent } from './components/type-select';
import { WrapperSelectComponent } from './components/wrapper-select';


@NgModule({
    declarations: [
        TypeFieldsPipe,

        FieldEditorComponent,
        FormlyDesignerComponent,
        TypeSelectComponent,
        WrapperSelectComponent,

        fieldComponents,
        wrapperComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FormlyModule.forChild()
    ],
    exports: [
        FormlyDesignerComponent
    ],
    providers: [
        FormlyDesignerConfig
    ]
})
export class FormlyDesignerModule {
    constructor(
        formlyConfig: FormlyConfig
    ) {
        formlyConfig.addConfig(config);
    }

    static forRoot(config: DesignerConfigOption = {}): ModuleWithProviders {
        return {
            ngModule: FormlyDesignerModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: [fieldComponents, wrapperComponents], multi: true },
                { provide: FORMLY_DESIGNER_CONFIG_TOKEN, useValue: config, multi: true }
            ]
        };
    }
}