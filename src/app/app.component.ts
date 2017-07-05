import { Component } from '@angular/core';
import { FormlyFieldConfig } from 'ng-formly';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    fields: FormlyFieldConfig[] = []; //{key: 'test', type: 'repeatSection', fieldGroup: [{key: 'test1', type: 'input'}]}
    model: any = {};
    designerFields = new Array<FormlyFieldConfig>();
    designerModel: string;

    onFieldsChanged(fields: FormlyFieldConfig[]): void {
        this.designerFields = fields;
    }

    onModelChanged(model: any): void {
        this.designerModel = JSON.stringify(model, null, 2);
    }
}
