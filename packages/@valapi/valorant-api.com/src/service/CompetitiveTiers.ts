import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace CompetitiveTiers {
    export interface CompetitiveTiers<L extends ValorantApiCom.Language> {
        uuid: string;
        assetObjectName: string;
        tiers: Array<{
            tier: number;
            tierName: ValorantApiComService.Languages<string, L>;
            division: string;
            divisionName: ValorantApiComService.Languages<string, L>;
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

export class CompetitiveTiers<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<CompetitiveTiers.CompetitiveTiers<L>[]>> {
        return this.axios.get("/competitivetiers");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<CompetitiveTiers.CompetitiveTiers<L>>> {
        return this.axios.get(`/competitivetiers/${uuid}`);
    }
}
