import { cloneDeep, isArray, isObject } from './util';

export function decycle<T>(value: T): T {
  if (value == null) {
    return value;
  }

  let nextId = 1;
  const objects = new Map<any, number>();
  return traverse(cloneDeep(value), (_key, v) => {
    if (isObject(v)) {
      if (objects.has(v)) {
        let id = objects.get(v);
        if (!id) {
          v.$id = id = nextId++;
          objects.set(v, id);
        }
        return { $ref: id };
      } else {
        objects.set(v, 0);
      }
    }
    return;
  });
}

function traverse<T>(obj: T, replace: (key: string, value: any) => any): T {
  if (isArray(obj)) {
    for (let i = 0; i < (obj as unknown[]).length; i++) {
      traverseValue.bind(obj, i, obj[i], replace)();
    }
  } else if (isObject(obj)) {
    for (const key in obj) {
      if ((obj as Object).hasOwnProperty(key)) {
        traverseValue.bind(obj, key, obj[key], replace)();
      }
    }
  }
  return obj;
}

function traverseValue(this: any, key: string, value: any, replace: (key: string, value: any) => any): void {
  const replacement = replace(key, value);
  if (replacement === undefined) {
    traverse(value, replace);
  } else if (this) {
    this[key] = replacement;
  }
}
