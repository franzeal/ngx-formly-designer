import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyDesignerConfig } from '../formly-designer-config';


@Component({
    selector: 'wrappers-picker',
    template: `
        <form novalidate [formGroup]="form">
            <div class="form-group">
                <div class="input-group">
                    <wrapper-select formControlName="wrapper">
                    </wrapper-select>
                    <button type="button" class="btn btn-secondary" [disabled]="form.invalid" (click)="add()">
                        Add
                    </button>
                </div>
                <div *ngFor="let wrapper of wrappers; let i = index" class="badge badge-default">
                    {{ wrapper }}&nbsp;&nbsp;<i class="fa fa-times" aria-hidden="true" (click)="remove(i)"></i>
                </div>
            </div>
        </form>
    `,
    styles: [`
        .badge {
            margin-right: .25em;
        }
        .btn:not(:disabled), .dropdown-item:not(:disabled), .badge > i {
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
        wrapper-select {
            flex-grow: 2;
        }
        :host /deep/ wrapper-select > select {
            border-radius: .25rem 0 0 .25rem;
            border-right: 0;
        }
        ::after {
            display: none !important;
        }
    `]
})
export class WrappersPickerComponent implements OnInit {
    @Input() wrappers: string[];
    @Output() selected = new EventEmitter<string[]>();

    constructor(
        private formBuilder: FormBuilder,
        private formlyDesignerConfig: FormlyDesignerConfig
    ) {
        this.form = formBuilder.group({
            wrapper: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])]
        });
    }

    form: FormGroup;

    get wrapper(): string {
        return this.form.get('wrapper').value;
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            wrapper: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])]
        });
    }

    add(): void {
        const wrappers = this.wrappers ? this.wrappers.slice() : [];
        wrappers.push(this.wrapper);
        this.wrappers = wrappers;
        this.selected.emit(wrappers);
    }

    remove(index: number): void {
        const wrappers = this.wrappers ? this.wrappers.slice() : [];
        wrappers.splice(index, 1);
        this.wrappers = wrappers;
        this.selected.emit(wrappers);
    }
}
