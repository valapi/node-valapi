export = ContentV1;
declare class ContentV1 {
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
     * @param {String} locale Locale
     * @example locale = 'en-US' && 'th-TH'
     */
    Contents(locale?: string): Promise<any>;
}
//# sourceMappingURL=ContentV1.d.ts.map