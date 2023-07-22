import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Seasons {
    export interface Seasons<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
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

export class Seasons<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Seasons.Seasons<L>[]>> {
        return this.axios.get("/seasons");
    }

    public getCompetitiveSeasons(): Promise<ValorantApiComService.Response<Seasons.CompetitiveSeasons[]>> {
        return this.axios.get("/seasons/competitive");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Seasons.Seasons<L>>> {
        return this.axios.get(`/seasons/${uuid}`);
    }

    public getCompetitiveSeasonByUuid(uuid: string): Promise<ValorantApiComService.Response<Seasons.CompetitiveSeasons>> {
        return this.axios.get(`/seasons/competitive/${uuid}`);
    }
}
