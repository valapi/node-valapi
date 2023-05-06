import type { ValorantApiCom } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";

export namespace Seasons {
    export interface Seasons {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        type: string;
        startTime: string | Date;
        endTime: string | Date;
        parentUuid: string;
        assetPath: string;
    }

    export interface CompetitiveSeasons {
        uuid: string;
        startTime: string | Date;
        endTime: string | Date;
        seasonUuid: string;
        competitiveTiersUuid: string;
        borders: Array<{
            uuid: string;
            level: number;
            winsRequired: number;
            displayIcon: string;
            smallIcon: string;
            assetPath: string;
        }>;
        assetPath: string;
    }
}

export class Seasons extends ValorantApiComService {
    public async get(): Promise<ValorantApiCom.Response.Data<Seasons.Seasons[]>> {
        return await this.axios.get("/seasons");
    }

    public async getCompetitiveSeasons(): Promise<ValorantApiCom.Response.Data<Seasons.CompetitiveSeasons[]>> {
        return await this.axios.get("/seasons/competitive");
    }

    public async getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Seasons.Seasons>> {
        return await this.axios.get(`/seasons/${uuid}`);
    }

    public async getCompetitiveSeasonByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Seasons.CompetitiveSeasons>> {
        return await this.axios.get(`/seasons/competitive/${uuid}`);
    }
}
