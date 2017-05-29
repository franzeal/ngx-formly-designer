import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyConfig, FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerConfig } from './formly-designer-config';
import { FormlyDesignerService } from './formly-designer.service';
import { Subscription } from 'rxjs/Rx';


@Component({
    selector: 'formly-designer',
    template: `
        <field-picker (selected)="onfieldSelected($event)">
        </field-picker>
        <form novalidate [formGroup]="form">
            <formly-form [options]="options" [model]="model" [form]="form" [fields]="fields">
            </formly-form>
        </form>
    `,
    styles: [`
        :host-context(field-group-editor) field-picker {
            display: none;
        }
    `],
    providers: [FormlyDesignerService]
})
export class FormlyDesignerComponent implements OnChanges, OnDestroy, OnInit {
    @Output() fieldsChanged = new EventEmitter<FormlyFieldConfig[]>();
    @Output() modelChanged = new EventEmitter<any>();

    types = new Array<string>();
    wrappers = new Array<string>();
    properties = new Array<string>();

    form: FormGroup;
    options: any = {};

    private subscriptions = new Array<Subscription>();

    constructor(
        private formBuilder: FormBuilder,
        private formlyConfig: FormlyConfig,
        private formlyDesignerConfig: FormlyDesignerConfig,
        private formlyDesignerService: FormlyDesignerService
    ) {
        this.active = true;
    }

    @Input()
    get active(): boolean {
        return this.formlyDesignerService.active;
    }

    set active(value: boolean) {
        this.formlyDesignerService.active = value;
    }

    @Input()
    get fields(): FormlyFieldConfig[] {
        return this.formlyDesignerService.fields;
    }

    set fields(value: FormlyFieldConfig[]) {
        this.formlyDesignerService.fields = value;
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
                .subscribe(() => this.fieldsChanged.emit(this.formlyDesignerService.createDesignerFields())));

        this.subscriptions.push(this.formlyDesignerService.model$.subscribe(value => this.modelChanged.emit(value)));
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['active']) {
            this.formlyDesignerService.active = this.active;
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.splice(0).forEach(subscription => subscription.unsubscribe());
    }

    onfieldSelected(field: FormlyFieldConfig): void {
        this.formlyDesignerService.addField(field);
    }
}
