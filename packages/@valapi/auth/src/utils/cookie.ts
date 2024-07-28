import { Cookie } from "tough-cookie";

import { Response } from "../client/AuthRequest";

// * mainly support bun
export function getResponseCookies(response: Response<any>): Cookie[] {
    const header = response.headers["set-cookie"];
    if (!header) {
        return [];
    }

    const cookies = [];

    for (const string of header) {
        const cookie = Cookie.parse(string);

        if (!cookie) {
            continue;
        }

        cookies.push(cookie);
    }

    return cookies;
}
