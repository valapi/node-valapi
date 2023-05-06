import type { ValAxios } from "@valapi/lib";

import { WebClientService } from "../client/WebClientService";

export namespace PreGame {
    // response

    export interface Player {
        Subject: string;
        MatchID: string;
        Version: number;
    }

    export interface PlayerInfo {
        Subject: string;
        CharacterID: string;
        CharacterSelectionState: string;
        PregamePlayerState: string;
        CompetitiveTier: number;
        PlayerIdentity: {
            Subject: string;
            PlayerCardID: string;
            PlayerTitleID: string;
            AccountLevel: number;
            PreferredLevelBorderID: string;
            Incognito: boolean;
            HideAccountLevel: boolean;
        };
        SeasonalBadgeInfo: {
            SeasonID: string;
            NumberOfWins: number;
            WinsByTier: any; // * unknown
            Rank: number;
            LeaderboardRank: number;
        };
        IsCaptain: boolean;
    }

    export interface Team {
        TeamID: string;
        Players: Array<PreGame.PlayerInfo>;
    }

    export interface Match {
        ID: string;
        Version: number;
        Teams: Array<PreGame.Team>;
        AllyTeam: PreGame.Team;
        EnemyTeam: any; // * unknown
        ObserverSubjects: Array<any>; // * unknown
        MatchCoaches: Array<any>; // * unknown
        EnemyTeamSize: number;
        EnemyTeamLockCount: number;
        PregameState: string;
        LastUpdated: Date;
        MapID: string;
        MapSelectPool: Array<any>; // * unknown
        BannedMapIDs: Array<any>; // * unknown
        CastedVotes: any; // * unknown
        MapSelectSteps: Array<any>; // * unknown
        MapSelectStep: number;
        Team1: string;
        GamePodID: string;
        Mode: string;
        VoiceSessionID: string;
        MUCName: string;
        QueueID: string;
        ProvisioningFlowID: string;
        IsRanked: boolean;
        PhaseTimeRemainingNS: number;
        StepTimeRemainingNS: number;
        altModesFlagADA: boolean;
        TournamentMetadata: any; // * unknown
        RosterMetadata: any; // * unknown
    }

    export interface Loadout {
        Loadouts: [
            {
                Sprays: {
                    SpraySelections: any; // * unknown
                };
                Items: any; // * unknown
            }
        ];
        LoadoutsValid: boolean;
    }
}

export class PreGame extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<PreGame.Player>>}
     */
    public async getPlayer(subject: string): Promise<ValAxios.Response<PreGame.Player>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/pregame/v1/players/${subject}`);
    }

    /**
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<PreGame.Match>>}
     */
    public async getMatch(matchId: string): Promise<ValAxios.Response<PreGame.Match>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}`);
    }

    /**
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<PreGame.Loadout>>}
     */
    public async getMatchLoadouts(matchId: string): Promise<ValAxios.Response<PreGame.Loadout>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/loadouts`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} matchId Match ID
     * @param {string} agentId Character ID
     * @returns {Promise<ValAxios.Response<PreGame.Match>>}
     */
    public async selectCharacter(matchId: string, agentId: string): Promise<ValAxios.Response<PreGame.Match>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/select/${agentId}`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} matchId Match ID
     * @param {string} agentId Character ID
     * @returns {Promise<ValAxios.Response<PreGame.Match>>}
     */
    public async lockCharacter(matchId: string, agentId: string): Promise<ValAxios.Response<PreGame.Match>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/lock/${agentId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async fetchVoiceToken(matchId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/voicetoken`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async fetchChatToken(matchId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/chattoken`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async quitMatch(matchId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/quit`);
    }
}
