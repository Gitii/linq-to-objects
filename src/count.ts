declare global {
    interface Array<T> {
        count(predicate?: (item: T, index: number) => boolean): number;
    }
}

export function count<T>(this: T[], predicate: ((item: T, index: number) => boolean) | undefined = () => true): number {
    let nb = 0;
    const len = this.length;
    for (let i = 0; i < len; i++) {
        if (predicate(this[i], i)) {
            nb++;
        }
    }
    return nb;
}
