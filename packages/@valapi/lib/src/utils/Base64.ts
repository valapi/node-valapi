import { Buffer } from "node:buffer";

export class ValBase64 {
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
     * @param {string} text Encrypted Text
     * @returns {string} Decrypted Text
     */
    public static decrypt(text: string): string {
        return Buffer.from(text, "base64").toString();
    }
}
