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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
//import
const tough_cookie_1 = require("tough-cookie");
const IngCore = __importStar(require("@ing3kth/core"));
require("axios-cookiejar-support");
//class
/**
 * * Class ID: @ing3kth/val-api/Account
 */
class Account {
    constructor() {
        this.classId = '@ing3kth/val-api/Account';
        this.cookie = new tough_cookie_1.CookieJar();
        this.accessToken = '';
        this.entitlements = '';
        this.multifactor = false;
    }
    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @returns {Promise<IValClient_Auth>}
     */
    execute(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const axiosClient = new IngCore.Core.AxiosClient({
                cookie: true,
                jar: this.cookie.toJSON(),
                headers: {}
            });
            yield axiosClient.post('https://auth.riotgames.com/api/v1/authorization', {
                'client_id': 'play-valorant-web-prod',
                'nonce': '1',
                'redirect_uri': 'https://playvalorant.com/opt_in',
                'response_type': 'token id_token',
            }, {
                jar: this.cookie,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            //ACCESS TOKEN
            const auth_response = yield axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
                'type': 'auth',
                'username': username,
                'password': password,
                'remember': true,
            }, {
                jar: this.cookie,
            });
            //multifactor
            if (auth_response.data.type == 'multifactor') {
                this.multifactor = true;
                this.cookie = this.cookie;
                yield IngCore.Core.Logs.log(this.classId + " Export Multi-Factor");
                return this.toJSON();
            }
            // get asscess token
            const _search = new URL(auth_response.data.response.parameters.uri);
            var _get_where;
            var _get_accessToken;
            if (_search.search) {
                _get_where = _search.search;
                _get_accessToken = 'access_token';
            }
            else {
                _get_where = _search.hash;
                _get_accessToken = '#access_token';
            }
            this.accessToken = String(new URLSearchParams(_get_where).get(_get_accessToken));
            //ENTITLEMENTS
            const entitlements_response = yield axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
                jar: this.cookie,
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`,
                },
            });
            this.entitlements = entitlements_response.data.entitlements_token;
            return this.toJSON();
        });
    }
    /**
     *
     * @returns {IValClient_Auth}
     */
    toJSON() {
        IngCore.Core.Logs.log("Export " + this.classId);
        return {
            cookie: this.cookie.toJSON(),
            accessToken: this.accessToken,
            entitlements: this.entitlements,
            multifactor: this.multifactor,
        };
    }
    /**
     * @param {String} username Riot Account Username
     * @param {String} password Riot Account Password
     * @returns {Promise<IValClient_Auth>}
     */
    static login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const NewAccount = new Account();
            return yield NewAccount.execute(username, password);
        });
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map