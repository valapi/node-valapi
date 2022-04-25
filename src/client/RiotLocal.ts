//import
import * as fs from 'fs';

import * as IngCore from "@ing3kth/core";
import { toBase64 } from '../utils/Uft8';

import _Chat from '../service/RiotLocal/Chat';
import _Main from '../service/RiotLocal/Main';
import _More from '../service/RiotLocal/More';

import type { IAxiosClient_Out } from '@ing3kth/core/dist/interface/IAxiosClient';
import type { IRiotLocal, IRiotLocal_JSON, IRiotLocal_Resources, IRiotLocal_Lockfile, IRiotLocal_Lockfile_Protocol, IRiotLocal_JSON_Method } from "../resources/interface/IRiotLocal";
import { AxiosClient } from '@ing3kth/core/dist/core/AxiosClient';
import { _config } from '@ing3kth/core/dist/config';

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
    classId: string;
    lockfile: IRiotLocal_Lockfile;
    ip: string;

    //reload
    AxiosClient: AxiosClient;
    baseUrl: string | undefined;
    resourse: IRiotLocal_Resources | undefined;

    /**
     * 
     * @param {String} ip IP of local api
     * @param {IRiotLocal_Lockfile} lockfile lockfile data
     */
    constructor(ip: string = _config['val-api'].RiotLocal.ip, lockfile?: IRiotLocal_Lockfile) {
        this.classId = '@ing3kth/val-api/RiotLocal';
        this.ip = ip;

        if (lockfile) {
            this.lockfile = {
                name: lockfile.name,
                pid: lockfile.pid,
                port: lockfile.port,
                password: lockfile.password,
                protocol: lockfile.protocol,
            };
        }else {
            this.lockfile = this.getlockfile();
        }

        this.AxiosClient = new IngCore.Core.AxiosClient({
            cookie: false,
            jar: null,
            headers: {},
        });
        this.reload();
    }

    /**
     * 
     * @returns {IRiotLocal_Resources}
     */
    getResource():IRiotLocal_Resources {
        return {
            Chat: _Chat,
            Main: _Main,
            More: _More,
        };
    }

    /**
     * @returns {void}
     */
    reload():void {
        const _base64 = toBase64(`${_config['val-api'].RiotLocal.username}:${this.lockfile.password}`);
        this.AxiosClient = new IngCore.Core.AxiosClient({
            cookie: false,
            jar: null,
            headers: {
                'Authorization': `Basic ${_base64}`,
            },
        });
        this.baseUrl = `${this.lockfile.protocol}://${this.ip}:${this.lockfile.port}`;

        this.resourse = this.getResource();
    }

    /**
     * @param {String} path path to lockfile
     * @returns {IRiotLocalLockfile}
     */
    getlockfile(path:string = _config['val-api'].RiotLocal.lockfile):IRiotLocal_Lockfile {
        var _getFile = fs.readFileSync(path, 'utf8');

        const _spilt_file = _getFile.split(":");
        const _lockfile = {
            name: _spilt_file[0],
            pid: Number(_spilt_file[1]),
            port: Number(_spilt_file[2]),
            password: _spilt_file[3],
            protocol: _spilt_file[4] as IRiotLocal_Lockfile_Protocol,
        };

        return _lockfile;
    }

    /**
     * 
     * @param {IRiotLocal_JSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     * @returns {Promise<IAxiosClient_Out>}
     */
    async requestFromJSON(data:IRiotLocal_JSON = {
        method: 'get',
        endpoint: '/help',
        body: {},
        replace: [],
    }):Promise<IAxiosClient_Out> {
        if (!data.method || !data.endpoint) {
            await IngCore.Core.Logs.log(this.classId + ` Missing Data`, 'error', true);
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
                    await IngCore.Core.Logs.log(this.classId + ` '${_change.name}' not found at 'argument ${i + 1}'`, 'error', true);
                }
            } else if (_change.where === 'body') {
                if (_args) {
                    const _newBODY = await _string_body.replace(_change.with, String(_args));
                    _string_body = _newBODY;
                } else {
                    await IngCore.Core.Logs.log(this.classId + ` '${_change.name}' not found at 'argument ${i + 1}'`, 'error', true);
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
     * @returns {Promise<IAxiosClient_Out>}
     */
    async request(method:IRiotLocal_JSON_Method = 'get', endpoint = '/help', body = {}):Promise<IAxiosClient_Out> {
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
            data: undefined,
        }
    }

    // SAVE //

    /**
     * 
     * @returns {IRiotLocal}
     */
    toJSON():IRiotLocal {
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
    fromJSON(data:IRiotLocal):void {
        this.ip = data.ip;
        this.lockfile = data.lockfile;

        this.reload();
    }

    // SETTINGS //

    /**
     * 
     * @param {String} ip IP of local api
     * @returns {void}
     */
    setIp(ip:string = _config['val-api'].RiotLocal.ip):void {
        this.ip = ip;

        this.reload();
    }

    /**
     * @param {String} name
     * @returns {void}
     */
    setLockfileName(name:string = 'Riot Client'):void {
        this.lockfile.name = name;

        this.reload();
    }

    /**
     * @param {Number} pid
     * @returns {void}
     */
    setLockfilePid(pid:number):void {
        this.lockfile.pid = pid;

        this.reload();
    }

    /**
     * @param {Number} port
     * @returns {void}
     */
    setLockfilePort(port:number):void {
        this.lockfile.port = port;

        this.reload();
    }

    /**
     * @param {String} password
     * @returns {void}
     */
    setLockfilePassword(password:string):void {
        this.lockfile.password = password;

        this.reload();
    }

    /**
     * @param {String} protocol
     * @returns {void}
     */
    setLockfileProtocol(protocol:IRiotLocal_Lockfile_Protocol):void {
        this.lockfile.protocol = protocol;

        this.reload();
    }

    // STATIC //

    /**
     * 
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {Object} body Request Body
     * @returns {Promise<IAxiosClient_Out>}
     */
    static async request(method:IRiotLocal_JSON_Method = 'get', endpoint:string = '/help', body:object = {}):Promise<IAxiosClient_Out> {
        const newRiotLocal = await new RiotLocal();
        return await newRiotLocal.request(method, endpoint, body);
    }

    /**
     * 
     * @param {IRiotLocal_JSON} data Data from LocalResourse
     * @param {any} args.. Replace Data With Arguments
     * @returns {Promise<IAxiosClient_Out>}
     */
    static async requestFromJSON(data:IRiotLocal_JSON = {
        method: 'get',
        endpoint: '/help',
        body: {},
        replace: [],
    }):Promise<IAxiosClient_Out> {
        const newRiotLocal = await new RiotLocal();
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
        const newRiotLocal = new RiotLocal();
        newRiotLocal.fromJSON(data);

        return newRiotLocal;
    }

    /**
     * 
     * @returns {IRiotLocal_Resources}
     */
    static getResource():IRiotLocal_Resources {
        const newRiotLocal = new RiotLocal();
        return newRiotLocal.getResource();
    }
}

//export
export { RiotLocal };