export = StatusV1;
/**
 * * Class ID: @ing3kth/val-api/RiotApi/StatusV1
 */
declare class StatusV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    apiKey: any;
    region: any;
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    /**
     * @returns {AxiosClientOut}
     */
    PlatformData(): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=StatusV1.d.ts.map