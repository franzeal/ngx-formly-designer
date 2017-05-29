import { Component } from '@angular/core';
import { FormlyFieldConfig } from 'ng-formly';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    fields: FormlyFieldConfig[] = [];
    model: any = {};
    designerFields = new Array<FormlyFieldConfig>();
    designerModel: any = {};

    onFieldsChanged(fields: FormlyFieldConfig[]): void {
        this.designerFields = fields;
    }

    onModelChanged(model: any): void {
        this.designerModel = model;
    }
}
