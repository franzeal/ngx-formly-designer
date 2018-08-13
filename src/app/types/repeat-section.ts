import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

import { cloneDeep, isArray, isFunction } from 'lodash-es';

@Component({
    selector: 'formly-field-repeat-section',
    template: `
        <div class="header" *ngIf="canAdd()">
            <button type="button" class="add-btn btn btn-sm btn-primary" (click)="add()">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>
        <div class="body" [ngClass]="{interactive: canAdd()}">
            <div class="section flex-container" *ngFor="let control of formArray.controls; index as i"
                [ngClass]="{interactive: canRemove(i)}">
                <button type="button" class="remove-btn btn btn-sm btn-danger" (click)="remove(i)" *ngIf="canRemove(i)">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </button>
                <formly-form [model]="model[i]" [fields]="fields(i)" [options]="newOptions"
                    [form]="formArray.at(i)" [ngClass]="field.fieldArray.className">
                </formly-form>
            </div>
        </div>
    `,
    styles: [`
        .header {
            margin-top: .5em;
        }
        .flex-container.interactive {
            display: flex;
            align-items: flex-start;
            flex-wrap: nowrap;
        }
        formly-form {
            flex-grow: 1;
        }
        .body.interactive {
            margin-top: 0.5em;
        }
        .section {
            margin-bottom: .25em;
        }
        .section>button {
            margin-top: .25em;
        }
    `]
})
export class FormlyFieldRepeatSectionComponent extends FieldType implements OnInit {
    private _fields: FormlyFieldConfig[][] = [];

    static createControl(model: any, field: FormlyFieldConfig): AbstractControl {
        return new FormArray(
            [],
            field.validators ? field.validators.validation : undefined,
            field.asyncValidators ? field.asyncValidators.validation : undefined
        );
    }

    get formArray(): FormArray {
        return this.formControl as FormArray;
    }

    get newOptions(): any {
        return Object.assign({}, this.options);
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
        const canAdd = this.to['canAdd'] as Function | boolean;
        return canAdd === undefined || (isFunction(canAdd) ? (canAdd as Function).apply(this) : canAdd) === true;
    }

    canRemove(index: number): boolean {
        const canRemove = this.to['canRemove'] as Function | boolean;
        if (canRemove === false) {
            return false;
        }

        const value = this.model[index];
        if (value && value.canRemove === false) {
            return false;
        }

        return !isFunction(canRemove) || (canRemove as Function).apply(this, [index]) === true;
    }

    add(): void {
        const formGroup = new FormGroup({});
        const added = {};
        const onSectionAdded = this.to['onSectionAdded'] as Function;
        if (isFunction(onSectionAdded)) {
            onSectionAdded.apply(this, [added]);
        }
        this.model.push(added);
        this._fields.push(cloneDeep(this.field.fieldArray.fieldGroup));
        (<FormArray>this.formControl).push(formGroup);
    }

    remove(index: number): void {
        (<FormArray>this.formControl).removeAt(index);
        const removed = this.model.splice(index, 1);
        const onSectionRemoved = this.to['onSectionRemoved'];
        if (isFunction(onSectionRemoved)) {
            onSectionRemoved.apply(this, [removed, index]);
        }
        this._fields.splice(index, 1);
    }
}
