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

    types: {[name: string]: DesignerTypeOption} = {};
    wrappers: {[name: string]: DesignerOption} = {};
    settings: DesignerSettings = { showClassName: true };

    addConfig(config: DesignerConfigOption): void {
        if (config.settings) {
            this.setSettings(config.settings);
        }
        if (config.types) {
            this.setType(config.types);
        }
        if (config.wrappers) {
            this.setWrapper(config.wrappers);
        }
    }

    setSettings(settings: DesignerSettings): void {
        if (settings.showClassName !== undefined) {
            this.settings.showClassName = !!settings.showClassName;
        }
    }

    setType(options: DesignerTypeOption | DesignerTypeOption[]): void {
        if (Array.isArray(options)) {
            options.forEach((option) => {
                this.setType(option);
            });
        }
        else {
            // Throw if type isn't part of the formly config
            this.formlyConfig.getType(options.name);

            if (!this.types[options.name]) {
                this.types[options.name] = <DesignerTypeOption>{};
            }
            this.types[options.name].name = options.name;
            this.types[options.name].fieldArray = !!options.fieldArray;
            this.types[options.name].fields = options.fields;
        }
    }

    setWrapper(options: DesignerOption | DesignerOption[]): void {
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
    fields?: FormlyFieldConfig[];
}

export interface DesignerTypeOption extends DesignerOption {
    fieldArray?: boolean;
}

export interface DesignerSettings {
    showClassName?: boolean;
}

export interface DesignerConfigOption {
    settings?: DesignerSettings;
    types?: DesignerTypeOption[];
    wrappers?: DesignerOption[];
}
