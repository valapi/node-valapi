import { ValError } from "@valapi/lib";

export namespace ValVersion {
    export type Version = `${number}.${number}`;
}

export class ValVersion {
    public static parse(version: ValVersion.Version): ValVersion.Version {
        const split_version: Array<string> = version.split(".");
        if (split_version.length !== 2) {
            throw new ValError({
                name: "ValVersion_Error",
                message: "Invalid version",
                data: version
            });
        }

        // before dot

        split_version[0] = Number(split_version[0]).toString();

        // after dot

        if (split_version[1] === "00") {
            // 5.00 --> 5.0

            split_version[1] = "0";
        } else if (split_version[1] !== "0") {
            // 5.1 --> 5.01

            if (split_version[1].length === 1) {
                split_version[1] = `0${split_version[1]}`;
            }
        }

        return <ValVersion.Version>split_version.join(".");
    }
}
