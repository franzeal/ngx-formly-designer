import { Pipe, PipeTransform } from '@angular/core';
import { FormlyFieldConfig } from 'ng-formly';
import { DesignerOption, FormlyDesignerConfig } from './formly-designer-config';
import { cloneDeep, isObject } from 'lodash';


@Pipe({ name: 'typeFields' })
export class TypeFieldsPipe implements PipeTransform {
    constructor(
        private formlyDesignerConfig: FormlyDesignerConfig
    ) { }

    transform(type: string): FormlyFieldConfig[] {
        let designerOption = (type ? this.formlyDesignerConfig.types[type] || {} : {}) as DesignerOption;
        let fields = cloneDeep(designerOption.fields || []);
        this.markDesigner(fields);
        return fields;
    }

    markDesigner(fields: FormlyFieldConfig[]): void {
        fields.forEach(field => {
            if (isObject(field.templateOptions)) {
                field.templateOptions["designer"] = true;
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