import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyDesignerConfig } from '../formly-designer-config';

@Component({
    selector: 'formly-designer-field-picker',
    template: `
        <form novalidate [formGroup]="form">
            <div class="form-group">
                <div class="input-group">
                    <formly-designer-type-select formControlName="type">
                    </formly-designer-type-select>
                    <button type="button" class="btn btn-secondary" [disabled]="form.invalid" (click)="add()">
                        Add
                    </button>
                </div>
            </div>
            <div #modal class="modal fade" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add {{ type }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Cancel">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <formly-designer-field-editor #editor [formControl]="fieldEdit">
                            </formly-designer-field-editor>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" (click)="onApply()"
                                [disabled]="editor.invalid">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    `,
    styles: [`
        .btn:not(:disabled) {
            cursor: pointer;
        }
        .input-group > .btn {
            border-radius: 0 .25rem .25rem 0;
        }
        .input-group, .modal-header {
            display: flex;
        }
        .modal-header {
            justify-content: space-between;
        }
        formly-designer-type-select {
            flex-grow: 2;
        }
    `]
})
export class FieldPickerComponent implements OnInit {
    @ViewChild('modal') modalRef: ElementRef;
    @Output() selected = new EventEmitter<FormlyFieldConfig>();

    constructor(
        private formBuilder: FormBuilder,
        private formlyDesignerConfig: FormlyDesignerConfig
    ) { }

    form: FormGroup;
    fieldEdit = new FormControl({});

    get type(): string {
        return this.form.get('type').value;
    }

    private get $modal(): JQuery & { modal: (command: string) => void } {
        return $(this.modalRef.nativeElement) as any;
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            type: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])]
        });
    }

    add(): void {
        const type = this.type;
        if (type === 'fieldGroup') {
            this.fieldEdit.setValue({
                fieldGroup: []
            });
        } else {
            const field = { type: type } as FormlyFieldConfig;
            if (this.formlyDesignerConfig.types[type].fieldArray) {
                field.fieldArray = { fieldGroup: [] };
            }
            this.fieldEdit.setValue(field);
        }
        this.$modal.modal('show');
    }

    onApply(): void {
        this.selected.emit(this.fieldEdit.value);
        this.$modal.modal('hide');
    }
}
