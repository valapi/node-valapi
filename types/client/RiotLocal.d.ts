export = RiotLocal;
declare class RiotLocal {
    constructor(ip?: string, lockfile?: {
        name: null;
        pid: null;
        port: null;
        password: null;
        protocol: null;
    });
    classId: string;
    lockfile: {
        name: null;
        pid: null;
        port: null;
        password: null;
        protocol: null;
    };
    ip: string;
    reload(): Promise<void>;
    AxiosData: {
        cookie: boolean;
        jar: null;
        headers: {
            Authorization: string;
        };
    } | undefined;
    services: {
        ip: string;
        AxiosData: {
            cookie: boolean;
            jar: null;
            headers: {
                Authorization: string;
            };
        };
        lockfile: {
            name: null;
            pid: null;
            port: null;
            password: null;
            protocol: null;
        };
    } | undefined;
    Client: Client | undefined;
    getlockfile(path?: any): Promise<{
        name: any;
        pid: any;
        port: any;
        password: any;
        protocol: any;
    } | undefined>;
    help(): Promise<any>;
}
import Client = require("../service/RiotLocal/Client");
//# sourceMappingURL=RiotLocal.d.ts.map