import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Contracts {
    export interface Contracts<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        displayIcon: string;
        shipIt: boolean;
        useLevelVPCostOverride: boolean;
        levelVPCostOverride: number;
        freeRewardScheduleUuid: string;
        content: {
            relationType: string;
            relationUuid: string;
            chapters: Array<{
                isEpilogue: boolean;
                levels: Array<{
                    reward: {
                        type: string;
                        uuid: string;
                        amount: number;
                        isHighlighted: boolean;
                    };
                    xp: number;
                    vpCost: number;
                    isPurchasableWithVP: boolean;
                    doughCost: number;
                    isPurchasableWithDough: boolean;
                }>;
                freeRewards: Array<{
                    type: string;
                    uuid: string;
                    amount: number;
                    isHighlighted: boolean;
                }>;
            }>;
            premiumRewardScheduleUuid: string;
            premiumVPCost: number;
        };
        assetPath: string;
    }
}

export class Contracts<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Contracts.Contracts<L>[]> {
        return this.request.get(`/v1/contracts`);
    }

    public getByUuid(uuid: string): Response<Contracts.Contracts<L>> {
        return this.request.get(`/v1/contracts/${uuid}`);
    }
}
