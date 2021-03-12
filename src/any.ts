declare global {
    interface Array<T> {
        any: Array<T>["some"];
    }
}

export const any = Array.prototype.some;

Array.prototype.any = Array.prototype.some;
