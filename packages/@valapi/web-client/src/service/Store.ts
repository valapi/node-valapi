import type { ItemTypeId } from "@valapi/lib";
import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Store {
    export type Currency = Record<string, number>;

    export interface Wallet {
        Balances: Store.Currency;
        CurrencyLimits: Record<
            string,
            {
                Limits: Record<
                    string,
                    {
                        amount: number;
                        limitType: string;
                    }
                >;
            }
        >;
    }

    export interface Offer {
        OfferID: string;
        IsDirectPurchase: boolean;
        StartDate: Date;
        Cost: Store.Currency;
        Rewards: Array<{
            ItemTypeID: string;
            ItemID: string;
            Quantity: number;
        }>;
    }

    export type UpgradeCurrencyOffers = Array<{
        OfferID: string;
        StorefrontItemID: string;
        Offer: Store.Offer;
        DiscountedPercent: number;
    }>;

    export interface Bundle {
        ID: string;
        DataAssetID: string;
        CurrencyID: string;
        Items: Array<{
            Item: {
                ItemTypeID: string;
                ItemID: string;
                Amount: number;
            };
            BasePrice: number;
            CurrencyID: string;
            DiscountPercent: number;
            DiscountedPrice: number;
            IsPromoItem: boolean;
        }>;
        ItemOffers: Array<{
            BundleItemOfferID: string;
            Offer: Store.Offer;
            DiscountPercent: number;
            DiscountedCost: Store.Currency;
        }>;
        TotalBaseCost: Store.Currency;
        TotalDiscountedCost: Store.Currency;
        TotalDiscountPercent: number;
        DurationRemainingInSeconds: number;
        WholesaleOnly: boolean;
    }

    export interface Storefront {
        FeaturedBundle: {
            Bundle: Store.Bundle;
            Bundles: Array<Store.Bundle>;
            BundleRemainingDurationInSeconds: number;
        };
        SkinsPanelLayout: {
            SingleItemOffers: Array<string>;
            SingleItemStoreOffers: Array<Store.Offer>;
            SingleItemOffersRemainingDurationInSeconds: number;
        };
        UpgradeCurrencyStore: {
            UpgradeCurrencyOffers: Store.UpgradeCurrencyOffers;
        };
        BonusStore?: {
            BonusStoreOffers: Array<{
                BonusOfferID: string;
                Offer: Store.Offer;
                DiscountPercent: number;
                DiscountCosts: Store.Currency;
                IsSeen: boolean;
            }>;
            BonusStoreRemainingDurationInSeconds: number;
        };
        AccessoryStore: {
            AccessoryStoreOffers: Array<{
                Offer: Store.Offer;
                ContractID: string;
            }>;
            AccessoryStoreRemainingDurationInSeconds: number;
            StorefrontID: string;
        };
    }

    export interface Offers {
        Offers: Array<Store.Offer>;
        UpgradeCurrencyOffers: Store.UpgradeCurrencyOffers;
    }

    export interface Entitlements {
        ItemTypeID: string;
        Entitlements: Array<{
            TypeID: string;
            ItemID: string;
        }>;
    }

    export interface EntitlementsWithInstance extends Omit<Store.Entitlements, "Entitlements"> {
        Entitlements: Array<{
            TypeID: string;
            ItemID: string;
            InstanceID: string;
        }>;
    }

    export interface Agent {
        AgentStore: {
            AgentStoreOffers: Array<{
                AgentID: string;
                StoreOffers: Array<Store.Offer>;
            }>;
            FeaturedAgent: string;
        };
    }
}

export class Store extends WebClientService {
    public getWallet(subject: string): PromiseResponse<Store.Wallet> {
        return this.request.get(`${this.regionURL.url.playerData}/store/v1/wallet/${subject}`);
    }

    public getOffers(): PromiseResponse<Store.Offers> {
        return this.request.get(`${this.regionURL.url.playerData}/store/v1/offers/`);
    }

    public getEntitlements(subject: string, itemTypeId: "dd3bf334-87f3-40bd-b043-682a57a8dc3a"): PromiseResponse<Store.EntitlementsWithInstance>;
    public getEntitlements(subject: string, itemTypeId: ItemTypeId.ID): PromiseResponse<Store.Entitlements>;
    public getEntitlements(subject: string, itemTypeId: string): PromiseResponse<any> {
        return this.request.get(`${this.regionURL.url.playerData}/store/v1/entitlements/${subject}/${itemTypeId}`);
    }

    public get StoreFront(): StoreFront {
        return new StoreFront(this.request, this.regionURL);
    }
}

export class StoreFront extends WebClientService {
    public get(subject: string): PromiseResponse<Store.Storefront> {
        return this.request.get(`${this.regionURL.url.playerData}/store/v2/storefront/${subject}`);
    }

    public getAgent(): PromiseResponse<Store.Agent> {
        return this.request.get(`${this.regionURL.url.playerData}/store/v1/storefronts/agent`);
    }

    /**
     * @deprecated Please, Contact us if you find out how its works
     */
    public revealNightMarketOffers(subject: string): PromiseResponse<any> {
        return this.request.post(`${this.regionURL.url.playerData}/store/v2/storefront/${subject}/nightmarket/offers`);
    }
}
