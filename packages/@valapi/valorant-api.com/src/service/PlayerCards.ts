import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace PlayerCards {
    /**
     * ! unknown from website
     */
    export interface PlayerCards<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        isHiddenIfNotOwned: boolean;
        themeUuid: string;
        displayIcon: string;
        smallArt: string;
        wideArt: string;
        largeArt: string;
        assetPath: string;
    }
}

export class PlayerCards<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<PlayerCards.PlayerCards<L>[]>> {
        return this.axios.get("/playercards");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<PlayerCards.PlayerCards<L>>> {
        return this.axios.get(`/playercards/${uuid}`);
    }
}
