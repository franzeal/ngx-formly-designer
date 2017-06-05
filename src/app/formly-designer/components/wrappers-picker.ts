import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerService } from '../formly-designer.service';
import { cloneDeep } from 'lodash';


@Component({
    selector: 'wrappers-picker',
    template: `
        <div class="form-group">
            <div class="input-group">
                <wrapper-picker [field]="field" (selected)="onWrapperSelected($event)">
                </wrapper-picker>
            </div>
            <div *ngFor="let wrapper of field?.wrappers; let i = index" class="badge badge-default">
                {{ wrapper }}&nbsp;&nbsp;<i class="fa fa-times" aria-hidden="true" (click)="remove(i)"></i>
            </div>
        </div>
    `,
    styles: [`
        .badge {
            margin-right: .25em;
        }
        .badge > i {
            cursor: pointer;
        }
    `]
})
export class WrappersPickerComponent {
    @Input() field: FormlyFieldConfig;
    @Output() selected = new EventEmitter<FormlyFieldConfig>();

    constructor(
        private formlyDesignerService: FormlyDesignerService
    ) { }

    onWrapperSelected(field: FormlyFieldConfig): void {
        this.selected.emit(field);
    }

    remove(index: number) {
        const field = cloneDeep(this.field);
        field.wrappers.splice(index, 1);
        this.field = this.formlyDesignerService.convertField(field);
        this.selected.emit(this.field);
    }
}
