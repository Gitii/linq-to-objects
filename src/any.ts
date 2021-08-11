declare global {
    interface Array<T> {
        any: Array<T>["some"];
    }
}

export const any = Array.prototype.some;
