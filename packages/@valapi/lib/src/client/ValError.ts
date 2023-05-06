/**
 * Error data structures
 */
export class ValError<T = any> extends Error {
    public readonly name: string;
    public readonly message: string;
    public readonly stack?: string;
    public readonly data: T;

    /**
     *
     * @param {ValError} data Error Data
     */
    public constructor(data: ValError) {
        super(data.message);

        this.name = data.name;
        this.message = data.message;
        this.stack = data.stack ? data.stack : this.stack;
        this.data = data.data;
    }

    /**
     * parse default javascript {@link Error error} to {@link ValError ValError}
     * @param {Error} error Error
     * @returns {ValError<T>}
     */
    public static fromError<T>(error: Error): ValError<T> {
        return new ValError({
            name: error.name,
            message: error.message,
            stack: error.stack,
            data: undefined
        });
    }
}
