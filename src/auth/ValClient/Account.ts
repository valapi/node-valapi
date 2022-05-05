//import
import { CookieJar } from 'tough-cookie';

import * as IngCore from "@ing3kth/core";
import { AxiosClient } from '../../client/AxiosClient';
import { AuthFlow } from "./AuthFlow";

import type { IValClient_Auth } from "../../resources/interface/IValClient";
import type { IAxiosClient } from '../../resources/interface/IAxiosClient';

//class

/**
 * * Class ID: @ing3kth/val-api/ValClient/Account
 */
class Account {
    public classId:string;
    private cookie:CookieJar;
    private access_token:string;
    private id_token:string;
    private expires_in:number;
    private token_type:string;
    private entitlements_token:string;
    private region: {
        pbe: string,
        live: string,
    };
    public multifactor:boolean;

    constructor() {
        this.classId = '@ing3kth/val-api/ValClient/Account';
        this.cookie = new CookieJar();
        this.access_token = '';
        this.id_token = '';
        this.expires_in = 3600;
        this.token_type = '';
        this.entitlements_token = '';
        this.region = {
            pbe: '',
            live: '',
        };
        this.multifactor = false;
    }

    /**
     * @param {String} username Riot Account Username (not email)
     * @param {String} password Riot Account Password
     * @returns {Promise<IValClient_Auth>}
     */
    public async execute(username:string, password:string):Promise<IValClient_Auth> {
        const axiosClient:AxiosClient = new AxiosClient({
            jar: this.cookie,
            withCredentials: true,
            headers: {
                'User-Agent': IngCore.Config["val-api"].ValClient.auth["User-Agent"],
            }
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
                'User-Agent': IngCore.Config["val-api"].ValClient.auth["User-Agent"],
            },
        });

        //ACCESS TOKEN
        const auth_response:IAxiosClient = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            'type': 'auth',
            'username': username,
            'password': password,
            'remember': true,
        });

        return await AuthFlow.execute(this.toJSON(), auth_response);
    }

    /**
     * 
     * @returns {IValClient_Auth}
     */
    public toJSON():IValClient_Auth {
        IngCore.Logs.log("Export " + this.classId);

        return {
            cookie: this.cookie.toJSON(),
            access_token: this.access_token,
            id_token: this.id_token,
            expires_in: this.expires_in,
            token_type: this.token_type,
            entitlements_token: this.entitlements_token,
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