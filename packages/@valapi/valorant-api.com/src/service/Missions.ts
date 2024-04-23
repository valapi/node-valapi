import { ValorantApiComService } from "../client/ValorantApiComService";
import type { Response } from "../client/ValorantApiComService";

export namespace Missions {
    /**
     * ! unknown from website
     */
    export interface Missions {
        uuid: string;
        displayName: string;
        title: string;
        type: string;
        xpGrant: number;
        progressToComplete: number;
        activationDate: string | Date;
        expirationDate: string | Date;
        tags: Array<string>;
        objectives: Array<{
            objectiveUuid: string;
            value: number;
        }>;
        assetPath: string;
    }
}

export class Missions extends ValorantApiComService {
    public get(): Response<Missions.Missions[]> {
        return this.request.get("/missions");
    }

    public getByUuid(uuid: string): Response<Missions.Missions> {
        return this.request.get(`/missions/${uuid}`);
    }
}
