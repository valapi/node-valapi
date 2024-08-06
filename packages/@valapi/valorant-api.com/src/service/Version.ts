import { ValorantApiComService } from "../client/ValorantApiComService";
import type { Response } from "../client/ValorantApiComService";

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
    public get(): Response<Version.Version> {
        return this.request.get(`/v1/version`);
    }
}
