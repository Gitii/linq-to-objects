declare global {
    interface Array<T> {
        min(selector: (item: T) => number): number;
    }
}

export function min<T>(this: T[], selector: (item: T) => number): number {
    if (this.length === 0) {
        return 0;
    }
    return this.reduce(function (a, b) {
        return Math.min(a, selector(b));
    }, 0);
}
