import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Buddies {
    export interface BuddyLevels {
        uuid: string;
        charmLevel: number;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        displayIcon: string;
        assetPath: string;
    }

    export interface Buddies {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        isHiddenIfNotOwned: boolean;
        themeUuid: string;
        displayIcon: string;
        assetPath: string;
        levels: Array<Buddies.BuddyLevels>;
    }
}

export class Buddies extends ValorantApiComService {
    public get(): Promise<ValorantApiCom.Response.Data<Buddies.Buddies[]>> {
        return this.axios.get("/buddies");
    }

    public getLevels(): Promise<ValorantApiCom.Response.Data<Buddies.BuddyLevels[]>> {
        return this.axios.get(`/buddies/levels`);
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Buddies.Buddies>> {
        return this.axios.get(`/buddies/${uuid}`);
    }

    public getLevelByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Buddies.BuddyLevels>> {
        return this.axios.get(`/buddies/levels/${uuid}`);
    }
}
