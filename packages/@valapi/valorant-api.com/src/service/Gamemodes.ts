import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Gamemodes {
    export interface Gamemodes {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        duration: ValorantApiCom.Response.Languages<string>; // localized
        allowsMatchTimeouts: boolean;
        isTeamVoiceAllowed: boolean;
        isMinimapHidden: boolean;
        orbCount: number;
        /**
         * `-1` means no data was available
         */
        roundsPerHalf: number;
        teamRoles: Array<string>;
        gameFeatureOverrides: Array<{
            featureName: string;
            state: boolean;
        }>;
        gameRuleBoolOverrides: Array<{
            ruleName: string;
            state: boolean;
        }>;
        displayIcon: string;
        assetPath: string;
    }

    export interface GamemodeEquippables {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        category: string;
        displayIcon: string;
        killStreamIcon: string;
        assetPath: string;
    }
}

export class Gamemodes extends ValorantApiComService {
    public get(): Promise<ValorantApiCom.Response.Data<Gamemodes.Gamemodes[]>> {
        return this.axios.get("/gamemodes");
    }

    public getEquippables(): Promise<ValorantApiCom.Response.Data<Gamemodes.GamemodeEquippables[]>> {
        return this.axios.get(`/gamemodes/equippables`);
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Gamemodes.Gamemodes>> {
        return this.axios.get(`/gamemodes/${uuid}`);
    }

    public getEquippableByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Gamemodes.GamemodeEquippables>> {
        return this.axios.get(`/gamemodes/equippables/${uuid}`);
    }
}
