import { FormlyFieldConfig, FormlyConfig } from '@ngx-formly/core';


export class TemplateDesigner {
    run(formlyConfig: FormlyConfig) {
        formlyConfig.templateManipulators.preWrapper.push((field: FormlyFieldConfig) => {
            if (!field || (field.templateOptions && field.templateOptions['$designerField'] === true)) {
                return;
            }
            if (field.type) {
                if (field.fieldGroup) {
                    return 'fieldGroupDesigner';
                }
                return 'fieldDesigner';
            }
        });
        formlyConfig.templateManipulators.postWrapper.push((field: FormlyFieldConfig) => {
            if (!field || (field.templateOptions && field.templateOptions['$designerField'] === true)) {
                return;
            }
            return 'designer';
        });
    }
}
