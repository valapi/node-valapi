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
     * @param {string} puuid Player UUID
     * @returns {Promise<AxiosResponse<AccountV1.AccountDto>>}
     */
    public byPuuid(puuid: string): Promise<AxiosResponse<AccountV1.AccountDto>> {
        return this.axios.get(`${this.apiRegion.url.continent}/riot/account/v1/accounts/by-puuid/${puuid}`);
    }

    /**
     * Get account by riot id
     * @param {string} gameName In-Game Name
     * @param {string} tagLine In-Game Tag
     * @returns {Promise<AxiosResponse<AccountV1.AccountDto>>}
     */
    public byRiotId(gameName: string, tagLine: string): Promise<AxiosResponse<AccountV1.AccountDto>> {
        return this.axios.get(`${this.apiRegion.url.continent}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
    }

    /**
     * Get active shard for a player
     * @param {string} puuid Player UUID
     * @returns {Promise<AxiosResponse<AccountV1.ActiveShardDto>>}
     */
    public activeShardsByGameAndPuuid(puuid: string): Promise<AxiosResponse<AccountV1.ActiveShardDto>> {
        return this.axios.get(`${this.apiRegion.url.continent}/riot/account/v1/active-shards/by-game/val/by-puuid/${puuid}`);
    }

    /**
     * ! This API service is required your project to be registered by Riot Games.
     *
     * Get account by access token
     * @param {string} authorization (Header Parameters)
     * @returns {Promise<AxiosResponse<AccountV1.AccountDto>>}
     */
    public byAccessToken(authorization: string): Promise<AxiosResponse<AccountV1.AccountDto>> {
        return this.axios.get(`${this.apiRegion.url.continent}/riot/account/v1/accounts/me`, {
            headers: {
                Authorization: authorization
            }
        });
    }
}
