import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace PlayerCards {
    export interface PlayerCards<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        isHiddenIfNotOwned: boolean;
        themeUuid: string;
        displayIcon: string;
        smallArt: string;
        wideArt: string;
        largeArt: string;
        assetPath: string;
    }
}

export class PlayerCards<L extends Language = any> extends ValorantApiComService {
    public get(): Response<PlayerCards.PlayerCards<L>[]> {
        return this.request.get(`/v1/playercards`);
    }

    public getByUuid(uuid: string): Response<PlayerCards.PlayerCards<L>> {
        return this.request.get(`/v1/playercards/${uuid}`);
    }
}
