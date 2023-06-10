import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Objectives {
    /**
     * ! unknown from website
     */
    export interface Objectives {
        uuid: string;
        directive: string;
        assetPath: string;
    }
}

export class Objectives extends ValorantApiComService {
    public async get(): Promise<ValorantApiCom.Response.Data<Objectives.Objectives[]>> {
        return await this.axios.get("/objectives");
    }

    public async getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Objectives.Objectives>> {
        return await this.axios.get(`/objectives/${uuid}`);
    }
}
