import { AfterContentInit, Component, OnDestroy } from '@angular/core';
import { TabsetService } from './tabset.service';
import { TabComponent } from '../tab.component';
import { Observable, Subscription } from 'rxjs/Rx';


@Component({
    selector: 'tabset',
    template: `
        <ul class="nav nav-tabs">
            <li class="nav-item" *ngFor="let tab of tabs" role="presentation" (click)="select(tab)">
                <div class="nav-link" [ngClass]="{'active': tab.active}">
                    {{ tab.title }}
                </div>
            </li>
        </ul>
        <div class="content">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .nav-link {
            cursor: pointer;
            cursor: hand;
        }
        :host > .content {
            border: 1px solid #ddd;
            border-top: 0;
            padding: 1em;
        }
    `],
    providers: [TabsetService]
})
export class TabsetComponent implements AfterContentInit, OnDestroy {
    private tabsSubscription: Subscription;
    private _tabs: TabComponent[] = [];

    constructor(
        private tabsetService: TabsetService
    ) { }

    get tabs(): TabComponent[] {
        return this._tabs;
    }

    ngAfterContentInit(): void {
        this.tabsSubscription = this.tabsetService.tabs$.subscribe(tabs => {
            this.onTabsChanged();
        });
    }

    ngOnDestroy(): void {
        if (this.tabsSubscription) {
            this.tabsSubscription.unsubscribe();
        }
    }

    select(tab: TabComponent): void {
        this.tabsetService.tabs.forEach(t => {
            t.active = t === tab;
        });
    }

    private onTabsChanged(): void {
        Observable.timer().subscribe(() => {
            if (this.tabsSubscription.closed) {
                return;
            }

            const tabs = this.tabsetService.tabs;
            this._tabs = tabs;

            if (!tabs.some(pane => pane.active)) {
                this.select(tabs[0]);
            }
        });
    }
}
