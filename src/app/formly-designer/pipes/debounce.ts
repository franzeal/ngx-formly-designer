import { Pipe, PipeTransform } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Pipe({ name: 'debounce' })
export class DebouncePipe implements PipeTransform {
    transform(value: any, time: number): Observable<any> {
        if (!Number.isFinite(time) || time < 0) {
            time = 50;
        }
        return Observable.of(value).debounceTime(time);
    }
}
