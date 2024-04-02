import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Gamemodes {
    export interface Gamemodes<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        duration: ValorantApiComService.Languages<string, L>;
        economyType: string;
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
        listViewIconTall: string;
        assetPath: string;
    }

    export interface GamemodeEquippables<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        category: string;
        displayIcon: string;
        killStreamIcon: string;
        assetPath: string;
    }
}

export class Gamemodes<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Gamemodes.Gamemodes<L>[]>> {
        return this.axios.get("/gamemodes");
    }

    public getEquippables(): Promise<ValorantApiComService.Response<Gamemodes.GamemodeEquippables<L>[]>> {
        return this.axios.get(`/gamemodes/equippables`);
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Gamemodes.Gamemodes<L>>> {
        return this.axios.get(`/gamemodes/${uuid}`);
    }

    public getEquippableByUuid(uuid: string): Promise<ValorantApiComService.Response<Gamemodes.GamemodeEquippables<L>>> {
        return this.axios.get(`/gamemodes/equippables/${uuid}`);
    }
}
