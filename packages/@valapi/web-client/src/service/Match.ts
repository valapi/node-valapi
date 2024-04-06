import type { AxiosResponse } from "axios";

import type { QueueId } from "@valapi/lib";
import type { AuthCore } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Match {
    // response

    export interface Location {
        x: number;
        y: number;
    }

    export interface PlayerLocation {
        subject: string;
        viewRadians: number;
        location: Match.Location;
    }

    export interface Kill {
        gameTime: number;
        roundTime: number;
        killer: string;
        victim: string;
        victimLocation: Match.Location;
        assistants: Array<string>;
        playerLocations: Array<Match.PlayerLocation>;
        finishingDamage: {
            damageType: string;
            damageItem: string;
            isSecondaryFireMode: boolean;
        };
    }

    export interface Detail {
        matchInfo: {
            matchId: string;
            mapId: string;
            gamePodId: string;
            gameLoopZone: string;
            gameServerAddress: string;
            gameVersion: string;
            gameLengthMillis: number;
            gameStartMillis: number;
            provisioningFlowID: string;
            isCompleted: boolean;
            customGameName: string;
            forcePostProcessing: boolean;
            queueID: QueueId.ID;
            gameMode: string;
            isRanked: boolean;
            isMatchSampled: boolean;
            seasonId: string;
            completionState: string;
            platformType: string;
            premierMatchInfo: any; // * unknown
            partyRRPenalties: Record<string, number>;
            shouldMatchDisablePenalties: boolean;
        };
        players: Array<{
            subject: string;
            gameName: string;
            tagLine: string;
            platformInfo: AuthCore.ClientPlatfrom;
            teamId: string;
            partyId: string;
            characterId: string;
            stats: {
                score: number;
                roundsPlayed: number;
                kills: number;
                deaths: number;
                assists: number;
                playtimeMillis: number;
                abilityCasts: {
                    grenadeCasts: number;
                    ability1Casts: number;
                    ability2Casts: number;
                    ultimateCasts: number;
                };
            };
            roundDamage: Array<{
                round: number;
                receiver: string;
                damage: number;
            }>;
            competitiveTier: number;
            isObserver: boolean;
            playerCard: string;
            playerTitle: string;
            preferredLevelBorder?: string;
            accountLevel: number;
            sessionPlaytimeMinutes: number;
            xpModifications?: Array<{
                Value: number;
                ID: string;
            }>;
            behaviorFactors: {
                afkRounds: number;
                collisions: number;
                commsRatingRecovery: number;
                damageParticipationOutgoing: number;
                friendlyFireIncoming: number;
                friendlyFireOutgoing: number;
                mouseMovement: number;
                selfDamage: number;
                stayedInSpawnRounds: number;
            };
            newPlayerExperienceDetails: {
                basicMovement: {
                    idleTimeMillis: number;
                    objectiveCompleteTimeMillis: number;
                };
                basicGunSkill: {
                    idleTimeMillis: number;
                    objectiveCompleteTimeMillis: number;
                };
                adaptiveBots: {
                    idleTimeMillis: number;
                    objectiveCompleteTimeMillis: number;
                    adaptiveBotAverageDurationMillisAllAttempts: number;
                    adaptiveBotAverageDurationMillisFirstAttempt: number;
                    killDetailsFirstAttempt: any; // * unknown
                };
                ability: {
                    idleTimeMillis: number;
                    objectiveCompleteTimeMillis: number;
                };
                bombPlant: {
                    idleTimeMillis: number;
                    objectiveCompleteTimeMillis: number;
                };
                defendBombSite: {
                    idleTimeMillis: number;
                    objectiveCompleteTimeMillis: number;
                    success: boolean;
                };
                settingStatus: {
                    isMouseSensitivityDefault: boolean;
                    isCrosshairDefault: boolean;
                };
                versionString: string;
            };
        }>;
        bots: Array<any>; // * unknown
        coaches: Array<any>; // * unknown
        teams: Array<{
            teamId: string;
            won: boolean;
            roundsPlayed: number;
            roundsWon: number;
            numPoints: number;
        }>;
        roundResults: Array<{
            roundNum: number;
            roundResult: string;
            roundCeremony: string;
            winningTeam: string;
            bombPlanter?: string;
            bombDefuser?: string;
            plantRoundTime: number;
            plantPlayerLocations: Array<Match.PlayerLocation>;
            plantLocation: Match.Location;
            plantSite: string;
            defuseRoundTime: number;
            defusePlayerLocations: Array<Match.PlayerLocation>;
            defuseLocation: Match.Location;
            playerStats: Array<{
                subject: string;
                kills: Array<Match.Kill>;
                damage: Array<{
                    receiver: string;
                    damage: number;
                    legshots: number;
                    bodyshots: number;
                    headshots: number;
                }>;
                score: number;
                economy: {
                    loadoutValue: number;
                    weapon: string;
                    armor: string;
                    remaining: number;
                    spent: number;
                };
                ability: {
                    grenadeEffects: any; // * unknown
                    ability1Effects: any; // * unknown
                    ability2Effects: any; // * unknown
                    ultimateEffects: any; // * unknown
                };
                wasAfk: boolean;
                wasPenalized: boolean;
                stayedInSpawn: boolean;
            }>;
            roundResultCode: string;
            playerEconomies: Array<{
                subject: string;
                loadoutValue: number;
                weapon: string;
                armor: string;
                remaining: number;
                spent: number;
            }>;
            playerScores: Array<{
                subject: string;
                score: number;
            }>;
        }>;
        kills: Array<Match.Kill & { round: number }>;
    }

    export interface History {
        Subject: string;
        BeginIndex: number;
        EndIndex: number;
        Total: number;
        History: Array<{
            MatchID: string;
            GameStartTime: number;
            QueueID: QueueId.ID;
        }>;
    }
}

export class Match extends WebClientService {
    /**
     *
     * @param {string} matchId Match ID
     * @returns {Promise<AxiosResponse<Match.Detail>>}
     */
    public fetchMatchDetails(matchId: string): Promise<AxiosResponse<Match.Detail>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/match-details/v1/matches/${matchId}`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {QueueId.ID} queueId Queue
     * @param {number} startIndex Start Index (default: 0)
     * @param {number} endIndex End Index (default: 10)
     * @returns {Promise<AxiosResponse<Match.History>>}
     */
    public fetchMatchHistory(subject: string, queueId?: QueueId.ID, startIndex = 0, endIndex = 10): Promise<AxiosResponse<Match.History>> {
        let _url = `${this.apiRegion.url.playerData}/match-history/v1/history/${subject}?startIndex=${startIndex}&endIndex=${endIndex}`;

        if (queueId) {
            _url += `&queue=${queueId}`;
        }

        return this.axios.get(_url);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @returns {Promise<AxiosResponse<any>>}
     */
    public fetchQueueData(): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.partyService}/matchmaking/v1/queues/configs`);
    }
}
