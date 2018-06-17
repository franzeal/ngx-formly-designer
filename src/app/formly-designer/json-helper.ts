import { cloneDeep, isArray, isObject, isNil, isUndefined } from 'lodash-es';

export function decycle<T>(value: T): T {
    if (isNil(value)) {
        return value;
    }

    let nextId = 1;
    const objects = new Map<any, number>();
    return traverse(cloneDeep(value), (key, value) => {
        if (isObject(value)) {
            if (objects.has(value)) {
                let id = objects.get(value);
                if (!id) {
                    value.$id = id = nextId++;
                    objects.set(value, id);
                }
                return { $ref: id };
            }
            else {
                objects.set(value, 0);
            }
        }
    });
}

function traverse<T>(obj: T, replace: (key, value) => any): T {
    if (isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            traverseValue.bind(obj, i, obj[i], replace)();
        }
    }
    else if (isObject(obj)) {
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
    if (isUndefined(replacement)) {
        traverse(value, replace);
    }
    else {
        this[key] = replacement;
    }
}
