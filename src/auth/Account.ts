//import
import { CookieJar as toughCookie } from "tough-cookie";

import * as IngCore from "@ing3kth/core";
import type { IValClient_Auth } from "../resources/interface/IValClient";

import "axios-cookiejar-support";

//class

/**
 * * Class ID: @ing3kth/val-api/Account
 */
class Account {
    classId:string;
    cookie:toughCookie;
    accessToken:string;
    entitlements:string;
    multifactor: boolean

    constructor() {
        this.classId = '@ing3kth/val-api/Account';
        this.cookie = new toughCookie();
        this.accessToken = '';
        this.entitlements = '';
        this.multifactor = false;
    }

    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @returns {Promise<IValClient_Auth>}
     */
    async execute(username:string, password:string):Promise<IValClient_Auth> {
        const axiosClient = new IngCore.Core.AxiosClient({
            cookie: true,
            jar: this.cookie.toJSON(),
            headers: {}
        });

        await axiosClient.post('https://auth.riotgames.com/api/v1/authorization', {
            'client_id': 'play-valorant-web-prod',
            'nonce': '1',
            'redirect_uri': 'https://playvalorant.com/opt_in',
            'response_type': 'token id_token',
        }, {
            jar: this.cookie,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            'type': 'auth',
            'username': username,
            'password': password,
            'remember': true,
        }, {
            jar: this.cookie,
        });

        //multifactor
        if (auth_response.data.type == 'multifactor') {
            this.multifactor = true;
            this.cookie = this.cookie;

            await IngCore.Core.Logs.log(this.classId + " Export Multi-Factor");
            return this.toJSON();
        }

        // get asscess token
        const _search = new URL(auth_response.data.response.parameters.uri);
        var _get_where;
        var _get_accessToken;

        if (_search.search) {
            _get_where = _search.search;
            _get_accessToken = 'access_token';
        } else {
            _get_where = _search.hash;
            _get_accessToken = '#access_token';
        }

        this.accessToken = String(new URLSearchParams(_get_where).get(_get_accessToken));

        //ENTITLEMENTS
        const entitlements_response = await axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
            jar: this.cookie,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        });

        this.entitlements = entitlements_response.data.entitlements_token;

        return this.toJSON();
    }

    /**
     * 
     * @returns {IValClient_Auth}
     */
    toJSON():IValClient_Auth {
        IngCore.Core.Logs.log("Export " + this.classId);

        return {
            cookie: this.cookie.toJSON(),
            accessToken: this.accessToken,
            entitlements: this.entitlements,
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