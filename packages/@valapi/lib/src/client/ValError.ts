export class ValError<T = any> extends Error {
    public readonly data: T;

    public constructor(data: ValError) {
        super(data.message);

        this.data = data.data;
    }

    public static parse<T>(error: Error): ValError<T> {
        return new ValError({
            name: error.name,
            message: error.message,
            stack: error.stack,
            data: undefined
        });
    }
}
