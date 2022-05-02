//import
import { CookieJar as toughCookie } from "tough-cookie";

import * as IngCore from "@ing3kth/core";

import type { IValClient_Auth } from "../../resources/interface/IValClient";
import type { IAxiosClient_Out } from "@ing3kth/core/dist/interface/IAxiosClient";

//class

/**
 * * Class ID: @ing3kth/val-api/AuthFlow
 */
class AuthFlow {
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
        multifactor: false,
    }) {
        this.classId = '@ing3kth/val-api/AuthFlow';
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
     * @param {IAxiosClient_Out} auth_response First Auth Response
     * @returns {Promise<IValClient_Auth>}
     */
    public async execute(auth_response:IAxiosClient_Out):Promise<IValClient_Auth> {
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

        //multifactor
        if (auth_response.data.type && auth_response.data.type == 'multifactor') {
            this.multifactor = true;

            await IngCore.Logs.log(this.classId + " Export Multi-Factor");
            return this.toJSON();
        }

        // get asscess token
        const _search:URL = new URL(auth_response.data.response.parameters.uri);
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
        this.id_token = String(new URLSearchParams(_get_where).get('id_token'));
        this.expires_in = Number(new URLSearchParams(_get_where).get('expires_in'));
        this.token_type = String(new URLSearchParams(_get_where).get('token_type'));

        //ENTITLEMENTS
        const entitlements_response:IAxiosClient_Out = await axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
            headers: {
                'Authorization': `${this.token_type} ${this.accessToken}`,
                'User-Agent': 'RiotClient/43.0.1.4195386.4190634 rso-auth (Windows; 10;;Professional, x64)'
            },
        });

        this.entitlements = entitlements_response.data.entitlements_token;

        //REGION
        const region_response:IAxiosClient_Out = await axiosClient.put('https://riot-geo.pas.si.riotgames.com/pas/v1/product/valorant', {
            "id_token": this.id_token,
        }, {
            headers: {
                'Authorization': `${this.token_type} ${this.accessToken}`,
            }
        })

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
     * @param {IValClient_Auth} data Account toJSON data
     * @param {String} auth_response First Auth Response
     * @returns {Promise<IValClient_Auth>}
     */
    static async execute(data:IValClient_Auth, auth_response:IAxiosClient_Out):Promise<IValClient_Auth> {
        const _newAuthFlow:AuthFlow = new AuthFlow(data);
        return await _newAuthFlow.execute(auth_response);
    }
}

//export
export { AuthFlow };