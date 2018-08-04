import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { FieldsService } from './fields.service';
import { FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyDesignerConfig } from './formly-designer-config';
import { BehaviorSubject, Observable } from 'rxjs';
import { get, set, unset } from 'lodash-es';
import { cloneDeep, isArray, isEmpty, isString } from './util';

@Injectable()
export class FormlyDesignerService {
    constructor(
        private designerConfig: FormlyDesignerConfig,
        private fieldsService: FieldsService,
        private formlyConfig: FormlyConfig
    ) { }

    private readonly _disabled = new BehaviorSubject<boolean>(false);
    private readonly _fields = new BehaviorSubject<FormlyFieldConfig[]>([]);
    private readonly _model = new BehaviorSubject<any>({});

    get disabled(): boolean {
        return this._disabled.value;
    }

    set disabled(value: boolean) {
        this._disabled.next(!!value);
    }

    get disabled$(): Observable<boolean> {
        return this._disabled.asObservable();
    }

    get fields(): FormlyFieldConfig[] {
        return this._fields.value;
    }

    set fields(value: FormlyFieldConfig[]) {
        // Prune the fields because ngx-formly pollutes them with internal state
        // causing incorrect behavior when re-applied.
        const fields = this.createPrunedFields(isArray(value) ? value : []);
        this._fields.next(fields);
    }

    get fields$(): Observable<FormlyFieldConfig[]> {
        return this._fields.asObservable();
    }

    get model(): any {
        return this._model.value;
    }

    set model(value: any) {
        this._model.next(value == null ? {} : value);
    }

    get model$(): Observable<any> {
        return this._model.asObservable();
    }

    addField(field: FormlyFieldConfig): void {
        this.fieldsService.mutateField(field, false);

        const fields = cloneDeep(this.fields);
        fields.push(field);

        this.fields = fields;
        this.model = cloneDeep(this.model);
    }

    removeField(field: FormlyFieldConfig): void {
        this.unsetField(field);
        if (this.replaceField(this.fields, field, undefined)) {
            this.removeControl(field.formControl);
        }

        this.fields = cloneDeep(this.fields);
        this.model = cloneDeep(this.model);
    }

    updateField(original: FormlyFieldConfig, modified: FormlyFieldConfig): void {
        const pruned = this.fieldsService.mutateField(this.createPrunedField(modified), false);

        if (this.replaceField(this.fields, original, pruned)) {
            if (original.formControl !== pruned.formControl) {
                this.unsetField(original);
                this.removeControl(original.formControl);
            }
            this.fields = cloneDeep(this.fields);
            this.model = cloneDeep(this.model);
        }
    }

    convertField(field: FormlyFieldConfig): FormlyFieldConfig {
        return this.createPrunedField(field);
    }

    convertFields(fields: FormlyFieldConfig[]): FormlyFieldConfig[] {
        return this.createPrunedFields(fields);
    }

    createDesignerFields(): FormlyFieldConfig[] {
        return this.createPrunedFields(this.fields);
    }

    private createPrunedFields(fields: FormlyFieldConfig[]): FormlyFieldConfig[] {
        const prunedFields: FormlyFieldConfig[] = [];
        if (isArray(fields)) {
            fields.forEach(field => {
                const pruned = this.createPrunedField(field);
                if (field.fieldArray) {
                    pruned.fieldArray = this.createPrunedField(field.fieldArray);
                } else if (field.fieldGroup && !pruned.fieldArray) {
                    pruned.fieldGroup = this.createPrunedFields(field.fieldGroup);
                }
                if (Object.keys(pruned).length > 0) {
                    prunedFields.push(pruned);
                }
            });
        }
        return prunedFields;
    }

    getWrappers(field: FormlyFieldConfig): string[] {
        if (!field || !isString(field.type) || !isArray(field.wrappers)) {
            return [];
        }
        const formlyType = this.formlyConfig.getType(field.type);
        const typeWrappers = (formlyType.wrappers || [])
            .concat(this.formlyConfig.templateManipulators.preWrapper.map(m => m(field)))
            .concat(this.formlyConfig.templateManipulators.postWrapper.map(m => m(field)))
            .filter(w => w);

        const wrappers = field.wrappers.slice();
        if (typeWrappers.length > 0) {
            for (let i = wrappers.length - 1; i >= 0; i--) {
                for (let j = typeWrappers.length - 1; j >= 0; j--) {
                    if (wrappers[i] === typeWrappers[j]) {
                        typeWrappers.splice(j, 1);
                        wrappers.splice(i, 1);
                        break;
                    }
                }
            }
        }
        return wrappers;
    }

