import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from 'ng-formly';

import { clone, cloneDeep, isArray, isFunction } from 'lodash';


@Component({
    selector: 'formly-field-repeat-section',
    template: `
        <div class="header">
            <button type="button" class="add-btn btn btn-sm btn-primary" (click)="add()" [hidden]="!canAdd()">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>
        <div class="body" [ngClass]="{interactive: canAdd()}">
            <div class="section flex-container" *ngFor="let control of formControlAsFormGroupOrArray.controls; let i=index" [ngClass]="{interactive: canRemove(i)}">
                <button type="button" class="remove-btn btn btn-sm btn-danger" (click)="remove(i)" [hidden]="!canRemove(i)">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
                <formly-form [model]="model[i]" [fields]="fields(i)" [options]="newOptions"
                    [form]="formControl.at(i)" class="flex-item-right"
                    [ngClass]="field.fieldArray.className">
                </formly-form>
            </div>
        </div>
    `,
    styles: [`
        .flex-container.interactive {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: nowrap;
            .flex-item-right {
                flex-grow: 1;
            }
        }
        .body.interactive :first-child {
            margin-top: 0.5em;
        }
    `]
})
export class FormlyFieldRepeatSection extends FieldType implements OnInit {
    private _fields: FormlyFieldConfig[][] = [];

    static createControl(model: any, field: FormlyFieldConfig): AbstractControl {
        return new FormArray(
            [],
            field.validators ? field.validators.validation : undefined,
            field.asyncValidators ? field.asyncValidators.validation : undefined
        );
    }

    get formControlAsFormGroupOrArray(): FormGroup | FormArray{
        if(this.formControl instanceof FormGroup){
            return this.formControl as FormGroup;
        }
        else if(this.formControl instanceof FormArray){
            return this.formControl as FormArray;
        }
        return undefined;
    }

    get newOptions(): any {
        return clone(this.options);
    }

    ngOnInit(): void {
        if (isArray(this.model)) {
            this.model.map(() => {
                if (this.formControl instanceof FormArray) {
                    (<FormArray>this.formControl).push(new FormGroup({}));
                }
                this._fields.push(cloneDeep(this.field.fieldArray.fieldGroup));
            });
        }
        super.ngOnInit();
    }

    fields(index): FormlyFieldConfig[] {
        if (this._fields[index]) {
            return this._fields[index];
        }

        this._fields.splice(index, 0, cloneDeep(this.field.fieldArray.fieldGroup));

        return this._fields[index];
    }

    canAdd(): boolean {
        let canAdd = this.to["canAdd"] as Function | boolean;
        return (isFunction(canAdd) ? canAdd.apply(this) : canAdd) === true;
    }

    canRemove(index: number): boolean {
        let canRemove = this.to["canRemove"] as Function | boolean;
        if (canRemove === false) {
            return false;
        }

        let value = this.model[index];
        if (value && value.canRemove === false) {
            return false;
        }

        return !isFunction(canRemove) || canRemove.apply(this, [index]) === true;
    }

    add(): void {
        let formGroup = new FormGroup({});
        let added = {};
        let onSectionAdded = this.to["onSectionAdded"] as Function;
        if (isFunction(onSectionAdded)) {
            onSectionAdded.apply(this, [added]);
        }
        this.model.push(added);
        this._fields.push(cloneDeep(this.field.fieldArray.fieldGroup));
        (<FormArray>this.formControl).push(formGroup);
    }

    remove(index: number): void {
        (<FormArray>this.formControl).removeAt(index);
        let removed = this.model.splice(index, 1);
        let onSectionRemoved = this.to["onSectionRemoved"];
        if (isFunction(onSectionRemoved)) {
            onSectionRemoved.apply(this, [removed, index]);
        }
        this._fields.splice(index, 1);
    }
}
