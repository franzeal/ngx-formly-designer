import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldWrapper, FormlyConfig, FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerService } from '../formly-designer.service';
import { cloneDeep, set } from 'lodash';


@Component({
    selector: 'formly-wrapper-control-designer',
    template: `
        <button *ngIf="!editing" (click)="edit()" class="btn btn-info btn-sm mr-2">
            <i class="fa fa-cogs" aria-hidden="true"></i>
        </button>
        <div>
            <field-editor #editor [hidden]="!editing" [formControl]="fieldEdit" [field]="fieldSource">
                <div class="footer">
                    <button (click)="cancel()" class="btn btn-secondary btn-sm mr-1">Cancel</button>
                    <button [disabled]="editor.invalid" (click)="accept()" class="btn btn-primary btn-sm">Apply</button>
                </div>
            </field-editor>
            <div [hidden]="editing">
                <ng-container #fieldComponent></ng-container>
            </div>
        </div>
    `,
    styles: [`
        :host {
            display: flex;
            justify-content: flex-start;
            align-content: flex-start;
            align-items: flex-start;
        }
        field-editor .footer {
            display: flex;
            justify-content: flex-end;
        }
    `]
})
export class FormlyWrapperControlDesigner extends FieldWrapper implements OnInit {
    @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;

    editing = false;
    fieldEdit = new FormControl({});
    fieldSource: FormlyFieldConfig;

    constructor(
        private changeDetector: ChangeDetectorRef,
        private formlyConfig: FormlyConfig,
        private formlyDesignerService: FormlyDesignerService
    ) {
        super();
    }

    ngOnInit(): void {
    }

    edit(): void {
        this.editing = true;
        let field = {
            key: this.field.key,
            type: this.field.type,
            templateOptions: cloneDeep(this.field.templateOptions)
        };
        this.fieldSource = field;
    }

    accept(): void {
        this.editing = false;

        // Apply the fieldEditor changes over top of the designer's existing fields; use a service?  search by object reference
        // for this field's config, replace, reload?
        this.formlyDesignerService.updateField(this.field, this.fieldEdit.value);
    }

    cancel(): void {
        this.editing = false;
    }
}
