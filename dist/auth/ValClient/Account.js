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
const AuthFlow_1 = require("./AuthFlow");
//class
/**
 * * Class ID: @ing3kth/val-api/Account
 */
class Account {
    constructor() {
        this.classId = '@ing3kth/val-api/Account';
        this.cookie = new tough_cookie_1.CookieJar();
        this.accessToken = '';
        this.id_token = '';
        this.expires_in = 3600;
        this.token_type = '';
        this.entitlements = '';
        this.region = {
            pbe: '',
            live: '',
        };
        this.multifactor = false;
    }
    /**
     * @param {String} username Riot Account Username (not email)
     * @param {String} password Riot Account Password
     * @returns {Promise<IValClient_Auth>}
     */
    execute(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const axiosClient = new IngCore.AxiosClient({
                cookie: true,
                jar: this.cookie.toJSON(),
                headers: {}
            });
            yield axiosClient.post('https://auth.riotgames.com/api/v1/authorization', {
                "client_id": "play-valorant-web-prod",
                "nonce": "1",
                "redirect_uri": "https://playvalorant.com/opt_in",
                "response_type": "token id_token",
                "scope": "account openid"
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'RiotClient/43.0.1.4195386.4190634 rso-auth (Windows; 10;;Professional, x64)'
                },
            });
            //ACCESS TOKEN
            const auth_response = yield axiosClient.put('https://auth.riotgames.com/api/v1/authorization', {
                'type': 'auth',
                'username': username,
                'password': password,
                'remember': true,
            }, {
                headers: {
                    'User-Agent': 'RiotClient/43.0.1.4195386.4190634 rso-auth (Windows; 10;;Professional, x64)'
                }
            });
            this.cookie = tough_cookie_1.CookieJar.fromJSON(JSON.stringify(axiosClient.jar));
            return AuthFlow_1.AuthFlow.execute(this.toJSON(), auth_response);
        });
    }
    /**
     *
     * @returns {IValClient_Auth}
     */
    toJSON() {
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