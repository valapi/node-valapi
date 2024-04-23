import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Sprays {
    export interface SprayLevels<L extends Language> {
        uuid: string;
        sprayLevel: number;
        displayName: LanguageResponse<string, L>;
        displayIcon: string;
        assetPath: string;
    }

    export interface Sprays<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        category: string;
        themeUuid: string;
        isNullSpray: boolean;
        hideIfNotOwned: boolean;
        displayIcon: string;
        fullIcon: string;
        fullTransparentIcon: string;
        animationPng: string;
        animationGif: string;
        assetPath: string;
        levels: Array<Sprays.SprayLevels<L>>;
    }
}

export class Sprays<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Sprays.Sprays<L>[]> {
        return this.request.get("/sprays");
    }

    public getLevels(): Response<Sprays.SprayLevels<L>[]> {
        return this.request.get(`/sprays/levels`);
    }

    public getByUuid(uuid: string): Response<Sprays.Sprays<L>> {
        return this.request.get(`/sprays/${uuid}`);
    }

    public getLevelByUuid(uuid: string): Response<Sprays.SprayLevels<L>> {
        return this.request.get(`/sprays/levels/${uuid}`);
    }
}
