import type { AuthService } from "../client/AuthService";
import { Cookie as CookieAuthenticator } from "../service/Cookie";

import { ValError, ValAxios } from "@valapi/lib";

export class User extends CookieAuthenticator {
    public async loginform(username: string, password: string) {
        // cookie

        const CookieResponse: ValAxios.Response<AuthService.TokenResponse> = await this.authorize();

        if (!CookieResponse.headers["set-cookie"] || !CookieResponse.headers["set-cookie"].find((element: string) => new RegExp(`^asid`).test(element))) {
            throw new ValError({
                name: "UserAuthenticator_Error",
                message: CookieResponse.data.type === "error" ? CookieResponse.data.error : "Cookie is undefined",
                data: CookieResponse.headers
            });
        }

        // token

        const TokenResponse: ValAxios.Response<AuthService.TokenResponse> = await this.axios.put(
            "https://auth.riotgames.com/api/v1/authorization",
            {
                type: "auth",
                username: username,
                password: password,
                remember: true
            },
            {
                headers: {
                    Cookie: CookieResponse.headers["set-cookie"].find((element: string) => new RegExp(`^asid`).test(element))
                }
            }
        );

        // authentication

        return await this.fromResponse(TokenResponse);
    }
}
