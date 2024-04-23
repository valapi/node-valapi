import type { AxiosResponse } from "axios";

import { RiotApiService } from "../client/RiotApiService";

export namespace AccountV1 {
    export interface AccountDto {
        puuid: string;
        /**
         * This field may be excluded from the response if the account doesn't have a gameName.
         */
        gameName?: string;
        /**
         * This field may be excluded from the response if the account doesn't have a tagLine.
         */
        tagLine?: string;

        [key: string]: any;
    }

    export interface ActiveShardDto {
        puuid: string;
        game: "val" | "lor";
        activeShard: string;
    }
}

export class AccountV1 extends RiotApiService {
    /**
     * Get account by puuid
     */
    public byPuuid(puuid: string): Promise<AxiosResponse<AccountV1.AccountDto>> {
        return this.request.get(`${this.regionURL.url.continent}/riot/account/v1/accounts/by-puuid/${puuid}`);
    }

    /**
     * Get account by riot id
     */
    public byRiotId(gameName: string, tagLine: string): Promise<AxiosResponse<AccountV1.AccountDto>> {
        return this.request.get(`${this.regionURL.url.continent}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
    }

    /**
     * Get active shard for a player
     */
    public activeShardsByGameAndPuuid(puuid: string): Promise<AxiosResponse<AccountV1.ActiveShardDto>> {
        return this.request.get(`${this.regionURL.url.continent}/riot/account/v1/active-shards/by-game/val/by-puuid/${puuid}`);
    }

    /**
     * ! This API service is required your project to be registered by Riot Games.
     *
     * Get account by access token
     * @param authorization (Header Parameters)
     */
    public byAccessToken(authorization: string): Promise<AxiosResponse<AccountV1.AccountDto>> {
        return this.request.get(`${this.regionURL.url.continent}/riot/account/v1/accounts/me`, {
            headers: {
                Authorization: authorization
            }
        });
    }
}
