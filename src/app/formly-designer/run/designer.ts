import { FormlyFieldConfig, FormlyConfig } from 'ng-formly';

export class TemplateDesigner {
    run(formlyConfig: FormlyConfig) {
        formlyConfig.templateManipulators.preWrapper.push((field: FormlyFieldConfig) => {
            if (field && field.type && field.templateOptions && field.templateOptions['designer'] !== true && !field.fieldGroup && !field.fieldArray) {
                return 'controlDesigner';
            }
        });
    }
}