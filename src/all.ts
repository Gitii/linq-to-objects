declare global {
    interface Array<T> {
        all: Array<T>["every"];
    }
}

export const all: unknown = Array.prototype.every;
