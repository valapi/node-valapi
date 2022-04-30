import type { IAxiosClient_Out } from '@ing3kth/core/dist/interface/IAxiosClient';
import type { IRiotLocal, IRiotLocal_JSON, IRiotLocal_Resources, IRiotLocal_Lockfile, IRiotLocal_Lockfile_Protocol, IRiotLocal_JSON_Method } from "../resources/interface/IRiotLocal";
import { AxiosClient } from '@ing3kth/core/dist/core/AxiosClient';
/**
 * All Api Base On https://github.com/techchrism/valorant-api-docs
 *
 * Because I'm lazy to write all api endpoint
 *
 * * Class ID: @ing3kth/val-api/RiotLocal
 * * Use Anywhere: false
 */
declare class RiotLocal {
    classId: string;
    lockfile: IRiotLocal_Lockfile;
    ip: string;
    AxiosClient: AxiosClient;
    baseUrl: string | undefined;
    resourse: IRiotLocal_Resources | undefined;
    /**
     *
     * @param {String} ip IP of local api
     * @param {IRiotLocal_Lockfile} lockfile lockfile data
     */
    constructor(ip?: string, lockfile?: IRiotLocal_Lockfile);
    /**
     *
     * @returns {IRiotLocal_Resources}
     */
    getResource(): IRiotLocal_Resources;
    /**
     * @returns {void}
     */
    reload(): void;
    /**
     * @param {String} path path to lockfile
     * @returns {IRiotLocalLockfile}
     */
    getlockfile(path?: string): IRiotLocal_Lockfile;
    /**
     *
     * @param {IRiotLocal_JSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     * @returns {Promise<IAxiosClient_Out>}
     */
    requestFromJSON(data?: IRiotLocal_JSON): Promise<IAxiosClient_Out>;
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {Object} body Request Body
     * @returns {Promise<IAxiosClient_Out>}
     */
    request(method?: IRiotLocal_JSON_Method, endpoint?: string, body?: {}): Promise<IAxiosClient_Out>;
    /**
     *
     * @returns {IRiotLocal}
     */
    toJSON(): IRiotLocal;
    /**
     *
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {void}
     */
    fromJSON(data: IRiotLocal): void;
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
    setLockfileProtocol(protocol: IRiotLocal_Lockfile_Protocol): void;
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {Object} body Request Body
     * @returns {Promise<IAxiosClient_Out>}
     */
    static request(method?: IRiotLocal_JSON_Method, endpoint?: string, body?: object): Promise<IAxiosClient_Out>;
    /**
     *
     * @param {IRiotLocal_JSON} data Data from LocalResourse
     * @param {any} args.. Replace Data With Arguments
     * @returns {Promise<IAxiosClient_Out>}
     */
    static requestFromJSON(data?: IRiotLocal_JSON): Promise<IAxiosClient_Out>;
    /**
     *
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {RiotLocal}
     */
    static fromJSON(data?: IRiotLocal): RiotLocal;
    /**
     *
     * @returns {IRiotLocal_Resources}
     */
    static getResource(): IRiotLocal_Resources;
    static Resource: IRiotLocal_Resources;
}
export { RiotLocal };
//# sourceMappingURL=RiotLocal.d.ts.map