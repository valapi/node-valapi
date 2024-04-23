import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Restrictions {
    export interface Player {
        Subject: string;
        Penalties: Array<{
            ID: string;
            IssuingGameStartUnixMillis: number;
            Expiry: Date;
            GamesRemaining: number;
            ApplyToAllPlatforms: boolean;
            ApplyToPlatforms: Array<string>;
            ForgivenessIneligible: boolean;
            DelayedPenaltyEffect: any; // * unknown
            GameBanEffect: any; // * unknown
            QueueDelayEffect: {
                DurationSeconds: number;
                StartTime: Date;
            };
            QueueRestrictionEffect: any; // * unknown
            RankedRatingPenaltyEffect: any; // * unknown
            RiotRestrictionEffect: any; // * unknown
            RMSNotifyEffect: any; // * unknown
            WarningEffect: {
                WarningType: string;
                WarningTier: number;
            };
            XPMultiplierEffect: any; // * unknown
        }>;
        Version: number;
    }

    export interface ReportToken {
        Token: string;
    }
}

export class Restrictions extends WebClientService {
    public fetchPlayerReportToken(matchId: string, offenderSubject: string): PromiseResponse<Restrictions.ReportToken> {
        return this.request.get(`${this.regionURL.url.playerData}/restrictions/v1/playerReportToken/${matchId}/${offenderSubject}`);
    }

    public fetchPlayerRestrictions(): PromiseResponse<Restrictions.Player> {
        return this.request.get(`${this.regionURL.url.playerData}/restrictions/v3/penalties`);
    }
}
