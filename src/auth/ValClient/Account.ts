//import
import { CookieJar as toughCookie } from "tough-cookie";

import * as IngCore from "@ing3kth/core";
import type { IValClient_Auth } from "../../resources/interface/IValClient";
import { AuthFlow } from "./AuthFlow";

//class

/**
 * * Class ID: @ing3kth/val-api/Account
 */
class Account {
    classId:string;
    cookie:toughCookie;
    accessToken:string;
    id_token:string;
    expires_in:number;
    token_type:string;
    entitlements:string;
    region: {
        pbe: string,
        live: string,
    };
    multifactor:boolean;

    constructor() {
        this.classId = '@ing3kth/val-api/Account';
        this.cookie = new toughCookie();
        this.accessToken = '';
        this.id_token = '';
        this.expires_in = 3600;
        this.token_type = '';
        this.entitlements = '';
        this.region = {
            pbe: '',
            live: '',
        };
        this.multifactor = false;
    }

    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @returns {Promise<IValClient_Auth>}
     */
    async execute(username:string, password:string):Promise<IValClient_Auth> {
        const axiosClient = new IngCore.AxiosClient({
            cookie: true,
            jar: this.cookie.toJSON(),
            headers: {}
        });

        await axiosClient.post('https://auth.riotgames.com/api/v1/authorization', {
            "client_id": "play-valorant-web-prod",
            "nonce": "1",
            "redirect_uri": "https://playvalorant.com/opt_in",
            "response_type": "token id_token",
            "scope": "account openid"
        }, {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'RiotClient/43.0.1.4195386.4190634 rso-auth (Windows; 10;;Professional, x64)'
            }
        });

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            'type': 'auth',
            'username': username,
            'password': password,
            'remember': true,
        }, {
            headers: {
                'User-Agent': 'RiotClient/43.0.1.4195386.4190634 rso-auth (Windows; 10;;Professional, x64)'
            }
        });

        this.cookie = toughCookie.fromJSON(JSON.stringify(axiosClient.jar));
        return AuthFlow.execute(this.toJSON(), auth_response);
    }

    /**
     * 
     * @returns {IValClient_Auth}
     */
    toJSON():IValClient_Auth {
        IngCore.Logs.log("Export " + this.classId);

        return {
            cookie: this.cookie.toJSON(),
            accessToken: this.accessToken,
            id_token: this.id_token,
            expires_in: this.expires_in,
            token_type: this.token_type,
            entitlements: this.entitlements,
            region: this.region,
            multifactor: this.multifactor,
        };
    }

    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @returns {Promise<IValClient_Auth>}
     */
    static async login(username:string, password:string):Promise<IValClient_Auth> {
        const NewAccount = new Account();
        return await NewAccount.execute(username, password);
    }
}

//export
export { Account };