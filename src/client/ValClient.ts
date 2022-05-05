//import
import * as IngCore from "@ing3kth/core";
import { Config as _config } from "@ing3kth/core";

import { toBase64 } from "../utils/Uft8";
import { CookieJar } from "tough-cookie";

import { ValRegion } from "../resources/ValRegion";
import _Region from "../resources/data/Region";

import type { IValClient, ValClient_Service, IValClient_Auth, IValClient_ClientPlatfrom } from "../resources/interface/IValClient";
import type { IValRegion } from "../resources/interface/IValRegion";

import { Client } from "../service/ValClient/Client";
import { Contract } from "../service/ValClient/Contract";
import { CurrentGame } from "../service/ValClient/CurrentGame";
import { Match } from "../service/ValClient/Match";
import { Party } from "../service/ValClient/Party";
import { Player } from "../service/ValClient/Player";
import { PreGame } from "../service/ValClient/PreGame";
import { Store } from "../service/ValClient/Store";

import { Account as Auth_Account } from "../auth/ValClient/Account";
import { Multifactor as Auth_Multifactor } from "../auth/ValClient/Multifactor";
import { CookieAuth as Auth_Cookie } from "../auth/ValClient/CookieAuth";

//class

/**
 * * Class ID: @ing3kth/val-api/ValClient
 * * Use Anywhere: true
 */
class ValClient {
    public classId:string;
    private cookie:CookieJar;
    private access_token:string;
    private token_type:string;
    private entitlements_token:string;
    private client:{
        version: string,
        platfrom: string,
    };
    private region:keyof typeof _Region;

    //reload
    private RegionServices:IValRegion;
    private services:ValClient_Service;

    //service
    public Client:Client;
    public Contract:Contract;
    public CurrentGame:CurrentGame;
    public Match:Match;
    public Party:Party;
    public Player:Player;
    public Pregame:PreGame;
    public Store:Store;

    /**
    * @param {IValClient_Auth} Account Account toJSON data
    */
    constructor(Account:IValClient_Auth) {
        if(Account.multifactor){
            IngCore.Logs.log('This Account is have a Multifactor', 'warning', true);
        }

        //data
        this.classId = '@ing3kth/val-api/ValClient';
        this.cookie = CookieJar.fromJSON(JSON.stringify(Account.cookie));
        this.access_token = Account.access_token;
        this.token_type = Account.token_type;
        this.entitlements_token = Account.entitlements_token;
        this.client = {
            version: IngCore.Config["val-api"].ValClient.client.version,
            platfrom: toBase64(JSON.stringify(IngCore.Config["val-api"].ValClient.client.version)),
        };
        
        if(Account.region.live){
            this.region = Account.region.live as keyof typeof _Region;
        } else {
            this.region = 'na';
        }

        //first reload
        this.RegionServices = new ValRegion(this.region).toJSON();
        this.services = {
            AxiosData: {
                headers: {
                    'Authorization': `${this.token_type} ${this.access_token}`,
                    'X-Riot-Entitlements-JWT': this.entitlements_token,
                    'X-Riot-ClientVersion': this.client.version,
                    'X-Riot-ClientPlatform': this.client.platfrom,
                },
            },
            Region: this.RegionServices,
        };
        this.Client = new Client(this.services);
        this.Contract = new Contract(this.services);
        this.CurrentGame = new CurrentGame(this.services);
        this.Match = new Match(this.services);
        this.Party = new Party(this.services);
        this.Player = new Player(this.services);
        this.Pregame = new PreGame(this.services);
        this.Store = new Store(this.services);
    }

    /***
     * @returns {void}
     */
    private reload():void {
        this.RegionServices = new ValRegion(this.region).toJSON();

        //services
        this.services = {
            AxiosData: {
                headers: {
                    'Authorization': `${this.token_type} ${this.access_token}`,
                    'X-Riot-Entitlements-JWT': this.entitlements_token,
                    'X-Riot-ClientVersion': this.client.version,
                    'X-Riot-ClientPlatform': this.client.platfrom,
                },
            },
            Region: this.RegionServices,
        };

        this.Client = new Client(this.services);
        this.Contract = new Contract(this.services);
        this.CurrentGame = new CurrentGame(this.services);
        this.Match = new Match(this.services);
        this.Party = new Party(this.services);
        this.Player = new Player(this.services);
        this.Pregame = new PreGame(this.services);
        this.Store = new Store(this.services);

        IngCore.Logs.log(this.classId + " Reload");
    }

    //save
    
    /**
     * 
     * @returns {IValClient}
     */
    public toJSON():IValClient {
        IngCore.Logs.log("Export " + this.classId);
        return {
            cookie: this.cookie.toJSON(),
            access_token: this.access_token,
            token_type: this.token_type,
            entitlements_token: this.entitlements_token,
            region: this.region,
        };
    }

    /**
     * 
     * @param {IValClient} data ValClient toJSON Data
     * @returns {void}
     */
    public fromJSON(data:IValClient):void {
        this.cookie = CookieJar.fromJSON(JSON.stringify(data.cookie));
        this.access_token = data.access_token;
        this.token_type = data.token_type;
        this.entitlements_token = data.entitlements_token;
        this.region = data.region;

        IngCore.Logs.log("Import " + this.classId);
        this.reload();
    }

    //settings

    /**
    * @param {String} region Region
    * @returns {void}
    */
    public setRegion(region:keyof typeof _Region):void {
        this.region = region;

        IngCore.Logs.log(this.classId +  " SetRegion '" + this.region + "'");
        this.reload();
    }

    /**
    * @param {String} clientVersion Client Version
    * @returns {void}
    */
    public setClientVersion(clientVersion:string = _config["val-api"].ValClient.client.version):void {
        this.client.version = clientVersion;
        
        IngCore.Logs.log(this.classId +  " SetClientPlatfrom '" + this.client.version + "'");
        this.reload();
    }

    /**
    * @param {IValClient_ClientPlatfrom} clientPlatfrom Client Platfrom in json
    * @returns {void}
    */
    public setClientPlatfrom_fromJSON(clientPlatfrom:IValClient_ClientPlatfrom = _config["val-api"].ValClient.client.platform):void {
        this.client.platfrom = toBase64(JSON.stringify(clientPlatfrom));
        
        IngCore.Logs.log(this.classId +  " SetClientPlatfrom '" + this.client.platfrom + "'");
        this.reload();
    }

    /**
    * @param {CookieJar.Serialized} cookie Cookie
    * @returns {void}
    */
    public setCookie(cookie:CookieJar.Serialized):void {
        this.cookie = CookieJar.fromJSON(JSON.stringify(cookie));
        
        IngCore.Logs.log(this.classId +  " SetCookie '" + this.cookie + "'");
        this.reload();
    }

    /**
    * @param {IValClient} data toJSON data
    * @returns {void}
    */
    static fromJSON(data:IValClient):ValClient {
        const ValApiClient:ValClient = new ValClient({
            cookie: new CookieJar().toJSON(),
            access_token: '',
            id_token:'',
            expires_in: 3600,
            token_type: '',
            entitlements_token: '',
            region: {
                pbe: '',
                live: '',
            },
            multifactor: false,
        });
        ValApiClient.fromJSON(data);

        return ValApiClient;
    }

    //auth

    static Auth = {
        login: Auth_Account.login,
        verify: Auth_Multifactor.verify,
        cookie: Auth_Cookie.reauth,
    }
}

//export
export { ValClient, type ValClient_Service };