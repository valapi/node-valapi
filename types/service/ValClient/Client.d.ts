export = Client;
/**
 * * Class ID: @ing3kth/val-api/ValClient/Client
 */
declare class Client {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    Region: any;
    /**
    * @param {String} puuid PlayerUUID
    * @returns {AxiosClientOut}
    */
    GetSession(puuid: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
     * @returns {AxiosClientOut}
    */
    FetchContent(): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
    /**
     * @returns {AxiosClientOut}
    */
    FetchConfig(): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=Client.d.ts.map