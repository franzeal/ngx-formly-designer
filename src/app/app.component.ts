import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    fields: FormlyFieldConfig[] = [];
    model: any = {};
    designerFields: FormlyFieldConfig[] = [];
    designerModel: any;

    onFieldsChange(fields: FormlyFieldConfig[]): void {
        this.designerFields = fields;
    }

    onModelChange(model: any): void {
        this.designerModel = model;
    }
}
