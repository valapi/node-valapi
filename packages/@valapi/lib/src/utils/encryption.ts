import { Buffer } from "node:buffer";

export class ValEncryption {
    /**
     *
     * @param {string} text Text
     * @returns {string} Encrypted Text
     */
    public static encrypt(text: string): string {
        return Buffer.from(text).toString("base64");
    }

    /**
     *
     * @param {T} object Object
     * @returns {string} Encrypted Object
     */
    public static encryptJson<T = any>(object: T): string {
        return this.encrypt(JSON.stringify(object));
    }

    /**
     *
     * @param {string} text Encrypted Text
     * @returns {string} Decrypted Text
     */
    public static decrypt(text: string): string {
        return Buffer.from(text, "base64").toString();
    }

    /**
     *
     * @param {string} object Encrypted Object
     * @returns {T} Decrypted Object
     */
    public static decryptJson<T = any>(object: string): T {
        return JSON.parse(this.decrypt(object));
    }
}
