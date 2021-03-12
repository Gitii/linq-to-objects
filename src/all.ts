declare global {
    interface Array<T> {
        all: Array<T>["every"];
    }
}

export const all = Array.prototype.every;

Array.prototype.all = Array.prototype.every;
