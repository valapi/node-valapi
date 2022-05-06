import type { IAxiosClient } from "../resources/interface/IAxiosClient";
import type { IRiotLocal, IRiotLocal_JSON, IRiotLocal_Resources, IRiotLocal_Lockfile, IRiotLocal_Lockfile_Protocol, IRiotLocal_JSON_Method } from "../resources/interface/IRiotLocal";
import getLockfile from '../auth/RiotLocal/Lockfile';
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
    private lockfile;
    private ip;
    private AxiosClient;
    /**
     * @param {IRiotLocal_Lockfile} lockfile lockfile data
     * @param {String} ip IP of local api
     */
    constructor(lockfile: IRiotLocal_Lockfile, ip?: string);
    /**
     * @returns {void}
     */
    private reload;
    /**
     *
     * @param {IRiotLocal_JSON} data Data from LocalResourse
     * @param {Array<string>} args Insert more data to request
     * @returns {Promise<IAxiosClient>}
     */
    requestFromJSON(data?: IRiotLocal_JSON, ...args: Array<string>): Promise<IAxiosClient>;
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {Object} body Request Body
     * @returns {Promise<IAxiosClient>}
     */
    request(method?: IRiotLocal_JSON_Method, endpoint?: string, body?: {}): Promise<IAxiosClient>;
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
     * @param {String} name Name
     * @returns {void}
     */
    setLockfileName(name?: string): void;
    /**
     * @param {Number} pid Process ID
     * @returns {void}
     */
    setLockfilePid(pid: number): void;
    /**
     * @param {Number} port Port
     * @returns {void}
     */
    setLockfilePort(port: number): void;
    /**
     * @param {String} password Password
     * @returns {void}
     */
    setLockfilePassword(password: string): void;
    /**
     * @param {String} protocol Http or Https
     * @returns {void}
     */
    setLockfileProtocol(protocol: IRiotLocal_Lockfile_Protocol): void;
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {Object} body Request Body
     * @returns {Promise<IAxiosClient>}
     */
    static request(method?: IRiotLocal_JSON_Method, endpoint?: string, body?: object): Promise<IAxiosClient>;
    /**
     *
     * @param {IRiotLocal_JSON} data Data from LocalResourse
     * @param {Array<string>} args Insert more data to request
     * @returns {Promise<IAxiosClient>}
     */
    static requestFromJSON(data?: IRiotLocal_JSON, ...args: Array<string>): Promise<IAxiosClient>;
    /**
     *
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {RiotLocal}
     */
    static fromJSON(data?: IRiotLocal): RiotLocal;
    static Auth: {
        lockfile: typeof getLockfile;
    };
    static Resource: IRiotLocal_Resources;
}
export { RiotLocal };
//# sourceMappingURL=RiotLocal.d.ts.map