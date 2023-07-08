import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Agents {
    export interface Agents {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        description: ValorantApiCom.Response.Languages<string>; // localized
        developerName: string;
        characterTags: ValorantApiCom.Response.Languages<Array<string>>; // localized
        displayIcon: string;
        displayIconSmall: string;
        bustPortrait: string;
        fullPortrait: string;
        fullPortraitV2: string;
        killfeedPortrait: string;
        background: string;
        backgroundGradientColors: Array<string>;
        assetPath: string;
        isFullPortraitRightFacing: boolean;
        isPlayableCharacter: boolean;
        isAvailableForTest: boolean;
        isBaseContent: boolean;
        role: {
            uuid: string;
            displayName: ValorantApiCom.Response.Languages<string>; // localized
            description: ValorantApiCom.Response.Languages<string>; // localized
            displayIcon: string;
            assetPath: string;
        };
        abilities: Array<{
            slot: string;
            displayName: ValorantApiCom.Response.Languages<string>; // localized
            description: ValorantApiCom.Response.Languages<string>; // localized
            displayIcon: string;
        }>;
        voiceLines: {
            minDuration: number;
            maxDuration: number;
            mediaList: Array<{
                id: number;
                wwise: string;
                wave: string;
            }>;
        };
    }
}

export class Agents extends ValorantApiComService {
    public get(isPlayableCharacter?: boolean): Promise<ValorantApiCom.Response.Data<Agents.Agents[]>> {
        return this.axios.get(`/agents`, {
            params: {
                isPlayableCharacter: isPlayableCharacter
            }
        });
    }

    public getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Agents.Agents>> {
        return this.axios.get(`/agents/${uuid}`);
    }
}
