declare global {
    interface Array<T> {
        last(predicate: (item: T, index: number) => boolean): T;
    }
}

export function last<T>(this: T[], predicate: (item: T, index: number) => boolean): T {
    if (this.length === 0) {
        throw new Error("Array.last: array is empty!");
    }

    if (predicate) {
        const len = this.length;
        for (let i = len - 1; i >= 0; i--) {
            if (predicate.apply(this[i], [this[i], i])) {
                return this[i];
            }
        }

        throw new Error("Array.last: array is not empty but no item matched!");
    }

    return this[0];
}
