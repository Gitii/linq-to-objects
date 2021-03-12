declare global {
    interface Array<T> {
        lastOrDefault(predicate: (item: T, index: number) => boolean): T | null;

        lastOrDefault<U>(predicate: (item: T, index: number) => boolean, defaultValue?: U): T | U;
    }
}

export default function lastOrDefault<T, U>(
    this: T[],
    predicate: (item: T, index: number) => boolean,
    defaultValue: U | null = null
): T | U | null {
    if (this.length === 0) {
        return defaultValue;
    }

    if (predicate) {
        const len = this.length;
        for (let i = len - 1; i >= 0; i--) {
            if (predicate.apply(this[i], [this[i], i])) {
                return this[i];
            }
        }

        return defaultValue;
    }

    return this[0];
}

Array.prototype.lastOrDefault = lastOrDefault;
