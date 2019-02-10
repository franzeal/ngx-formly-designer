import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DesignerOption, FormlyDesignerConfig } from './formly-designer-config';
import { cloneDeep, equalType, getKeyPath, isObject, traverseFields } from './util';

@Injectable()
export class FieldsService {
    constructor(
        private formlyDesignerConfig: FormlyDesignerConfig
    ) { }

    getFullKeyPath(field: FormlyFieldConfig, fields: FormlyFieldConfig[]): (string | number)[] {
        let keyPath = [];
        if (field && field.key) {
            const parents = new Map<FormlyFieldConfig, FormlyFieldConfig>();
            traverseFields(fields, (f, path, parent) => {
                parents.set(f, parent);
            });

            keyPath = getKeyPath(field);
            let cur = parents.get(field);
            while (cur) {
                keyPath = getKeyPath(cur).concat(keyPath);
                cur = parents.get(cur);
            }
        }
        return keyPath;
    }

    getTypeFields(type: string): FormlyFieldConfig[] {
        return this.getFields(type, 'type');
    }

    getWrapperFields(wrapper: string): FormlyFieldConfig[] {
        return this.getFields(wrapper, 'wrapper');
    }

    /** Check the field for control type conflict */
    checkField(field: FormlyFieldConfig, fields: FormlyFieldConfig[], parent?: FormlyFieldConfig): boolean {
        const fullPathByField = new Map<FormlyFieldConfig, (string | number)[]>();

        const newPath = this.getFullKeyPath(parent || {}, fields).concat(getKeyPath(field));
        const length = newPath.length;
        return !traverseFields(fields, (f, p) => {
            const path = fullPathByField.get(f) || fullPathByField.set(f, (p || []).concat(getKeyPath(f))).get(f);
            if (path.length !== length) {
                return;
            }
            for (let i = 0; i < length; i++) {
                if (path[i] !== newPath[i]) {
                    return;
                }
            }
            return !equalType(field, f);
        });
    }

    mutateField(field: FormlyFieldConfig, designerField: boolean): FormlyFieldConfig {
        if (isObject(field.templateOptions)) {
            field.templateOptions['$designerField'] = designerField;
        } else {
            field.templateOptions = { $designerField: designerField };
        }
        if (field.fieldGroup) {
            this.mutateFields(field.fieldGroup, designerField);
        } else if (field.fieldArray && field.fieldArray.fieldGroup) {
            // Treating fieldArrays as fieldGroups
            field.templateOptions['$fieldArray'] = { type: field.type };
            field.fieldGroup = field.fieldArray.fieldGroup;
            delete field.fieldArray;
            delete field.type;

            this.mutateFields(field.fieldGroup, designerField);
        }
        return field;
    }

    mutateFields(fields: FormlyFieldConfig[], designerFields: boolean): void {
        fields.forEach(field => this.mutateField(field, designerFields));
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
}
