import type { AxiosResponse } from "axios";

import { WebClientService } from "../client/WebClientService";

export namespace DailyTicket {
    // response

    export interface DailyTicket {
        Version: number;
        DailyRewards: {
            RemainingLifetimeSeconds: number;
            BonusMilestonesPending: number;
            Milestones: Array<{
                Progress: number;
                BonusApplied: boolean;
            }>;
        };
        ProcessedMatches: Array<{
            ID: string;
            ProgressBefore: number;
            ProgressAfter: number;
            XP: number;
            SoftCurrency: number;
            WasPenalized: boolean;
            BonusesApplied: number;
            DailyBonusState: [boolean, boolean, boolean, boolean];
            RewardGrants: any; // * unknown
        }>;
    }
}

export class DailyTicket extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<DailyTicket.DailyTicket>>}
     */
    public get(subject: string): Promise<AxiosResponse<DailyTicket.DailyTicket>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/daily-ticket/v1/${subject}`);
    }

    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<DailyTicket.DailyTicket>>}
     */
    public renew(subject: string): Promise<AxiosResponse<DailyTicket.DailyTicket>> {
        return this.axios.post(`${this.apiRegion.url.playerData}/daily-ticket/v1/${subject}/renew`);
    }
}
