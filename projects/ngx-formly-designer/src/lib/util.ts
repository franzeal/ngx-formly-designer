import { FormlyFieldConfig } from '@ngx-formly/core';

// Source: https://github.com/formly-js/ngx-formly/blob/master/src/core/src/lib/utils.ts
export function getKeyPath(field: { key?: string | string[] }): (string | number)[] {
    /* We store the keyPath in the field for performance reasons. This function will be called frequently. */
    let keyPath: (string | number)[] = [];
    if (field.key) {
        /* Also allow for an array key, hence the type check  */
        const pathElements = typeof field.key === 'string' ? field.key.split('.') : field.key;
        for (let pathElement of pathElements) {
            if (typeof pathElement === 'string') {
                /* replace paths of the form names[2] by names.2, cfr. angular formly */
                pathElement = pathElement.replace(/\[(\w+)\]/g, '.$1');
                keyPath = keyPath.concat(pathElement.split('.'));
            } else {
                keyPath.push(pathElement);
            }
        }
        for (let i = 0; i < keyPath.length; i++) {
            const pathElement = keyPath[i];
            if (typeof pathElement === 'string' && /^\d+$/.test(pathElement)) {
                keyPath[i] = parseInt(pathElement, 10);
            }
        }
    }
    return keyPath.slice();
}

export function equalType(a: FormlyFieldConfig, b: FormlyFieldConfig): boolean {
    return (!a.fieldArray === !b.fieldArray) && (!a.fieldGroup === !b.fieldGroup);
}

export function traverseFields(fields: FormlyFieldConfig[], callback: (field: FormlyFieldConfig, path?: (string | number)[]) => boolean,
    path?: (string | number)[]): boolean {
    for (const field of fields) {
        if (!callback(field, path || [])) {
            return false;
        }
        if (field.fieldArray) {
            if (!traverseFields([field.fieldArray], callback, (path || []).concat(getKeyPath(field)))) {
                return false;
            }
        } else if (field.fieldGroup) {
            if (!traverseFields(field.fieldGroup, callback, (path || []).concat(getKeyPath(field)))) {
                return false;
            }
        }
    }
    return true;
}
