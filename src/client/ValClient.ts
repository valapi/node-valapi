//import
import * as IngCore from "@ing3kth/core";
import { _config } from "@ing3kth/core/dist/config";

import { toBase64 } from "../utils/Uft8";
import { CookieJar as toughCookie } from "tough-cookie";

import { ValRegion } from "../resources/ValRegion";
import _Region from "../resources/data/Region";

import type { IValClient, ValClient_Service, IValClient_Auth, IValClient_ClientPlatfrom } from "../resources/interface/IValClient";
import type { IValRegion } from "../resources/interface/IValRegion";
import type { IAxiosClient } from "@ing3kth/core/dist/interface/IAxiosClient";

import { Client } from "../service/ValClient/Client";
import { Contract } from "../service/ValClient/Contract";
import { CurrentGame } from "../service/ValClient/CurrentGame";
import { Match } from "../service/ValClient/Match";
import { Party } from "../service/ValClient/Party";
import { Player } from "../service/ValClient/Player";
import { PreGame } from "../service/ValClient/PreGame";
import { Store } from "../service/ValClient/Store";

//class

/**
 * * Class ID: @ing3kth/val-api/ValClient
 * * Use Anywhere: true
 */
class ValClient {
    classId:string;
    cookie:toughCookie.Serialized;
    accessToken:string;
    entitlements:string;
    client:{
        version: string,
        platfrom: string,
    };
    region:keyof typeof _Region.data;

    //reload
    RegionServices:IValRegion | undefined;
    AxiosData:IAxiosClient | undefined;
    services:ValClient_Service | undefined;

    //service
    Client:Client | undefined;
    Contract:Contract | undefined;
    CurrentGame:CurrentGame | undefined;
    Match:Match | undefined;
    Party:Party | undefined;
    Player:Player | undefined;
    Pregame:PreGame | undefined;
    Store:Store | undefined;

    /**
    * @param {IValClient_Auth} Account Account toJSON data
    * @param {String} Region Region
    */
    constructor(Account:IValClient_Auth = {
        cookie: new toughCookie().toJSON(),
        accessToken: '',
        entitlements: '',
        multifactor: false,
    }, Region:keyof typeof _Region.data = 'Asia_Pacific') {
        if(Account.multifactor){
            IngCore.Core.Logs.log('This Account is have a Multifactor', 'error', true);
        }

        //data
        this.classId = '@ing3kth/val-api/ValClient';
        this.cookie = Account.cookie;
        this.accessToken = Account.accessToken;
        this.entitlements = Account.entitlements;
        this.client = {
            version: IngCore.Config["val-api"].ValClient.client.version,
            platfrom: toBase64(JSON.stringify(IngCore.Config["val-api"].ValClient.client.version)),
        };
        this.region = Region;

        this.reload();
    }

    /***
     * @returns {void}
     */
    reload():void {
        this.RegionServices = new ValRegion(this.region).toJSON();

        //axios client
        this.AxiosData = {
            cookie: true,
            jar: this.cookie,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'X-Riot-Entitlements-JWT': this.entitlements,
                'X-Riot-ClientVersion': this.client.version,
                'X-Riot-ClientPlatform': this.client.platfrom,
            },
        };

        //services
        this.services = {
            AxiosData: this.AxiosData,
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

        IngCore.Core.Logs.log(this.classId + " Reload");
    }

    //save
    
    /**
     * 
     * @returns {IValClient}
     */
    toJSON():IValClient {
        IngCore.Core.Logs.log("Export " + this.classId);
        return {
            cookie: this.cookie,
            accessToken: this.accessToken,
            entitlements: this.entitlements,
            region: this.region,
        };
    }

    /**
     * 
     * @param {IValClient} data ValClient toJSON Data
     * @returns {void}
     */
    fromJSON(data:IValClient):void {
        this.cookie = data.cookie;
        this.accessToken = data.accessToken;
        this.entitlements = data.entitlements;
        this.region = data.region;

        IngCore.Core.Logs.log("Import " + this.classId);
        this.reload();
    }

    //settings

    /**
    * @param {String} region Region
    * @returns {void}
    */
    setRegion(region:keyof typeof _Region.data):void {
        this.region = region;

        IngCore.Core.Logs.log(this.classId +  " SetRegion '" + this.region + "'");
        this.reload();
    }

    /**
    * @param {String} clientVersion Client Version
    * @returns {void}
    */
    setClientVersion(clientVersion:string = _config["val-api"].ValClient.client.version):void {
        this.client.version = clientVersion;
        
        IngCore.Core.Logs.log(this.classId +  " SetClientPlatfrom '" + this.client.version + "'");
        this.reload();
    }

    /**
    * @param {IValClient_ClientPlatfrom} clientPlatfrom Client Platfrom in json
    * @returns {void}
    */
    setClientPlatfrom_fromJSON(clientPlatfrom:IValClient_ClientPlatfrom = _config["val-api"].ValClient.client.platform):void {
        this.client.platfrom = toBase64(JSON.stringify(clientPlatfrom));
        
        IngCore.Core.Logs.log(this.classId +  " SetClientPlatfrom '" + this.client.platfrom + "'");
        this.reload();
    }

    /**
    * @param {JSON} cookie Cookie
    * @returns {void}
    */
    setCookie(cookie = new toughCookie().toJSON()):void {
        this.cookie = cookie;
        
        IngCore.Core.Logs.log(this.classId +  " SetCookie '" + this.cookie + "'");
        this.reload();
    }

    /**
    * @param {IValClient} data toJSON data
    * @returns {void}
    */
    static fromJSON(data:IValClient):ValClient {
        const ValApiClient = new ValClient();
        ValApiClient.fromJSON(data);

        return ValApiClient;
    }
}

//export
export { ValClient, type ValClient_Service };