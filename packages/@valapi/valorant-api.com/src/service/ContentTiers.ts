import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

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
    public get(): Promise<ValorantApiCom.Response.Data<ContentTiers.ContentTiers[]>> {
        return this.axios.get("/contenttiers");
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<ContentTiers.ContentTiers>> {
        return this.axios.get(`/contenttiers/${uuid}`);
    }
}
