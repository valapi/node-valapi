import type { AxiosResponse } from "axios";

import { AuthService } from "../client/AuthService";
import type { AuthCore } from "../client/AuthCore";

export class Multifactor extends AuthService {
    /**
     * @param {number} verificationCode Verification Code
     * @returns {Promise<AuthCore.Json>}
     */
    public async twofactor(verificationCode: number): Promise<AuthCore.Json> {
        const TokenResponse: AxiosResponse<AuthService.TokenResponse> = await this.axios.put("https://auth.riotgames.com/api/v1/authorization", {
            type: "multifactor",
            code: verificationCode.toString(),
            rememberDevice: true
        });

        return this.fromResponse(TokenResponse);
    }
}
