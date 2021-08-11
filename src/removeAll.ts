declare global {
    interface Array<T> {
        removeAll(predicate: (item: T, index: number) => boolean): number;
    }
}

export function removeAll<T>(this: T[], predicate: (item: T, index: number) => boolean): number {
    const arr = [];
    let nb = 0;
    for (let i = 0, len = this.length; i < len; i++) {
        if (!predicate.apply(this[i], [this[i], i])) {
            arr.push(this[i]);
            nb++;
        }
    }
    this.length = 0;
    this.addRange(arr);
    return nb;
}
