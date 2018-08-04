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

    let r = true;

    for (const f in val)
      r = false;

    return r;
  }

  return false;
};

export const isNil = (val: any): boolean => val == null;

export const isString = (val: any): boolean => typeof val === 'string' || val instanceof String;

export const isObject = (val: any): boolean => typeof val === 'object' && !isNil(val);
export const isFunction = (val: any): boolean => typeof val === 'function';
