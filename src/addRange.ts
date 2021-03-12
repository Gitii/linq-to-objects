declare global {
    interface Array<T> {
        addRange(array: T[]): this;
    }
}

export function addRange<T>(this: T[], array: T[]): T[] {
    for (const it of array) {
        this.push(it);
    }

    return this;
}
