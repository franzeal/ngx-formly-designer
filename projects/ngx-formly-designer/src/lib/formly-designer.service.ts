import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FieldsService } from './fields.service';
import { DesignerTypeOption, DESIGNER_WRAPPER_TYPES, FormlyDesignerConfig } from './formly-designer-config';
import { cloneDeep, get, isArray, isEmpty, isFunction, isString, set, unset } from './util';

export enum FieldType {
  Plain,
  Designer,
}

@Injectable()
export class FormlyDesignerService {
  constructor(
    private designerConfig: FormlyDesignerConfig,
    private fieldsService: FieldsService,
    private formlyConfig: FormlyConfig,
  ) { }

  private readonly _disabled = new BehaviorSubject<boolean>(false);
  private readonly _designerFields = new BehaviorSubject<FormlyFieldConfig[]>([]);
  private readonly _fields = new BehaviorSubject<FormlyFieldConfig[]>([]);
  private readonly _selectedField = new BehaviorSubject<FormlyFieldConfig | null>(null);
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

  get selectedField$(): Observable<FormlyFieldConfig | null> {
    return this._selectedField.asObservable();
  }

  get selectedDesignerId(): string {
    return this._selectedField.getValue()?.templateOptions?.$designerId;
  }

  get designerFields(): FormlyFieldConfig[] {
    return this._designerFields.value;
  }

  set designerFields(value: FormlyFieldConfig[]) {
    // Prune the fields because ngx-formly pollutes them with internal state
    // causing incorrect behavior when re-applied.
    const fields = isArray(value) ? cloneDeep(value) : [];
    const designerFields = this.createPrunedFields(fields, FieldType.Designer);
    this._designerFields.next(designerFields);
    this._fields.next(this.createPrunedFields(cloneDeep(designerFields), FieldType.Plain));
  }

  get designerFields$(): Observable<FormlyFieldConfig[]> {
    return this._designerFields.asObservable();
  }

  get fields(): FormlyFieldConfig[] {
    return this._fields.value;
  }

  set fields(value: FormlyFieldConfig[]) {
    // Prune the fields because ngx-formly pollutes them with internal state
    // causing incorrect behavior when re-applied.
    const fields = cloneDeep(value);
    const designerFields = this.createPrunedFields(fields, FieldType.Designer);
    this.fieldsService.mutateFields(designerFields, false);
    this._selectedField.next(null);
    this._designerFields.next(designerFields);
    this._fields.next(this.createPrunedFields(cloneDeep(designerFields), FieldType.Plain));
  }

  get fields$(): Observable<FormlyFieldConfig[]> {
    return this._fields.asObservable();
  }

  get model(): unknown {
    return this._model.value;
  }

  set model(value: unknown) {
    this._model.next(value == null ? {} : value);
  }

  get model$(): Observable<unknown> {
    return this._model.asObservable();
  }

  addField(field: FormlyFieldConfig, index?: number): void {
    this.fieldsService.mutateField(field, false);

    const fields = cloneDeep(this.designerFields);
    const fieldIndex = (index == null || isNaN(index)) ? this.fields.length :
      Math.min(this.fields.length, Math.max(0, index));

    fields.splice(fieldIndex, 0, field);

    this.updateFields(fields);
  }

  createField(type: string): FormlyFieldConfig {
    const field = {} as FormlyFieldConfig;
    if (type !== 'formly-group') {
      field.type = type;
    }
    const designerType = this.designerConfig.types[type];
    if (designerType?.fieldArray) {
      field.fieldArray = { fieldGroup: [] };
    }
    if (type === 'formly-group' || designerType?.fieldGroup) {
      field.fieldGroup = [];
    }
    return field;
  }

  didClickField(value: FormlyFieldConfig): void {
    this._selectedField.next(value);
  }

  removeField(field: FormlyFieldConfig): void {
    this.unsetField(field);
    const designerId = field.templateOptions?.$designerId;
    if (this.replaceField(designerId, null, this.designerFields)) {
      this.removeControl(field.formControl);
    }
    this.updateFields();
  }

  updateField(original: FormlyFieldConfig | null, modified: FormlyFieldConfig): void {
    const pruned = this.fieldsService.mutateField(this.createPrunedField(modified), false);
    const designerId = original?.templateOptions?.$designerId;
    if (this.replaceField(designerId, pruned, this.designerFields)) {
      if (original && original.formControl !== pruned.formControl) {
        this.unsetField(original);
        this.removeControl(original.formControl);
      }
      this.updateFields();
    }
  }

