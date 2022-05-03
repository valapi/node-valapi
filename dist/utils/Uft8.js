"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBase64 = exports.toBase64 = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
/**
 *
 * @param {String} data Data
 * @param {String} encrypt Encrypt mode
 */
function toBase64(data, encrypt = 'Utf8') {
    // if(encrypt === 'Utf8'){
    //     return Buffer.from(data).toString('base64');
    // }
    return crypto_js_1.default.enc[encrypt].parse(String(data)).toString(crypto_js_1.default.enc.Base64);
}
exports.toBase64 = toBase64;
/**
 *
 * @param {String} data Data
 * @param {String} decrypt Decrypt mode
 */
function fromBase64(data, decrypt = 'Utf8') {
    return crypto_js_1.default.enc.Base64.parse(data).toString(crypto_js_1.default.enc[decrypt]);
}
exports.fromBase64 = fromBase64;
//# sourceMappingURL=Uft8.js.map