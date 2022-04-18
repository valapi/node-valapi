//import
const fs = require('fs');

const IngCore = require('@ing3kth/core');
const { AxiosClientOut } = require('@ing3kth/core').Interface;

const IRiotLocal = require('../resources/interface/IRiotLocal');
const IRiotLocalJSON = require('../resources/interface/IRiotLocalJSON');
const IRiotLocalResources = require('../resources/interface/IRiotLocalResources');
const IRiotLocalLockfile = require('../resources/interface/IRiotLocalLockfile');

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
    /**
     * 
     * @param {String} ip IP of local api
     * @param {IRiotLocalLockfile} lockfile lockfile data
     */
    constructor(ip = IngCore.Config['val-api'].local.ip, lockfile = {
        name: 'Riot Game',
        pid: 10500,
        port: 52500,
        password: 'AbcXY12z',
        protocol: 'https',
    }) {
        this.classId = '@ing3kth/val-api/RiotLocal';
        this.lockfile = {
            name: lockfile.name,
            pid: lockfile.pid,
            port: lockfile.port,
            password: lockfile.password,
            protocol: lockfile.protocol,
        };
        this.ip = ip;

        this.lockfile = this.getlockfile();
        this.reload();
    }

    /**
     * 
     * @returns {IRiotLocalResources}
     */
    getResource() {
        return {
            Chat: require('../service/RiotLocal/Chat'),
            Main: require('../service/RiotLocal/Main'),
            More: require('../service/RiotLocal/More'),
        };
    }

    /**
     * @returns {void}
     */
    reload() {
        const _base64 = IngCore.Utils.Base64.toBase64(`riot:${this.lockfile.password}`);
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
    getlockfile(path = IngCore.Config['val-api'].local.lockfile) {
        try {
            var _getFile = fs.readFileSync(path, 'utf8');

            const _spilt_file = _getFile.split(":");
            const _lockfile = {
                name: _spilt_file[0],
                pid: _spilt_file[1],
                port: _spilt_file[2],
                password: _spilt_file[3],
                protocol: _spilt_file[4],
            };

            return _lockfile;
        } catch (err) {
            IngCore.Core.Logs.log(this.classId + " Lockfile not found", 'err', true);
        }
    }

    /**
     * 
     * @param {IRiotLocalJSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     * @returns {AxiosClientOut}
     */
    async requestFromJSON(data = {
        method: 'get',
        endpoint: '/help',
        body: {},
        replace: [],
    }) {
        if (!data.method || !data.endpoint) {
            return await IngCore.Core.Logs.log(this.classId + ` Missing Data`, 'err', true);
        } else if (!data.body || !data.replace) {
            data.body = {};
            data.replace = [];
        }

        var _endpoint = data.endpoint;
        var _body = data.body;

        var _string_endpoint = String(_endpoint);
        var _string_body = String(JSON.stringify(_body));

        for (let i in data.replace) {
            const _change = data.replace[i];
            const _args = arguments[i + 1];
            if (_change.where === 'url') {
                if (_args) {
                    const _newURL = await _string_endpoint.replace(_change.with, String(_args));
                    _string_endpoint = _newURL;
                } else {
                    return await IngCore.Core.Logs.log(this.classId + ` '${_change.name}' not found at 'argument ${i + 1}'`, 'err', true);
                }
            } else if (_change.where === 'body') {
                if (_args) {
                    const _newBODY = await _string_body.replace(_change.with, String(_args));
                    _string_body = _newBODY;
                } else {
                    return await IngCore.Core.Logs.log(this.classId + ` '${_change.name}' not found at 'argument ${i + 1}'`, 'err', true);
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
     * @param {String} body Request Body
     * @returns {AxiosClientOut}
     */
    async request(method = 'get', endpoint = '/help', body = {}) {
        switch (method.toLowerCase()) {
            case 'get':
                return await this.AxiosClient.get(this.baseUrl + endpoint);
            case 'post':
                return await this.AxiosClient.post(this.baseUrl + endpoint, body);
            case 'put':
                return await this.AxiosClient.put(this.baseUrl + endpoint, body);
            case 'delete':
                return await this.AxiosClient.delete(this.baseUrl + endpoint);
        }
    }

    // SAVE //

    /**
     * 
     * @returns {IRiotLocal}
     */
    toJSON() {
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
    fromJSON(data = {
        ip: IngCore.Config['val-api'].local.ip,
        lockfile: {
            name: 'Riot Game',
            pid: 10500,
            port: 52500,
            password: 'AbcXY12z',
            protocol: 'https',
        }
    }) {
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
    setIp(ip = IngCore.Config['val-api'].local.ip) {
        this.ip = ip;

        this.reload();
    }

    /**
     * @param {String} name
     * @returns {void}
     */
    setLockfileName(name = 'Riot Client') {
        this.lockfile.name = name;

        this.reload();
    }

    /**
     * @param {Number} pid
     * @returns {void}
     */
    setLockfilePid(pid) {
        this.lockfile.pid = pid;

        this.reload();
    }

    /**
     * @param {Number} port
     * @returns {void}
     */
    setLockfilePort(port) {
        this.lockfile.port = port;

        this.reload();
    }

    /**
     * @param {String} password
     * @returns {void}
     */
    setLockfilePassword(password) {
        this.lockfile.password = password;

        this.reload();
    }

    /**
     * @param {String} protocol
     * @returns {void}
     */
    setLockfileProtocol(protocol = 'https') {
        this.lockfile.protocol = protocol;

        this.reload();
    }

    // STATIC //

    /**
     * 
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {String} body Request Body
     * @returns {Object}
     */
    static async request(method = 'get', endpoint = '/help', body = {}) {
        const newRiotLocal = await new RiotLocal();
        return await newRiotLocal.request(method, endpoint, body);
    }

    /**
     * 
     * @param {JSON} data Data from LocalResourse
     * @param {any} args.. Replace Data With Arguments
     * @returns {Object}
     */
    static async requestFromJSON(data = {
        method: 'get',
        endpoint: '/help',
        body: {},
        replace: [],
    }) {
        const newRiotLocal = await new RiotLocal();
        return await newRiotLocal.requestFromJSON(data);
    }

    /**
     * 
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {RiotLocal}
     */
    static fromJSON(data = {
        ip: IngCore.Config['val-api'].local.ip,
        lockfile: {
            name: 'Riot Game',
            pid: 10500,
            port: 52500,
            password: 'AbcXY12z',
            protocol: 'https',
        }
    }) {
        const newRiotLocal = new RiotLocal();
        newRiotLocal.fromJSON(data);

        return newRiotLocal;
    }

    /**
     * 
     * @returns {IRiotLocalResources}
     */
    static getResource() {
        const newRiotLocal = new RiotLocal();
        return newRiotLocal.getResource();
    }
}

//export
module.exports = RiotLocal;