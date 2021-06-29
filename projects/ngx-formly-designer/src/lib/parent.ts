import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Parent {
  get designerId(): string | undefined;
  addChildField(field: FormlyFieldConfig, index?: number): void;
  addChildType(type: string, index?: number): void;
}
