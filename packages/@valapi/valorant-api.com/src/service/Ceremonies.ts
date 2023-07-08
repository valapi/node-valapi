import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Ceremonies {
    export interface Ceremonies {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        assetPath: string;
    }
}

export class Ceremonies extends ValorantApiComService {
    public get(): Promise<ValorantApiCom.Response.Data<Ceremonies.Ceremonies[]>> {
        return this.axios.get("/ceremonies");
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Ceremonies.Ceremonies>> {
        return this.axios.get(`/ceremonies/${uuid}`);
    }
}
