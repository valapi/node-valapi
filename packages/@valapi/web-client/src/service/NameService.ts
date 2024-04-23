import type { PromiseResponse } from "@valapi/auth";

import { WebClientService } from "../client/WebClientService";

export namespace NameService {
    export type Player = Array<{
        DisplayName: string;
        Subject: string;
        GameName: string;
        TagLine: string;
    }>;
}

export class NameService extends WebClientService {
    public getPlayer(subject: string): PromiseResponse<NameService.Player> {
        return this.request.put(`${this.regionURL.url.playerData}/name-service/v2/players`, [`${subject}`]);
    }
}
