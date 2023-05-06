import type { ValAxios } from "@valapi/lib";

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
     * @returns {Promise<ValAxios.Response<CoreGame.Player>>}
     */
    public async fetchPlayer(subject: string): Promise<ValAxios.Response<CoreGame.Player>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/players/${subject}`);
    }

    /**
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<CoreGame.Match>>}
     */
    public async fetchMatch(matchId: string): Promise<ValAxios.Response<CoreGame.Match>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/matches/${matchId}`);
    }

    /**
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<CoreGame.Loadout>>}
     */
    public async fetchMatchLoadouts(matchId: string): Promise<ValAxios.Response<CoreGame.Loadout>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/matches/${matchId}/loadouts`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} subject Player UUID
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async disassociatePlayer(subject: string, matchId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/core-game/v1/players/${subject}/disassociate/${matchId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async fetchAllChatMUCToken(matchId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/matches/${matchId}/allchatmuctoken`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async fetchTeamChatMUCToken(matchId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/matches/${matchId}/teamchatmuctoken`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} matchId Match ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async fetchVoiceToken(matchId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/core-game/v1/matches/${matchId}/teamvoicetoken`);
    }
}
