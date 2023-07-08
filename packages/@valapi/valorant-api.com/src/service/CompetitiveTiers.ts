import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace CompetitiveTiers {
    export interface CompetitiveTiers {
        uuid: string;
        assetObjectName: string;
        tiers: Array<{
            tier: number;
            tierName: ValorantApiCom.Response.Languages<string>; // localized
            division: string;
            divisionName: ValorantApiCom.Response.Languages<string>; // localized
            color: string;
            backgroundColor: string;
            smallIcon: string;
            largeIcon: string;
            rankTriangleDownIcon: string;
            rankTriangleUpIcon: string;
        }>;
        assetPath: string;
    }
}

export class CompetitiveTiers extends ValorantApiComService {
    public get(): Promise<ValorantApiCom.Response.Data<CompetitiveTiers.CompetitiveTiers[]>> {
        return this.axios.get("/competitivetiers");
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<CompetitiveTiers.CompetitiveTiers>> {
        return this.axios.get(`/competitivetiers/${uuid}`);
    }
}
