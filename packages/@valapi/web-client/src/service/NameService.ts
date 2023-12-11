import type { AxiosResponse } from "axios";

import { WebClientService } from "../client/WebClientService";

export namespace NameService {
    // response

    export type Player = Array<{
        DisplayName: string;
        Subject: string;
        GameName: string;
        TagLine: string;
    }>;
}

export class NameService extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<NameService.Player>>}
     */
    public getPlayer(subject: string): Promise<AxiosResponse<NameService.Player>> {
        return this.axios.put(`${this.apiRegion.url.playerData}/name-service/v2/players`, [`${subject}`]);
    }
}
