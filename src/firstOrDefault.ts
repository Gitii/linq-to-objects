declare global {
    interface Array<T> {
        firstOrDefault(predicate?: (item: T, index: number) => boolean): T | null;
        firstOrDefault<U>(predicate?: (item: T, index: number) => boolean, defaultValue?: U): T | U;
    }
}

export function firstOrDefault<T, U>(
    this: T[],
    predicate: (item: T, index: number) => boolean,
    defaultValue: U | null = null
): T | U | null {
    if (this.length === 0) {
        return defaultValue;
    }

    if (predicate) {
        const len = this.length;
        for (let i = 0; i < len; i++) {
            if (predicate.apply(this[i], [this[i], i])) {
                return this[i];
            }
        }

        return defaultValue;
    }

    return this[0];
}
