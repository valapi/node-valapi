import CryptoJS from "crypto-js";

/**
 * 
 * @param {String} data Data
 * @param {String} encrypt Encrypt mode
 */
function toBase64(data:string, encrypt:keyof typeof CryptoJS.enc = 'Utf8'):string {
    // if(encrypt === 'Utf8'){
    //     return Buffer.from(data).toString('base64');
    // }

    return CryptoJS.enc[encrypt].parse(String(data)).toString(CryptoJS.enc.Base64);
}

/**
 * 
 * @param {String} data Data
 * @param {String} decrypt Decrypt mode
 */
function fromBase64(data:string, decrypt:keyof typeof CryptoJS.enc = 'Utf8'):string {
    return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc[decrypt]);
}

export {
    toBase64,
    fromBase64,
};