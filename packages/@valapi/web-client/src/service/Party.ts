import type { QueueId } from "@valapi/lib";
import type { PromiseResponse, ClientPlatfrom } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Party {
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

    export interface GetPlayer {
        Subject: string;
        Version: number;
        CurrentPartyID: string;
        Invites: any; // * unknown
        Requests: Array<any>; // * unknown
        PlatformInfo: ClientPlatfrom;
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
    public refreshCompetitiveTier(subject: string, partyId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/refreshCompetitiveTier`);
    }

    public refreshPlayerIdentity(subject: string, partyId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/refreshPlayerIdentity`);
    }

    public refreshPings(subject: string, partyId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/refreshPings`);
    }

    public get(partyId: string): PromiseResponse<Party.Party> {
        return this.request.get(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}`);
    }

    public getMUCToken(partyId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/muctoken`);
    }

    public getVoiceToken(partyId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/voicetoken`);
    }

    public setAccessibility(partyId: string, accessibility: Party.Accessibility): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/accessibility`, {
            accessibility: accessibility
        });
    }

    public inviteByDisplayName(partyId: string, gameName: string, tagLine: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/invites/name/${gameName}/tag/${tagLine}`);
    }

    public declineJoinRequest(partyId: string, requestId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/request/${requestId}/decline`);
    }

    public get MatchMaking(): MatchMaking {
        return new MatchMaking(this.request, this.regionURL);
    }

    public get Player(): Player {
        return new Player(this.request, this.regionURL);
    }

    public get CustomGame(): CustomGame {
        return new CustomGame(this.request, this.regionURL);
    }

    public get PartyCode(): PartyCode {
        return new PartyCode(this.request, this.regionURL);
    }
}

export class MatchMaking extends WebClientService {
    /**
     * @param queueId Queue (EligibleQueues)
     */
    public changeQueue(partyId: string, queueId: QueueId.ID): PromiseResponse<Party.Party> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/queue`, {
            queueID: queueId
        });
    }

    public makeDefaultQueue(partyId: string, queueId: QueueId.ID): PromiseResponse<Party.Party> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/makedefault?queueID=${queueId}`);
    }

    /**
     * ! Careful to use, Riot will immediately shut down your Project.
     * @deprecated Please, Contact us if you find out how its works
     */
    public startSoloExperience(subject: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/players/${subject}/startsoloexperience`);
    }

    public start(partyId: string): PromiseResponse<Party.Party> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/matchmaking/join`);
    }

    public leave(partyId: string): PromiseResponse<Party.Party> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/matchmaking/leave`);
    }
}

export class Player extends WebClientService {
    public get(subject: string): PromiseResponse<Party.GetPlayer> {
        return this.request.get(`${this.regionURL.url.partyService}/parties/v1/players/${subject}`);
    }

    public remove(subject: string): PromiseResponse<any> {
        return this.request.delete(`${this.regionURL.url.partyService}/parties/v1/players/${subject}`);
    }

    public joinParty(subject: string, partyId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/players/${subject}/joinparty/${partyId}`);
    }

    public leaveParty(subject: string, partyId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/players/${subject}/leaveparty/${partyId}`);
    }

    public setReady(subject: string, partyId: string, isReady: boolean): PromiseResponse<Party.Party> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/setReady`, {
            ready: isReady
        });
    }

    public leaveFromParty(subject: string, partyId: string): PromiseResponse<any> {
        return this.request.delete(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/members/${subject}`);
    }

    public transferOwner(subject: string, partyId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/members/${subject}/owner`);
    }
}

export class CustomGame extends WebClientService {
    public makeInto(partyId: string): PromiseResponse<Party.Party> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/makecustomgame`);
    }

    public start(partyId: string): PromiseResponse<Party.Party> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/startcustomgame`);
    }

    public changeSettings(partyId: string, settings: Party.CustomGame.Settings): PromiseResponse<Party.Party> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/customgamesettings`, settings);
    }

    public changeTeam(partyId: string, team: Party.CustomGame.Team, subject: string): PromiseResponse<Party.Party> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/customgamemembership/${team}`, {
            playerToPutOnTeam: subject
        });
    }

    public setBalance(partyId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/balance`);
    }

    public getConfig(): PromiseResponse<Party.CustomGame.Config> {
        return this.request.get(`${this.regionURL.url.partyService}/parties/v1/parties/customgameconfigs`);
    }
}

export class PartyCode extends WebClientService {
    public create(partyId: string): PromiseResponse<Party.Party> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/invitecode`);
    }

    public delete(partyId: string): PromiseResponse<Party.Party> {
        return this.request.delete(`${this.regionURL.url.partyService}/parties/v1/parties/${partyId}/invitecode`);
    }

    public join(partyCode: string): PromiseResponse<Party.GetPlayer> {
        return this.request.post(`${this.regionURL.url.partyService}/parties/v1/players/joinbycode/${partyCode}`);
    }
}
