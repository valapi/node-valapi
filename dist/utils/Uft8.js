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
 * @param {String} unicode Unicode
 */
function toBase64(data, unicode = 'Utf8') {
    return crypto_js_1.default.enc[unicode].parse(String(data)).toString(crypto_js_1.default.enc.Base64);
}
exports.toBase64 = toBase64;
/**
 *
 * @param {String} data Data
 * @param {String} unicode Unicode
 */
function fromBase64(data, unicode = 'Utf8') {
    return crypto_js_1.default.enc.Base64.parse(data).toString(crypto_js_1.default.enc[unicode]);
}
exports.fromBase64 = fromBase64;
//# sourceMappingURL=Uft8.js.map