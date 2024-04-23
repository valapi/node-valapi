import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Currencies {
    export interface Currencies<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        displayNameSingular: LanguageResponse<string, L>;
        displayIcon: string;
        largeIcon: string;
        assetPath: string;
    }
}

export class Currencies<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Currencies.Currencies<L>[]> {
        return this.request.get("/currencies");
    }

    public getByUuid(uuid: string): Response<Currencies.Currencies<L>> {
        return this.request.get(`/currencies/${uuid}`);
    }
}
