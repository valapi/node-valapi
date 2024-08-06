import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace ContentTiers {
    export interface ContentTiers<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        devName: string;
        rank: number;
        juiceValue: number;
        juiceCost: number;
        highlightColor: string;
        displayIcon: string;
        assetPath: string;
    }
}

export class ContentTiers<L extends Language = any> extends ValorantApiComService {
    public get(): Response<ContentTiers.ContentTiers<L>[]> {
        return this.request.get(`/v1/contenttiers`);
    }

    public getByUuid(uuid: string): Response<ContentTiers.ContentTiers<L>> {
        return this.request.get(`/v1/contenttiers/${uuid}`);
    }
}
