import type { AxiosResponse } from "axios";

import type { QueueId } from "@valapi/lib";

import { RiotApiService } from "../client/RiotApiService";

export namespace MatchV1 {
    export interface MatchInfoDto {
        matchId: string;
        mapId: string;
        gameLengthMillis: number;
        gameStartMillis: number;
        provisioningFlowId: string;
        isCompleted: boolean;
        customGameName: string;
        queueId: string;
        gameMode: string;
        isRanked: boolean;
        seasonId: string;
    }
    
    export interface AbilityCastsDto {
        grenadeCasts: number;
        ability1Casts: number;
        ability2Casts: number;
        ultimateCasts: number;
    }
    
    export interface PlayerStatsDto {
        score: number;
        roundsPlayed: number;
        kills: number;
        deaths: number;
        assists: number;
        playtimeMillis: number;
        abilityCasts: MatchV1.AbilityCastsDto;
    }
    
    
    export interface PlayerDto {
        puuid: string;
        gameName: string;
        tagLine: string;
        teamId: string;
        partyId: string;
        characterId: string;
        stats: 	MatchV1.PlayerStatsDto;
        competitiveTier: number;
        playerCard: string;
        playerTitle: string;
    }
    
    export interface CoachDto {
        puuid: string;
        teamId: string;
    }
    
    export interface TeamDto {
        teamId: string;
        won: boolean;
        roundsPlayed: number;
        roundsWon: number;
        numPoints: number;
    }
    
    export interface LocationDto {
        x: number;
        y: number;
    }
    
    export interface PlayerLocationsDto {
        puuid: string;
        viewRadians: number;
        location: MatchV1.LocationDto;
    }
    
    export interface FinishingDamageDto {
        damageType: string;
        damageItem: string;
        isSecondaryFireMode: boolean;
    }
    
    
    export interface KillDto {
        timeSinceGameStartMillis: number;
        timeSinceRoundStartMillis: number;
        killer: string;
        victim: string;
        victimLocation: MatchV1.LocationDto;
        assistants: Array<string>;
        playerLocations: Array<MatchV1.PlayerLocationsDto>;
        finishingDamage: MatchV1.FinishingDamageDto;
    }
    
    export interface DamageDto {
        receiver: string;
        damage: number;
        legshots: number;
        bodyshots: number;
        headshots: number;
    }
    
    export interface EconomyDto {
        loadoutValue: number;
        weapon: string;
        armor: string;
        remaining: number;
        spent: number;
    }
    
    export interface AbilityDto {
        grenadeEffects: string;
        ability1Effects: string;
        ability2Effects: string;
        ultimateEffects: string;
    }
    
    export interface PlayerRoundStatsDto {
        puuid: string;
        kills: Array<MatchV1.KillDto>;
        damage: Array<MatchV1.DamageDto>;
        score: number;
        economy: MatchV1.EconomyDto;
        ability: MatchV1.AbilityDto;
    }
    
    export interface RoundResultDto {
        roundNum: number;
        roundResult: string;
        roundCeremony: string;	
        winningTeam: string;
        bombPlanter: string;
        bombDefuser: string;
        plantRoundTime: number;
        plantPlayerLocations: Array<MatchV1.PlayerLocationsDto>;
        plantLocation: MatchV1.LocationDto;
        plantSite: string;
        defuseRoundTime: number;
        defusePlayerLocations: Array<MatchV1.PlayerLocationsDto>;
        defuseLocation: MatchV1.LocationDto;
        playerStats: Array<MatchV1.PlayerRoundStatsDto>;
        roundResultCode: string;
    }
    
    export interface MatchDto {
        matchInfo: MatchV1.MatchInfoDto;
        players: Array<MatchV1.PlayerDto>;
        coaches: Array<MatchV1.CoachDto>;
        teams: Array<MatchV1.TeamDto>;
        roundResults: Array<MatchV1.RoundResultDto>;
    }

    export interface MatchlistEntryDto {
        matchId: string;
        gameStartTimeMillis: number;
        queueId: string;

        [key: string]: any;
    }

    export interface MatchlistDto {
        puuid: string;
        history: Array<MatchV1.MatchlistEntryDto>;

        [key: string]: any;
    }

    export interface RecentMatchesDto {
        currentTime: string;
        /**
         * A list of recent match ids.
         */
        matchIds: Array<string>;

        [key: string]: any;
    }
}

/**
 * ! This API service is required your project to be registered by Riot Games.
 */
export class MatchV1 extends RiotApiService {
    /**
     * Get match by id
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<MatchV1.MatchDto>>}
     */
    public byMatchId(matchId: string): Promise<AxiosResponse<MatchV1.MatchDto>> {
        return this.axios.get(`${this.apiRegion.url.region}/val/match/v1/matches/${matchId}`);
    }

    /**
     * Get matchlist for games played by puuid
     * @param {string} puuid Player UUID
     * @returns {Promise<AxiosResponse<MatchV1.MatchlistDto>>}
     */
    public listByPuuid(puuid: string): Promise<AxiosResponse<MatchV1.MatchlistDto>> {
        return this.axios.get(`${this.apiRegion.url.region}/val/match/v1/matchlists/by-puuid/${puuid}`);
    }

    /**
     * Get recent matches
     * @param {QueueId.ID} queueId Queue ID
     * @returns {Promise<AxiosResponse<MatchV1.RecentMatchesDto>>}
     */
    public recentByQueue(queueId: QueueId.ID): Promise<AxiosResponse<MatchV1.RecentMatchesDto>> {
        return this.axios.get(`${this.apiRegion.url.region}/val/match/v1/recent-matches/by-queue/${queueId}`);
    }
}
