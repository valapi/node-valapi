import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Ceremonies {
    export interface Ceremonies<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        assetPath: string;
    }
}

export class Ceremonies<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Ceremonies.Ceremonies<L>[]>> {
        return this.axios.get("/ceremonies");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Ceremonies.Ceremonies<L>>> {
        return this.axios.get(`/ceremonies/${uuid}`);
    }
}
