declare global {
    interface Array<T> {
        sum(selector: (item: T) => number): number;
    }
}

export function sum<T>(this: T[], selector: (item: T) => number): number {
    if (this.length === 0) {
        return 0;
    }

    return this.reduce((x, y) => x + selector(y), 0);
}
