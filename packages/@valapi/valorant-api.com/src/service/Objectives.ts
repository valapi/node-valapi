import { ValorantApiComService } from "../client/ValorantApiComService";

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
    public get(): Promise<ValorantApiComService.Response<Objectives.Objectives[]>> {
        return this.axios.get("/objectives");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Objectives.Objectives>> {
        return this.axios.get(`/objectives/${uuid}`);
    }
}
