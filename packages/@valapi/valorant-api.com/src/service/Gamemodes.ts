import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Gamemodes {
    export interface Gamemodes<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        duration: LanguageResponse<string, L>;
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

    export interface GamemodeEquippables<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        category: string;
        displayIcon: string;
        killStreamIcon: string;
        assetPath: string;
    }
}

export class Gamemodes<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Gamemodes.Gamemodes<L>[]> {
        return this.request.get("/gamemodes");
    }

    public getEquippables(): Response<Gamemodes.GamemodeEquippables<L>[]> {
        return this.request.get(`/gamemodes/equippables`);
    }

    public getByUuid(uuid: string): Response<Gamemodes.Gamemodes<L>> {
        return this.request.get(`/gamemodes/${uuid}`);
    }

    public getEquippableByUuid(uuid: string): Response<Gamemodes.GamemodeEquippables<L>> {
        return this.request.get(`/gamemodes/equippables/${uuid}`);
    }
}
