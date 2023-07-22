import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Bundles {
    export interface Bundles<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        displayNameSubText: ValorantApiComService.Languages<string, L>;
        description: ValorantApiComService.Languages<string, L>;
        extraDescription: ValorantApiComService.Languages<string, L>;
        promoDescription: ValorantApiComService.Languages<string, L>;
        useAdditionalContext: boolean;
        displayIcon: string;
        displayIcon2: string;
        verticalPromoImage: string;
        assetPath: string;
    }
}

export class Bundles<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Bundles.Bundles<L>[]>> {
        return this.axios.get("/bundles");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Bundles.Bundles<L>>> {
        return this.axios.get(`/bundles/${uuid}`);
    }
}
