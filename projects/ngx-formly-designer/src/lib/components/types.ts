import { Component, OnInit } from '@angular/core';
import { DragDropService, FormlyDesignerConfig } from '../';
import { DragDropType } from '../models';

@Component({
  selector: 'formly-designer-types',
  template: `
    <div *ngFor="let type of types" draggable="true" (dragstart)="onDragStart($event, type.value)" (dragend)="onDragEnd()">
      {{ type.label }}
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
    div {
      margin: 2px;
      padding: .5rem;
      border-radius: .75rem;
      background-color: #bbdefb;
      line-break: anywhere;
      white-space: pre-line;
      cursor: grab;
      user-select: none;
    }
  `]
})
export class TypesComponent implements OnInit {
  types: { label: string; value: string }[] = [];

  constructor(
    private dragDropService: DragDropService,
    private formlyDesignerConfig: FormlyDesignerConfig
  ) { }

  ngOnInit(): void {
    this.types = this.getTypes();
  }

  onDragStart(event: DragEvent, type: string): void {
    event.dataTransfer?.setData(DragDropType.Type, type);
    this.dragDropService.beginDrag(type);
  }

  onDragEnd(): void {
    this.dragDropService.endDrag();
  }

  private getTypes(): { label: string, value: string }[] {
    const types: { label: string, value: string }[] = [];
    const entries = Object.entries(this.formlyDesignerConfig.types);
    entries.forEach(([key, value]) => {
      if (!value.fieldGroup) {
        types.push({ label: key, value: key });
      }
    });
    types.push({ label: 'fieldGroup', value: 'formly-group' });
    entries.forEach(([key, value]) => {
      if (value.fieldGroup) {
        types.push({ label: key, value: key });
      }
    });
    return types;
  }

}
