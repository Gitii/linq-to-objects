export function extendPrototypeProperty<T extends keyof ArrayConstructor["prototype"]>(
    methodName: T,
    method: ArrayConstructor["prototype"][T]
): boolean {
    return extendPrototypePropertyUnsafe(methodName as string, method);
}

export function extendPrototypePropertyUnsafe(
    methodName: string,
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
    method: any
): boolean {
    if (methodName in Array.prototype) {
        return false;
    }

    Object.defineProperty(Array.prototype, methodName, {
        enumerable: false,
        writable: false,
        value: method,
    });

    return true;
}
