import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Maps {
    export interface Maps<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        narrativeDescription: ValorantApiComService.Languages<string, L>;
        tacticalDescription: ValorantApiComService.Languages<string, L>;
        coordinates: ValorantApiComService.Languages<string, L>;
        displayIcon: string;
        listViewIcon: string;
        splash: string;
        assetPath: string;
        mapUrl: string;
        xMultiplier: number;
        yMultiplier: number;
        xScalarToAdd: number;
        yScalarToAdd: number;
        callouts: Array<{
            regionName: ValorantApiComService.Languages<string, L>;
            superRegionName: ValorantApiComService.Languages<string, L>;
            location: {
                x: number;
                y: number;
            };
        }>;
    }
}

export class Maps<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Maps.Maps<L>[]>> {
        return this.axios.get("/maps");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Maps.Maps<L>>> {
        return this.axios.get(`/maps/${uuid}`);
    }
}
