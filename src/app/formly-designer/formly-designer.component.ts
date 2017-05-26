import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormlyConfig, FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerConfig } from './formly-designer-config';
import { FormlyDesignerService } from './formly-designer.service';


@Component({
    selector: 'formly-designer',
    template: `
        <field-picker (selected)="onfieldSelected($event)">
        </field-picker>

        <form novalidate [formGroup]="form">
            <formly-form [options]="options" [model]="model" [form]="form" [fields]="fields">
            </formly-form>
        </form>

        Fields:
        <pre>{{ designerFields | json }}</pre>

        Model:
        <pre>{{ model | json }}</pre>
    `,
    providers: [FormlyDesignerService]
})
export class FormlyDesignerComponent implements OnInit {
    types = new Array<string>();
    wrappers = new Array<string>();
    properties = new Array<string>();

    form: FormGroup;
    options: any = {};
    designerFields: FormlyFieldConfig = [];

    constructor(
        private formBuilder: FormBuilder,
        private formlyConfig: FormlyConfig,
        private formlyDesignerConfig: FormlyDesignerConfig,
        private formlyDesignerService: FormlyDesignerService
    ) { }

    get fields(): FormlyFieldConfig[] {
        return this.formlyDesignerService.fields;
    }

    set fields(value: FormlyFieldConfig[]) {
        this.formlyDesignerService.fields = value;
    }

    get model(): any {
        return this.formlyDesignerService.model;
    }

    set model(value: any) {
        this.formlyDesignerService.model = value;
    }

    ngOnInit(): void {
        // Designer forms will be restricted to a single field depth; all designer keys should be complex (e.g. "templateOptions.some.property")

        // Wrappers for each type of field (group, array, control); depending on the field type, would apply one or more wrappers;
        // e.g. group then control, array then control, or just control; the control wrapper will expose the field editor.  The group
        // wrapper would expose a group editor, and the array wrapper would expose an array editor.

        // The designer should be able to produce complex forms once wrappers for group and array types are present.

        // Create feature modules to support the designer and property forms (both the designer and property forms will use formly).
        // The designer should define field types "designerType", "designerWrapper" and "designerProperty" which should be excluded
        // from the designer's use.  The "designerType" and "designerWrapper" should be exposed by a "fieldEditor" wrapper that allows
        // manipulation of the field - swapping between preview / designer.

        this.form = this.formBuilder.group({});

        this.formlyDesignerService.fields$.subscribe(() => this.designerFields = this.formlyDesignerService.createDesignerFields());

        console.log("formly-designer initialized");
    }

    onfieldSelected(field: FormlyFieldConfig): void {
        this.formlyDesignerService.addField(field);
    }
}