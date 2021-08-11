declare global {
    interface Array<T> {
        add(...rest: T[]): this;
    }
}

export function add<T>(this: T[], ...rest: T[]): T[] {
    for (let i = 0, l = rest.length; i < l; i++) {
        this.push(rest[i]);
    }
    return this;
}
