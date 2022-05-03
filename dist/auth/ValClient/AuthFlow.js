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
exports.AuthFlow = void 0;
//import
const tough_cookie_1 = require("tough-cookie");
const IngCore = __importStar(require("@ing3kth/core"));
const AxiosClient_1 = require("../../client/AxiosClient");
//class
/**
 * * Class ID: @ing3kth/val-api/ValClient/AuthFlow
 */
class AuthFlow {
    /**
    * @param {IValClient_Auth} data Account toJSON data
    */
    constructor(data) {
        this.classId = '@ing3kth/val-api/ValClient/AuthFlow';
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
     * @param {IAxiosClient} auth_response First Auth Response
     * @returns {Promise<IValClient_Auth>}
     */
    execute(auth_response) {
        return __awaiter(this, void 0, void 0, function* () {
            if (auth_response.isError) {
                IngCore.Logs.log(this.classId + ' something went wrong', 'warning', true);
                return this.toJSON();
            }
            const axiosClient = new AxiosClient_1.AxiosClient({
                jar: this.cookie,
                withCredentials: true,
            });
            //multifactor
            if (auth_response.data.type && auth_response.data.type == 'multifactor') {
                this.multifactor = true;
                yield IngCore.Logs.log(this.classId + " Export Multi-Factor");
                return this.toJSON();
            }
            // get asscess token
            const Search_URL = new URL(auth_response.data.response.parameters.uri);
            this.access_token = String(new URLSearchParams(Search_URL.hash).get('#access_token'));
            this.id_token = String(new URLSearchParams(Search_URL.hash).get('id_token'));
            this.expires_in = Number(new URLSearchParams(Search_URL.hash).get('expires_in'));
            this.token_type = String(new URLSearchParams(Search_URL.hash).get('token_type'));
            //ENTITLEMENTS
            const entitlements_response = yield axiosClient.post('https://entitlements.auth.riotgames.com/api/token/v1', {}, {
                headers: {
                    'Authorization': `${this.token_type} ${this.access_token}`,
                    'User-Agent': IngCore.Config["val-api"].ValClient.auth["User-Agent"],
                },
            });
            this.entitlements_token = entitlements_response.data.entitlements_token;
            //REGION
            const region_response = yield axiosClient.put('https://riot-geo.pas.si.riotgames.com/pas/v1/product/valorant', {
                "id_token": this.id_token,
            }, {
                headers: {
                    'Authorization': `${this.token_type} ${this.access_token}`,
                }
            });
            this.region.pbe = region_response.data.affinities.pbe;
            this.region.live = region_response.data.affinities.live;
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
     * @param {IValClient_Auth} data Account toJSON data
     * @param {IAxiosClient} auth_response First Auth Response
     * @returns {Promise<IValClient_Auth>}
     */
    static execute(data, auth_response) {
        return __awaiter(this, void 0, void 0, function* () {
            const _newAuthFlow = new AuthFlow(data);
            return yield _newAuthFlow.execute(auth_response);
        });
    }
}
exports.AuthFlow = AuthFlow;
//# sourceMappingURL=AuthFlow.js.map