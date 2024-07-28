import { Buffer } from "node:buffer";
import { randomBytes } from "node:crypto";

export class ValEncryption {
    public static encrypt(text: string): string {
        return Buffer.from(text).toString("base64");
    }

    public static encryptJson<T = any>(object: T): string {
        return this.encrypt(JSON.stringify(object));
    }

    public static decrypt(text: string): string {
        return Buffer.from(text, "base64").toString();
    }

    public static decryptJson<T = any>(object: string): T {
        return JSON.parse(this.decrypt(object));
    }

    public static randomString(size: number): string {
        return randomBytes(size).toString("base64url");
    }
}
