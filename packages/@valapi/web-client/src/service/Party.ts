import type { AxiosResponse } from "axios";

import type { QueueId } from "@valapi/lib";
import type { AuthCore } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Party {
    // args

    export interface CustomGameSettings {
        Map: string;
        Mode: string;
        UseBots: boolean;
        GamePod: string;
        GameRules: {
            AllowGameModifiers: boolean;
            PlayOutAllRounds: boolean;
            SkipMatchHistory: boolean;
            TournamentMode: boolean;
            IsOvertimeWinByTwo: boolean;
        };
    }

    export type CustomGameTeam = "TeamTwo" | "TeamOne" | "TeamSpectate" | "TeamOneCoaches" | "TeamTwoCoaches";

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
            Settings: Party.CustomGameSettings;
            Membership: {
                teamOne: any;
                teamTwo: any;
                teamSpectate: any;
                teamOneCoaches: any;
                teamTwoCoaches: any;
            }; // * unknown
            MaxPartySize: number;
            AutobalanceEnabled: boolean;
            AutobalanceMinPlayers: number;
            HasRecoveryData: boolean;
        };
        MatchmakingData: {
            QueueID: QueueId.Identify;
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
        EligibleQueues: Array<QueueId.Identify>;
        QueueIneligibilities: Array<any>; // * unknown
        CheatData: {
            GamePodOverride: string;
            ForcePostGameProcessing: boolean;
        };
        XPBonuses: Array<any>; // * unknown
    }
}

export class Party extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<Party.GetPlayer>>}
     */
    public async fetchPlayer(subject: string): Promise<AxiosResponse<Party.GetPlayer>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/parties/v1/players/${subject}`);
    }

    /**
     *
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async removePlayer(subject: string): Promise<AxiosResponse<any>> {
        return await this.axios.delete(`${this.apiRegion.url.partyService}/parties/v1/players/${subject}`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async joinParty(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/players/${subject}/joinparty/${partyId}`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async leaveParty(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/players/${subject}/leaveparty/${partyId}`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @param {boolean} isReady Ready or not?
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async setMemberReady(subject: string, partyId: string, isReady: boolean): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/setReady`, {
            ready: isReady
        });
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async refreshCompetitiveTier(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/refreshCompetitiveTier`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async refreshPlayerIdentity(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/refreshPlayerIdentity`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async refreshPings(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/refreshPings`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<Party.Party>>}
     */
    public async fetchParty(partyId: string): Promise<AxiosResponse<Party.Party>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async leaveFromParty(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.delete(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async fetchMUCToken(partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/muctoken`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async fetchVoiceToken(partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/voicetoken`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async makeIntoCustomGame(partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/makecustomgame`);
    }

    /**
     * @param {string} partyId Party ID
     * @param {QueueId.Identify} queueId Queue (EligibleQueues)
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async changeQueue(partyId: string, queueId: QueueId.Identify): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/queue`, {
            queueID: queueId
        });
    }

    /**
     * @param {string} partyId Party ID
     * @param {QueueId.Identify} queueId Queue
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async makeDefault(partyId: string, queueId: QueueId.Identify): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/makedefault?queueID=${queueId}`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async startCustomGame(partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/startcustomgame`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async startSoloExperience(subject: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/players/${subject}/startsoloexperience`);
    }

    /**
     * @param {string} partyId Party ID
     * @param {Party.CustomGameSettings} settings Custom Game Settings
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async setCustomGameSettings(partyId: string, settings: Party.CustomGameSettings): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/customgamesettings`, settings);
    }

    /**
     * @param {string} partyId Party ID
     * @param {Party.CustomGameTeam} team Team
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async changeTeamInCustomGame(partyId: string, team: Party.CustomGameTeam, subject: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/customgamemembership/${team}`, {
            playerToPutOnTeam: subject
        });
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async enterMatchmakingQueue(partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/matchmaking/join`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async leaveMatchmakingQueue(partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/matchmaking/leave`);
    }

    /**
     * @param {string} partyId Party ID
     * @param {Party.Accessibility} accessibility Accessibility
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async setAccessibility(partyId: string, accessibility: Party.Accessibility): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/accessibility`, {
            accessibility: accessibility
        });
    }

    /**
     * @param {string} partyId Party ID
     * @param {string} gameName In-Game Name
     * @param {string} tagLine In-Game Tag
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async inviteToPartyByDisplayName(partyId: string, gameName: string, tagLine: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/invites/name/${gameName}/tag/${tagLine}`);
    }

    /**
     * @param {string} partyId Party ID
     * @param {string} requestId Request ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async declineRequest(partyId: string, requestId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/request/${requestId}/decline`);
    }

    /**
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async setBalance(partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/balance`);
    }

    /**
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async fetchCustomGameConfigs(): Promise<AxiosResponse<any>> {
        return await this.axios.get(`${this.apiRegion.url.partyService}/parties/v1/parties/customgameconfigs`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} partyId Party ID
     * @returns {Promise<AxiosResponse<any>>}
     */
    public async transferOwner(subject: string, partyId: string): Promise<AxiosResponse<any>> {
        return await this.axios.post(`${this.apiRegion.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/owner`);
    }
}
