import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'expander',
  template: `
    <div class="header">
      <span class="toggle noselect" (click)="toggle()" [attr.title]="title" (dblclick)="$event.stopPropagation()">
        <i [ngClass]="iconClass"></i>&nbsp;&nbsp;<span class="h4">{{heading}}</span>
      </span>
    </div>
    <div class="content" [class.expanded]="showContent">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      margin-top: 1em;
    }
    .toggle {
      cursor: pointer;
      cursor: hand;
    }
    .noselect {
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .content {
      display: none;
      padding-bottom: 1em;
    }
    .content.expanded {
      display: block;
    }
  `]
})
export class ExpanderComponent implements OnChanges, OnInit {
  private static expandedState = {
    title: 'Select to collapse',
    iconClass: ['fa', 'fa-chevron-up']
  };

  private static collapsedState = {
    title: 'Select to expand',
    iconClass: ['fa', 'fa-chevron-down']
  };

  @Input() heading?: string;
  @Input() expanded = false;

  title?: string;
  iconClass: any;

  private _showContent = false;

  get showContent(): boolean {
    return this._showContent;
  }

  set showContent(value: boolean) {
    this._showContent = !!value;
    this.onShowContentChanged();
  }

  ngOnInit(): void {
    this.showContent = this.expanded;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.expanded) {
      this.showContent = this.expanded;
    }
  }

  toggle(): void {
    this.showContent = !this.showContent;
  }

  private onShowContentChanged(): void {
    this.title = this.showContent ? ExpanderComponent.expandedState.title : ExpanderComponent.collapsedState.title;
    this.iconClass = this.showContent ? ExpanderComponent.expandedState.iconClass : ExpanderComponent.collapsedState.iconClass;
  }
}
