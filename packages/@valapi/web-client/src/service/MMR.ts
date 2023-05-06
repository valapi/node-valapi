import type { ValAxios, QueueId } from "@valapi/lib";

import { WebClientService } from "../client/WebClientService";

export namespace MMR {
    // response

    export interface PlayerSeasonalInfo {
        SeasonID: string;
        NumberOfWins: number;
        NumberOfWinsWithPlacements: number;
        NumberOfGames: number;
        Rank: number;
        CapstoneWins: number;
        LeaderboardRank: number;
        CompetitiveTier: number;
        RankedRating: number;
        WinsByTier: Record<`${number}`, number>;
        GamesNeededForRating: number;
        TotalWinsNeededForRank: number;
    }

    export interface QueueSkill {
        TotalGamesNeededForRating: number;
        TotalGamesNeededForLeaderboard: number;
        CurrentSeasonGamesNeededForRating: number;
        SeasonalInfoBySeasonID: Record<string, MMR.PlayerSeasonalInfo>;
    }

    export interface Player {
        Version: number;
        Subject: string;
        NewPlayerExperienceFinished: boolean;
        QueueSkills: Record<QueueId.Identify | "seeding", MMR.QueueSkill>;
        LatestCompetitiveUpdate: {
            MatchID: string;
            MapID: string;
            SeasonID: string;
            MatchStartTime: number;
            TierAfterUpdate: number;
            TierBeforeUpdate: number;
            RankedRatingAfterUpdate: number;
            RankedRatingBeforeUpdate: number;
            RankedRatingEarned: number;
            RankedRatingPerformanceBonus: number;
            CompetitiveMovement: string;
            AFKPenalty: number;
        };
        IsLeaderboardAnonymized: boolean;
        IsActRankBadgeHidden: boolean;
    }

    export interface Leaderboard {
        Deployment: string;
        QueueID: string;
        SeasonID: string;
        Players: Array<{
            PlayerCardID: string;
            TitleID: string;
            IsBanned: boolean;
            IsAnonymized: boolean;
            puuid: string;
            gameName: string;
            tagLine: string;
            leaderboardRank: number;
            rankedRating: number;
            numberOfWins: number;
            competitiveTier: number;
        }>;
        totalPlayers: number;
        immortalStartingPage: number;
        immortalStartingIndex: number;
        topTierRRThreshold: number;
        tierDetails: Record<
            `${number}`,
            {
                rankedRatingThreshold: number;
                startingPage: number;
                startingIndex: number;
            }
        >;
        startIndex: number;
        query: string;
    }

    export interface CompetitiveUpdates {
        Version: number;
        Subject: string;
        Matches: Array<{
            MatchID: string;
            MapID: string;
            SeasonID: string;
            MatchStartTime: number;
            TierAfterUpdate: number;
            TierBeforeUpdate: number;
            RankedRatingAfterUpdate: number;
            RankedRatingBeforeUpdate: number;
            RankedRatingEarned: number;
            RankedRatingPerformanceBonus: number;
            CompetitiveMovement: string;
            AFKPenalty: number;
        }>;
    }
}

/**
 * Match Making Rating
 */
export class MMR extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<MMR.Player>>}
     */
    public async fetchPlayer(subject: string): Promise<ValAxios.Response<MMR.Player>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/mmr/v1/players/${subject}`);
    }

    /**
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async hideActRankBadge(subject: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.playerData}/mmr/v1/players/${subject}/hideactrankbadge`);
    }

    /**
     * @param {string} seasonId Season ID
     * @param {number} startIndex Start Index (default: 0)
     * @param {number} size Size (default: 510)
     * @param {string} serachUsername Search Username
     * @returns {Promise<ValAxios.Response<MMR.Leaderboard>>}
     */
    public async fetchLeaderboard(seasonId: string, startIndex = 0, size = 510, serachUsername?: string): Promise<ValAxios.Response<MMR.Leaderboard>> {
        let _url = `${this.apiRegion.url.playerData}/mmr/v1/leaderboards/affinity/${this.apiRegion.id}/queue/competitive/season/${seasonId}?startIndex=${startIndex}&size=${size}`;

        if (serachUsername) {
            _url += `&query=${serachUsername}`;
        }

        return await this.axios.get(_url);
    }

    /**
     * @param {string} subject Player UUID
     * @param {QueueId.Identify} queueId Queue
     * @param {number} startIndex Start Index (default: 0)
     * @param {number} endIndex End Index (default: 10)
     * @returns {Promise<ValAxios.Response<MMR.CompetitiveUpdates>>}
     */
    public async fetchCompetitiveUpdates(subject: string, queueId?: QueueId.Identify, startIndex = 0, endIndex = 10): Promise<ValAxios.Response<MMR.CompetitiveUpdates>> {
        let _url = `${this.apiRegion.url.playerData}/mmr/v1/players/${subject}/competitiveupdates?startIndex=${startIndex}&endIndex=${endIndex}`;

        if (queueId) {
            _url += `&queue=${queueId}`;
        }

        return await this.axios.get(_url);
    }
}