  getWrappers(field: FormlyFieldConfig): string[] {
    if (!field || !isArray(field.wrappers)) {
      return [];
    }

    const clonedField = cloneDeep(field);
    let wrappers = clonedField.wrappers = (clonedField.wrappers || []);
    const filterWrapper = this.designerConfig.settings.filterWrapper ?? ((wrapper, _) => wrapper !== 'form-field');
    if (filterWrapper && isFunction(filterWrapper)) {
      wrappers = wrappers.filter(w => filterWrapper(w, clonedField));
    }

    // Determine wrappers part of the formly configuration (static and dynamic) to exclude them from the result
    const staticWrappers = (field.type && this.formlyConfig.getType(field.type).wrappers) || [];
    const typeWrappers = staticWrappers
      .concat(this.formlyConfig.templateManipulators.preWrapper.map(m => m(clonedField)))
      .concat(this.formlyConfig.templateManipulators.postWrapper.map(m => m(clonedField)))
      .concat(DESIGNER_WRAPPER_TYPES);

    // Remove wrappers part of the formly configuration from the result
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

  /** Prunes field of unrecognized properties */
  createPrunedField(field: FormlyFieldConfig, fieldType = FieldType.Designer): FormlyFieldConfig {
    const designerType = this.getDesignerType(field);
    const pruned: FormlyFieldConfig = isEmpty(field.key) ? {} : { key: field.key };

    if (designerType) {
      pruned.type = designerType.name;
      if (fieldType === FieldType.Designer && field.templateOptions?.$designerId) {
        pruned.templateOptions = { $designerId: field.templateOptions.$designerId };
      }
      this.applyProperties(field, pruned, designerType.fields);
      if (designerType.fieldArray) {
        pruned.fieldArray = {
          fieldGroup: this.createPrunedFields(field.fieldGroup, fieldType)
        };
      }
    }

    if (isArray(field.fieldGroup) && !isArray(pruned.fieldArray)) {
      pruned.fieldGroup = this.createPrunedFields(field.fieldGroup, fieldType);

      let fieldGroupClassName: string;
      if (isString(field.fieldGroupClassName) &&
        (fieldGroupClassName = (field.fieldGroupClassName as string).trim()).length > 0) {
        pruned.fieldGroupClassName = fieldGroupClassName;
      }
    }

    let className: string;
    if (isString(field.className) && (className = (field.className as string).trim()).length > 0) {
      pruned.className = className;
    }

    const wrappers = this.getWrappers(field);
    if (wrappers.length > 0) {
      pruned.wrappers = wrappers;
      const designerWrapperFields = wrappers.map(wrapper => this.designerConfig.wrappers[wrapper])
        .filter(designerOption => designerOption && isArray(designerOption.fields))
        .reduce<FormlyFieldConfig[]>((previous, current) => previous.concat(current.fields || []), []);
      this.applyProperties(field, pruned, designerWrapperFields);
    }
    return pruned;
  }

  /** Prunes fields of unrecognized properties */
  createPrunedFields(fields: FormlyFieldConfig[] | undefined, fieldType = FieldType.Designer): FormlyFieldConfig[] {
    const prunedFields: FormlyFieldConfig[] = [];
    if (isArray(fields)) {
      fields.forEach(field => {
        const pruned = this.createPrunedField(field, fieldType);
        if (field.fieldArray) {
          pruned.fieldArray = this.createPrunedField(field.fieldArray, fieldType);
        } else if (field.fieldGroup && !pruned.fieldArray) {
          pruned.fieldGroup = this.createPrunedFields(field.fieldGroup, fieldType);
        }
        if (Object.keys(pruned).length > 0) {
          prunedFields.push(pruned);
        }
      });
    }
    return prunedFields;
  }

  getTypeName(type: string | null | undefined): string {
    if (type === 'formly-group') {
      return 'fieldGroup';
    }
    return type ?? '';
  }

  private applyProperties(field: FormlyFieldConfig, designed: FormlyFieldConfig, designerFields: FormlyFieldConfig[] | undefined): void {
    if (isArray(designerFields)) {
      designerFields.forEach(designerField => {
        const key = designerField.key;
        if (key == null) {
          return;
        }
        const value = get(field, key);
        if (value != null && (!isString(value) || value.length > 0) && value !== designerField.defaultValue) {
          set(designed, key, value);
        }
      });
    }
  }

  private getDesignerType(field: FormlyFieldConfig): DesignerTypeOption | undefined {
    const type = field?.templateOptions?.$fieldArray?.type ?? field.type;
    const designerType = this.designerConfig.types[type];
    if (designerType) {
      return designerType;
    }
    if (field.type === 'formly-group' || (!field.type && isArray(field.fieldGroup))) {
      return { name: field.type as string, fieldGroup: true, fields: [] };
    }
    return;
  }

  private replaceField(id: string, field: FormlyFieldConfig | null, fields: FormlyFieldConfig[]): boolean {
    if (!id || !isArray(fields)) {
      return false;
    }
    for (let i = 0, l = fields.length; i < l; i++) {
      const otherField = fields[i];
      if (otherField.templateOptions?.$designerId === id) {
        if (field == null) {
          fields.splice(i, 1);
        } else {
          fields[i] = field;
        }
        return true;
      }
      if (otherField.fieldGroup && this.replaceField(id, field, otherField.fieldGroup)) {
        return true;
      }
      if (otherField.fieldArray && this.replaceFieldArray(id, field, otherField)) {
        return true;
      }
    }
    return false;
  }

  private replaceFieldArray(id: string | null, field: FormlyFieldConfig | null, parent: FormlyFieldConfig): boolean {
    if (!id) {
      return false;
    }
    const fieldArray = parent.fieldArray;
    if (!fieldArray) {
      return false;
    }
    if (fieldArray.templateOptions?.$designerId === id) {
      if (field) {
        parent.fieldArray = field;
        return true;
      }
      return false;
    }
    if (fieldArray.fieldGroup && this.replaceField(id, field, fieldArray.fieldGroup)) {
      return true;
    }
    return fieldArray.fieldArray != null && this.replaceFieldArray(id, field, fieldArray);
  }

  private buildPath(key: string, path: string, arrayNext: boolean = false) {
    return path ? key + (arrayNext ? path : '.' + path) : key;
  }

  private path(control: AbstractControl, includeSelf: boolean = true): string {
    let path = '';
    let arrayNext = false;
    let root = includeSelf ? control : control?.parent;
    for (let child = root, parent = root?.parent; !!parent; child = parent, parent = parent.parent) {
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

  private removeControl(control: AbstractControl | undefined): void {
    const parent = control?.parent;
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

  private updateFields(fields?: FormlyFieldConfig[], model?: any): void {
    this.designerFields = fields ?? cloneDeep(this.designerFields);
    // Update the selected field to use the updated instance, if any
    this._selectedField.next(this.fieldsService.find(this.selectedDesignerId, this.designerFields) ?? null);
    this.model = model ?? cloneDeep(this.model);
  }
}
