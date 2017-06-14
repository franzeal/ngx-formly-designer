import { FormlyFieldConfig, FormlyConfig } from 'ng-formly';


export class TemplateDesigner {
    run(formlyConfig: FormlyConfig) {
        formlyConfig.templateManipulators.preWrapper.push((field: FormlyFieldConfig) => {
            if (!field || (field.templateOptions && field.templateOptions['designer'] === true)) {
                return;
            }
            if (field.type) {
                return field.fieldGroup ? 'fieldGroupDesigner' : 'fieldDesigner';
            }
        });
    }
}
