import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FieldsService } from './fields.service';
import { FormlyDesignerService } from './formly-designer.service';
import { merge, NEVER, Subscription, timer } from 'rxjs';
import { catchError, debounceTime, tap } from 'rxjs/operators';

@Component({
    selector: 'formly-designer',
    template: `
        <formly-designer-field-picker (selected)="onFieldSelected($event)">
        </formly-designer-field-picker>
        <form novalidate [formGroup]="form">
            <formly-form [options]="options" [model]="model" [form]="form" [fields]="fields">
            </formly-form>
        </form>
        <!--<div>
            Designer Fields Debug:
            <pre>{{ fields | decycle | json }}</pre>
        </div>-->
    `,
    styles: [`
        formly-designer-field-picker .form-group > .input-group > formly-designer-type-select > select {
            border-radius: .25rem 0 0 .25rem;
            border-right: 0;
        }
        formly-designer-wrapper-editor .card > .card-body .form-control {
            width: 100%;
        }
        formly-designer-wrapper-picker .form-group > .input-group > formly-designer-wrapper-select > select {
            border-radius: .25rem 0 0 .25rem;
            border-right: 0;
        }
    `],
    encapsulation: ViewEncapsulation.None,
    providers: [FormlyDesignerService]
})
export class FormlyDesignerComponent implements OnDestroy, OnInit {
    @ViewChild('formlyFormContainer', { read: ViewContainerRef, static: true }) formlyFormContainer;
    @Output() fieldsChange = new EventEmitter<FormlyFieldConfig[]>();
    @Output() modelChange = new EventEmitter<any>();

    types: string[] = [];
    wrappers: string[] = [];
    properties: string[] = [];
    debugFields: FormlyFieldConfig[] = [];

    form: FormGroup;
    options: any = {};

    private readonly subscriptions: Subscription[] = [];

    constructor(
        private fieldsService: FieldsService,
        private formBuilder: FormBuilder,
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
        this.form = this.formBuilder.group({});

        this.subscriptions.push(this.formlyDesignerService.fields$
            .subscribe(() => {
                this.form = this.formBuilder.group({});
                this.fieldsChange.emit(this.formlyDesignerService.createDesignerFields());
            }));

        this.subscriptions.push(merge(
            this.formlyDesignerService.model$,
            this.form.valueChanges
        )
            .pipe(debounceTime(50))
            .subscribe(() => this.modelChange.emit(this.formlyDesignerService.model)));
    }

    ngOnDestroy(): void {
        this.subscriptions.splice(0).forEach(subscription => subscription.unsubscribe());
    }

    onFieldSelected(field: FormlyFieldConfig): void {
        timer().pipe(
            tap(() => {
                if (this.fieldsService.checkField(field, this.formlyDesignerService.fields)) {
                    this.formlyDesignerService.addField(field);
                }
            }),
            catchError(() => NEVER)).subscribe();
    }
}
