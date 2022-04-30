//import
import { CookieJar as toughCookie } from "tough-cookie";

import * as IngCore from "@ing3kth/core";
import type { IValClient_Auth } from "../../resources/interface/IValClient";
import { AuthFlow } from "./AuthFlow";

//class

/**
 * * Class ID: @ing3kth/val-api/Multifactor
 */
class Multifactor {
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
    multifactor:boolean
    
    /**
    * @param {IValClient_Auth} data Account toJSON data
    */
    constructor(data: IValClient_Auth = {
        cookie: new toughCookie().toJSON(),
        accessToken: '',
        id_token: '',
        expires_in: 3600,
        token_type: '',
        region: {
            pbe: '',
            live: '',
        },
        entitlements: '',
        
        multifactor: true,
    }) {
        if(!data.multifactor){
            IngCore.Logs.log('This Account is not have a Multifactor', 'error', true);
        }

        this.classId = '@ing3kth/val-api/Multifactor';
        this.cookie = toughCookie.fromJSON(JSON.stringify(data.cookie));
        this.accessToken = data.accessToken;
        this.id_token = data.id_token;
        this.expires_in = data.expires_in;
        this.token_type = data.token_type;
        this.entitlements = data.entitlements;
        this.region = data.region;
        this.multifactor = data.multifactor;
    }

    /**
    * @param {Number} verificationCode Verification Code
    * @returns {Promise<IValClient_Auth>}
    */
     async execute(verificationCode:number):Promise<IValClient_Auth> {
        const axiosClient = new IngCore.AxiosClient({
            cookie: true,
            jar: this.cookie.toJSON(),
            headers: {}
        });

        //ACCESS TOKEN
        const auth_response = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            "type": "multifactor",
            "code": verificationCode.toString(),
            "rememberDevice": true
        }, {
            headers: {
                'User-Agent': 'RiotClient/43.0.1.4195386.4190634 rso-auth (Windows; 10;;Professional, x64)'
            }
        });

        this.cookie = toughCookie.fromJSON(JSON.stringify(axiosClient.jar))
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