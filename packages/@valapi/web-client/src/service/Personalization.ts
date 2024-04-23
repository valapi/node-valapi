import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace Personalization {
    export interface LoadoutGun {
        ID: string;
        SkinID: string;
        SkinLevelID: string;
        ChromaID: string;
        Attachments: Array<any>; // * unknown
    }

    export interface LoadoutGunWithCharm extends Personalization.LoadoutGun {
        CharmInstanceID: string;
        CharmID: string;
        CharmLevelID: string;
    }

    export interface Loadout {
        Subject: string;
        Version: number;
        Guns: Array<Personalization.LoadoutGun | Personalization.LoadoutGunWithCharm>;
        Sprays: Array<{
            EquipSlotID: string;
            SprayID: string;
            SprayLevelID: any; // * unknown
        }>;
        Identity: {
            PlayerCardID: string;
            PlayerTitleID: string;
            AccountLevel: number;
            PreferredLevelBorderID: string;
            HideAccountLevel: boolean;
        };
        Incognito: boolean;
    }
}

export class Personalization extends WebClientService {
    public getPlayerLoadout(subject: string): PromiseResponse<Required<Personalization.Loadout>> {
        return this.request.get(`${this.regionURL.url.playerData}/personalization/v2/players/${subject}/playerloadout`);
    }

    public changePlayerLoadout(subject: string, loadout: Omit<Personalization.Loadout, "Subject" | "Version">): PromiseResponse<Personalization.Loadout> {
        return this.request.put(`${this.regionURL.url.playerData}/personalization/v2/players/${subject}/playerloadout`, loadout);
    }
}
