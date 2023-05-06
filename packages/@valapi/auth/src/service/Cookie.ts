import { AuthService } from "../client/AuthService";

import { ValAxios } from "@valapi/lib";

export class Cookie extends AuthService {
    public async authorize(): Promise<ValAxios.Response<AuthService.TokenResponse>> {
        return await this.axios.post("https://auth.riotgames.com/api/v1/authorization", {
            client_id: "play-valorant-web-prod",
            nonce: "1",
            redirect_uri: "https://playvalorant.com/opt_in",
            response_mode: "query",
            response_type: "token id_token",
            scope: "account openid"
        });
    }

    public async reauthorize() {
        this.cookie.removeAllCookiesSync();

        // token

        const TokenResponse: ValAxios.Response<AuthService.TokenResponse> = await this.authorize();

        // authentication

        return await this.fromResponse(TokenResponse);
    }
}
