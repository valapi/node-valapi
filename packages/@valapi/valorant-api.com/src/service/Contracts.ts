import type { ValorantApiCom } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";

export namespace Contracts {
    export interface Contracts {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        displayIcon: string;
        shipIt: boolean;
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

export class Contracts extends ValorantApiComService {
    public async get(): Promise<ValorantApiCom.Response.Data<Contracts.Contracts[]>> {
        return await this.axios.get("/contracts");
    }

    public async getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Contracts.Contracts>> {
        return await this.axios.get(`/contracts/${uuid}`);
    }
}
