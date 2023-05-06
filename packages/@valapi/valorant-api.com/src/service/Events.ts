import type { ValorantApiCom } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";

export namespace Events {
    export interface Events {
        uuid: string;
        displayName: ValorantApiCom.Response.Languages<string>; // localized
        shortDisplayName: ValorantApiCom.Response.Languages<string>; // localized
        startTime: string | Date;
        endTime: string | Date;
        assetPath: string;
    }
}

export class Events extends ValorantApiComService {
    public async get(): Promise<ValorantApiCom.Response.Data<Events.Events[]>> {
        return await this.axios.get("/events");
    }

    public async getByUuid(uuid: string): Promise<ValorantApiCom.Response.Data<Events.Events>> {
        return await this.axios.get(`/events/${uuid}`);
    }
}
