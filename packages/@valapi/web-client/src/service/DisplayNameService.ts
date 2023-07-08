import type { AxiosResponse } from "axios";

import { WebClientService } from "../client/WebClientService";

export namespace DisplayNameService {
    // response

    export type Player = Array<{
        DisplayName: string;
        Subject: string;
        GameName: string;
        TagLine: string;
    }>;
}

export class DisplayNameService extends WebClientService {
    /**
     * @param {string} subject Player UUID
     * @returns {Promise<AxiosResponse<DisplayNameService.Player>>}
     */
    public fetchPlayers(subject: string): Promise<AxiosResponse<DisplayNameService.Player>> {
        return this.axios.put(`${this.apiRegion.url.playerData}/name-service/v2/players`, [`${subject}`]);
    }
}
