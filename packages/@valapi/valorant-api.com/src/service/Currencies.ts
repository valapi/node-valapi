import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Currencies {
    export interface Currencies<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        displayNameSingular: ValorantApiComService.Languages<string, L>;
        displayIcon: string;
        largeIcon: string;
        assetPath: string;
    }
}

export class Currencies<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Currencies.Currencies<L>[]>> {
        return this.axios.get("/currencies");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Currencies.Currencies<L>>> {
        return this.axios.get(`/currencies/${uuid}`);
    }
}
