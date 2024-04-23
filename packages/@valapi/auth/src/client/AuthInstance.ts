import { CookieJar } from "tough-cookie";

import { ValEncryption } from "@valapi/lib";

export interface AuthUserInfo {
    cookie: CookieJar.Serialized;
    isMultifactor: boolean;
    access_token: string;
    id_token: string;
    session_state: string;
    entitlements_token: string;
}

interface UserTokenParse {
    sub: string;
    exp: number;
}

export class AuthInstance implements Omit<AuthUserInfo, "cookie"> {
    public cookie: CookieJar = new CookieJar();
    public isMultifactor: boolean = false;

    public access_token: string = "";
    public id_token: string = "";
    public session_state: string = "";
    public entitlements_token: string = "";

    public subject: string = "";
    public expirationDate: Date = new Date(-1);

    public get isAuthenticated() {
        return new Date() < this.expirationDate && Boolean(this.id_token) && Boolean(this.entitlements_token);
    }

    public constructor(user?: AuthUserInfo) {
        if (!user) {
            return;
        }

        this.cookie = CookieJar.deserializeSync(user.cookie);
        this.isMultifactor = user.isMultifactor;

        this.access_token = user.access_token;
        this.id_token = user.id_token;
        this.session_state = user.session_state;
        this.entitlements_token = user.entitlements_token;

        this.getTokenInfo();
    }

    protected getTokenInfo() {
        if (!this.access_token) {
            return;
        }

        const parseToken: UserTokenParse = ValEncryption.decryptJson(this.access_token.split(".")[1]);

        this.subject = parseToken.sub;
        this.expirationDate = new Date(parseToken.exp * 1000);
    }

    public toJSON(): AuthUserInfo {
        return {
            cookie: this.cookie.serializeSync(),
            isMultifactor: this.isMultifactor,
            access_token: this.access_token,
            id_token: this.id_token,
            session_state: this.session_state,
            entitlements_token: this.entitlements_token
        };
    }
}
