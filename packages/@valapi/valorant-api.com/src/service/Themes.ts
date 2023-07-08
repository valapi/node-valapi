import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Themes {
    export interface Themes {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        displayIcon: string;
        storeFeaturedImage: string;
        assetPath: string;
    }
}

export class Themes extends ValorantApiComService {
    public get(): Promise<ValorantApiCom.Response.Data<Themes.Themes[]>> {
        return this.axios.get("/themes");
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Themes.Themes>> {
        return this.axios.get(`/themes/${uuid}`);
    }
}
