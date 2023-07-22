import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace ContentTiers {
    export interface ContentTiers<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        devName: string;
        rank: number;
        juiceValue: number;
        juiceCost: number;
        highlightColor: string;
        displayIcon: string;
        assetPath: string;
    }
}

export class ContentTiers<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<ContentTiers.ContentTiers<L>[]>> {
        return this.axios.get("/contenttiers");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<ContentTiers.ContentTiers<L>>> {
        return this.axios.get(`/contenttiers/${uuid}`);
    }
}
