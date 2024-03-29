import type { AxiosResponse } from "axios";

import { RiotApiService } from "../client/RiotApiService";

export namespace RankedV1 {
    export interface PlayerDto {
        /**
         * This field may be omitted if the player has been anonymized.
         */
        puuid?: string;
        /**
         * This field may be omitted if the player has been anonymized.
         */
        gameName?: string;
        /**
         * This field may be omitted if the player has been anonymized.
         */
        tagLine?: string;
        leaderboardRank: number;
        rankedRating: number;
        numberOfWins: number;

        [key: string]: any;
    }

    export interface LeaderboardDto {
        /**
         * The shard for the given leaderboard.
         */
        shard: string;
        /**
         * The act id for the given leaderboard. Act ids can be found using the val-content API.
         */
        actId: string;
        /**
         * The total number of players in the leaderboard.
         */
        totalPlayers: number;
        players: Array<RankedV1.PlayerDto>;

        [key: string]: any;
    }
}

export class RankedV1 extends RiotApiService {
    /**
     * Get leaderboard for the competitive queue
     * @param {string} actId Act ID
     * @param {number} size Size (default: 200)
     * @param {number} startIndex Start Index (default: 0)
     * @returns {Promise<AxiosResponse<RankedV1.LeaderboardDto>>}
     */
    public leaderboardsByAct(actId: string, size = 200, startIndex = 0): Promise<AxiosResponse<RankedV1.LeaderboardDto>> {
        return this.axios.get(`${this.apiRegion.url.server}/val/ranked/v1/leaderboards/by-act/${actId}?size=${size}&startIndex=${startIndex}`);
    }
}
