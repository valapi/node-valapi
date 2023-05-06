import type { ValAxios } from "@valapi/lib";

import { WebClientService } from "../client/WebClientService";

export namespace Personalization {
    // response

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
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<ValAxios.Response<Required<Personalization.Loadout>>>}
     */
    public async getPlayerLoadout(subject: string): Promise<ValAxios.Response<Required<Personalization.Loadout>>> {
        return await this.axios.get(`${this.apiRegion.url.playerData}/personalization/v2/players/${subject}/playerloadout`);
    }

    /**
     * @param {string} subject Player UUID
     * @param {Omit<Personalization.Loadout, "Subject" | "Version">} loadout Loadout
     * @returns {Promise<ValAxios.Response<Personalization.Loadout>>}
     */
    public async playerLoadoutUpdate(subject: string, loadout: Omit<Personalization.Loadout, "Subject" | "Version">): Promise<ValAxios.Response<Personalization.Loadout>> {
        return await this.axios.put(`${this.apiRegion.url.playerData}/personalization/v2/players/${subject}/playerloadout`, loadout);
    }
}
