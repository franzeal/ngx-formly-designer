import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerConfig } from './formly-designer-config';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { get, isArray, isEmpty, isNil, set } from 'lodash';


@Injectable()
export class FormlyDesignerService {
    constructor(
        private designerConfig: FormlyDesignerConfig
    ) { }

    private readonly _fields = new BehaviorSubject<FormlyFieldConfig[]>([]);
    private readonly _model = new BehaviorSubject<any>({});

    get fields(): FormlyFieldConfig[] {
        return this._fields.value;
    }

    set fields(value: FormlyFieldConfig[]) {
        this._fields.next(isArray(value) ? value : []);
    }

    get fields$(): Observable<FormlyFieldConfig[]> {
        return this._fields.asObservable().debounceTime(0);
    }

    get model(): any {
        return this._model.value;
    }

    set model(value: any) {
        this._model.next(isNil(value) ? {} : value);
    }

    get model$(): Observable<any> {
        return this._model.asObservable().debounceTime(0);
    }

    addField(field: FormlyFieldConfig): void {
        let fields = this.fields.slice();
        fields.push(field);
        this.model = {};
        this.fields = fields;
    }

    removeField(originalField: FormlyFieldConfig): void {
        // Needs to do a deep find and replace
        if (this.findAndReplace(this.fields, originalField, undefined)) {
            this.model = {};
            this.fields = this.fields.slice();
        }
    }

    updateField(originalField: FormlyFieldConfig, modifiedField: FormlyFieldConfig): void {
        let designerField = this.createPrunedField(modifiedField);

        // Needs to do a deep find and replace
        if (this.findAndReplace(this.fields, originalField, designerField)) {
            this.model = {};
            this.fields = this.fields.slice();
        }
    }

    convertField(field: FormlyFieldConfig): FormlyFieldConfig {
        return this.createPrunedField(field);
    }

    createDesignerFields(): FormlyFieldConfig[] {
        return this.createPrunedFields(this.fields);
    }

    private createPrunedFields(fields: FormlyFieldConfig[]): FormlyFieldConfig[] {
        let designedFields = new Array<FormlyFieldConfig>();
        if (isArray(fields)) {
            fields.forEach(field => {
                let designedField = this.createPrunedField(field);
                if (field.fieldArray) {
                    designedField.fieldArray = this.createPrunedField(field.fieldArray);
                }
                if (field.fieldGroup) {
                    designedField.fieldGroup = this.createPrunedFields(field.fieldGroup);
                }
                if (Object.keys(designedField).length > 0) {
                    designedFields.push(designedField);
                }
            });
        }
        return designedFields;
    }

    /** Prunes the field of paths not identified in the designer config */
    private createPrunedField(field: FormlyFieldConfig): FormlyFieldConfig {
        let designedField: FormlyFieldConfig;
        let designerType = this.designerConfig.types[field.type];
        if (!designerType) {
            designedField = isEmpty(field.key) ? {} : { key: field.key };
            if (isArray(field.fieldGroup)) {
                designedField.fieldGroup = this.createPrunedFields(field.fieldGroup);
            }
        }
        else {
            designedField = { key: field.key, type: field.type };
            designerType.fields.forEach(designerField => {
                let value = get(field, designerField.key);
                if (!isEmpty(value)) {
                    set(designedField, designerField.key, value);
                }
            });
        }
        return designedField;
    }

    private findAndReplace(fields: FormlyFieldConfig[], originalField: FormlyFieldConfig, modifiedField: FormlyFieldConfig): boolean {
        if (isArray(fields)) {
            for (let i = 0, l = fields.length; i < l; i++) {
                let field = fields[i];
                if (field === originalField) {
                    if (isNil(modifiedField)) {
                        fields.splice(i, 1);
                    }
                    else {
                        fields[i] = modifiedField;
                    }
                    return true;
                }
                if (field.fieldGroup && this.findAndReplace(field.fieldGroup, originalField, modifiedField)) {
                    return true;
                }
                if (field.fieldArray && this.findAndReplaceFieldArray(field, originalField, modifiedField)) {
                    return true;
                }
            }
        }
        return false;
    }

    private findAndReplaceFieldArray(parentField: FormlyFieldConfig, prevField, newField): boolean {
        let fieldArray = parentField.fieldArray;
        if (fieldArray === prevField) {
            parentField.fieldArray = newField;
            return true;
        }
        if (fieldArray.fieldGroup && this.findAndReplace(fieldArray.fieldGroup, prevField, newField)) {
            return true;
        }
        if (fieldArray.fieldArray && this.findAndReplaceFieldArray(fieldArray, prevField, newField)) {
            return true;
        }
        return false;
    }
}