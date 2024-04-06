import type { AxiosResponse } from "axios";

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
        TeamMatchToken: string;
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
                Subject: string;
                Sprays: {
                    SpraySelections: Array<{
                        SocketID: string;
                        SprayID: string;
                        LevelID: string;
                    }>;
                };
                Expressions: {
                    AESSelections: Array<{
                        SocketID: string;
                        AssetID: string;
                        TypeID: string;
                    }>;
                };
                Items: Record<
                    string,
                    {
                        ID: string;
                        TypeID: string;
                        Sockets: Record<
                            string,
                            {
                                ID: string;
                                Item: {
                                    ID: string;
                                    TypeID: string;
                                };
                            }
                        >;
                    }
                >;
            }
        ];
        LoadoutsValid: boolean;
    }
}

export class PreGame extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<PreGame.Player>>}
     */
    public getPlayer(subject: string): Promise<AxiosResponse<PreGame.Player>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/pregame/v1/players/${subject}`);
    }

    /**
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<PreGame.Match>>}
     */
    public getMatch(matchId: string): Promise<AxiosResponse<PreGame.Match>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}`);
    }

    /**
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<PreGame.Loadout>>}
     */
    public getMatchLoadouts(matchId: string): Promise<AxiosResponse<PreGame.Loadout>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/loadouts`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} matchId Match ID
     * @param {string} agentId Character ID
     * @returns {Promise<AxiosResponse<PreGame.Match>>}
     */
    public selectCharacter(matchId: string, agentId: string): Promise<AxiosResponse<PreGame.Match>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/select/${agentId}`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} matchId Match ID
     * @param {string} agentId Character ID
     * @returns {Promise<AxiosResponse<PreGame.Match>>}
     */
    public lockCharacter(matchId: string, agentId: string): Promise<AxiosResponse<PreGame.Match>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/lock/${agentId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public fetchVoiceToken(matchId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/voicetoken`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public fetchChatToken(matchId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/chattoken`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public quitMatch(matchId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/pregame/v1/matches/${matchId}/quit`);
    }
}
