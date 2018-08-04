import { Pipe, PipeTransform } from '@angular/core';
import { decycle } from '../json-helper';

@Pipe({ name: 'decycle' })
export class DecyclePipe implements PipeTransform {
    transform(value: any): any {
        return decycle(value);
    }
}
