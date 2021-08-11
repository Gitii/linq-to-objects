declare global {
    interface Array<T> {
        maxBy(selector: (item: T) => number): T;
    }
}

export function maxBy<T>(this: T[], selector: (item: T) => number): T | undefined {
    if (this.length === 0) {
        return undefined;
    }

    const maxValues = this.map((v) => selector(v));
    const max = maxValues.max((v) => v);
    const index = maxValues.indexOf(max);
    if (index >= 0) {
        return this[index];
    } else {
        throw new Error("Array.maxBy: maximum value could not be found!");
    }
}
