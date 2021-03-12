declare global {
    interface Array<T> {
        skipWhile(predicate: (item: T, index: number) => boolean): T[];
    }
}

export function skipWhile<T>(this: T[], predicate: (item: T, index: number) => boolean): T[] {
    return this.slice(this.whileIndex(predicate), this.length);
}

Array.prototype.skipWhile = skipWhile;
