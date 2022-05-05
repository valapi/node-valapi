//import
import { CookieJar } from 'tough-cookie';

import * as IngCore from "@ing3kth/core";
import { AxiosClient } from '../../client/AxiosClient';
import { AuthFlow } from "./AuthFlow";

import type { IValClient_Auth } from "../../resources/interface/IValClient";
import type { IAxiosClient } from '../../resources/interface/IAxiosClient';
import { Axios, AxiosResponse } from 'axios';

//class

/**
 * *Not Recommend*
 * 
 * * Class ID: @ing3kth/val-api/ValClient/CookieAuth
 */
class CookieAuth {
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
        if(data.multifactor){
            IngCore.Logs.log('This Account is have a Multifactor', 'error', true);
        }

        this.classId = '@ing3kth/val-api/ValClient/CookieAuth';
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
    * @returns {Promise<any>}
    */
    public async execute():Promise<any> {
        const axiosClient:Axios = new AxiosClient({
            jar: this.cookie,
            withCredentials: true,
            headers: {
                'User-Agent': IngCore.Config["val-api"].ValClient.auth["User-Agent"],
            },
            maxRedirects: 1,
        }).axiosClient;

        //Cookie Reauth
        var reauth_response:AxiosResponse;
        try{
            reauth_response = await axiosClient.get('https://auth.riotgames.com/authorize?redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in&client_id=play-valorant-web-prod&response_type=token%20id_token&nonce=1')
        }catch(err:any){
            return await AuthFlow.fromUrl(this.toJSON(), err.request._currentUrl as string);
        }

        IngCore.Logs.log(this.classId + ' URL not find', 'error', true);
        return this.toJSON();
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
    * @returns {Promise<IValClient_Auth>}
    */
     static async reauth(data:IValClient_Auth):Promise<IValClient_Auth> {
        const CookieAccount:CookieAuth = new CookieAuth(data);
        return await CookieAccount.execute();
    }
}

//export
export { CookieAuth };