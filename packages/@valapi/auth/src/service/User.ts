import type { AxiosResponse } from "axios";

import { ValError } from "@valapi/lib";

import type { AuthCore } from "../client/AuthCore";
import type { AuthService } from "../client/AuthService";

import { Cookie as CookieAuthenticator } from "../service/Cookie";

export class User extends CookieAuthenticator {
    /**
     * @param {string} username Riot Username
     * @param {string} password Password
     * @returns {Promise<AuthCore.Json>}
     */
    public async loginform(username: string, password: string): Promise<AuthCore.Json> {
        const CookieResponse: AxiosResponse<AuthService.TokenResponse> = await this.authorize();
        const CookieSetStrings = this.cookie.getSetCookieStringsSync("https://auth.riotgames.com");

        if (!CookieSetStrings.find((element: string) => new RegExp(`^asid`).test(element))) {
            throw new ValError({
                name: "UserAuthenticator_Error",
                message: CookieResponse.data.type === "error" ? CookieResponse.data.error : "Cookie is undefined",
                data: CookieResponse.headers
            });
        }

        const TokenResponse: AxiosResponse<AuthService.TokenResponse> = await this.axios.put(
            "https://auth.riotgames.com/api/v1/authorization",
            {
                type: "auth",
                username: username,
                password: password,
                remember: true
            },
            {
                headers: {
                    Cookie: CookieSetStrings
                }
            }
        );

        return this.fromResponse(TokenResponse);
    }
}
