import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
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
        this.mutateFields(fields, true);
        return fields;
    }

    private getDesignerOptions(type: string): { [name: string]: DesignerOption } {
        if (type === 'type') {
            return this.formlyDesignerConfig.types;
        }
        if (type === 'wrapper') {
            return this.formlyDesignerConfig.wrappers;
        }
        return {};
    }

    public mutateField(field: FormlyFieldConfig, designerField: boolean): void {
        if (isObject(field.templateOptions)) {
            field.templateOptions['$designerField'] = designerField;
        }
        else {
            field.templateOptions = { $designerField: designerField };
        }
        if (field.fieldGroup) {
            this.mutateFields(field.fieldGroup, designerField);
        }
        else if (field.fieldArray && field.fieldArray.fieldGroup) {
            // Treating fieldArrays as fieldGroups
            field.templateOptions['$fieldArray'] = { type: field.type };
            field.fieldGroup = field.fieldArray.fieldGroup;
            delete field.fieldArray;
            delete field.type;

            this.mutateFields(field.fieldGroup, designerField);
        }
    }

    public mutateFields(fields: FormlyFieldConfig[], designerFields: boolean): void {
        fields.forEach(field => this.mutateField(field, designerFields));
    }
}
