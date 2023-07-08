import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Bundles {
    export interface Bundles {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        displayNameSubText: ValorantApiCom.Response.Languages<string>; // localized
        description: ValorantApiCom.Response.Languages<string>; // localized
        extraDescription: ValorantApiCom.Response.Languages<string>; // localized
        promoDescription: ValorantApiCom.Response.Languages<string>; // localized
        useAdditionalContext: boolean;
        displayIcon: string;
        displayIcon2: string;
        verticalPromoImage: string;
        assetPath: string;
    }
}

export class Bundles extends ValorantApiComService {
    public get(): Promise<ValorantApiCom.Response.Data<Bundles.Bundles[]>> {
        return this.axios.get("/bundles");
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Bundles.Bundles>> {
        return this.axios.get(`/bundles/${uuid}`);
    }
}
