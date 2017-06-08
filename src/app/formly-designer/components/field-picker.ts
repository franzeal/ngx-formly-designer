import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerConfig } from '../formly-designer-config';


declare var $: any;

@Component({
    selector: 'field-picker',
    template: `
        <form novalidate [formGroup]="form">
            <div class="form-group">
                <div class="input-group">
                    <type-select formControlName="type">
                    </type-select>
                    <button type="button" class="btn btn-secondary" [disabled]="form.invalid" (click)="add()">
                        Add
                    </button>
                </div>
            </div>
        </form>
        <div #fieldModal class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add {{ type }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Cancel">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <field-editor #fieldEditor [formControl]="fieldEdit">
                        </field-editor>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" (click)="onApplyField()"
                            [disabled]="fieldEditor.invalid">Apply</button>
                    </div>
                </div>
            </div>
        </div>
        <div #fieldGroupModal class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add {{ type }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Cancel">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <field-group-editor #fieldGroupEditor [formControl]="fieldGroupEdit">
                        </field-group-editor>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" (click)="onApplyFieldGroup()"
                            [disabled]="fieldGroupEditor.invalid">Apply</button>
                    </div>
                </div>
            </div>
        </div>
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
        type-select {
            flex-grow: 2;
        }
        :host /deep/ type-select > select {
            border-radius: .25rem 0 0 .25rem;
            border-right: 0;
        }
        ::after {
            display: none !important;
        }
    `]
})
export class FieldPickerComponent implements OnInit {
    @ViewChild('fieldModal') fieldModalRef: ElementRef;
    @ViewChild('fieldGroupModal') fieldGroupModalRef: ElementRef;
    @Output() selected = new EventEmitter<FormlyFieldConfig>();

    constructor(
        private formBuilder: FormBuilder,
        private formlyDesignerConfig: FormlyDesignerConfig
    ) { }

    form: FormGroup;
    fieldEdit = new FormControl({});
    fieldGroupEdit = new FormControl({});

    get type(): string {
        return this.form.get('type').value;
    }

    private get fieldModal(): any {
        return $(this.fieldModalRef.nativeElement);
    }

    private get fieldGroupModal(): any {
        return $(this.fieldGroupModalRef.nativeElement);
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            type: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])]
        });
    }

    add(): void {
        const type = this.type;
        if (type === 'fieldGroup') {
            this.fieldGroupEdit.setValue({
                fieldGroup: []
            });
            this.fieldGroupModal.modal('show');
        }
        else {
            this.fieldEdit.setValue({
                type: type
            });
            this.fieldModal.modal('show');
        }
    }

    onApplyField(): void {
        this.selected.emit(this.fieldEdit.value);
        this.fieldModal.modal('hide');
    }

    onApplyFieldGroup(): void {
        this.selected.emit(this.fieldGroupEdit.value);
        this.fieldGroupModal.modal('hide');
    }
}
