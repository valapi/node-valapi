import { AuthService } from "../client/AuthService";

import type { ValAxios } from "@valapi/lib";

export class Multifactor extends AuthService {
    public async twofactor(verificationCode: number) {
        // token

        const TokenResponse: ValAxios.Response<AuthService.TokenResponse> = await this.axios.put("https://auth.riotgames.com/api/v1/authorization", {
            type: "multifactor",
            code: `${verificationCode}`,
            rememberDevice: true
        });

        // authentication

        return await this.fromResponse(TokenResponse);
    }
}
