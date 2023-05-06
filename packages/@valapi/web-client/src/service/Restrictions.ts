import type { ValAxios } from "@valapi/lib";

import { WebClientService } from "../client/WebClientService";

export namespace Restrictions {
    // response

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
    /**
     * @param {string} matchId Match ID
     * @param {string} offenderSubject PlayerUUID (offender)
     * @returns {Promise<ValAxios.Response<Restrictions.ReportToken>>}
     */
    public async fetchPlayerReportToken(matchId: string, offenderSubject: string): Promise<ValAxios.Response<Restrictions.ReportToken>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/restrictions/v1/playerReportToken/${matchId}/${offenderSubject}`);
    }

    /**
     *
     * @returns {Promise<ValAxios.Response<Restrictions.Player>>}
     */
    public async fetchPlayerRestrictions(): Promise<ValAxios.Response<Restrictions.Player>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/restrictions/v3/penalties`);
    }
}
