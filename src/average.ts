declare global {
    interface Array<T> {
        average(selector: (item: T) => number): number;
    }
}

export function average<T>(this: T[], selector: (item: T) => number): number {
    if (this.length === 0) {
        return 0;
    }

    return this.sum(selector) / this.length;
}

Array.prototype.average = average;
