import CryptoJS from "crypto-js";
/**
 *
 * @param {String} data Data
 * @param {String} unicode Unicode
 */
declare function toBase64(data: string, unicode?: keyof typeof CryptoJS.enc): string;
/**
 *
 * @param {String} data Data
 * @param {String} unicode Unicode
 */
declare function fromBase64(data: string, unicode?: keyof typeof CryptoJS.enc): string;
export { toBase64, fromBase64, };
//# sourceMappingURL=Uft8.d.ts.map