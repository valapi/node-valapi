import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Agents {
    export interface Agents<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        description: ValorantApiComService.Languages<string, L>;
        developerName: string;
        characterTags: ValorantApiComService.Languages<Array<string>, L>;
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
            displayName: ValorantApiComService.Languages<string, L>;
            description: ValorantApiComService.Languages<string, L>;
            displayIcon: string;
            assetPath: string;
        };
        recruitmentData: {
            counterId: string;
            milestoneId: string;
            milestoneThreshold: number;
            useLevelVpCostOverride: boolean;
            levelVpCostOverride: number;
            startDate: string | Date;
            endDate: string | Date;
        };
        abilities: Array<{
            slot: string;
            displayName: ValorantApiComService.Languages<string, L>;
            description: ValorantApiComService.Languages<string, L>;
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

export class Agents<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(isPlayableCharacter?: boolean): Promise<ValorantApiComService.Response<Agents.Agents<L>[]>> {
        return this.axios.get(`/agents`, {
            params: {
                isPlayableCharacter: isPlayableCharacter
            }
        });
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Agents.Agents<L>>> {
        return this.axios.get(`/agents/${uuid}`);
    }
}
