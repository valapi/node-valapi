//import
import { CookieJar as toughCookie } from "tough-cookie";

import * as IngCore from "@ing3kth/core";
import { AuthFlow } from "./AuthFlow";

import type { IValClient_Auth } from "../../resources/interface/IValClient";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

//class

/**
 * * Class ID: @ing3kth/val-api/Account
 */
class Account {
    public classId:string;
    private cookie:toughCookie;
    private accessToken:string;
    private id_token:string;
    private expires_in:number;
    private token_type:string;
    private entitlements:string;
    private region: {
        pbe: string,
        live: string,
    };
    public multifactor:boolean;

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
    public async execute(username:string, password:string):Promise<IValClient_Auth> {
        const axiosClient:IngCore.AxiosClient = new IngCore.AxiosClient({
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
        const auth_response:IAxiosClient_Out = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
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
    public toJSON():IValClient_Auth {
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
        const NewAccount:Account = new Account();
        return await NewAccount.execute(username, password);
    }
}

//export
export { Account };