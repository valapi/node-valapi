import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Seasons {
    export interface Seasons<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
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

export class Seasons<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Seasons.Seasons<L>[]> {
        return this.request.get(`/v1/seasons`);
    }

    public getCompetitiveSeasons(): Response<Seasons.CompetitiveSeasons[]> {
        return this.request.get(`/v1/seasons/competitive`);
    }

    public getByUuid(uuid: string): Response<Seasons.Seasons<L>> {
        return this.request.get(`/v1/seasons/${uuid}`);
    }

    public getCompetitiveSeasonByUuid(uuid: string): Response<Seasons.CompetitiveSeasons> {
        return this.request.get(`/v1/seasons/competitive/${uuid}`);
    }
}
