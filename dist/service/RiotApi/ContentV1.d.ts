import type { IRiotApi_Service } from "../../resources/interface/IRiotApi";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
import _Locale from "../../resources/data/Locale";
/**
 * * Class ID: @ing3kth/val-api/RiotApi/ContentV1
 */
declare class ContentV1 {
    classId: string;
    private apiKey;
    private region;
    private AxiosClient;
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: IRiotApi_Service);
    /**
     *
     * @param {String} locale Locale
     * @returns {Promise<IAxiosClient>}
     */
    Contents(locale?: keyof typeof _Locale.data): Promise<IAxiosClient>;
}
export { ContentV1 };
//# sourceMappingURL=ContentV1.d.ts.map