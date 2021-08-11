declare global {
    interface Array<T> {
        aggregate: Array<T>["reduce"];
    }
}

export const aggregate = Array.prototype.reduce;
