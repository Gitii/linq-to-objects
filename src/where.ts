declare global {
    interface Array<T> {
        where: Array<T>["filter"];
    }
}

export const where = Array.prototype.filter;

Array.prototype.where = Array.prototype.filter;