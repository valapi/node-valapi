"use strict";
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
exports.AxiosClient = void 0;
//import
const axios_1 = __importDefault(require("axios"));
const core_1 = require("@ing3kth/core");
const http_cookie_agent_1 = require("http-cookie-agent");
//class
class AxiosClient {
    /**
    * @param {AxiosRequestConfig} config Config
    */
    constructor(config = {}) {
        this.classId = '@ing3kth/core/AxiosClient';
        if (config.jar) {
            const ciphers = [
                'TLS_CHACHA20_POLY1305_SHA256',
                'TLS_AES_128_GCM_SHA256',
                'TLS_AES_256_GCM_SHA384',
                'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256'
            ];
            config.httpAgent = new http_cookie_agent_1.HttpCookieAgent({ jar: config.jar, keepAlive: true });
            config.httpsAgent = new http_cookie_agent_1.HttpsCookieAgent({ jar: config.jar, keepAlive: true, ciphers: ciphers.join(':'), honorCipherOrder: true, minVersion: 'TLSv1.2' });
            delete config.jar;
        }
        this.axiosClient = axios_1.default.create(config);
    }
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    get(url, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            var ERRoR = false;
            try {
                response = yield this.axiosClient.get(url, config);
                yield core_1.Logs.log(this.classId + " GET " + url, 'info');
            }
            catch (err) {
                response = err.response;
                ERRoR = true;
                yield core_1.Logs.log(this.classId + " GET " + url, 'warning');
            }
            finally {
                return {
                    isError: ERRoR,
                    data: response.data,
                };
            }
        });
    }
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    post(url, body = {}, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            var ERRoR = false;
            try {
                response = yield this.axiosClient.post(url, body, config);
                yield core_1.Logs.log(this.classId + " POST " + url, 'info');
            }
            catch (err) {
                response = err.response;
                ERRoR = true;
                yield core_1.Logs.log(this.classId + " POST " + url, 'warning');
            }
            finally {
                return {
                    isError: ERRoR,
                    data: response.data,
                };
            }
        });
    }
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    put(url, body = {}, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            var ERRoR = false;
            try {
                response = yield this.axiosClient.put(url, body, config);
                yield core_1.Logs.log(this.classId + " PUT " + url, 'info');
            }
            catch (err) {
                response = err.response;
                ERRoR = true;
                yield core_1.Logs.log(this.classId + " PUT " + url, 'warning');
            }
            finally {
                return {
                    isError: ERRoR,
                    data: response.data,
                };
            }
        });
    }
    /**
    * @param {String} url URL
    * @param {Object} body Body
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    patch(url, body = {}, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            var ERRoR = false;
            try {
                response = yield this.axiosClient.patch(url, body, config);
                yield core_1.Logs.log(this.classId + " PATCH " + url, 'info');
            }
            catch (err) {
                response = err.response;
                ERRoR = true;
                yield core_1.Logs.log(this.classId + " PATCH " + url, 'warning');
            }
            finally {
                return {
                    isError: ERRoR,
                    data: response.data,
                };
            }
        });
    }
    /**
    * @param {String} url URL
    * @param {AxiosRequestConfig} config Axios Config
    * @returns {Promise<IAxiosClient>}
    */
    delete(url, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            var response;
            var ERRoR = false;
            try {
                response = yield this.axiosClient.delete(url, config);
                yield core_1.Logs.log(this.classId + " DELETE " + url, 'info');
            }
            catch (err) {
                response = err.response;
                ERRoR = true;
                yield core_1.Logs.log(this.classId + " DELETE " + url, 'warning');
            }
            finally {
                return {
                    isError: ERRoR,
                    data: response.data,
                };
            }
        });
    }
    /**
    * @param {AxiosRequestConfig} config Config
    */
    static client(config) {
        return new AxiosClient(config).axiosClient;
    }
}
exports.AxiosClient = AxiosClient;
//# sourceMappingURL=AxiosClient.js.map