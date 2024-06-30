import { ValError } from "../client/ValError";

export class ValVersion {
    public static parse(version: string): string {
        const splitVersion: Array<string> = version.split(".");
        if (splitVersion.length !== 2) {
            throw new ValError({
                name: "Version_Error",
                message: "Invalid version",
                data: version
            });
        }

        splitVersion[0] = Number.parseInt(splitVersion[0]).toString();

        if (splitVersion[1].length === 1) {
            splitVersion[1] = `0${splitVersion[1]}`;
        }

        if (splitVersion[1] === "00") {
            splitVersion[1] = "0";
        }

        return splitVersion.join(".");
    }
}
