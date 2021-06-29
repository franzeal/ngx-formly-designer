import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-repeat-section',
  template: `
    <div class="header" *ngIf="canAdd()">
      <button type="button" class="add-btn btn btn-sm btn-primary" (click)="add()">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
    <div class="body" [ngClass]="{interactive: canAdd()}">
      <div class="section flex-container" *ngFor="let field of field.fieldGroup; let i = index;" [ngClass]="{interactive: canRemove(i)}">
        <button type="button" class="remove-btn btn btn-sm btn-danger" (click)="remove(i)" *ngIf="canRemove(i)">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <formly-group [field]="field" [ngClass]="fieldArrayClassName"></formly-group>
      </div>
    </div>
   `,
  styles: [`
    .header {
      margin-top: .5em;
    }
    .flex-container.interactive {
      display: flex;
      align-items: flex-start;
      flex-wrap: nowrap;
    }
    formly-form {
      flex-grow: 1;
    }
    .body.interactive {
      margin-top: 0.5em;
    }
    .section {
      margin-bottom: .25em;
    }
    .section>button {
      margin-top: .25em;
    }
  `]
})
export class FormlyFieldRepeatSectionComponent extends FieldArrayType {
  get fieldArrayClassName(): string {
    return this.field.fieldArray?.className ?? '';
  }

  canAdd(): boolean {
    const canAdd = this.to['canAdd'] as Function | boolean;
    return canAdd == null || (typeof canAdd === 'function' ? canAdd.apply(this) : canAdd) === true;
  }

  canRemove(index: number): boolean {
    const canRemove = this.to['canRemove'] as Function | boolean;
    if (canRemove === false) {
      return false;
    }

    const value = this.model[index];
    if (value && value.canRemove === false) {
      return false;
    }

    return typeof canRemove !== 'function' || canRemove.apply(this, [index]) === true;
  }
}
