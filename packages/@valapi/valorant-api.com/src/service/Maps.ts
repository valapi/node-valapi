import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Maps {
    export interface Maps<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        narrativeDescription: LanguageResponse<string, L>;
        tacticalDescription: LanguageResponse<string, L>;
        coordinates: LanguageResponse<string, L>;
        displayIcon: string;
        listViewIcon: string;
        listViewIconTall: string;
        splash: string;
        stylizedBackgroundImage: string;
        premierBackgroundImage: string;
        assetPath: string;
        mapUrl: string;
        xMultiplier: number;
        yMultiplier: number;
        xScalarToAdd: number;
        yScalarToAdd: number;
        callouts: Array<{
            regionName: LanguageResponse<string, L>;
            superRegionName: LanguageResponse<string, L>;
            location: {
                x: number;
                y: number;
            };
        }>;
    }
}

export class Maps<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Maps.Maps<L>[]> {
        return this.request.get(`/v1/maps`);
    }

    public getByUuid(uuid: string): Response<Maps.Maps<L>> {
        return this.request.get(`/v1/maps/${uuid}`);
    }
}
