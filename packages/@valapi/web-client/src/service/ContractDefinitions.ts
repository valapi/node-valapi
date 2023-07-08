import type { AxiosResponse } from "axios";

import { WebClientService } from "../client/WebClientService";

export namespace ContractDefinitions {
    // response

    export interface Item {
        ItemTypeID: string;
        ItemID: string;
    }

    export type ItemAmount = ContractDefinitions.Item & { Amount: number };

    export interface ItemProgression {
        Definitions: Array<{
            ID: string;
            Item: ContractDefinitions.Item;
            RequiredEntitlement: ContractDefinitions.Item;
            ProgressionSchedule: {
                Name: string;
                ProgressionCurrencyID: string;
                ProgressionDeltaPerLevel: Array<number>;
            };
            RewardSchedule: {
                ID: string;
                Name: string;
                Prerequisites: {
                    RequiredEntitlements: Array<ContractDefinitions.Item>;
                };
                RewardsPerLevel: Array<{
                    EntitlementRewards: Array<ContractDefinitions.ItemAmount>;
                    WalletRewards: any; // * unknown
                    CounterRewards: any; // * unknown
                }>;
            };
            Sidegrades: Array<{
                SidegradeID: string;
                Options: Array<{
                    OptionID: string;
                    Cost: {
                        WalletCosts: Array<{
                            CurrencyID: string;
                            AmountToDeduct: number;
                        }>;
                    };
                    Rewards: Array<ContractDefinitions.ItemAmount>;
                }>;
                Prerequisites: {
                    RequiredEntitlements: Array<ContractDefinitions.Item>;
                };
            }>;
        }>;
    }
}

export class ContractDefinitions extends WebClientService {
    /**
     * @deprecated Please, Contact us if you find out how its works
     * @returns {Promise<AxiosResponse<any>>}
     */
    public fetchActiveStory(): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/contract-definitions/v2/definitions/story`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     * @returns {Promise<AxiosResponse<any>>}
     */
    public fetch(): Promise<AxiosResponse<any>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/contract-definitions/v2/definitions`);
    }

    // ItemProgressionDefinitionsV2

    /**
     * @returns {Promise<AxiosResponse<ContractDefinitions.ItemProgression>>}
     */
    public fetchItemProgression(): Promise<AxiosResponse<ContractDefinitions.ItemProgression>> {
        return this.axios.get(`${this.apiRegion.url.playerData}/contract-definitions/v3/item-upgrades`);
    }
}
