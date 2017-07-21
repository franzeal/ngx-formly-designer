import { Component, Input, OnDestroy, OnInit, Optional } from '@angular/core';
import { TabsetService } from './tabset/tabset.service';


@Component({
    selector: 'tab',
    template: `
        <ng-content *ngIf="!tabsetService || active"></ng-content>
    `
})
export class TabComponent implements OnDestroy, OnInit {
    @Input() active: boolean;
    @Input() title: string;

    constructor(
        @Optional() private tabsetService: TabsetService
    ) { }

    ngOnInit(): void {
        if (this.tabsetService) {
            this.tabsetService.add(this);
        }
    }

    ngOnDestroy(): void {
        if (this.tabsetService) {
            this.tabsetService.remove(this);
        }
    }
}
