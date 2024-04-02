import type { AxiosResponse } from "axios";

import type { QueueId } from "@valapi/lib";
import type { AuthCore } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Party {
    // args

    export namespace CustomGame {
        export interface Settings {
            Map: string;
            Mode: string;
            UseBots: boolean;
            GamePod: string;
            GameRules: {
                AllowGameModifiers: `${boolean}`;
                PlayOutAllRounds: `${boolean}`;
                SkipMatchHistory: `${boolean}`;
                TournamentMode: `${boolean}`;
                IsOvertimeWinByTwo: `${boolean}`;
            };
        }

        export type Team = "TeamTwo" | "TeamOne" | "TeamSpectate" | "TeamOneCoaches" | "TeamTwoCoaches";

        export interface Member {
            Subject: string;
        }

        export interface Config {
            Enabled: boolean;
            EnabledMaps: Array<string>;
            EnabledModes: Array<string>;
            Queues: Array<{
                QueueID: QueueId.ID;
                Enabled: boolean;
                TeamSize: number;
                NumTeams: number;
                MaxPartySize: number;
                MinPartySize: number;
                InvalidPartySizes: Array<number>;
                MaxPartySizeHighSkill: number;
                HighSkillTier: number;
                MaxSkillTier: number;
                AllowFullPartyBypassSkillRestrictions: boolean;
                ApplyRRPenaltyToFullParty: boolean;
                AllowFiveStackRestrictions: boolean;
                Mode: string;
                IsRanke: boolean;
                IsTournament: boolean;
                IsTournamentV2: boolean;
                RequireRoster: boolean;
                Priority: number;
                PartyMaxCompetitiveTierRange: number;
                PartyMaxCompetitiveTierRangePlacementBuffer: number;
                FullPartyMaxCompetitiveTierRange: number;
                PartySkillDisparityCompetitiveTiersCeilings: Record<`${number}`, number>;
                PartySkillDisparityPartySizeCompetitiveTiersCeilings: Record<`${number}`, Record<`${number}`, number>>;
                UseAccountLevelRequirement: boolean;
                MinimumAccountLevelRequired: number;
                GameRules: {
                    IsOvertimeWinByTwo: boolean;
                };
                SupportedPlatformTypes: Array<string>;
                DisabledContent: Array<any>; // * unknown
                queueFieldA: Array<any>; // * unknown
                NextScheduleChangeSeconds: number;
                TimeUntilNextScheduleChangeSeconds: number;
                MapWeights: Array<`${string}:${1 | 0}`>;
            }>;
        }
    }

    export type Accessibility = "OPEN" | "CLOSED";

    // response

    export interface GetPlayer {
        Subject: string;
        Version: number;
        CurrentPartyID: string;
        Invites: any; // * unknown
        Requests: Array<any>; // * unknown
        PlatformInfo: AuthCore.ClientPlatfrom;
    }

    // TODO IsOwner, Settings
    export interface Party {
        ID: string;
        MUCName: string;
        VoiceRoomID: string;
        Version: number;
        ClientVersion: string;
        Members: Array<{
            Subject: string;
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
            SeasonalBadgeInfo: any; // * unknown
            IsOwner: boolean;
            QueueEligibleRemainingAccountLevels: number;
            Pings: Array<{
                Ping: number;
                GamePodID: string;
            }>;
            IsReady: boolean;
            IsModerator: boolean;
            UseBroadcastHUD: boolean;
            PlatformType: string;
        }>;
        State: string;
        PreviousState: string;
        StateTransitionReason: string;
        Accessibility: Party.Accessibility;
        CustomGameData: {
            Settings: Party.CustomGame.Settings;
            Membership: {
                teamOne: Array<Party.CustomGame.Member>;
                teamTwo: Array<Party.CustomGame.Member>;
                teamSpectate: Array<Party.CustomGame.Member>;
                teamOneCoaches: Array<Party.CustomGame.Member>;
                teamTwoCoaches: Array<Party.CustomGame.Member>;
            };
            MaxPartySize: number;
            AutobalanceEnabled: boolean;
            AutobalanceMinPlayers: number;
            HasRecoveryData: boolean;
        };
        MatchmakingData: {
            QueueID: QueueId.ID;
            PreferredGamePods: Array<string>;
            SkillDisparityRRPenalty: number;
        };
        Invites: any; // * unknown
        Requests: Array<any>; // * unknown
        QueueEntryTime: Date;
        ErrorNotification: {
            ErrorType: string;
            ErroredPlayers: any; // * unknown
        };
        RestrictedSeconds: number;
        EligibleQueues: Array<QueueId.ID>;
        QueueIneligibilities: Array<any>; // * unknown
        CheatData: {
            GamePodOverride: string;
            ForcePostGameProcessing: boolean;
        };
        XPBonuses: Array<{
            ID: string;
            Applied: boolean;
        }>;
        InviteCode: string;
    }
}

