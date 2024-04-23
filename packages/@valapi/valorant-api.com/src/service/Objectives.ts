import { ValorantApiComService } from "../client/ValorantApiComService";
import type { Response } from "../client/ValorantApiComService";

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
    public get(): Response<Objectives.Objectives[]> {
        return this.request.get("/objectives");
    }

    public getByUuid(uuid: string): Response<Objectives.Objectives> {
        return this.request.get(`/objectives/${uuid}`);
    }
}
