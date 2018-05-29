import { FormlyFieldConfig, FormlyConfig } from '@ngx-formly/core';
import { isArray, isString } from 'lodash';


export class TemplateDesigner {
    private isNonDesignerField(field: FormlyFieldConfig): boolean {
        return field && (!field.templateOptions || field.templateOptions['$designerField'] !== true);
    }

    run(fc: FormlyConfig) {
        fc.templateManipulators.preWrapper.push((field: FormlyFieldConfig) => {
            if (this.isNonDesignerField(field)) {
                return field.fieldGroup ? 'fieldGroupDesigner' : 'fieldDesigner';
            }
        });
        fc.templateManipulators.postWrapper.push((field: FormlyFieldConfig) => {
            if (this.isNonDesignerField(field)) {
                return 'designer';
            }
        });
    }
}
