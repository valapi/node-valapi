//import
const fs = require('fs');
const IngCore = require('@ing3kth/core');

//class

/**
 * All Api Base On https://github.com/techchrism/valorant-api-docs
 * Because I'm lazy to write all api endpoint
 * 
 * * READ DOCS BEFORE USE
 */
class RiotLocal {
    /**
     * 
     * @param {String} ip ip of local api
     * @param {JSON} lockfile lockfile data
     */
    constructor(ip = IngCore.Config['val-api'].local.ip, lockfile = {
        name: null,
        pid: null,
        port: null,
        password: null,
        protocol: null,
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

        this.reload();
    }

    getResource() {
        return {
            Chat: require('../service/RiotLocal/Chat'),
            Main: require('../service/RiotLocal/Main'),
            More: require('../service/RiotLocal/More'),
        };
    }

    async reload() {
        this.lockfile = await this.getlockfile();

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
     */
    async getlockfile(path = IngCore.Config['val-api'].local.lockfile) {
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
            await IngCore.Core.Logs.log(this.classId + " Lockfile not found", 'err', true);
        }
    }

    /**
     * 
     * @param {JSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     */
    async requestFromJSON(data = {
        method: 'get',
        endpoint: '/help',
        body: {},
        replace: [],
    }) {
        if(!data.method || !data.endpoint){
            return await IngCore.Core.Logs.log(this.classId + ` Missing Data`, 'err', true);
        }else if(!data.body || !data.replace){
            data.body = {};
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
     */
    async request(method = 'get', endpoint = '/help', body = {}) {
        switch (method) {
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

    // SETTINGS //

    async setIp(ip = IngCore.Config['val-api'].local.ip) {
        this.ip = ip;

        await this.reload();
    }

    // STATIC //

    /**
     * 
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {String} body Request Body
     */
    static async request(method = 'get', endpoint = '/help', body = {}) {
        const newRiotLocal = await new RiotLocal();
        return await newRiotLocal.request(method, endpoint, body);
    }

    /**
     * 
     * @param {JSON} data Data from LocalResourse
     * @param {any} args.. Replace Data With Arguments
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

    static getResource() {
        const newRiotLocal = new RiotLocal();
        return newRiotLocal.getResource();
    }
}

//export
module.exports = RiotLocal;