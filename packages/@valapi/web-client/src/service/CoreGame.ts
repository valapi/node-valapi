import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace CoreGame {
    export interface Player {
        Subject: string;
        MatchID: string;
        Version: number;
    }

    export interface Match {
        MatchID: string;
        Version: number;
        State: string;
        MapID: string;
        ModeID: string;
        ProvisioningFlow: string;
        GamePodID: string;
        AllMUCName: string;
        TeamMUCName: string;
        TeamVoiceID: string;
        TeamMatchToken: string;
        IsReconnectable: boolean;
        ConnectionDetails: {
            GameServerHosts: Array<string>;
            GameServerHost: string;
            GameServerPort: number;
            GameServerObfuscatedIP: number;
            GameClientHash: number;
            PlayerKey: string;
        };
        PostGameDetails: {
            Start: Date;
            Players: Array<{
                Subject: string;
            }>;
        };
        Players: Array<{
            Subject: string;
            TeamID: string;
            CharacterID: string;
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
            IsCoach: boolean;
            IsAssociated: boolean;
        }>;
        MatchmakingData: {
            QueueID: string;
            IsRanked: boolean;
        };
    }

    export interface Loadout {
        Loadouts: Array<{
            CharacterID: string;
            Loadout: {
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
            };
        }>;
    }
}

/**
 * Current Game
 */
export class CoreGame extends WebClientService {
    public fetchPlayer(subject: string): PromiseResponse<CoreGame.Player> {
        return this.request.get(`${this.regionURL.url.partyService}/core-game/v1/players/${subject}`);
    }

    public fetchMatch(matchId: string): PromiseResponse<CoreGame.Match> {
        return this.request.get(`${this.regionURL.url.partyService}/core-game/v1/matches/${matchId}`);
    }

    public fetchMatchLoadouts(matchId: string): PromiseResponse<CoreGame.Loadout> {
        return this.request.get(`${this.regionURL.url.partyService}/core-game/v1/matches/${matchId}/loadouts`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     */
    public disassociatePlayer(subject: string, matchId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/core-game/v1/players/${subject}/disassociate/${matchId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public fetchAllChatMUCToken(matchId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.partyService}/core-game/v1/matches/${matchId}/allchatmuctoken`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public fetchTeamChatMUCToken(matchId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.partyService}/core-game/v1/matches/${matchId}/teamchatmuctoken`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public fetchVoiceToken(matchId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.partyService}/core-game/v1/matches/${matchId}/teamvoicetoken`);
    }
}
