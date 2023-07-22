import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Sprays {
    export interface SprayLevels<L extends ValorantApiCom.Language> {
        uuid: string;
        sprayLevel: number;
        displayName: ValorantApiComService.Languages<string, L>;
        displayIcon: string;
        assetPath: string;
    }

    export interface Sprays<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        category: string;
        themeUuid: string;
        displayIcon: string;
        fullIcon: string;
        fullTransparentIcon: string;
        animationPng: string;
        animationGif: string;
        assetPath: string;
        levels: Array<Sprays.SprayLevels<L>>;
    }
}

export class Sprays<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Sprays.Sprays<L>[]>> {
        return this.axios.get("/sprays");
    }

    public getLevels(): Promise<ValorantApiComService.Response<Sprays.SprayLevels<L>[]>> {
        return this.axios.get(`/sprays/levels`);
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Sprays.Sprays<L>>> {
        return this.axios.get(`/sprays/${uuid}`);
    }

    public getLevelByUuid(uuid: string): Promise<ValorantApiComService.Response<Sprays.SprayLevels<L>>> {
        return this.axios.get(`/sprays/levels/${uuid}`);
    }
}
