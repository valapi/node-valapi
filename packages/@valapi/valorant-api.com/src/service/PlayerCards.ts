import type { ValorantApiCom } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";

export namespace PlayerCards {
    /**
     * ! unknown from website
     */
    export interface PlayerCards {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        isHiddenIfNotOwned: boolean;
        themeUuid: string;
        displayIcon: string;
        smallArt: string;
        wideArt: string;
        largeArt: string;
        assetPath: string;
    }
}

export class PlayerCards extends ValorantApiComService {
    public async get(): Promise<ValorantApiCom.Response.Data<PlayerCards.PlayerCards[]>> {
        return await this.axios.get("/playercards");
    }

    public async getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<PlayerCards.PlayerCards>> {
        return await this.axios.get(`/playercards/${uuid}`);
    }
}
