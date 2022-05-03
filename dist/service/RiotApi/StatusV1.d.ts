import { AxiosClient } from "../../client/AxiosClient";
import type { IRiotApi_Service } from "../../resources/interface/IRiotApi";
import type { IValRegion } from "../../resources/interface/IValRegion";
import type { IAxiosClient } from "../../resources/interface/IAxiosClient";
/**
 * * Class ID: @ing3kth/val-api/RiotApi/StatusV1
 */
declare class StatusV1 {
    classId: string;
    apiKey: string;
    region: IValRegion;
    AxiosClient: AxiosClient;
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: IRiotApi_Service);
    /**
     * @returns {Promise<IAxiosClient>}
     */
    PlatformData(): Promise<IAxiosClient>;
}
export { StatusV1 };
//# sourceMappingURL=StatusV1.d.ts.map