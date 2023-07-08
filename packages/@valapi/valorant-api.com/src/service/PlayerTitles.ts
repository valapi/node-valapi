import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

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
    public get(): Promise<ValorantApiCom.Response.Data<PlayerTitles.PlayerTitles[]>> {
        return this.axios.get("/playertitles");
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<PlayerTitles.PlayerTitles>> {
        return this.axios.get(`/playertitles/${uuid}`);
    }
}
