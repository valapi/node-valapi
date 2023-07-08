import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Gear {
    export interface Gear {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        description: ValorantApiCom.Response.Languages<string>; // localized
        displayIcon: string;
        assetPath: string;
        shopData: {
            cost: number;
            category: string;
            categoryText: ValorantApiCom.Response.Languages<string>; // localized
            gridPosition: {
                row: number;
                column: number;
            };
            canBeTrashed: boolean;
            image: string;
            newImage: string;
            newImage2: string;
            assetPath: string;
        };
    }
}

export class Gear extends ValorantApiComService {
    public get(): Promise<ValorantApiCom.Response.Data<Gear.Gear[]>> {
        return this.axios.get("/gear");
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Gear.Gear>> {
        return this.axios.get(`/gear/${uuid}`);
    }
}
