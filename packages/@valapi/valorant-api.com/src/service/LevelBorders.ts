import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace LevelBorders {
    export interface LevelBorders {
        uuid: string;
        startingLevel: number;
        levelNumberAppearance: string;
        smallPlayerCardAppearance: string;
        assetPath: string;
    }
}

export class LevelBorders extends ValorantApiComService {
    public get(): Promise<ValorantApiCom.Response.Data<LevelBorders.LevelBorders[]>> {
        return this.axios.get("/levelborders");
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<LevelBorders.LevelBorders>> {
        return this.axios.get(`/levelborders/${uuid}`);
    }
}
