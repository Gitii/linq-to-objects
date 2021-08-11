declare global {
    interface Array<T> {
        minBy(selector: (item: T) => number): T;
    }
}

export function minBy<T>(this: T[], selector: (item: T) => number): T | undefined {
    if (this.length === 0) {
        return undefined;
    }

    const minValues = this.map((v) => selector(v));
    const min = minValues.min((v) => v);
    const index = minValues.indexOf(min);
    if (index >= 0) {
        return this[index];
    } else {
        throw new Error("Array.minBy: minimum value could not be found!");
    }
}
