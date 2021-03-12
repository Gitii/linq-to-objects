declare global {
    interface Array<T> {
        whileIndex(predicate: (item: T, index: number) => boolean): number;
    }
}

export function whileIndex<T>(this: T[], predicate: (item: T, index: number) => boolean): number {
    const len = this.length;
    for (let i = 0; i < len; i++) {
        if (!predicate.apply(this[i], [this[i], i])) {
            return i;
        }
    }
    return len - 1;
}

Array.prototype.whileIndex = whileIndex;
