import type { AxiosResponse } from "axios";

import { WebClientService } from "../client/WebClientService";

export namespace AccountXP {
    // response

    export interface Level {
        Level: number;
        XP: number;
    }

    export interface Player {
        Version: number;
        Subject: string;
        Progress: AccountXP.Level;
        History: Array<{
            ID: string;
            MatchStart: Date;
            StartProgress: AccountXP.Level;
            EndProgress: AccountXP.Level;
            XPDelta: number;
            XPSources: Array<{
                ID: string;
                Amount: number;
            }>;
            XPMultipliers: Array<{
                ID: string;
                Value: string;
            }>;
        }>;
        LastTimeGrantedFirstWin: Date;
        NextTimeFirstWinAvailable: Date;
    }
}

export class AccountXP extends WebClientService {
    /**
     * @param {string} subject PlayerUUID
     * @returns {Promise<AxiosResponse<AccountXP.Player>>}
     */
    public async getPlayer(subject: string): Promise<AxiosResponse<AccountXP.Player>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/account-xp/v1/players/${subject}`);
    }
}
