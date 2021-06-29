import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DragDropService {
  private readonly _dragging = new BehaviorSubject<string | null>(null);
  private readonly _dropTarget = new BehaviorSubject<string | null>(null);

  get dragging() { return this._dragging.value; }

  get dragging$() {
    return this._dragging.asObservable();
  }

  get dropTarget(): string | null { return this._dropTarget.value; }

  set dropTarget(id: string | null) {
    this._dropTarget.next(id);
  }

  get dropTarget$() {
    return this._dropTarget.asObservable();
  }

  beginDrag(subject: string | null): void {
    if (subject == null) {
      return;
    }
    console.assert(this._dragging.value === null);
    this._dragging.next(subject);
  }

  endDrag(): void {
    if (this._dragging.value != null) {
      this._dragging.next(null);
    }
  }
}
