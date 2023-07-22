import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Buddies {
    export interface BuddyLevels<L extends ValorantApiCom.Language> {
        uuid: string;
        charmLevel: number;
        displayName: ValorantApiComService.Languages<string, L>;
        displayIcon: string;
        assetPath: string;
    }

    export interface Buddies<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        isHiddenIfNotOwned: boolean;
        themeUuid: string;
        displayIcon: string;
        assetPath: string;
        levels: Array<Buddies.BuddyLevels<L>>;
    }
}

export class Buddies<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Buddies.Buddies<L>[]>> {
        return this.axios.get("/buddies");
    }

    public getLevels(): Promise<ValorantApiComService.Response<Buddies.BuddyLevels<L>[]>> {
        return this.axios.get(`/buddies/levels`);
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Buddies.Buddies<L>>> {
        return this.axios.get(`/buddies/${uuid}`);
    }

    public getLevelByUuid(uuid: string): Promise<ValorantApiComService.Response<Buddies.BuddyLevels<L>>> {
        return this.axios.get(`/buddies/levels/${uuid}`);
    }
}
