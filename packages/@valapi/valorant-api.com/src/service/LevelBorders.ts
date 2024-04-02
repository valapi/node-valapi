import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace LevelBorders {
    export interface LevelBorders<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        startingLevel: number;
        levelNumberAppearance: string;
        smallPlayerCardAppearance: string;
        assetPath: string;
    }
}

export class LevelBorders<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<LevelBorders.LevelBorders<L>[]>> {
        return this.axios.get("/levelborders");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<LevelBorders.LevelBorders<L>>> {
        return this.axios.get(`/levelborders/${uuid}`);
    }
}
