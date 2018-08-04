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
                pathElement = pathElement.replace(/\[(\w+)/g, '.$1');
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

// import { cloneDeep, get, isArray, isEmpty, isNil, isString, set, unset } from 'lodash-es';

// https://stackoverflow.com/a/40294058
export const cloneDeep = (obj, hash = new WeakMap()): typeof obj => {
  if (Object(obj) !== obj) return obj; // primitives
  if (hash.has(obj)) return hash.get(obj); // cyclic reference
  const result = obj instanceof Date ? new Date(obj)
    : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
      : obj.constructor ? new obj.constructor()
        : Object.create(null);
  hash.set(obj, result);
  if (obj instanceof Map)
    Array.from(obj, ([key, val]) => result.set(key, cloneDeep(val, hash)));
  return Object.assign(result, ...Object.keys(obj).map(
    key => ({ [key]: cloneDeep(obj[key], hash) })));
};

export const isArray = Array.isArray;


// https://stackoverflow.com/a/28953167
export const isEmpty = (val: any): boolean => {
  if (val === undefined)
    return true;

  else if (typeof (val) === 'function' || typeof (val) === 'number' || typeof (val) === 'boolean'
    || Object.prototype.toString.call(val) === '[object Date]')
    return false;

  else if (val == null || val.length === 0)        // null or 0 length array
    return true;

  else if (typeof (val) === 'object') {
    // empty object

    let r;

    for (const _ in val)
      r = false;

    return r;
  }

  return false;
};

export const isNil = (val: any): boolean => val == null;

export const isString = (val: any): boolean => typeof val === 'string' || val instanceof String;

export const isObject = (val: any): boolean => typeof val === 'object' && !isNil(val);
export const isFunction = (val: any): boolean => typeof val === 'function';
