declare global {
    interface Array<T> {
        first(predicate: (item: T, index: number) => boolean): T;
    }
}

export default function first<T>(this: T[], predicate: (item: T, index: number) => boolean): T {
    if (this.length === 0) {
        throw new Error("Array.first: array is empty!");
    }

    if (predicate) {
        const len = this.length;
        for (let i = 0; i < len; i++) {
            if (predicate.apply(this[i], [this[i], i])) {
                return this[i];
            }
        }

        throw new Error("Array.first: array is not empty but no item matched!");
    }

    return this[0];
}

Array.prototype.first = first;
