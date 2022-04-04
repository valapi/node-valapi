export = StatusV1;
declare class StatusV1 {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    apiKey: any;
    region: any;
    AxiosClient: any;
    /**
     *
     */
    PlatformData(): Promise<any>;
}
//# sourceMappingURL=StatusV1.d.ts.map