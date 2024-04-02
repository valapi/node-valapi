import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Gear {
    export interface Gear<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        description: ValorantApiComService.Languages<string, L>;
        displayIcon: string;
        assetPath: string;
        shopData: {
            cost: number;
            category: string;
            shopOrderPriority: number;
            categoryText: ValorantApiComService.Languages<string, L>;
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

export class Gear<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Gear.Gear<L>[]>> {
        return this.axios.get("/gear");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Gear.Gear<L>>> {
        return this.axios.get(`/gear/${uuid}`);
    }
}
