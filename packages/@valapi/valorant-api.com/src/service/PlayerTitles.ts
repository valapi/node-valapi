import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace PlayerTitles {
    export interface PlayerTitles<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        titleText: LanguageResponse<string, L>;
        isHiddenIfNotOwned: boolean;
        assetPath: string;
    }
}

export class PlayerTitles<L extends Language = any> extends ValorantApiComService {
    public get(): Response<PlayerTitles.PlayerTitles<L>[]> {
        return this.request.get(`/v1/playertitles`);
    }

    public getByUuid(uuid: string): Response<PlayerTitles.PlayerTitles<L>> {
        return this.request.get(`/v1/playertitles/${uuid}`);
    }
}
