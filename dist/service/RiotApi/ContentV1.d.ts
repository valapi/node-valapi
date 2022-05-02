import { AxiosClient } from "@ing3kth/core/dist/core/AxiosClient";
import type { IRiotApi_Service } from "../../resources/interface/IRiotApi";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";
import _Locale from "../../resources/data/Locale";
/**
 * * Class ID: @ing3kth/val-api/RiotApi/ContentV1
 */
declare class ContentV1 {
    classId: string;
    apiKey: string;
    region: IValRegion;
    AxiosClient: AxiosClient;
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: IRiotApi_Service);
    /**
     *
     * @param {String} locale Locale
     * @returns {Promise<IAxiosClient_Out>}
     */
    Contents(locale?: keyof typeof _Locale.data): Promise<IAxiosClient_Out>;
}
export { ContentV1 };
//# sourceMappingURL=ContentV1.d.ts.map