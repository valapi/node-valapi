import type { AxiosResponse } from "axios";

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
     * @returns {Promise<AxiosResponse<MassRewards.PlayerReconcile>>}
     */
    public async reconcilePlayer(subject: string): Promise<AxiosResponse<MassRewards.PlayerReconcile>> {
        return await this.axios.post(`${this.apiRegion.url.playerData}/mass-rewards/v1/players/${subject}/reconcile`);
    }
}
