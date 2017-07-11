import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormlyModule, FormlyBootstrapModule } from 'ng-formly';

import { FormlyDesignerModule } from './formly-designer/formly-designer.module';

import { config, fieldComponents } from './config';
import { designerConfig } from './designer-config';

import { AppComponent } from './app.component';
import { ExpanderComponent } from './components/expander.component';
import { TabComponent } from './components/tab.component';
import { TabsetComponent } from './components/tabset/tabset.component';


@NgModule({
    declarations: [
        AppComponent,
        ExpanderComponent,
        TabComponent,
        TabsetComponent,

        fieldComponents
    ],
    imports: [
        BrowserModule,
        HttpModule,

        FormlyModule.forRoot(config),
        FormlyBootstrapModule,

        FormlyDesignerModule.forRoot(designerConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
