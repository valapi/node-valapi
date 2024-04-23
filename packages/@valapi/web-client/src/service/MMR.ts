import type { QueueId } from "@valapi/lib";
import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace MMR {
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
        QueueSkills: Record<QueueId.ID | "seeding", MMR.QueueSkill>;
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
    public getPlayer(subject: string): PromiseResponse<MMR.Player> {
        return this.request.get(`${this.regionURL.url.playerData}/mmr/v1/players/${subject}`);
    }

    public hideActRankBadge(subject: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.playerData}/mmr/v1/players/${subject}/hideactrankbadge`);
    }

    /**
     * @param startIndex (default: 0)
     * @param size (default: 510)
     */
    public getLeaderboard(seasonId: string, startIndex: number = 0, size: number = 510, serachUsername?: string): PromiseResponse<MMR.Leaderboard> {
        let _url = `${this.regionURL.url.playerData}/mmr/v1/leaderboards/affinity/${this.regionURL.id}/queue/competitive/season/${seasonId}?startIndex=${startIndex}&size=${size}`;

        if (serachUsername) {
            _url += `&query=${serachUsername}`;
        }

        return this.request.get(_url);
    }

    /**
     * @param startIndex (default: 0)
     * @param endIndex (default: 10)
     */
    public getCompetitiveUpdates(subject: string, queueId?: QueueId.ID, startIndex: number = 0, endIndex: number = 10): PromiseResponse<MMR.CompetitiveUpdates> {
        let _url = `${this.regionURL.url.playerData}/mmr/v1/players/${subject}/competitiveupdates?startIndex=${startIndex}&endIndex=${endIndex}`;

        if (queueId) {
            _url += `&queue=${queueId}`;
        }

        return this.request.get(_url);
    }
}
