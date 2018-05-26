import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyDesignerConfig } from '../formly-designer-config';
import { FormlyDesignerService } from '../formly-designer.service';
import { cloneDeep, isArray, isObject } from 'lodash';


@Component({
    selector: 'wrappers-picker',
    template: `
        <div class="form-group">
            <div class="input-group">
                <wrapper-picker [field]="field" (selected)="onWrapperSelected($event)">
                </wrapper-picker>
            </div>
            <div *ngFor="let wrapper of field?.wrappers; let i = index" class="badge badge-default noselect" (click)="edit(i)">
                {{ wrapper }}&nbsp;&nbsp;<i class="fa fa-times" aria-hidden="true" (click)="remove(i)"></i>
            </div>
        </div>
        <div #modal class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit {{ wrapper }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Cancel">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <wrapper-editor #editor [formControl]="fieldEdit" [wrapper]="wrapper">
                        </wrapper-editor>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" (click)="onApply()"
                            [disabled]="editor.invalid">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .badge {
            margin-right: .25em;
        }
        .badge {
            cursor: pointer;
        }
        .noselect {
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    `]
})
export class WrappersPickerComponent {
    @ViewChild('modal') modalRef: ElementRef;
    @Input() field: FormlyFieldConfig;
    @Output() selected = new EventEmitter<FormlyFieldConfig>();

    wrapper: string;
    fieldEdit = new FormControl({});

    constructor(
        private formlyDesignerConfig: FormlyDesignerConfig,
        private formlyDesignerService: FormlyDesignerService
    ) { }

    private get $modal(): JQuery & { modal: (command: string) => void } {
        return $(this.modalRef.nativeElement) as any;
    }

    onWrapperSelected(field: FormlyFieldConfig): void {
        this.selected.emit(field);
    }

    edit(index: number): void {
        this.wrapper = this.field.wrappers[index];

        if (isObject(this.field)) {
            const field = cloneDeep(this.field);
            if (isArray(field.wrappers)) {
                this.wrapper = this.field.wrappers[index];
                this.fieldEdit.setValue(field);

                const fields = this.formlyDesignerConfig.wrappers[this.wrapper].fields;
                if (isArray(fields) && fields.length > 0) {
                    this.$modal.modal('show');
                }
                else {
                    this.onApply();
                }
            }
        }
    }

    remove(index: number): void {
        const field = cloneDeep(this.field);
        field.wrappers.splice(index, 1);
        this.field = this.formlyDesignerService.convertField(field);
        this.selected.emit(this.field);
    }

    onApply(): void {
        this.field = this.formlyDesignerService.convertField(this.fieldEdit.value);
        this.selected.emit(this.field);
        this.$modal.modal('hide');
    }
}
