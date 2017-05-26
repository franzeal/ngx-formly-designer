import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldWrapper, FormlyConfig, FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerService } from '../formly-designer.service';
import { cloneDeep, set } from 'lodash';
import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'formly-wrapper-field-group-designer',
    template: `
        <div *ngIf="!editing" class="dropdown">
            <button class="btn btn-sm btn-info mr-3" type="button" id="editorMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-cogs" aria-hidden="true"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="editorMenuButton">
                <div class="dropdown-item" (click)="edit()">Edit</div>
                <a class="dropdown-item" (click)="remove()">Remove</a>
            </div>
        </div>
        <div class="content">
            <div [hidden]="!editing" class="mb-3">
                <field-group-editor #editor [formControl]="fieldEdit" [field]="fieldSource">
                    <div class="footer">
                        <button (click)="cancel()" class="btn btn-secondary btn-sm mr-1">Cancel</button>
                        <button [disabled]="editor.invalid" (click)="accept()" class="btn btn-primary btn-sm">Apply</button>
                    </div>
                </field-group-editor>
            </div>
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
        field-group-editor .footer {
            display: flex;
            justify-content: flex-end;
        }
        .content {
            width: 100%;
        }
    `]
})
export class FormlyWrapperFieldGroupDesigner extends FieldWrapper implements OnInit {
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
        this.fieldEdit.valueChanges.subscribe(value => console.log(value));
    }

    edit(): void {
        this.editing = true;
        this.fieldSource = this.formlyDesignerService.convertField(cloneDeep(this.field));
    }

    remove(): void {
        Observable.timer()
            .subscribe(() => this.formlyDesignerService.removeField(this.field));
    }

    accept(): void {
        Observable.timer()
            .do(() => this.formlyDesignerService.updateField(this.field, this.fieldEdit.value))
            .subscribe(() => this.editing = false);
    }

    cancel(): void {
        this.editing = false;
    }
}
