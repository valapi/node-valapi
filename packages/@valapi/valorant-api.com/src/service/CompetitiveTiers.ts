import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace CompetitiveTiers {
    export interface CompetitiveTiers<L extends Language> {
        uuid: string;
        assetObjectName: string;
        tiers: Array<{
            tier: number;
            tierName: LanguageResponse<string, L>;
            division: string;
            divisionName: LanguageResponse<string, L>;
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

export class CompetitiveTiers<L extends Language = any> extends ValorantApiComService {
    public get(): Response<CompetitiveTiers.CompetitiveTiers<L>[]> {
        return this.request.get("/competitivetiers");
    }

    public getByUuid(uuid: string): Response<CompetitiveTiers.CompetitiveTiers<L>> {
        return this.request.get(`/competitivetiers/${uuid}`);
    }
}
