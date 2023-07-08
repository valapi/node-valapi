import type { AxiosResponse } from "axios";

import type { QueueId } from "@valapi/lib";

import { RiotApiService } from "../client/RiotApiService";

// interface
// * We are waiting for the hero: https://github.com/valapi/node-valapi/pulls

/**
 * ! This API service is required your project to be registered by Riot Games.
 */
export class MatchV1 extends RiotApiService {
    /**
     * Get match by id
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public byMatchId(matchId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.server}/val/match/v1/matches/${matchId}`);
    }

    /**
     * Get matchlist for games played by puuid
     * @param {string} puuid Player UUID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public listByPuuid(puuid: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.server}/val/match/v1/matchlists/by-puuid/${puuid}`);
    }

    /**
     * Get recent matches
     * @param {QueueId.Identify} queueId Queue ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public recentByQueue(queueId: QueueId.Identify): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.server}/val/match/v1/recent-matches/by-queue/${queueId}`);
    }
}
