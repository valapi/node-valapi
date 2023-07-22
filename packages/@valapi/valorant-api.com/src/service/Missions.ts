import { ValorantApiComService } from "../client/ValorantApiComService";

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
        activationDate: Date;
        expirationDate: Date;
        tags: Array<string>;
        objectives: Array<{
            objectiveUuid: string;
            value: number;
        }>;
        assetPath: string;
    }
}

export class Missions extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Missions.Missions[]>> {
        return this.axios.get("/missions");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Missions.Missions>> {
        return this.axios.get(`/missions/${uuid}`);
    }
}
