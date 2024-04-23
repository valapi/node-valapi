import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Ceremonies {
    export interface Ceremonies<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        assetPath: string;
    }
}

export class Ceremonies<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Ceremonies.Ceremonies<L>[]> {
        return this.request.get("/ceremonies");
    }

    public getByUuid(uuid: string): Response<Ceremonies.Ceremonies<L>> {
        return this.request.get(`/ceremonies/${uuid}`);
    }
}
