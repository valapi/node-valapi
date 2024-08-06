import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Events {
    export interface Events<L extends Language> {
        uuid: string;
        displayName: LanguageResponse<string, L>;
        shortDisplayName: LanguageResponse<string, L>;
        startTime: string | Date;
        endTime: string | Date;
        assetPath: string;
    }
}

export class Events<L extends Language = any> extends ValorantApiComService {
    public get(): Response<Events.Events<L>[]> {
        return this.request.get(`/v1/events`);
    }

    public getByUuid(uuid: string): Response<Events.Events<L>> {
        return this.request.get(`/v1/events/${uuid}`);
    }
}
