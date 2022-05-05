//import
import { CookieJar } from 'tough-cookie';

import * as IngCore from "@ing3kth/core";
import { AxiosClient } from '../../client/AxiosClient';

import type { IValClient_Auth } from "../../resources/interface/IValClient";
import type { IAxiosClient } from '../../resources/interface/IAxiosClient';

//class

/**
 * * Class ID: @ing3kth/val-api/ValClient/AuthFlow
 */
class AuthFlow {
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
        this.classId = '@ing3kth/val-api/ValClient/AuthFlow';
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
     * @param {IAxiosClient} auth_response First Auth Response
     * @returns {Promise<IValClient_Auth>}
     */
    public async execute(auth_response:IAxiosClient):Promise<IValClient_Auth> {
        if(auth_response.isError){
            IngCore.Logs.log(this.classId + ' something went wrong', 'warning', true);
            return this.toJSON();
        }

        const axiosClient:AxiosClient = new AxiosClient({
            jar: this.cookie,
            withCredentials: true,
            timeout: this.expires_in * 1000,
        });

        //multifactor
        if (auth_response.data.type && auth_response.data.type == 'multifactor') {
            this.multifactor = true;

            await IngCore.Logs.log(this.classId + " Export Multi-Factor");
            return this.toJSON();
        } else {
            this.multifactor = false;
        }

        // get asscess token
        const Search_URL:URL = new URL(auth_response.data.response.parameters.uri);

        this.access_token = String(new URLSearchParams(Search_URL.hash).get('#access_token'));
        this.id_token = String(new URLSearchParams(Search_URL.hash).get('id_token'));
        this.expires_in = Number(new URLSearchParams(Search_URL.hash).get('expires_in'));
        this.token_type = String(new URLSearchParams(Search_URL.hash).get('token_type'));

        //ENTITLEMENTS
        const entitlements_response:IAxiosClient = await axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
            headers: {
                'Authorization': `${this.token_type} ${this.access_token}`,
                'User-Agent': IngCore.Config["val-api"].ValClient.auth["User-Agent"],
            },
        });

        this.entitlements_token = entitlements_response.data.entitlements_token;

        //REGION
        const region_response:IAxiosClient = await axiosClient.put('https://riot-geo.pas.si.riotgames.com/pas/v1/product/valorant', {
            "id_token": this.id_token,
        }, {
            headers: {
                'Authorization': `${this.token_type} ${this.access_token}`,
            }
        });

        if(region_response.isError === true){
            this.region = {
                pbe: 'na',
                live: 'na',
            }

            await IngCore.Logs.log(this.classId + " Please use 'ValClient.setRegion()' after auth", 'warning', true);
            return this.toJSON();
        }

        this.region.pbe = region_response.data.affinities.pbe;
        this.region.live = region_response.data.affinities.live;
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
     * @param {IValClient_Auth} data Account toJSON data
     * @param {IAxiosClient} auth_response First Auth Response
     * @returns {Promise<IValClient_Auth>}
     */
    static async execute(data:IValClient_Auth, auth_response:IAxiosClient):Promise<IValClient_Auth> {
        const _newAuthFlow:AuthFlow = new AuthFlow(data);
        return await _newAuthFlow.execute(auth_response);
    }

    /**
     * @param {IValClient_Auth} data Account toJSON data
     * @param {string} url Url of First Auth Response
     * @param {string} auth_type Auth Type
     * @returns {Promise<IValClient_Auth>}
     */
    static async fromUrl(data:IValClient_Auth, url:string, auth_type:string = 'auth'):Promise<IValClient_Auth> {
        const _newAuthFlow:AuthFlow = new AuthFlow(data);

        const auth_response:IAxiosClient = {
            isError: false,
            data: {
                type: auth_type,
                response: {
                    parameters: {
                        uri: url,
                    },
                },
            },
        };

        return await _newAuthFlow.execute(auth_response);
    }
}

//export
export { AuthFlow };