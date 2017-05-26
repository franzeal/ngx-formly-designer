import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { isString } from 'lodash';


export function keyRequired(key: string, type: string): any {
    return (group: FormGroup): { [key: string]: any } => {
        if (group.get(type).value === "fieldGroup") {
            return;
        }

        let keyValue = group.get(key).value;
        if (!isString(keyValue) || keyValue.trim().length === 0) {
            return {
                keyRequired: true
            };
        }
    }
}

@Component({
    selector: 'field-picker',
    template: `
        <form novalidate [formGroup]="designer">
            <div class="form-group">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="key" formControlName="key">
                    <div class="btn-group">
                        <type-select formControlName="type">
                        </type-select>
                        <button type="button" class="btn btn-secondary" [disabled]="designer.invalid" (click)="add()">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </form>
    `,
    styles: [`
        :host /deep/ type-select > select {
            border-radius: 0;
            border-left: 0;
            border-right: 0;
        }
    `]
})
export class FieldPickerComponent implements OnInit {
    @Output() selected = new EventEmitter<FormlyFieldConfig>();

    constructor(
        private formBuilder: FormBuilder,
        private formlyDesignerConfig: FormlyDesignerConfig
    ) { }

    designer: FormGroup;

    ngOnInit(): void {
        this.designer = this.formBuilder.group({
            key: [""],
            type: ["", Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])]
        }, { validator: keyRequired('key', 'type') });
    }

    add(): void {
        let type = this.designer.get("type").value;
        if (type === "fieldGroup") {
            this.selected.emit({
                key: this.designer.get("key").value,
                fieldGroup: []
            });
        }
        else {
            this.selected.emit({
                key: this.designer.get("key").value,
                type: this.designer.get("type").value
            });
        }
    }
}