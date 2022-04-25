import CryptoJS from "crypto-js";

/**
 * 
 * @param {String} data Data
 * @param {String} unicode Unicode
 */
function toBase64(data:string, unicode:keyof typeof CryptoJS.enc = 'Utf8'):string {
    return CryptoJS.enc[unicode].parse(String(data)).toString(CryptoJS.enc.Base64);
}

/**
 * 
 * @param {String} data Data
 * @param {String} unicode Unicode
 */
function fromBase64(data:string, unicode:keyof typeof CryptoJS.enc = 'Utf8'):string {
    return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc[unicode]);
}

export {
    toBase64,
    fromBase64,
};