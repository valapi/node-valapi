"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotLocal = void 0;
//import
const fs = __importStar(require("fs"));
const IngCore = __importStar(require("@ing3kth/core"));
const Uft8_1 = require("../utils/Uft8");
const Chat_1 = __importDefault(require("../service/RiotLocal/Chat"));
const Main_1 = __importDefault(require("../service/RiotLocal/Main"));
const More_1 = __importDefault(require("../service/RiotLocal/More"));
const config_1 = require("@ing3kth/core/dist/config");
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
     * @param {IRiotLocal_Lockfile} lockfile lockfile data
     */
    constructor(ip = config_1._config['val-api'].RiotLocal.ip, lockfile) {
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
        }
        else {
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
    getResource() {
        return {
            Chat: Chat_1.default,
            Main: Main_1.default,
            More: More_1.default,
        };
    }
    /**
     * @returns {void}
     */
    reload() {
        const _base64 = (0, Uft8_1.toBase64)(`${config_1._config['val-api'].RiotLocal.username}:${this.lockfile.password}`);
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
    getlockfile(path = config_1._config['val-api'].RiotLocal.lockfile) {
        var _getFile = fs.readFileSync(path, 'utf8');
        const _spilt_file = _getFile.split(":");
        const _lockfile = {
            name: _spilt_file[0],
            pid: Number(_spilt_file[1]),
            port: Number(_spilt_file[2]),
            password: _spilt_file[3],
            protocol: _spilt_file[4],
        };
        return _lockfile;
    }
    /**
     *
     * @param {IRiotLocal_JSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     * @returns {Promise<IAxiosClient_Out>}
     */
    requestFromJSON(data = {
        method: 'get',
        endpoint: '/help',
        body: {},
        replace: [],
    }) {
        return __awaiter(this, arguments, void 0, function* () {
            if (!data.method || !data.endpoint) {
                yield IngCore.Core.Logs.log(this.classId + ` Missing Data`, 'error', true);
            }
            else if (!data.body) {
                data.body = {};
            }
            else if (!data.replace) {
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
                        const _newURL = yield _string_endpoint.replace(_change.with, String(_args));
                        _string_endpoint = _newURL;
                    }
                    else {
                        yield IngCore.Core.Logs.log(this.classId + ` '${_change.name}' not found at 'argument ${i + 1}'`, 'error', true);
                    }
                }
                else if (_change.where === 'body') {
                    if (_args) {
                        const _newBODY = yield _string_body.replace(_change.with, String(_args));
                        _string_body = _newBODY;
                    }
                    else {
                        yield IngCore.Core.Logs.log(this.classId + ` '${_change.name}' not found at 'argument ${i + 1}'`, 'error', true);
                    }
                }
                else {
                    continue;
                }
            }
            _endpoint = _string_endpoint;
            _body = JSON.parse(_string_body);
            return yield this.request(data.method, _endpoint, _body);
        });
    }
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {Object} body Request Body
     * @returns {Promise<IAxiosClient_Out>}
     */
    request(method = 'get', endpoint = '/help', body = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (method.toLowerCase()) {
                case 'get':
                    return yield this.AxiosClient.get(this.baseUrl + endpoint);
                case 'post':
                    return yield this.AxiosClient.post(this.baseUrl + endpoint, body);
                case 'put':
                    return yield this.AxiosClient.put(this.baseUrl + endpoint, body);
                case 'patch':
                    return yield this.AxiosClient.patch(this.baseUrl + endpoint, body);
                case 'delete':
                    return yield this.AxiosClient.delete(this.baseUrl + endpoint);
            }
            return {
                isError: true,
                data: undefined,
            };
        });
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
    fromJSON(data) {
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
    setIp(ip = config_1._config['val-api'].RiotLocal.ip) {
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
    setLockfileProtocol(protocol) {
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
    static request(method = 'get', endpoint = '/help', body = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const newRiotLocal = yield new RiotLocal();
            return yield newRiotLocal.request(method, endpoint, body);
        });
    }
    /**
     *
     * @param {IRiotLocal_JSON} data Data from LocalResourse
     * @param {any} args.. Replace Data With Arguments
     * @returns {Promise<IAxiosClient_Out>}
     */
    static requestFromJSON(data = {
        method: 'get',
        endpoint: '/help',
        body: {},
        replace: [],
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newRiotLocal = yield new RiotLocal();
            return yield newRiotLocal.requestFromJSON(data);
        });
    }
    /**
     *
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {RiotLocal}
     */
    static fromJSON(data = {
        ip: IngCore.Config['val-api'].RiotLocal.ip,
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
     * @returns {IRiotLocal_Resources}
     */
    static getResource() {
        const newRiotLocal = new RiotLocal();
        return newRiotLocal.getResource();
    }
}
exports.RiotLocal = RiotLocal;
//# sourceMappingURL=RiotLocal.js.map