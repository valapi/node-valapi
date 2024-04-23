import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Contracts {
    export interface Contracts {
        Version: number;
        Subject: string;
        Contracts: Array<{
            ContractDefinitionID: string;
            ContractProgression: {
                TotalProgressionEarned: number;
                TotalProgressionEarnedVersion: number;
                HighestRewardedLevel: Record<
                    string,
                    {
                        Amount: number;
                        Version: number;
                    }
                >;
            };
            ProgressionLevelReached: number;
            ProgressionTowardsNextLevel: number;
        }>;
        ProcessedMatches: Array<{
            ID: string;
            StartTime: number;
            XPGrants: {
                GamePlayed: number;
                GameWon: number;
                RoundPlayed: number;
                RoundWon: number;
                Missions: Record<string, number>;
                Modifier: {
                    Value: number;
                    BaseMultiplierValue: number;
                    Modifiers: Array<{
                        Value: number;
                        Name: string;
                        BaseOnly: boolean;
                    }>;
                };
                NumAFKRounds: number;
            };
            DoughGrants?: {
                GamePlayed: number;
                RoundPlayed: number;
                RoundWon: number;
            };
            RewardGrants: Record<
                string,
                {
                    EntitlementRewards: Array<{
                        ItemTypeID: string;
                        ItemID: string;
                        Amount: number;
                    }>;
                    WalletRewards: Array<{
                        CurrencyID: string;
                        Amount: 10;
                    }>;
                    CounterRewards: any; // * unknown
                }
            >;
            MissionDeltas: Record<
                string,
                {
                    ID: string;
                    Objectives: Record<string, number>;
                    ObjectiveDeltas: Record<
                        string,
                        {
                            ID: string;
                            ProgressBefore: number;
                            ProgressAfter: number;
                        }
                    >;
                }
            >;
            ContractDeltas: Record<
                string,
                {
                    ID: string;
                    TotalXPBefore: number;
                    TotalXPAfter: number;
                }
            >;
            RecruitmentProgressUpdate?: {
                GroupID: string;
                ProgressBefore: number;
                ProgressAfter: number;
                MilestoneThreshold: number;
            };
            CouldProgressMissions: boolean;
            MatchSummary: {
                RoundsTotal: number;
                RoundsWon: number;
            };
        }>;
        ActiveSpecialContract: string;
        Missions: Array<{
            ID: string;
            Objectives: Record<string, number>;
            Complete: boolean;
            ExpirationTime: Date;
        }>;
        MissionMetadata: {
            NPECompleted: boolean;
            WeeklyCheckpoint: string;
            WeeklyRefillTime?: string;
        };
    }
}

export class Contracts extends WebClientService {
    public get(subject: string): PromiseResponse<Contracts.Contracts> {
        return this.request.get(`${this.regionURL.url.playerData}/contracts/v1/contracts/${subject}`);
    }

    public activate(subject: string, contractId: string): PromiseResponse<Contracts.Contracts> {
        return this.request.post(`${this.regionURL.url.playerData}/contracts/v1/contracts/${subject}/special/${contractId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public unlockItemProgression(subject: string, definitionId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.playerData}/contracts/v2/item-upgrades/${definitionId}/${subject}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public unlockContractProgression(subject: string, contractId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.playerData}/contracts/v1/contracts/${subject}/contracts/${contractId}/unlock`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public unlockItemSidegrade(subject: string, definitionId: string, sidegradeId: string, optionId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.playerData}/contracts/v1/item-upgrades/${definitionId}/sidegrades/${sidegradeId}/options/${optionId}/${subject}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public upgrade(subject: string, contractId: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.playerData}/contracts/v1/contracts/${subject}/special/${contractId}/upgrade`);
    }
}
