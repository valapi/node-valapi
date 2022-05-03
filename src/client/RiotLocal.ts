//import
import * as IngCore from "@ing3kth/core";
import { Config as _config } from "@ing3kth/core";

import type { IAxiosClient } from "../resources/interface/IAxiosClient";
import type { IRiotLocal, IRiotLocal_JSON, IRiotLocal_Resources, IRiotLocal_Lockfile, IRiotLocal_Lockfile_Protocol, IRiotLocal_JSON_Method } from "../resources/interface/IRiotLocal";

import { toBase64 } from '../utils/Uft8';
import Auth_Resource from '../auth/RiotLocal/Resource';
import { AxiosClient } from "./AxiosClient";

import getLockfile from '../auth/RiotLocal/Lockfile';
import { Agent } from "https";

//class

/**
 * All Api Base On https://github.com/techchrism/valorant-api-docs
 * 
 * Because I'm lazy to write all api endpoint
 * 
 * * Class ID: @ing3kth/val-api/RiotLocal
 * * Use Anywhere: false
 */
class RiotLocal {
    public classId: string;
    private lockfile: IRiotLocal_Lockfile;
    private ip: string;

    //reload
    private AxiosClient: AxiosClient;
    private baseUrl: string;

    /**
     * @param {IRiotLocal_Lockfile} lockfile lockfile data
     * @param {String} ip IP of local api
     */
    constructor(lockfile: IRiotLocal_Lockfile, ip: string = _config['val-api'].RiotLocal.ip) {
        this.classId = '@ing3kth/val-api/RiotLocal';
        this.ip = ip;

        this.lockfile = {
            name: lockfile.name,
            pid: lockfile.pid,
            port: lockfile.port,
            password: lockfile.password,
            protocol: lockfile.protocol,
        };

        //first reload
        const _base64 = toBase64(`${_config['val-api'].RiotLocal.username}:${this.lockfile.password}`);
        this.AxiosClient = new AxiosClient({
            httpsAgent: new Agent({ rejectUnauthorized: false }),
            headers: {
                'Authorization': `Basic ${_base64}`,
            },
        });
        this.baseUrl = `${this.lockfile.protocol}://${this.ip}:${this.lockfile.port}`;
    }

    /**
     * @returns {void}
     */
    private reload():void {
        const _base64 = toBase64(`${_config['val-api'].RiotLocal.username}:${this.lockfile.password}`);
        this.AxiosClient = new AxiosClient({
            httpsAgent: new Agent({ rejectUnauthorized: false }),
            headers: {
                'Authorization': `Basic ${_base64}`,
            },
        });
        this.baseUrl = `${this.lockfile.protocol}://${this.ip}:${this.lockfile.port}`;
        
        IngCore.Logs.log(this.classId + " Reload");
    }

    /**
     * 
     * @param {IRiotLocal_JSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     * @returns {Promise<IAxiosClient>}
     */
    public async requestFromJSON(data:IRiotLocal_JSON = {
        method: 'get',
        endpoint: '/help',
        body: {},
        replace: [],
    }):Promise<IAxiosClient> {
        if (!data.method || !data.endpoint) {
            await IngCore.Logs.log(this.classId + ` Missing Data`, 'error', true);
        } else if (!data.body) {
            data.body = {};
        } else if (!data.replace) {
            data.replace = [];
        }

        var _endpoint = data.endpoint;
        var _body = data.body;

        var _string_endpoint = String(_endpoint);
        var _string_body = String(JSON.stringify(_body));

        for (let i = 0; i < data.replace.length; i++) {
            const _change = data.replace[i];
            const _args = arguments[i + 1];
            if (_change.where === 'url') {
                if (_args) {
                    const _newURL = await _string_endpoint.replace(_change.with, String(_args));
                    _string_endpoint = _newURL;
                } else {
                    await IngCore.Logs.log(this.classId + ` '${_change.name}' not found at 'argument ${i + 1}'`, 'error', true);
                }
            } else if (_change.where === 'body') {
                if (_args) {
                    const _newBODY = await _string_body.replace(_change.with, String(_args));
                    _string_body = _newBODY;
                } else {
                    await IngCore.Logs.log(this.classId + ` '${_change.name}' not found at 'argument ${i + 1}'`, 'error', true);
                }
            } else {
                continue;
            }
        }

        _endpoint = _string_endpoint;
        _body = JSON.parse(_string_body);

        return await this.request(data.method, _endpoint, _body);
    }

