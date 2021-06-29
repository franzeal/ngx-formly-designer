import { Injectable } from '@angular/core';
import { Parent } from './parent';

@Injectable()
export class ParentService {
  parent?: Parent;

  get children(): ReadonlyArray<Parent> { return this._children; }
  private set children(value: ReadonlyArray<Parent>) {
    this._children = value;
  }
  private _children: ReadonlyArray<Parent> = [];

  addChild(child: Parent, index?: number): void {
    const childIndex = index == null || isNaN(index) ? this.children.length :
      Math.min(this.children.length, Math.max(0, index));
    const children = this.children.slice();
    children.splice(childIndex, 0, child);
    this.children = children;
  }

  removeChild(child: Parent): void {
    this.children = this.children.filter(c => c === child);
  }

  clearChildren(): void {
    this.children = [];
  }
}
