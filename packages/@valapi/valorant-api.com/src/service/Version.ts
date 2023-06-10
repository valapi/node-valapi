import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Version {
    export interface Version {
        manifestId: string;
        branch: string;
        version: string;
        buildVersion: string;
        engineVersion: string;
        riotClientVersion: string;
        buildDate: string | Date;
    }
}

export class Version extends ValorantApiComService {
    public async get(): Promise<ValorantApiCom.Response.Data<Version.Version>> {
        return await this.axios.get("/version");
    }
}
