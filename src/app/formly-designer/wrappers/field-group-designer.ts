import {
    AfterContentInit, AfterContentChecked, ChangeDetectorRef, Component,
    ElementRef, ViewChild, ViewContainerRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldWrapper, FormlyConfig, FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerService } from '../formly-designer.service';
import { cloneDeep, isArray } from 'lodash';
import { Observable } from 'rxjs/Rx';
import * as jquery from 'jquery';


declare var $: JQueryStatic;

@Component({
    selector: 'formly-wrapper-field-group-designer',
    template: `
        <div *ngIf="!editing" class="dropdown">
            <button [disabled]="disabled" class="btn btn-sm btn-info mr-2" type="button" id="editorMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-cogs" aria-hidden="true"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="editorMenuButton">
                <div class="dropdown-item" (click)="edit()">Edit</div>
                <a class="dropdown-item" (click)="remove()">Remove</a>
            </div>
        </div>
        <div class="content">
            <div [hidden]="!editing">
                <field-editor #editor [showWrappers]="true" [formControl]="fieldEdit">
                    <div class="footer">
                        <button (click)="cancel()" class="btn btn-secondary mr-1">Cancel</button>
                        <button [disabled]="editor.invalid" (click)="accept()" class="btn btn-primary">Apply</button>
                    </div>
                </field-editor>
            </div>
            <div [hidden]="editing">
                <div class="form-group">
                    <label>child</label>
                    <field-picker (selected)="onFieldSelected($event)"></field-picker>
                </div>
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
            margin: .25em;
        }
        :host.designerEmpty {
            display:none;
        }
        field-editor .footer {
            display: flex;
            justify-content: flex-end;
        }
        .btn:not(:disabled), .dropdown-item:not(:disabled) {
            cursor: pointer;
        }
        .content {
            border: 1px dashed #000;
            border-radius: 5px;
            padding: 1em;
            width: 100%;
        }
    `]
})
export class FormlyWrapperFieldGroupDesignerComponent extends FieldWrapper implements AfterContentInit, AfterContentChecked {
    @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;

    editing = false;
    fieldEdit = new FormControl({});

    get disabled(): boolean {
        return this.formlyDesignerService.disabled;
    }

    constructor(
        private changeDetector: ChangeDetectorRef,
        private elementRef: ElementRef,
        private formlyConfig: FormlyConfig,
        private formlyDesignerService: FormlyDesignerService
    ) {
        super();
    }

    ngAfterContentInit(): void {
        this.checkDesigner();
    }

    ngAfterContentChecked(): void {
        this.checkDesigner();
    }

    edit(): void {
        this.editing = true;
        this.formlyDesignerService.disabled = true;
        this.fieldEdit.setValue(this.formlyDesignerService.convertField(cloneDeep(this.field)));
    }

    remove(): void {
        this.formlyDesignerService.removeField(this.field);
    }

    accept(): void {
        Observable.timer().subscribe(() => {
            this.formlyDesignerService.updateField(this.field, this.fieldEdit.value);
            this.formlyDesignerService.disabled = false;
            this.editing = false;
        });
    }

    cancel(): void {
        this.formlyDesignerService.disabled = false;
        this.editing = false;
    }

    onFieldSelected(field: FormlyFieldConfig): void {
        const updatedField = cloneDeep(this.field);
        updatedField.fieldGroup = isArray(updatedField.fieldGroup) ? updatedField.fieldGroup.slice() : [];
        updatedField.fieldGroup.push(field);

        Observable.timer()
            .do(() => this.formlyDesignerService.updateField(this.field, updatedField))
            .catch(err => Observable.never())
            .subscribe();
    }

    private checkDesigner(): void {
        this.changeDetector.detectChanges();
        const element = $(this.elementRef.nativeElement);
        const designerEmpty = element.find('formly-wrapper-designer').length === 0;
        if (designerEmpty !== element.hasClass('designerEmpty')) {
            this.changeDetector.detectChanges();
            if (designerEmpty) {
                element.addClass('designerEmpty');
            }
            else {
                element.removeClass('designerEmpty');
            }
        }
    }
}
