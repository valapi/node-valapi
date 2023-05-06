import { Buffer } from "node:buffer";

/**
 *
 * @param {string} text Text
 * @param {string} technique Encoding Technique (default: base64)
 * @returns {string} Encrypted Text
 */
export function toUft8(text: string, technique: BufferEncoding = "base64"): string {
    return Buffer.from(text).toString(technique);
}

/**
 *
 * @param {string} text Encrypted Text
 * @param {string} technique Encoding Technique (default: base64)
 * @returns {string} Decrypted Text
 */
export function fromUft8(text: string, technique: BufferEncoding = "base64"): string {
    return Buffer.from(text, technique).toString();
}
