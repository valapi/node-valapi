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
exports.CookieAuth = void 0;
//import
const tough_cookie_1 = require("tough-cookie");
const IngCore = __importStar(require("@ing3kth/core"));
const AxiosClient_1 = require("../../client/AxiosClient");
const AuthFlow_1 = require("./AuthFlow");
//class
/**
 * *Not Recommend*
 *
 * * Class ID: @ing3kth/val-api/ValClient/CookieAuth
 */
class CookieAuth {
    /**
    * @param {IValClient_Auth} data Account toJSON data
    */
    constructor(data) {
        if (data.multifactor) {
            IngCore.Logs.log('This Account is have a Multifactor', 'error', true);
        }
        this.classId = '@ing3kth/val-api/ValClient/CookieAuth';
        this.cookie = tough_cookie_1.CookieJar.fromJSON(JSON.stringify(data.cookie));
        this.access_token = data.access_token;
        this.id_token = data.id_token;
        this.expires_in = data.expires_in;
        this.token_type = data.token_type;
        this.entitlements_token = data.entitlements_token;
        this.region = data.region;
        this.multifactor = data.multifactor;
    }
    /**
    * @returns {Promise<any>}
    */
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const axiosClient = new AxiosClient_1.AxiosClient({
                jar: this.cookie,
                withCredentials: true,
                headers: {
                    'User-Agent': IngCore.Config["val-api"].ValClient.auth["User-Agent"],
                },
                maxRedirects: 1,
            }).axiosClient;
            //Cookie Reauth
            var reauth_response;
            try {
                reauth_response = yield axiosClient.get('https://auth.riotgames.com/authorize?redirect_uri=https%3A%2F%2Fplayvalorant.com%2Fopt_in&client_id=play-valorant-web-prod&response_type=token%20id_token&nonce=1');
            }
            catch (err) {
                return yield AuthFlow_1.AuthFlow.fromUrl(this.toJSON(), err.request._currentUrl);
            }
            IngCore.Logs.log(this.classId + ' URL not find', 'error', true);
            return this.toJSON();
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
            access_token: this.access_token,
            id_token: this.id_token,
            expires_in: this.expires_in,
            token_type: this.token_type,
            entitlements_token: this.entitlements_token,
            region: this.region,
            multifactor: this.multifactor,
        };
    }
    /**
    * @param {IValClient_Auth} data ValAuth_Account toJSON data
    * @returns {Promise<IValClient_Auth>}
    */
    static reauth(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const CookieAccount = new CookieAuth(data);
            return yield CookieAccount.execute();
        });
    }
}
exports.CookieAuth = CookieAuth;
//# sourceMappingURL=CookieAuth.js.map