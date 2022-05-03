//import
import { CookieJar } from 'tough-cookie';

import * as IngCore from "@ing3kth/core";
import { AxiosClient } from '../../client/AxiosClient';
import { AuthFlow } from "./AuthFlow";

import type { IValClient_Auth } from "../../resources/interface/IValClient";
import type { IAxiosClient } from '../../resources/interface/IAxiosClient';

//class

/**
 * * Class ID: @ing3kth/val-api/ValClient/Multifactor
 */
class Multifactor {
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
    
    /**
    * @param {IValClient_Auth} data Account toJSON data
    */
    constructor(data: IValClient_Auth) {
        if(!data.multifactor){
            IngCore.Logs.log('This Account is not have a Multifactor', 'error', true);
        }

        this.classId = '@ing3kth/val-api/ValClient/Multifactor';
        this.cookie = CookieJar.fromJSON(JSON.stringify(data.cookie));
        this.access_token = data.access_token;
        this.id_token = data.id_token;
        this.expires_in = data.expires_in;
        this.token_type = data.token_type;
        this.entitlements_token = data.entitlements_token;
        this.region = data.region;
        this.multifactor = data.multifactor;
    }

    /**
    * @param {Number} verificationCode Verification Code
    * @returns {Promise<IValClient_Auth>}
    */
    public async execute(verificationCode:number):Promise<IValClient_Auth> {
        const axiosClient:AxiosClient = new AxiosClient({
            jar: this.cookie,
            withCredentials: true,
            headers: {
                'User-Agent': IngCore.Config["val-api"].ValClient.auth["User-Agent"],
            }
        });

        //ACCESS TOKEN
        const auth_response:IAxiosClient = await axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
            "type": "multifactor",
            "code": verificationCode.toString(),
            "rememberDevice": true
        });

        if(!auth_response.isError){
            this.multifactor = false;
        }

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
    * @param {IValClient_Auth} data ValAuth_Account toJSON data
    * @param {Number} verificationCode Verification Code
    * @returns {Promise<IValClient_Auth>}
    */
    static async verify(data:IValClient_Auth, verificationCode:number):Promise<IValClient_Auth> {
        const MultifactorAccount:Multifactor = new Multifactor(data);
        return await MultifactorAccount.execute(verificationCode);
    }
}

//export
export { Multifactor };