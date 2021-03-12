declare global {
    interface Array<T> {
        max(selector: (item: T) => number): number;
    }
}

export function max<T>(this: T[], selector: (item: T) => number): number {
    if (this.length === 0) {
        return 0;
    }
    return this.reduce(function (a, b) {
        return Math.max(a, selector(b));
    }, 0);
}

Array.prototype.max = max;
