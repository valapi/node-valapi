import type { AxiosResponse } from "axios";

import { AuthService } from "../client/AuthService";
import type { AuthCore } from "../client/AuthCore";

export class Cookie extends AuthService {
    public async authorize(): Promise<AxiosResponse<AuthService.TokenResponse>> {
        return await this.axios.post("https://auth.riotgames.com/api/v1/authorization", {
            client_id: "play-valorant-web-prod",
            nonce: "1",
            redirect_uri: "https://playvalorant.com/opt_in",
            response_mode: "query",
            response_type: "token id_token",
            scope: "account openid"
        });
    }

    /**
     * @returns {Promise<AuthCore.Json>}
     */
    public async reauthorize(): Promise<AuthCore.Json> {
        this.cookie.removeAllCookiesSync();

        // token

        const TokenResponse: AxiosResponse<AuthService.TokenResponse> = await this.authorize();

        // authentication

        return await this.fromResponse(TokenResponse);
    }
}