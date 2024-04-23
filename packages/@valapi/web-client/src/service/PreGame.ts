import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace PreGame {
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
    public getPlayer(subject: string): PromiseResponse<PreGame.Player> {
        return this.request.get(`${this.regionURL.url.partyService}/pregame/v1/players/${subject}`);
    }

    public getMatch(matchId: string): PromiseResponse<PreGame.Match> {
        return this.request.get(`${this.regionURL.url.partyService}/pregame/v1/matches/${matchId}`);
    }

    public getMatchLoadouts(matchId: string): PromiseResponse<PreGame.Loadout> {
        return this.request.get(`${this.regionURL.url.partyService}/pregame/v1/matches/${matchId}/loadouts`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     */
    public selectCharacter(matchId: string, agentId: string): PromiseResponse<PreGame.Match> {
        return this.request.post(`${this.regionURL.url.partyService}/pregame/v1/matches/${matchId}/select/${agentId}`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     */
    public lockCharacter(matchId: string, agentId: string): PromiseResponse<PreGame.Match> {
        return this.request.post(`${this.regionURL.url.partyService}/pregame/v1/matches/${matchId}/lock/${agentId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public fetchVoiceToken(matchId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.partyService}/pregame/v1/matches/${matchId}/voicetoken`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public fetchChatToken(matchId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.partyService}/pregame/v1/matches/${matchId}/chattoken`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     */
    public quitMatch(matchId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/pregame/v1/matches/${matchId}/quit`);
    }
}
