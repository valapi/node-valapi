import type { ValorantApiCom } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";

export namespace PlayerTitles {
    /**
     * ! unknown from website
     */
    export interface PlayerTitles {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        titleText: ValorantApiCom.Response.Languages<string>; // localized
        isHiddenIfNotOwned: boolean;
        assetPath: string;
    }
}

export class PlayerTitles extends ValorantApiComService {
    public async get(): Promise<ValorantApiCom.Response.Data<PlayerTitles.PlayerTitles[]>> {
        return await this.axios.get("/playertitles");
    }

    public async getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<PlayerTitles.PlayerTitles>> {
        return await this.axios.get(`/playertitles/${uuid}`);
    }
}
