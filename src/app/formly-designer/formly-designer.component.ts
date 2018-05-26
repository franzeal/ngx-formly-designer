import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldsService } from './fields.service';
import { FormlyDesignerConfig } from './formly-designer-config';
import { FormlyDesignerService } from './formly-designer.service';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
    selector: 'formly-designer',
    template: `
        <field-picker (selected)="onFieldSelected($event)">
        </field-picker>
        <form novalidate [formGroup]="form">
            <formly-form [options]="options" [model]="model" [form]="form" [fields]="fields">
            </formly-form>
        </form>
    `,
    styles: [`
        field-picker .form-group > .input-group > type-select > select {
            border-radius: .25rem 0 0 .25rem;
            border-right: 0;
        }
        wrapper-editor .card > .card-block .form-control {
            width: 100%;
        }
        wrapper-picker .form-group > .input-group > wrapper-select > select {
            border-radius: .25rem 0 0 .25rem;
            border-right: 0;
        }
    `],
    encapsulation: ViewEncapsulation.None,
    providers: [FormlyDesignerService]
})
export class FormlyDesignerComponent implements OnDestroy, OnInit {
    @Output() fieldsChanged = new EventEmitter<FormlyFieldConfig[]>();
    @Output() modelChanged = new EventEmitter<any>();

    types = new Array<string>();
    wrappers = new Array<string>();
    properties = new Array<string>();

    form: FormGroup;
    options: any = {};

    private subscriptions = new Array<Subscription>();

    constructor(
        private fieldsService: FieldsService,
        private formBuilder: FormBuilder,
        private formlyConfig: FormlyConfig,
        private formlyDesignerConfig: FormlyDesignerConfig,
        private formlyDesignerService: FormlyDesignerService
    ) { }

    @Input()
    get disabled(): boolean {
        return this.formlyDesignerService.disabled;
    }

    set disabled(value: boolean) {
        this.formlyDesignerService.disabled = value;
    }

    @Input()
    get fields(): FormlyFieldConfig[] {
        return this.formlyDesignerService.fields;
    }

    set fields(value: FormlyFieldConfig[]) {
        const fields = this.formlyDesignerService.convertFields(value);
        this.fieldsService.mutateFields(fields, false);
        this.formlyDesignerService.fields = fields;
    }

    @Input()
    get model(): any {
        return this.formlyDesignerService.model;
    }

    set model(value: any) {
        this.formlyDesignerService.model = value;
    }

    ngOnInit(): void {
        // Designer forms will be restricted to a single field depth; all designer keys should be
        // complex (e.g. "templateOptions.some.property")

        // Wrappers for each type of field (group, array, control); depending on the field type, would apply one or more wrappers;
        // e.g. group then control, array then control, or just control; the control wrapper will expose the field editor.  The group
        // wrapper would expose a group editor, and the array wrapper would expose an array editor.

        // The designer should be able to produce complex forms once wrappers for group and array types are present.
        this.form = this.formBuilder.group({});

        this.subscriptions.push(
            this.formlyDesignerService.fields$
                .subscribe(() => {
                    this.form = this.formBuilder.group({});
                    this.fieldsChanged.emit(this.formlyDesignerService.createDesignerFields());
                }));

        this.subscriptions.push(
            Observable.merge(
                this.formlyDesignerService.model$,
                this.form.valueChanges
            ).debounceTime(50).subscribe(() => this.modelChanged.emit(this.formlyDesignerService.model)));
    }

    ngOnDestroy(): void {
        this.subscriptions.splice(0).forEach(subscription => subscription.unsubscribe());
    }

    onFieldSelected(field: FormlyFieldConfig): void {
        Observable.timer()
            .do(() => this.formlyDesignerService.addField(field))
            .catch(err => Observable.never())
            .subscribe();
    }
}
