declare global {
    interface Array<T> {
        takeWhile(predicate: (item: T, index: number) => boolean): T[];
    }
}

export function takeWhile<T>(this: T[], predicate: (item: T, index: number) => boolean): T[] {
    return this.slice(0, this.whileIndex(predicate));
}

Array.prototype.takeWhile = takeWhile;
