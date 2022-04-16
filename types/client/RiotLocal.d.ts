export = RiotLocal;
/**
 * All Api Base On https://github.com/techchrism/valorant-api-docs
 *
 * Because I'm lazy to write all api endpoint
 *
 * * Class ID: @ing3kth/val-api/RiotLocal
 * * Use Anywhere: false
 */
declare class RiotLocal {
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {String} body Request Body
     * @returns {Object}
     */
    static request(method?: string, endpoint?: string, body?: string): Object;
    /**
     *
     * @param {JSON} data Data from LocalResourse
     * @param {any} args.. Replace Data With Arguments
     * @returns {Object}
     */
    static requestFromJSON(data?: JSON): Object;
    /**
     *
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {RiotLocal}
     */
    static fromJSON(data?: {
        ip: StringConstructor;
        lockfile: {
            name: StringConstructor;
            pid: NumberConstructor;
            port: NumberConstructor;
            password: StringConstructor;
            protocol: StringConstructor;
        };
    }): RiotLocal;
    /**
     *
     * @returns {IRiotLocalResources}
     */
    static getResource(): {
        Chat: ObjectConstructor;
        Main: ObjectConstructor;
        More: ObjectConstructor;
    };
    /**
     *
     * @param {String} ip IP of local api
     * @param {IRiotLocalLockfile} lockfile lockfile data
     */
    constructor(ip?: string, lockfile?: {
        name: StringConstructor;
        pid: NumberConstructor;
        port: NumberConstructor;
        password: StringConstructor;
        protocol: StringConstructor;
    });
    classId: string;
    lockfile: {
        name: StringConstructor;
        pid: NumberConstructor;
        port: NumberConstructor;
        password: StringConstructor;
        protocol: StringConstructor;
    };
    ip: string;
    /**
     *
     * @returns {IRiotLocalResources}
     */
    getResource(): {
        Chat: ObjectConstructor;
        Main: ObjectConstructor;
        More: ObjectConstructor;
    };
    /**
     * @returns {void}
     */
    reload(): void;
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient") | undefined;
    baseUrl: string | undefined;
    resourse: {
        Chat: ObjectConstructor;
        Main: ObjectConstructor;
        More: ObjectConstructor;
    } | undefined;
    /**
     * @param {String} path path to lockfile
     * @returns {IRiotLocalLockfile}
     */
    getlockfile(path?: string): {
        name: StringConstructor;
        pid: NumberConstructor;
        port: NumberConstructor;
        password: StringConstructor;
        protocol: StringConstructor;
    };
    /**
     *
     * @param {IRiotLocalJSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     * @returns {AxiosClientOut}
     */
    requestFromJSON(data?: {
        method: StringConstructor;
        endpoint: StringConstructor;
        body: ObjectConstructor;
        replace: ArrayConstructor;
    }, ...args: any[]): AxiosClientOut;
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {String} body Request Body
     * @returns {AxiosClientOut}
     */
    request(method?: string, endpoint?: string, body?: string): AxiosClientOut;
    /**
     *
     * @returns {IRiotLocal}
     */
    toJSON(): {
        ip: StringConstructor;
        lockfile: {
            name: StringConstructor;
            pid: NumberConstructor;
            port: NumberConstructor;
            password: StringConstructor;
            protocol: StringConstructor;
        };
    };
    /**
     *
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {void}
     */
    fromJSON(data?: {
        ip: StringConstructor;
        lockfile: {
            name: StringConstructor;
            pid: NumberConstructor;
            port: NumberConstructor;
            password: StringConstructor;
            protocol: StringConstructor;
        };
    }): void;
    /**
     *
     * @param {String} ip IP of local api
     * @returns {void}
     */
    setIp(ip?: string): void;
    /**
     * @param {String} name
     * @returns {void}
     */
    setLockfileName(name?: string): void;
    /**
     * @param {Number} pid
     * @returns {void}
     */
    setLockfilePid(pid: number): void;
    /**
     * @param {Number} port
     * @returns {void}
     */
    setLockfilePort(port: number): void;
    /**
     * @param {String} password
     * @returns {void}
     */
    setLockfilePassword(password: string): void;
    /**
     * @param {String} protocol
     * @returns {void}
     */
    setLockfileProtocol(protocol?: string): void;
}
//# sourceMappingURL=RiotLocal.d.ts.map