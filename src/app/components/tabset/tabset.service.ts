import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { TabComponent } from '../tab.component';


@Injectable()
export class TabsetService {
    private _tabs = new BehaviorSubject<TabComponent[]>([]);

    get tabs(): TabComponent[] {
        return this._tabs.value.slice();
    }

    readonly tabs$ = this._tabs.asObservable();

    add(tab: TabComponent): void {
        this._tabs.next(this._tabs.value.filter(t => t !== tab).concat(tab));
    }

    remove(tab: TabComponent): void {
        this._tabs.next(this._tabs.value.filter(t => t !== tab));
    }
}
