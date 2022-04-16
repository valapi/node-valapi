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
    AxiosClient: any;
    /**
     *
     * @param {String} locale Locale
     * @example locale = 'en-US' && 'th-TH'
     * @returns {AxiosClientOut}
     */
    Contents(locale?: string): AxiosClientOut;
}
//# sourceMappingURL=ContentV1.d.ts.map