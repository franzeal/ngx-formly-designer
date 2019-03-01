import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormlyFormBuilder, FieldArrayType } from '@ngx-formly/core';

@Component({
    selector: 'formly-field-repeat-section',
    template: `
    <div class="header" *ngIf="canAdd()">
        <button type="button" class="add-btn btn btn-sm btn-primary" (click)="add()">
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
    </div>
    <div class="body" [ngClass]="{interactive: canAdd()}">
        <div class="section flex-container" *ngFor="let field of field.fieldGroup; let i = index;" [ngClass]="{interactive: canRemove(i)}">
            <button type="button" class="remove-btn btn btn-sm btn-danger" (click)="remove(i)" *ngIf="canRemove(i)">
                <i class="fa fa-times" aria-hidden="true"></i>
            </button>
            <formly-group
                [model]="model[i]"
                [field]="field"
                [options]="options"
                [form]="formControl"
                [ngClass]="fieldArrayClassName">
            </formly-group>
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
export class FormlyFieldRepeatSectionComponent extends FieldArrayType implements OnInit {
    /**
     * Necessary because FormlyFormBuilder doesn't seem to handle
     * FieldArray types correctly if the key contains periods.
     * For v5, will need to use the prePopulate hook insetead of createControl.
     * */
    static createControl(model, field): FormArray {
        return new FormArray([]);
    }

    get fieldArrayClassName(): string {
        return this.field.fieldArray.className;
    }

    constructor(private formlyFormBuilder: FormlyFormBuilder) {
        super(formlyFormBuilder);
    }

    ngOnInit() {
        // Make sure the form array reflects the model; see comment above
        const form = new FormArray([]);
        for (let i = 0; i < this.model.length; i++) {
            this.formlyFormBuilder.buildForm(form, [this.field.fieldGroup[i]], this.model, this.options);
            this.formControl.insert(i, form.at(0));
        }
        (<any>this.options).resetTrackModelChanges();
    }

    canAdd(): boolean {
        const canAdd = this.to['canAdd'] as Function | boolean;
        return canAdd == null || (typeof canAdd === 'function' ? canAdd.apply(this) : canAdd) === true;
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

        return typeof canRemove !== 'function' || canRemove.apply(this, [index]) === true;
    }
}
