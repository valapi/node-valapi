import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Sprays {
    export interface SprayLevels {
        uuid: string;
        sprayLevel: number;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        displayIcon: string;
        assetPath: string;
    }

    export interface Sprays {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        category: string;
        themeUuid: string;
        displayIcon: string;
        fullIcon: string;
        fullTransparentIcon: string;
        animationPng: string;
        animationGif: string;
        assetPath: string;
        levels: Array<Sprays.SprayLevels>;
    }
}

export class Sprays extends ValorantApiComService {
    public get(): Promise<ValorantApiCom.Response.Data<Sprays.Sprays[]>> {
        return this.axios.get("/sprays");
    }

    public getLevels(): Promise<ValorantApiCom.Response.Data<Sprays.SprayLevels[]>> {
        return this.axios.get(`/sprays/levels`);
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Sprays.Sprays>> {
        return this.axios.get(`/sprays/${uuid}`);
    }

    public getLevelByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Sprays.SprayLevels>> {
        return this.axios.get(`/sprays/levels/${uuid}`);
    }
}
