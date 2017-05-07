import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { FormlyConfig, FormlyFieldConfig } from 'ng-formly';

export const FORMLY_DESIGNER_CONFIG_TOKEN = new OpaqueToken('FORMLY_DESIGNER_CONFIG_TOKEN');

@Injectable()
export class FormlyDesignerConfig {
    constructor(
        @Inject(FORMLY_DESIGNER_CONFIG_TOKEN) configs: DesignerConfigOption[] = [],
        private formlyConfig: FormlyConfig
    ) {
        configs.forEach(config => this.addConfig(config));
    }

    types: {[name: string]: DesignerOption} = {};
    wrappers: {[name: string]: DesignerOption} = {};

    addConfig(config: DesignerConfigOption): void {
        if (config.types) {
            this.setType(config.types);
        }
        if (config.wrappers) {
            this.setWrapper(config.wrappers);
        }
    }

    setType(options: DesignerOption | DesignerOption[]) {
        if (Array.isArray(options)) {
            options.forEach((option) => {
                this.setType(option);
            });
        }
        else {
            // Throw if type isn't part of the formly config
            this.formlyConfig.getType(options.name);

            if (!this.types[options.name]) {
                this.types[options.name] = <DesignerOption>{};
            }
            this.types[options.name].name = options.name;
            this.types[options.name].fields = options.fields;
        }
    }

    setWrapper(options: DesignerOption | DesignerOption[]) {
        if (Array.isArray(options)) {
            options.forEach((option) => {
                this.setWrapper(option);
            });
        }
        else {
            // Throw if wrapper isn't part of the formly config
            this.formlyConfig.getWrapper(options.name);

            if (!this.wrappers[options.name]) {
                this.wrappers[options.name] = <DesignerOption>{};
            }
            this.wrappers[options.name].name = options.name;
            this.wrappers[options.name].fields = options.fields;
        }
    }
}

export interface DesignerOption {
    name: string;
    fields?: FormlyFieldConfig[]
}

export interface DesignerConfigOption {
    types?: DesignerOption[];
    wrappers?: DesignerOption[];
}