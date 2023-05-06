import type { ValAxios } from "@valapi/lib";

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
     * @returns {Promise<ValAxios.Response<AccountV1.AccountDto>>}
     */
    public async byPuuid(puuid: string): Promise<ValAxios.Response<AccountV1.AccountDto>> {
        return await this.axios.get(`${this.apiRegion.url.api}/riot/account/v1/accounts/by-puuid/${puuid}`);
    }

    /**
     * Get account by riot id
     * @param {string} gameName In-Game Name
     * @param {string} tagLine In-Game Tag
     * @returns {Promise<ValAxios.Response<AccountV1.AccountDto>>}
     */
    public async byRiotId(gameName: string, tagLine: string): Promise<ValAxios.Response<AccountV1.AccountDto>> {
        return await this.axios.get(`${this.apiRegion.url.api}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
    }

    /**
     * Get active shard for a player
     * @param {string} puuid Player UUID
     * @param {string} game Game (default: val)
     * @returns {Promise<ValAxios.Response<AccountV1.ActiveShardDto>>}
     */
    public async activeShardsByGameAndPuuid(puuid: string, game: "val" | "lor" = "val"): Promise<ValAxios.Response<AccountV1.ActiveShardDto>> {
        return await this.axios.get(`${this.apiRegion.url.api}/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}`);
    }

    /**
     * ! Not For Public Use
     *
     * Get account by access token
     * @param {string} authorization (Header Parameters)
     * @returns {Promise<ValAxios.Response<AccountV1.AccountDto>>}
     */
    public async byAccessToken(authorization: string): Promise<ValAxios.Response<AccountV1.AccountDto>> {
        return await this.axios.get(`${this.apiRegion.url.api}/riot/account/v1/accounts/me`, {
            headers: {
                Authorization: authorization
            }
        });
    }
}
