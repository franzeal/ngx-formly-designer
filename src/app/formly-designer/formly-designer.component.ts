import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyConfig, FormlyFieldConfig } from 'ng-formly';
import { FormlyDesignerConfig } from './formly-designer-config';
import { FormlyDesignerService } from './formly-designer.service';
import { isString } from 'lodash';


export function keyRequired(key: string, type: string): any {
    return (group: FormGroup): { [key: string]: any } => {
        if (group.get(type).value === "fieldGroup") {
            return;
        }

        let keyValue = group.get(key).value;
        if (!isString(keyValue) || keyValue.trim().length === 0) {
            return {
                keyRequired: true
            };
        }
    }
}

@Component({
    selector: 'formly-designer',
    template: `
        <form novalidate [formGroup]="designer">
            <div class="form-group">
                <label class="form-control-label mr-sm-2">Field</label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Key" formControlName="key">
                    <div class="btn-group">
                        <type-select formControlName="type">
                        </type-select>
                        <button type="button" class="btn btn-secondary" [disabled]="designer.invalid" (click)="add()">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </form>

        <form novalidate [formGroup]="form">
            <formly-form [options]="options" [model]="model" [form]="form" [fields]="fields">
            </formly-form>
        </form>

        Fields:
        <pre>{{ designerFields | json }}</pre>

        Model:
        <pre>{{ model | json }}</pre>
    `,
    styles: [`
        .btn-group > type-select > select {
            border-radius: 0;
            border-left: 0;
            border-right: 0;
        }
    `],
    encapsulation: ViewEncapsulation.None,
    providers: [FormlyDesignerService]
})
export class FormlyDesignerComponent implements OnInit {
    designer: FormGroup;
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

        this.designer = this.formBuilder.group({
            key: [""],
            type: ["", Validators.compose([Validators.required, Validators.pattern(/^\s*\S.*$/)])]
        }, { validator: keyRequired('key', 'type') });

        this.form = this.formBuilder.group({});

        this.formlyDesignerService.fields$.subscribe(() => this.designerFields = this.formlyDesignerService.createDesignerFields());

        console.log("formly-designer initialized");
    }

    add(): void {
        let type = this.designer.get("type").value;
        if (type === "fieldGroup") {
            this.formlyDesignerService.addField({
                key: this.designer.get("key").value,
                fieldGroup: []
            });
        }
        else {
            this.formlyDesignerService.addField({
                key: this.designer.get("key").value,
                type: this.designer.get("type").value
            });
        }
    }
}