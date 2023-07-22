import { ValorantApiComService } from "../client/ValorantApiComService";

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
    public get(): Promise<ValorantApiComService.Response<LevelBorders.LevelBorders[]>> {
        return this.axios.get("/levelborders");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<LevelBorders.LevelBorders>> {
        return this.axios.get(`/levelborders/${uuid}`);
    }
}
