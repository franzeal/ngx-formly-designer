import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
  Optional,
  SkipSelf,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';
import { isString } from 'lodash';
import { fromEvent, NEVER, Subscription, timer } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DragDropService, FieldsService, FormlyDesignerService } from '../';
import { DragDropType } from '../models';
import { Parent } from '../parent';
import { ParentService } from '../parent.service';
import { cloneDeep } from '../util';

export enum DropPlacement {
  self,
  before,
  after,
}

@Component({
  selector: 'formly-designer-field-wrapper',
  template: `
    <div #content class="designer-content" [title]="title"
      [ngClass]="{
        'designer-subject': isSubject,
        'designer-drag-source': isDragSource,
        'designer-drop-hint': isDragging,
        'designer-drop-target': isDropTargetSelf,
        'designer-hover': isHovering && !isDragging
      }"
      draggable="true" (dragstart)="onDragStart($event)" (dragend)="onDragEnd()"
      (dragenter)="onDragEnter($event)" (dragleave)="onDragLeave($event)" (drop)="onDrop($event)"
      (mouseout)="onMouseOut()">
      <ng-template #fieldComponent></ng-template>
    </div>
    <div *ngIf="isDropTargetBefore" class="designer-drop-target-before"></div>
    <div *ngIf="isDropTargetAfter" class="designer-drop-target-after"></div>
  `,
  styles: [`
    :host {
      display: flex;
      position: relative;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: flex-start;
      margin: .25rem;
    }
    .designer-content {
      border: 1px dashed #000;
      border-radius: 5px;
      min-height: 2rem;
      padding: .25em 1em;
      width: 100%;
    }
    .designer-content.designer-hover {
      background-color: #f0f4c3;
      border-color: #00c853;
      cursor: pointer;
    }
    .designer-content.designer-subject {
      border-color: #00c853;
      border-style: solid;
      border-width: 2px;
    }
    .designer-content.designer-drop-hint {
      background-color: pink;
      border-color: #bbdefb;
    }
    .designer-content.designer-drop-target {
      background-color: #f0f4c3;
      border-color: #00c853;
    }
    .designer-drag-source {
      opacity: .4;
    }
    .designer-drop-target-before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-color: aqua;
      height: 12px;
      pointer-events: none;
      z-index: 1;
    }
    .designer-drop-target-after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: yellow;
      height: 12px;
      pointer-events: none;
      z-index: 1;
    }
  `],
  providers: [
    ParentService,
  ],
})
export class FormlyDesignerFieldWrapperComponent extends FieldWrapper implements OnInit, OnDestroy, Parent {
  @ViewChild('fieldComponent', { read: ViewContainerRef, static: true }) fieldComponent!: ViewContainerRef;
  @ViewChild('content', { read: ElementRef, static: true }) content?: ElementRef<HTMLElement>;

  dropTargetCounter = 0;
  private subscriptions: Subscription[] = [];

  get title(): string | null { return this._title; }
  set title(value: string | null) {
    if (value !== this._title) {
      this._title = value;
      this.changeDetector.markForCheck();
    }
  }
  private _title: string | null = null;

  get isDragging() { return this._isDragging; }
  set isDragging(value: boolean) {
    if (value !== this._isDragging) {
      this._isDragging = value;
      this.changeDetector.markForCheck();
    }
  }
  private _isDragging = false;

  get isHovering() { return this._isHovering; }
  set isHovering(value: boolean) {
    if (value !== this._isHovering) {
      this._isHovering = value;
      this.changeDetector.markForCheck();
    }
  }
  private _isHovering = false;

  get parent(): Parent | undefined { return this.parentParentService?.parent; }

  get dropTargetPlacement(): DropPlacement | null { return this._dropTargetPlacement; }
  set dropTargetPlacement(value: DropPlacement | null) {
    if (value !== this._dropTargetPlacement) {
      this._dropTargetPlacement = value;
      this.changeDetector.markForCheck();
    }
  }
  private _dropTargetPlacement: DropPlacement | null = null;

