import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace AccountXP {
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
    public getPlayer(subject: string): PromiseResponse<AccountXP.Player> {
        return this.request.get(`${this.regionURL.url.playerData}/account-xp/v1/players/${subject}`);
    }
}
