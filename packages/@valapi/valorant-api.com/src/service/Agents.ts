import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Agents {
    export interface Agents<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        description: LanguageResponse<string, L>;
        developerName: string;
        characterTags: LanguageResponse<Array<string>, L>;
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
            displayName: LanguageResponse<string, L>;
            description: LanguageResponse<string, L>;
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
            displayName: LanguageResponse<string, L>;
            description: LanguageResponse<string, L>;
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

export class Agents<L extends Language = any> extends ValorantApiComService {
    public get(isPlayableCharacter: boolean = true): Response<Agents.Agents<L>[]> {
        return this.request.get(`/v1/agents`, {
            params: {
                isPlayableCharacter: isPlayableCharacter
            }
        });
    }

    public getByUuid(uuid: string): Response<Agents.Agents<L>> {
        return this.request.get(`/v1/agents/${uuid}`);
    }
}
