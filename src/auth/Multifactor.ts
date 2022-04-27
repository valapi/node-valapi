//import
import { CookieJar as toughCookie } from "tough-cookie";

import * as IngCore from "@ing3kth/core";
import type { IValClient_Auth } from "../resources/interface/IValClient";

import "axios-cookiejar-support";

//class

/**
 * * Class ID: @ing3kth/val-api/RiotApi
 */
class Multifactor {
    classId:string;
    cookie:toughCookie;
    accessToken:string;
    entitlements:string;
    multifactor: boolean
    
    /**
    * @param {IValClient_Auth} data Account toJSON data
    */
    constructor(data: IValClient_Auth = {
        cookie: new toughCookie().toJSON(),
        accessToken: '',
        entitlements: '',
        multifactor: true,
    }) {
        if(!data.multifactor){
            IngCore.Core.Logs.log('This Account is not have a Multifactor', 'error', true);
        }

        this.classId = '@ing3kth/val-api/Multifactor';
        this.cookie = toughCookie.fromJSON(JSON.stringify(data.cookie));
        this.accessToken = data.accessToken;
        this.entitlements = data.entitlements;
        this.multifactor = data.multifactor;
    }

    /**
    * @param {Number} verificationCode Verification Code
    * @returns {Promise<IValClient_Auth>}
    */
     async execute(verificationCode:number):Promise<IValClient_Auth> {
        const _cookie = this.cookie;
        const axiosClient = new IngCore.Core.AxiosClient({
            cookie: true,
            jar: _cookie.toJSON(),
            headers: {}
        });

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            "type": "multifactor",
            "code": verificationCode.toString(),
            "rememberDevice": true
        }, {
            jar: _cookie,
        });

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
            jar: _cookie,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            },
        });

        this.entitlements = entitlements_response.data.entitlements_token;

        this.cookie = _cookie;
        this.multifactor = false;
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
    * @param {IValClient_Auth} data ValAuth_Account toJSON data
    * @param {Number} verificationCode Verification Code
    * @returns {Promise<IValClient_Auth>}
    */
    static async verify(data:IValClient_Auth, verificationCode:number):Promise<IValClient_Auth> {
        const MultifactorAccount = new Multifactor(data);
        return await MultifactorAccount.execute(verificationCode);
    }
}

//export
export { Multifactor };