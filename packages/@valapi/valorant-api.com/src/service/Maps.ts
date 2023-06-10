import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Maps {
    export interface Maps {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        coordinates: ValorantApiCom.Response.Languages<string>; // localized
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
            regionName: ValorantApiCom.Response.Languages<string>; // localized
            superRegionName: ValorantApiCom.Response.Languages<string>; // localized
            location: {
                x: number;
                y: number;
            };
        }>;
    }
}

export class Maps extends ValorantApiComService {
    public async get(): Promise<ValorantApiCom.Response.Data<Maps.Maps[]>> {
        return await this.axios.get("/maps");
    }

    public async getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Maps.Maps>> {
        return await this.axios.get(`/maps/${uuid}`);
    }
}
