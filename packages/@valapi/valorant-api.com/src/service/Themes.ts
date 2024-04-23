import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Themes {
    export interface Themes<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        displayIcon: string;
        storeFeaturedImage: string;
        assetPath: string;
    }
}

export class Themes<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Themes.Themes<L>[]> {
        return this.request.get("/themes");
    }

    public getByUuid(uuid: string): Response<Themes.Themes<L>> {
        return this.request.get(`/themes/${uuid}`);
    }
}
