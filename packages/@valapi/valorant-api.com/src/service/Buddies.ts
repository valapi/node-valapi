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
    public async get(): Promise<ValorantApiCom.Response.Data<Buddies.Buddies[]>> {
        return await this.axios.get("/buddies");
    }

    public async getLevels(): Promise<ValorantApiCom.Response.Data<Buddies.BuddyLevels[]>> {
        return await this.axios.get(`/buddies/levels`);
    }

    public async getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Buddies.Buddies>> {
        return await this.axios.get(`/buddies/${uuid}`);
    }

    public async getLevelByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Buddies.BuddyLevels>> {
        return await this.axios.get(`/buddies/levels/${uuid}`);
    }
}
