import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Currencies {
    export interface Currencies {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        displayNameSingular: ValorantApiCom.Response.Languages<string>; // localized
        displayIcon: string;
        largeIcon: string;
        assetPath: string;
    }
}

export class Currencies extends ValorantApiComService {
    public async get(): Promise<ValorantApiCom.Response.Data<Currencies.Currencies[]>> {
        return await this.axios.get("/currencies");
    }

    public async getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Currencies.Currencies>> {
        return await this.axios.get(`/currencies/${uuid}`);
    }
}
