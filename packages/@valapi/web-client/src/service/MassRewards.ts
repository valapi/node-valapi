import type { ValAxios } from "@valapi/lib";

import { WebClientService } from "../client/WebClientService";

export namespace MassRewards {
    // response

    export interface PlayerReconcile {
        Version: number;
        Subject: string;
        Ceremonies: Array<{
            Type: string;
            SourceID: string;
            Rewards: Array<{
                Type: string;
                ItemTypeID: string;
                ItemID: string;
                Count: number;
                CurrencyID: string;
                CurrencyCount: number;
                ContractID: string;
                XPAmount: number;
            }>;
        }>;
    }
}

export class MassRewards extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<MassRewards.PlayerReconcile>>}
     */
    public async reconcilePlayer(subject: string): Promise<ValAxios.Response<MassRewards.PlayerReconcile>> {
        return await this.axios.post(`${this.apiRegion.url.playerData}/mass-rewards/v1/players/${subject}/reconcile`);
    }
}
