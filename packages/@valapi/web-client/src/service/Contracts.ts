import type { ValAxios } from "@valapi/lib";

import { WebClientService } from "../client/WebClientService";

export namespace Contracts {
    // response

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
            CouldProgressMissions: boolean;
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
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<Contracts.Contracts>>}
     */
    public async fetch(subject: string): Promise<ValAxios.Response<Contracts.Contracts>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/contracts/v1/contracts/${subject}`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {string} contractId Contract ID
     * @returns {Promise<ValAxios.Response<Contracts.Contracts>>}
     */
    public async activate(subject: string, contractId: string): Promise<ValAxios.Response<Contracts.Contracts>> {
        return await this.axios.post(`${this.apiRegion.url.playerData}/contracts/v1/contracts/${subject}/special/${contractId}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} subject Player UUID
     * @param {string} definitionId Definition ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async unlockItemProgress(subject: string, definitionId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.playerData}/contracts/v2/item-upgrades/${definitionId}/${subject}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} subject Player UUID
     * @param {string} contractId Contract ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async unlockContractProgression(subject: string, contractId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.playerData}/contracts/v1/contracts/${subject}/contracts/${contractId}/unlock`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} subject Player UUID
     * @param {string} definitionId Definition ID
     * @param {string} sidegradeId Sidegrade ID
     * @param {string} optionId Option ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async unlockItemSidegrade(subject: string, definitionId: string, sidegradeId: string, optionId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.playerData}/contracts/v1/item-upgrades/${definitionId}/sidegrades/${sidegradeId}/options/${optionId}/${subject}`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @param {string} subject Player UUID
     * @param {string} contractId Contract ID
     * @returns {Promise<ValAxios.Response<any>>}
     */
    public async upgrade(subject: string, contractId: string): Promise<ValAxios.Response<any>> {
        return await this.axios.post(`${this.apiRegion.url.playerData}/contracts/v1/contracts/${subject}/special/${contractId}/upgrade`);
    }
}
