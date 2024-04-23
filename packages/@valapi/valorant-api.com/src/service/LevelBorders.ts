import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace LevelBorders {
    export interface LevelBorders<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        startingLevel: number;
        levelNumberAppearance: string;
        smallPlayerCardAppearance: string;
        assetPath: string;
    }
}

export class LevelBorders<L extends Language = any> extends ValorantApiComService {
    public get(): Response<LevelBorders.LevelBorders<L>[]> {
        return this.request.get("/levelborders");
    }

    public getByUuid(uuid: string): Response<LevelBorders.LevelBorders<L>> {
        return this.request.get(`/levelborders/${uuid}`);
    }
}
