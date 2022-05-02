import CryptoJS from "crypto-js";
/**
 *
 * @param {String} data Data
 * @param {String} encrypt Encrypt mode
 */
declare function toBase64(data: string, encrypt?: keyof typeof CryptoJS.enc): string;
/**
 *
 * @param {String} data Data
 * @param {String} decrypt Decrypt mode
 */
declare function fromBase64(data: string, decrypt?: keyof typeof CryptoJS.enc): string;
export { toBase64, fromBase64, };
//# sourceMappingURL=Uft8.d.ts.map