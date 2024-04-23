import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace ContractDefinitions {
    export interface Item {
        ItemTypeID: string;
        ItemID: string;
    }

    export interface ItemAmount extends ContractDefinitions.Item {
        Amount: number;
    }

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
     */
    public getActiveStory(): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.playerData}/contract-definitions/v2/definitions/story`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public get(): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.playerData}/contract-definitions/v2/definitions`);
    }

    // ItemProgressionDefinitionsV2

    public getItemProgression(): PromiseResponse<ContractDefinitions.ItemProgression> {
        return this.request.get(`${this.regionURL.url.playerData}/contract-definitions/v3/item-upgrades`);
    }
}
