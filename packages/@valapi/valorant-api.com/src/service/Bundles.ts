import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Bundles {
    export interface Bundles<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        displayNameSubText: LanguageResponse<string, L>;
        description: LanguageResponse<string, L>;
        extraDescription: LanguageResponse<string, L>;
        promoDescription: LanguageResponse<string, L>;
        useAdditionalContext: boolean;
        displayIcon: string;
        displayIcon2: string;
        logoIcon: string;
        verticalPromoImage: string;
        assetPath: string;
    }
}

export class Bundles<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Bundles.Bundles<L>[]> {
        return this.request.get(`/v1/bundles`);
    }

    public getByUuid(uuid: string): Response<Bundles.Bundles<L>> {
        return this.request.get(`/v1/bundles/${uuid}`);
    }
}
