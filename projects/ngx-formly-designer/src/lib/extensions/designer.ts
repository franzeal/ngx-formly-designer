import { Injectable } from '@angular/core';
import { FormlyExtension, FormlyFieldConfig } from '@ngx-formly/core';
import {
  DESIGNER_WRAPPER_NAME,
  FIELD_DESIGNER_WRAPPER_NAME,
  FIELD_GROUP_DESIGNER_WRAPPER_NAME
} from '../formly-designer-config';

@Injectable()
export class DesignerExtension implements FormlyExtension {
  postPopulate(field: FormlyFieldConfig) {
    if (this.isNonDesignerField(field)) {
      const designerWrapper = field.fieldGroup ? FIELD_GROUP_DESIGNER_WRAPPER_NAME : FIELD_DESIGNER_WRAPPER_NAME;
      field.wrappers = [designerWrapper, ...(field.wrappers || []), DESIGNER_WRAPPER_NAME];
    }
  }

  private isNonDesignerField(field: FormlyFieldConfig): boolean {
    return field && (!field.templateOptions || field.templateOptions.$designerField !== true);
  }
}
