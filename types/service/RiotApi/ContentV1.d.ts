export = ContentV1;
/**
 * * Class ID: @ing3kth/val-api/RiotApi/ContentV1
 */
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
     * @returns {AxiosClientOut}
     */
    Contents(locale?: string): {
        isError: BooleanConstructor;
        data: ObjectConstructor;
    };
}
//# sourceMappingURL=ContentV1.d.ts.map