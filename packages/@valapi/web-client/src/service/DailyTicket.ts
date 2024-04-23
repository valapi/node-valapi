import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace DailyTicket {
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
        }>;
    }
}

export class DailyTicket extends WebClientService {
    public get(subject: string): PromiseResponse<DailyTicket.DailyTicket> {
        return this.request.get(`${this.regionURL.url.playerData}/daily-ticket/v1/${subject}`);
    }

    public renew(subject: string): PromiseResponse<DailyTicket.DailyTicket> {
        return this.request.post(`${this.regionURL.url.playerData}/daily-ticket/v1/${subject}/renew`);
    }
}
