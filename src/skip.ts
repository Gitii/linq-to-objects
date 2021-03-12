declare global {
    interface Array<T> {
        skip(numberOfItems: number): T[];
    }
}

export function skip<T>(this: T[], num: number): T[] {
    return this.slice(num || 1, this.length);
}

Array.prototype.skip = skip;
