import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FieldEditorComponent } from './components/field-editor';
import { FieldGroupEditorComponent } from './components/field-group-editor';
import { FieldPickerComponent } from './components/field-picker';
import { FieldsService } from './fields.service';
import { FormlyConfig, FormlyModule } from 'ng-formly';
import { FormlyDesignerComponent } from './formly-designer.component';
import { DesignerConfigOption, FormlyDesignerConfig, FORMLY_DESIGNER_CONFIG_TOKEN } from './formly-designer-config';
import { config, fieldComponents, wrapperComponents } from './config';
import { TypeSelectComponent } from './components/type-select';
import { WrapperEditorComponent } from './components/wrapper-editor';
import { WrapperSelectComponent } from './components/wrapper-select';
import { WrapperPickerComponent } from './components/wrapper-picker';
import { WrappersPickerComponent } from './components/wrappers-picker';


@NgModule({
    declarations: [
        FieldEditorComponent,
        FieldGroupEditorComponent,
        FieldPickerComponent,
        FormlyDesignerComponent,
        TypeSelectComponent,
        WrapperEditorComponent,
        WrapperSelectComponent,
        WrapperPickerComponent,
        WrappersPickerComponent,

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
        FormlyDesignerConfig,
        FieldsService
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