    /** Prunes the field of paths not identified in the designer config */
    private createPrunedField(field: FormlyFieldConfig): FormlyFieldConfig {
        let pruned: FormlyFieldConfig;
        const type = get(field, 'templateOptions.$fieldArray.type', field.type);
        const designerType = this.designerConfig.types[type];
        if (designerType) {
            pruned = { key: field.key, type: type };
            this.applyProperties(field, pruned, designerType.fields);
            if (designerType.fieldArray) {
                pruned.fieldArray = {
                    fieldGroup: this.createPrunedFields(field.fieldGroup)
                };
            }
        } else {
            pruned = isEmpty(field.key) ? {} : { key: field.key };
            if (isArray(field.fieldGroup)) {
                pruned.fieldGroup = this.createPrunedFields(field.fieldGroup);
            }
        }

        let className: string;
        if (isString(field.className) && (className = field.className.trim()).length > 0) {
            pruned.className = className;
        }

        const wrappers = this.getWrappers(field);
        if (wrappers.length > 0) {
            pruned.wrappers = wrappers;
            const designerWrapperFields = wrappers.map(wrapper => this.designerConfig.wrappers[wrapper])
                .filter(designerOption => designerOption && isArray(designerOption.fields))
                .reduce<FormlyFieldConfig[]>((previous, current) => previous.concat(current.fields), []);
            this.applyProperties(field, pruned, designerWrapperFields);
        }
        return pruned;
    }

    private applyProperties(field: FormlyFieldConfig, designed: FormlyFieldConfig, designerFields: FormlyFieldConfig[]): void {
        if (isArray(designerFields)) {
            designerFields.forEach(designerField => {
                const value = get(field, designerField.key);
                if (value != null && (!isString(value) || value.length > 0) && value !== designerField.defaultValue) {
                    set(designed, designerField.key, value);
                }
            });
        }
    }

    private replaceField(fields: FormlyFieldConfig[], original: FormlyFieldConfig, modified: FormlyFieldConfig): boolean {
        if (isArray(fields)) {
            const l = fields.length;
            for (let i = 0; i < l; i++) {
                const field = fields[i];
                if (field === original) {
                    if (modified == null) {
                        fields.splice(i, 1);
                    } else {
                        fields[i] = modified;
                    }
                    return true;
                }
                if (field.fieldGroup && this.replaceField(field.fieldGroup, original, modified)) {
                    return true;
                }
                if (field.fieldArray && this.replaceFieldArray(field, original, modified)) {
                    return true;
                }
            }
        }
        return false;
    }

    private replaceFieldArray(parent: FormlyFieldConfig, original: FormlyFieldConfig, modified: FormlyFieldConfig): boolean {
        const fieldArray = parent.fieldArray;
        if (fieldArray === original) {
            parent.fieldArray = modified;
            return true;
        }
        if (fieldArray.fieldGroup && this.replaceField(fieldArray.fieldGroup, original, modified)) {
            return true;
        }
        return fieldArray.fieldArray && this.replaceFieldArray(fieldArray, original, modified);
    }

    private buildPath(key: string, path: string, arrayNext: boolean = false) {
        return path ? key + (arrayNext ? path : '.' + path) : key;
    }

    private path(control: AbstractControl, includeSelf: boolean = true): string {
        let path = '';
        let arrayNext = false;

        if (!includeSelf) {
            control = (control || {} as AbstractControl).parent;
        }
        for (let child = control, parent = (control || {} as AbstractControl).parent; !!parent; child = parent, parent = parent.parent) {
            if (parent instanceof FormGroup) {
                for (const key in parent.controls) {
                    if (parent.controls[key] === child) {
                        path = this.buildPath(key, path, arrayNext);
                        arrayNext = false;
                        break;
                    }
                }
            } else if (parent instanceof FormArray) {
                for (let i = 0; i < parent.length; i++) {
                    if (parent.at(i) === child) {
                        path = this.buildPath('[' + i + ']', path, arrayNext);
                        arrayNext = true;
                        break;
                    }
                }
            }
        }
        return path;
    }

    private unsetField(field: FormlyFieldConfig): void {
        if (field) {
            if (field.fieldArray) {
                this.unsetField(field.fieldArray);
            }
            if (field.fieldGroup) {
                field.fieldGroup.forEach(f => this.unsetField(f));
            }
            if (field.formControl) {
                const path = this.path(field.formControl);
                unset(this.model, path);
            }
        }
    }

    private removeControl(control: AbstractControl): void {
        const parent = control ? control.parent : undefined;
        if (parent instanceof FormGroup) {
            for (const key in parent.controls) {
                if (parent.controls[key] === control) {
                    parent.removeControl(key);
                    return;
                }
            }
        } else if (parent instanceof FormArray) {
            for (let i = 0; i < parent.length; i++) {
                if (parent.at(i) === control) {
                    parent.removeAt(i);
                    return;
                }
            }
        }
    }
}
