import type { ValorantApiCom } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";

export namespace ContentTiers {
    export interface ContentTiers {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        devName: string;
        rank: number;
        juiceValue: number;
        juiceCost: number;
        highlightColor: string;
        displayIcon: string;
        assetPath: string;
    }
}

export class ContentTiers extends ValorantApiComService {
    public async get(): Promise<ValorantApiCom.Response.Data<ContentTiers.ContentTiers[]>> {
        return await this.axios.get("/contenttiers");
    }

    public async getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<ContentTiers.ContentTiers>> {
        return await this.axios.get(`/contenttiers/${uuid}`);
    }
}
