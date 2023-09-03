import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace PlayerTitles {
    export interface PlayerTitles<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        titleText: ValorantApiComService.Languages<string, L>;
        isHiddenIfNotOwned: boolean;
        assetPath: string;
    }
}

export class PlayerTitles<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<PlayerTitles.PlayerTitles<L>[]>> {
        return this.axios.get("/playertitles");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<PlayerTitles.PlayerTitles<L>>> {
        return this.axios.get(`/playertitles/${uuid}`);
    }
}
