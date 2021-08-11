declare global {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Array<T> {
        clear(): this;
    }
}

export function clear<T>(this: T[]): T[] {
    this.length = 0;
    return this;
}
