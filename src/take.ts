declare global {
    interface Array<T> {
        take(numberOfItems: number): T[];
    }
}

export function take<T>(this: T[], num: number): T[] {
    if (num <= 0) {
        return [];
    }
    return this.slice(0, num);
}

Array.prototype.take = take;
