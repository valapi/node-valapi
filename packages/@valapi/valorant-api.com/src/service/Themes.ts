import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Themes {
    export interface Themes<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        displayIcon: string;
        storeFeaturedImage: string;
        assetPath: string;
    }
}

export class Themes<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Themes.Themes<L>[]>> {
        return this.axios.get("/themes");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Themes.Themes<L>>> {
        return this.axios.get(`/themes/${uuid}`);
    }
}