export class Party extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public refreshCompetitiveTier(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/refreshCompetitiveTier`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public refreshPlayerIdentity(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/refreshPlayerIdentity`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public refreshPings(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/refreshPings`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public get(partyId: string): Promise<AxiosResponse<Party.Party>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public getMUCToken(partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/muctoken`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public getVoiceToken(partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/voicetoken`);
    }

    /**
     * @param {string} partyId Party ID
     * @param {Party.Accessibility} accessibility Accessibility
     * @returns {Promise<AxiosResponse<any>>}
     */
    public setAccessibility(partyId: string, accessibility: Party.Accessibility): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/accessibility`, {
            accessibility: accessibility
        });
    }

    /**
     * @param {string} partyId Party ID
     * @param {string} gameName In-Game Name
     * @param {string} tagLine In-Game Tag
     * @returns {Promise<AxiosResponse<any>>}
     */
    public inviteByDisplayName(partyId: string, gameName: string, tagLine: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/invites/name/${gameName}/tag/${tagLine}`);
    }

    /**
     * @param {string} partyId Party ID
     * @param {string} requestId Request ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public declineJoinRequest(partyId: string, requestId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/request/${requestId}/decline`);
    }

    public get MatchMaking(): MatchMaking {
        return new MatchMaking(this.axios, this.apiRegion);
    }

    public get Player(): Player {
        return new Player(this.axios, this.apiRegion);
    }

    public get CustomGame(): CustomGame {
        return new CustomGame(this.axios, this.apiRegion);
    }

    public get PartyCode(): PartyCode {
        return new PartyCode(this.axios, this.apiRegion);
    }
}

export class MatchMaking extends WebClientService {
    /**
     * @param {string} partyId Party ID
     * @param {QueueId.ID} queueId Queue (EligibleQueues)
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public changeQueue(partyId: string, queueId: QueueId.ID): Promise<AxiosResponse<Party.Party>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/queue`, {
            queueID: queueId
        });
    }

    /**
     * @param {string} partyId Party ID
     * @param {QueueId.ID} queueId Queue
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public makeDefaultQueue(partyId: string, queueId: QueueId.ID): Promise<AxiosResponse<Party.Party>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/makedefault?queueID=${queueId}`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public startSoloExperience(subject: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/players/${subject}/startsoloexperience`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public start(partyId: string): Promise<AxiosResponse<Party.Party>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/matchmaking/join`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public leave(partyId: string): Promise<AxiosResponse<Party.Party>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/matchmaking/leave`);
    }
}

export class Player extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<Party.GetPlayer>>}
     */
    public get(subject: string): Promise<AxiosResponse<Party.GetPlayer>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/parties/v1/players/${subject}`);
    }

    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public remove(subject: string): Promise<AxiosResponse<any>> {
        return this.axios.delete(`${this.apiRegion.url.partyService}/parties/v1/players/${subject}`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public joinParty(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/players/${subject}/joinparty/${partyId}`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public leaveParty(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/players/${subject}/leaveparty/${partyId}`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @param {boolean} isReady Ready or not?
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public setReady(subject: string, partyId: string, isReady: boolean): Promise<AxiosResponse<Party.Party>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/setReady`, {
            ready: isReady
        });
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public leaveFromParty(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.delete(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public transferOwner(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/owner`);
    }
}

export class CustomGame extends WebClientService {
    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public makeInto(partyId: string): Promise<AxiosResponse<Party.Party>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/makecustomgame`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public start(partyId: string): Promise<AxiosResponse<Party.Party>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/startcustomgame`);
    }

    /**
     * @param {string} partyId Party ID
     * @param {Party.CustomGame.Settings} settings Custom Game Settings
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public changeSettings(partyId: string, settings: Party.CustomGame.Settings): Promise<AxiosResponse<Party.Party>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/customgamesettings`, settings);
    }

    /**
     * @param {string} partyId Party ID
     * @param {Party.CustomGame.Team} team Team
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public changeTeam(partyId: string, team: Party.CustomGame.Team, subject: string): Promise<AxiosResponse<Party.Party>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/customgamemembership/${team}`, {
            playerToPutOnTeam: subject
        });
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public setBalance(partyId: string): Promise<AxiosResponse<any>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/balance`);
    }

    /**
     * @returns {Promise<AxiosResponse<Party.CustomGame.Config>>}
     */
    public getConfig(): Promise<AxiosResponse<Party.CustomGame.Config>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/parties/v1/parties/customgameconfigs`);
    }
}

export class PartyCode extends WebClientService {
    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public create(partyId: string): Promise<AxiosResponse<Party.Party>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/invitecode`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public delete(partyId: string): Promise<AxiosResponse<Party.Party>> {
        return this.axios.delete(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/invitecode`);
    }

    /**
     * @param {string} partyCode Invite Code
     * @returns {Promise<AxiosResponse<Party.GetPlayer>>}
     */
    public join(partyCode: string): Promise<AxiosResponse<Party.GetPlayer>> {
        return this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/players/joinbycode/${partyCode}`);
    }
}
