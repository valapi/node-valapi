export = Logs;
declare class Logs {
    static logSync(data: any, mode?: string, showup?: any): Promise<void>;
    /**
     *
     * @param {String} path Where to save the logs file.
     * @param {String} name Name of the logs file.
     */
    constructor(path?: string, name?: string);
    path: string;
    file: any;
    new(): Promise<void>;
    log(data: any, mode?: string, showup?: any): Promise<void>;
    get(showup?: any): Promise<any>;
}
declare namespace Logs {
    import log = Logs.logSync;
    export { log };
}
