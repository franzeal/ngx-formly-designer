import { Injectable } from '@angular/core';
import { TabComponent } from '../tab.component';
import { BehaviorSubject } from 'rxjs';


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