  get designerId(): string | undefined { return this.field.templateOptions?.$designerId; }

  get isFieldGroup(): boolean { return Array.isArray(this.field.fieldGroup); }

  get isDragSource(): boolean {
    return this.dragDropService.dragging === this.designerId;
  }

  get isDropTarget(): boolean {
    return this.dragDropService.dropTarget === this.designerId;
  }

  get isDropTargetSelf(): boolean {
    return this.isDropTarget && !this.dropTargetPlacement && this.isFieldGroup;
  }

  get isDropTargetBefore(): boolean {
    return this.isDropTarget && this.dropTargetPlacement === DropPlacement.before;
  }

  get isDropTargetAfter(): boolean {
    return this.isDropTarget && this.dropTargetPlacement === DropPlacement.after;
  }

  get isSubject(): boolean {
    return this.formlyDesignerService.selectedDesignerId === this.designerId;
  }

  constructor(
    private changeDetector: ChangeDetectorRef,
    private dragDropService: DragDropService,
    private fieldsService: FieldsService,
    public formlyDesignerService: FormlyDesignerService,
    private zone: NgZone,
    parentService: ParentService,
    @Inject(DOCUMENT) private document?: any,
    @SkipSelf() @Optional() private parentParentService?: ParentService,
  ) {
    super();
    parentService.parent = this;
    if (parentParentService) {
      parentParentService.addChild(this);
    }
  }

