import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Buddies {
    export interface BuddyLevels<L extends Language> {
        uuid: string;
        charmLevel: number;
        hideIfNotOwned: boolean;
        displayName: LanguageResponse<string, L>;
        displayIcon: string;
        assetPath: string;
    }

    export interface Buddies<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        isHiddenIfNotOwned: boolean;
        themeUuid: string;
        displayIcon: string;
        assetPath: string;
        levels: Array<Buddies.BuddyLevels<L>>;
    }
}

export class Buddies<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Buddies.Buddies<L>[]> {
        return this.request.get("/buddies");
    }

    public getLevels(): Response<Buddies.BuddyLevels<L>[]> {
        return this.request.get(`/buddies/levels`);
    }

    public getByUuid(uuid: string): Response<Buddies.Buddies<L>> {
        return this.request.get(`/buddies/${uuid}`);
    }

    public getLevelByUuid(uuid: string): Response<Buddies.BuddyLevels<L>> {
        return this.request.get(`/buddies/levels/${uuid}`);
    }
}
