import type { ValAxios } from "@valapi/lib";

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
     * @returns {Promise<ValAxios.Response<DisplayNameService.Player>>}
     */
    public async fetchPlayers(subject: string): Promise<ValAxios.Response<DisplayNameService.Player>> {
        return await this.axios.put(`${this.apiRegion.url.playerData}/name-service/v2/players`, [`${subject}`]);
    }
}
