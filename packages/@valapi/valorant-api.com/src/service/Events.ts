import { ValorantApiComService } from "../client/ValorantApiComService";
import type { ValorantApiCom } from "../client/ValorantApiCom";

export namespace Events {
    export interface Events<L extends ValorantApiCom.Language> {
        uuid: string;
        displayName: ValorantApiComService.Languages<string, L>;
        shortDisplayName: ValorantApiComService.Languages<string, L>;
        startTime: string | Date;
        endTime: string | Date;
        assetPath: string;
    }
}

export class Events<L extends ValorantApiCom.Language = any> extends ValorantApiComService {
    public get(): Promise<ValorantApiComService.Response<Events.Events<L>[]>> {
        return this.axios.get("/events");
    }

    public getByUuid(uuid: string): Promise<ValorantApiComService.Response<Events.Events<L>>> {
        return this.axios.get(`/events/${uuid}`);
    }
}
