export = Client;
declare class Client {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: any;
    lockfile: any;
    baseUrl: string;
    /**
     */
    help(): Promise<any>;
    /**
     */
    FetchSessions(): Promise<any>;
    /**
     */
    GetSettings(): Promise<any>;
}
//# sourceMappingURL=Client.d.ts.map