  ngOnInit(): void {
    if (!this.document?.defaultView) {
      return;
    }
    const content = this.content?.nativeElement;
    if (!content) {
      return;
    }
    this.subscriptions.push(
      this.dragDropService.dragging$.subscribe(dragging => this.isDragging = dragging != null),
      fromEvent(this.document.defaultView, 'mouseup').subscribe(this.onWindowMouseUp.bind(this)),
    );
    this.zone.runOutsideAngular(() => {
      this.subscriptions.push(
        fromEvent(content, 'dragover').subscribe(e => this.onDragOver(e as DragEvent)),
        fromEvent(content, 'mouseover').subscribe(e => this.onMouseOver(e as MouseEvent)),
      );
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.splice(0).forEach(subscription => subscription.unsubscribe());
    this.parentParentService?.removeChild(this);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.stopPropagation();
    this.formlyDesignerService.didClickField(this.field);
  }

  onDragStart(event: DragEvent): void {
    if (this.dragDropService.dragging) {
      return;
    }
    event.dataTransfer?.setData(DragDropType.Field, this.designerId ?? '');
    this.dragDropService.beginDrag(this.designerId ?? null);
  }

  onDragEnd(): void {
    this.dragDropService.endDrag();
  }

  onDragEnter(event: DragEvent): void {
    if (!this.shouldHandleDragEvent(event)) {
      return;
    }
    event.preventDefault();
    this.dropTargetCounter++;
  }

  onDragLeave(event: DragEvent): void {
    if (!this.shouldHandleDragEvent(event)) {
      return;
    }
    if (this.dropTargetCounter > 0) {
      this.dropTargetCounter--;
      if (this.dropTargetCounter === 0) {
        this.dropTargetPlacement = null;
      }
    }
  }

  onDragOver(event: DragEvent): void {
    if (event.defaultPrevented || !this.shouldHandleDragEvent(event)) {
      return;
    }
    this.zone.run(() => {
      this.dropTargetPlacement = this.getDropTargetPlacement(event);
      this.dragDropService.dropTarget = this.field.templateOptions?.$designerId ?? null;
    });
    event.preventDefault();
  }

  private shouldHandleDragEvent(event: DragEvent): boolean {
    if (event.dataTransfer?.types.some(t => t === DragDropType.Field)) {
      return this.dragDropService.dragging !== this.designerId;
    }
    return !!event.dataTransfer?.types.some(t => t === DragDropType.Type) &&
      isString(this.dragDropService.dragging);
  }

  private getDropTargetPlacement(event: DragEvent): DropPlacement {
    const rect = this.content?.nativeElement.getBoundingClientRect();
    if (rect) {
      const threshold = rect.height * .33;
      if (event.clientY < rect.top + threshold) {
        return DropPlacement.before;
      }
      if (event.clientY > rect.bottom - threshold) {
        return DropPlacement.after;
      }
    }
    return DropPlacement.self;
  }

  onDrop(event: DragEvent): void {
    if (this.shouldHandleDragEvent(event)) {
      event.stopPropagation();
      if (event.dataTransfer?.types.includes(DragDropType.Field)) {
        const designerId = this.dragDropService.dragging;
        const field = this.fieldsService.find(designerId, this.formlyDesignerService.designerFields);
        if (field) {
          // Get placement index before the fields refresh caused by removal
          const index = this.getDropPlacementIndex(field);
          this.formlyDesignerService.removeField(field);
          if (this.parent && this.dropTargetPlacement !== DropPlacement.self) {
            this.parent.addChildField(field, index);
          } else {
            this.addChildField(field);
          }
        }
      } else if (event.dataTransfer?.types.includes(DragDropType.Type)) {
        if (this.dragDropService.dragging) {
          if (this.parent && this.dropTargetPlacement !== DropPlacement.self) {
            this.parent.addChildType(this.dragDropService.dragging, this.getDropPlacementIndex());
          } else {
            this.addChildType(this.dragDropService.dragging);
          }
        }
      }
    }
    this.dragDropService.endDrag();
    this.resetDrop();
  }

  onMouseOver(event: MouseEvent): void {
    event.stopPropagation();
    this.zone.run(() => {
      this.isHovering = true;
      this.title = this.dragDropService.dragging == null ?
        `Click to edit ${this.formlyDesignerService.getTypeName(this.field.type)}` :
        null;
    });
  }

  onMouseOut(): void {
    this.isHovering = false;
  }

  onWindowMouseUp(): void {
    this.resetDrop();
  }

  async addChildField(field: FormlyFieldConfig, index?: number): Promise<void> {
    if (!this.isFieldGroup) {
      return;
    }
    if (!this.fieldsService.checkField(field, this.formlyDesignerService.designerFields, this.field)) {
      return;
    }
    const updatedField = cloneDeep(this.field);
    if (!updatedField.fieldGroup) {
      return;
    }
    const fieldIndex = (index == null || isNaN(index)) ? updatedField.fieldGroup.length :
      Math.min(updatedField.fieldGroup.length, Math.max(0, index));
    updatedField.fieldGroup.splice(fieldIndex, 0, field);
    return timer(0)
      .pipe(
        tap(() => this.formlyDesignerService.updateField(this.field, updatedField)),
        catchError(() => NEVER),
        map(() => undefined)
      ).toPromise();
  }

  async addChildType(type: string, index?: number): Promise<void> {
    const field = this.formlyDesignerService.createField(type);
    await this.addChildField(field, index);
  }

  /**
   * @param dropField - field to ignore for index determination
   */
  private getDropPlacementIndex(dropField?: FormlyFieldConfig): number | undefined {
    if (this.parent && this.dropTargetPlacement !== DropPlacement.self) {
      const parentChildren = dropField ?
        this.parentParentService?.children.filter(fd => fd.designerId !== dropField.templateOptions?.$designerId) :
        this.parentParentService?.children;
      const dropIndex = parentChildren?.indexOf(this) ?? 0;
      return this.dropTargetPlacement === DropPlacement.before ? dropIndex : dropIndex + 1;
    }
    return;
  }

  private resetDrop(): void {
    this.dropTargetCounter = 0;
    this.dropTargetPlacement = null;
    if (this.isDropTarget) {
      this.dragDropService.dropTarget = null;
    }
  }
}
