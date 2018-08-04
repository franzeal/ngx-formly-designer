import { cloneDeep, isArray, isNil, isObject } from '../../utils';

export function decycle<T>(value: T): T {
    if (isNil(value)) {
        return value;
    }

    // let nextId = 1;
    const objects = new Map<any, number>();
    return traverse(cloneDeep(value), (key, val) => {
        if (isObject(val)) {
            if (objects.has(val)) {
                const id = objects.get(val);
                if (!id) {

                    objects.set(val, id);
                }
                return { $ref: id };
            } else {
                objects.set(val, 0);
            }
        }
    });
}

function traverse<T>(obj: T, replace: (key, value) => any): T {
    if (isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
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
