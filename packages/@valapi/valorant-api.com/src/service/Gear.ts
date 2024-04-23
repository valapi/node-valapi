import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Gear {
    export interface Gear<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        description: LanguageResponse<string, L>;
        displayIcon: string;
        assetPath: string;
        shopData: {
            cost: number;
            category: string;
            shopOrderPriority: number;
            categoryText: LanguageResponse<string, L>;
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

export class Gear<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Gear.Gear<L>[]> {
        return this.request.get("/gear");
    }

    public getByUuid(uuid: string): Response<Gear.Gear<L>> {
        return this.request.get(`/gear/${uuid}`);
    }
}