    /**
     * 
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {Object} body Request Body
     * @returns {Promise<IAxiosClient>}
     */
    public async request(method:IRiotLocal_JSON_Method = 'get', endpoint = '/help', body = {}):Promise<IAxiosClient> {
        switch (method.toLowerCase()) {
            case 'get':
                return await this.AxiosClient.get(this.baseUrl + endpoint);
            case 'post':
                return await this.AxiosClient.post(this.baseUrl + endpoint, body);
            case 'put':
                return await this.AxiosClient.put(this.baseUrl + endpoint, body);
            case 'patch':
                return await this.AxiosClient.patch(this.baseUrl + endpoint, body);
            case 'delete':
                return await this.AxiosClient.delete(this.baseUrl + endpoint);
        }

        return {
            isError: true,
            data: null,
        };
    }

    // SAVE //

    /**
     * 
     * @returns {IRiotLocal}
     */
    public toJSON():IRiotLocal {
        IngCore.Logs.log("Export " + this.classId);

        return {
            ip: this.ip,
            lockfile: this.lockfile,
        };
    }

    /**
     * 
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {void}
     */
    public fromJSON(data:IRiotLocal):void {
        this.ip = data.ip;
        this.lockfile = data.lockfile;

        IngCore.Logs.log("Import " + this.classId);
        this.reload();
    }

    // SETTINGS //

    /**
     * 
     * @param {String} ip IP of local api
     * @returns {void}
     */
    public setIp(ip:string = _config['val-api'].RiotLocal.ip):void {
        this.ip = ip;

        IngCore.Logs.log(this.classId +  " SetIp '" + this.ip + "'");
        this.reload();
    }

    /**
     * @param {String} name Name
     * @returns {void}
     */
    public setLockfileName(name:string = 'Riot Client'):void {
        this.lockfile.name = name;

        IngCore.Logs.log(this.classId +  " SetLockfileName '" + this.lockfile.name + "'");
        this.reload();
    }

    /**
     * @param {Number} pid Process ID
     * @returns {void}
     */
    public setLockfilePid(pid:number):void {
        this.lockfile.pid = pid;

        IngCore.Logs.log(this.classId +  " SetLockfilePid '" + this.lockfile.pid + "'");
        this.reload();
    }

    /**
     * @param {Number} port Port
     * @returns {void}
     */
    public setLockfilePort(port:number):void {
        this.lockfile.port = port;

        IngCore.Logs.log(this.classId +  " SetLockfilePort '" + this.lockfile.port + "'");
        this.reload();
    }

    /**
     * @param {String} password Password
     * @returns {void}
     */
    public setLockfilePassword(password:string):void {
        this.lockfile.password = password;

        IngCore.Logs.log(this.classId +  " SetLockfilePassword '" + this.lockfile.password + "'");
        this.reload();
    }

    /**
     * @param {String} protocol Http or Https
     * @returns {void}
     */
    public setLockfileProtocol(protocol:IRiotLocal_Lockfile_Protocol):void {
        this.lockfile.protocol = protocol;

        IngCore.Logs.log(this.classId +  " SetLockfileProtocal '" + this.lockfile.protocol + "'");
        this.reload();
    }

    // STATIC //

    /**
     * 
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {Object} body Request Body
     * @returns {Promise<IAxiosClient>}
     */
    static async request(method:IRiotLocal_JSON_Method = 'get', endpoint:string = '/help', body:object = {}):Promise<IAxiosClient> {
        const AuthLockfile:IRiotLocal_Lockfile = RiotLocal.Auth.lockfile();
        const newRiotLocal:RiotLocal = await new RiotLocal(AuthLockfile);

        return await newRiotLocal.request(method, endpoint, body);
    }

    /**
     * 
     * @param {IRiotLocal_JSON} data Data from LocalResourse
     * @param {any} args.. Replace Data With Arguments
     * @returns {Promise<IAxiosClient>}
     */
    static async requestFromJSON(data:IRiotLocal_JSON = {
        method: 'get',
        endpoint: '/help',
        body: {},
        replace: [],
    }):Promise<IAxiosClient> {
        const AuthLockfile:IRiotLocal_Lockfile = RiotLocal.Auth.lockfile();
        const newRiotLocal:RiotLocal = await new RiotLocal(AuthLockfile);

        return await newRiotLocal.requestFromJSON(data);
    }

    /**
     * 
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {RiotLocal}
     */
    static fromJSON(data:IRiotLocal = {
        ip: IngCore.Config['val-api'].RiotLocal.ip,
        lockfile: {
            name: 'Riot Game',
            pid: 10500,
            port: 52500,
            password: 'AbcXY12z',
            protocol: 'https',
        }
    }):RiotLocal {
        const AuthLockfile:IRiotLocal_Lockfile = RiotLocal.Auth.lockfile();
        const newRiotLocal:RiotLocal = new RiotLocal(AuthLockfile);
        newRiotLocal.fromJSON(data);

        return newRiotLocal;
    }

    //auth

    static Auth = {
        lockfile: getLockfile,
    }

    static Resource:IRiotLocal_Resources = Auth_Resource;
}

//export
export { RiotLocal };