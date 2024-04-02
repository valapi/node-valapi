import { ValorantApiComService } from "../client/ValorantApiComService";

export namespace Version {
    export interface Version {
        manifestId: string;
        branch: string;
        version: string;
        buildVersion: string;
        engineVersion: string;
        riotClientVersion: string;
        riotClientBuild: string;
        buildDate: string | Date;
    }
}

export class Version extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Version.Version>> {
        return this.axios.get("/version");
    }
}
