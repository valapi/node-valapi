import type { AxiosResponse } from "axios";

import { WebClientService } from "../client/WebClientService";

export namespace CoreGame {
    // response

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
                Sprays: {
                    SpraySelections: Array<{
                        SocketID: string;
                        SprayID: string;
                        LevelID: string;
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
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<CoreGame.Player>>}
     */
    public fetchPlayer(subject: string): Promise<AxiosResponse<CoreGame.Player>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/players/${subject}`);
    }

    /**
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<CoreGame.Match>>}
     */
    public fetchMatch(matchId: string): Promise<AxiosResponse<CoreGame.Match>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/matches/${matchId}`);
    }

    /**
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<CoreGame.Loadout>>}
     */
    public fetchMatchLoadouts(matchId: string): Promise<AxiosResponse<CoreGame.Loadout>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/matches/${matchId}/loadouts`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} subject Player UUID
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public disassociatePlayer(subject: string, matchId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/core-game/v1/players/${subject}/disassociate/${matchId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public fetchAllChatMUCToken(matchId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/matches/${matchId}/allchatmuctoken`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public fetchTeamChatMUCToken(matchId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/matches/${matchId}/teamchatmuctoken`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public fetchVoiceToken(matchId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/matches/${matchId}/teamvoicetoken`);
    }
}
