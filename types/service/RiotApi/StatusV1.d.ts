export = StatusV1;
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
     *
     */
    PlatformData(): Promise<any>;
}
//# sourceMappingURL=StatusV1.d.ts.map