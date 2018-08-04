import { cloneDeep, isArray, isObject } from './util';

export function decycle<T>(value: T): T {
    if (value == null) {
        return value;
    }

    let nextId = 1;
    const objects = new Map<any, number>();
    return traverse(cloneDeep(value), (key, v) => {
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
    });
}

function traverse<T>(obj: T, replace: (key, value) => any): T {
    if (isArray(obj)) {
        for (let i = 0; i < (obj as any).length; i++) {
            traverseValue.bind(obj, i, obj[i], replace)();
        }
    } else if (isObject(obj)) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                traverseValue.bind(obj, key, obj[key], replace)();
            }
        }
    }
    return obj;
}

function traverseValue(key: any, value: any, replace: (key, value) => any): void {
    const replacement = replace(key, value);
    if (replacement === undefined) {
        traverse(value, replace);
    } else {
        this[key] = replacement;
    }
}
