import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace MassRewards {
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
    public reconcilePlayer(subject: string): PromiseResponse<MassRewards.PlayerReconcile> {
        return this.request.post(`${this.regionURL.url.playerData}/mass-rewards/v1/players/${subject}/reconcile`);
    }
}
