import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from 'ng-formly';
import { DesignerOption, FormlyDesignerConfig } from './formly-designer-config';
import { cloneDeep, isObject } from 'lodash';


@Injectable()
export class FieldsService {
    constructor(
        private formlyDesignerConfig: FormlyDesignerConfig
    ) { }

    getTypeFields(type: string): FormlyFieldConfig[] {
        return this.getFields(type, 'type');
    }

    getWrapperFields(wrapper: string): FormlyFieldConfig[] {
        return this.getFields(wrapper, 'wrapper');
    }

    private getFields(name: string, type: string): FormlyFieldConfig[] {
        const designerOption = (name ? this.getDesignerOptions(type)[name] || {} : {}) as DesignerOption;
        const fields = cloneDeep(designerOption.fields || []);
        this.markDesigner(fields);
        return fields;
    }

    private getDesignerOptions(type: string): {[name: string]: DesignerOption} {
        if (type === 'type') {
            return this.formlyDesignerConfig.types;
        }
        if (type === 'wrapper') {
            return this.formlyDesignerConfig.wrappers;
        }
        return { };
    }

    private markDesigner(fields: FormlyFieldConfig[]): void {
        fields.forEach(field => {
            if (isObject(field.templateOptions)) {
                field.templateOptions['designer'] = true;
            }
            else {
                field.templateOptions = { designer: true };
            }
            if (field.fieldGroup) {
                this.markDesigner(field.fieldGroup);
            }
            if (field.fieldArray) {
                this.markDesigner([field.fieldArray]);
            }
        });
    }
}
