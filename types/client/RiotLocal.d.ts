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
     * @returns {i_RiotLocalResources}
     */
    static getResource(): {
        Chat: ObjectConstructor;
        Main: ObjectConstructor;
        More: ObjectConstructor;
    };
    /**
     *
     * @param {String} ip IP of local api
     * @param {i_RiotLocalLockfile} lockfile lockfile data
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
     * @returns {i_RiotLocalResources}
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
     * @returns {i_RiotLocalLockfile}
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
     * @param {i_RiotLocalJSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     * @returns {Object}
     */
    requestFromJSON(data?: {
        method: StringConstructor;
        endpoint: StringConstructor;
        body: ObjectConstructor;
        replace: {
            name: StringConstructor;
            with: StringConstructor;
            where: StringConstructor;
        }[];
    }, ...args: any[]): Object;
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {String} body Request Body
     * @returns {Object}
     */
    request(method?: string, endpoint?: string, body?: string): Object;
    /**
     *
     * @param {String} ip IP of local api
     * @returns {void}
     */
    setIp(ip?: string): void;
}
//# sourceMappingURL=RiotLocal.d.ts.map