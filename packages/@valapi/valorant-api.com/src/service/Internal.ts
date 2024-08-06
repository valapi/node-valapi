import type { Language } from "../client/ValorantApiCom";
import { ValorantApiComService } from "../client/ValorantApiComService";
import type { LanguageResponse, Response } from "../client/ValorantApiComService";

export namespace Internal {
    /**
     * ! unknown from website
     */

    export interface UUID<L extends Language> {
        uuid: string;
        type: string;
        displayName: LanguageResponse<string, L>;
    }

    export interface RiotClientVersion {
        manifestFileName: string;
        userAgentVersion: string;
        riotClientFoundationInfo: {
            VS_FIXEDFILEINFO: {
                FileVersion: string;
                ProductVersion: string;
                FileFlagsMask: string;
                FileFlags: `${number}`;
                FileOS: string;
                FileType: string;
                FileSubtype: string;
            };
            StringTable: {
                Language: `${number}`;
                CodePage: `${number}`;
                FileDescription: string;
                FileVersion: string;
                InternalName: string;
                OriginalFilename: string;
                ProductName: string;
                ProductVersion: string;
                CompanyName: string;
                LegalCopyright: string;
            };
            Translation: {
                Language: `${number}`;
                CodePage: `${number}`;
            };
        };
        riotGamesApiInfo: {
            VS_FIXEDFILEINFO: {
                FileVersion: string;
                ProductVersion: string;
                FileFlagsMask: string;
                FileFlags: string;
                FileOS: string;
                FileType: string;
                FileSubtype: string;
            };
            StringTable: {
                Language: `${number}`;
                CodePage: `${number}`;
                FileDescription: string;
                FileVersion: string;
                InternalName: string;
                OriginalFilename: string;
                ProductName: string;
                ProductVersion: string;
                CompanyName: string;
                LegalCopyright: string;
            };
            Translation: {
                Language: `${number}`;
                CodePage: `${number}`;
            };
        };
    }
}

export class Internal<L extends Language = any> extends ValorantApiComService {
    public uuid(): Response<Internal.UUID<L>[]> {
        return this.request.get(`/internal/uuids`);
    }

    public riotClientVersion(): Response<Internal.RiotClientVersion> {
        return this.request.get(`/internal/ritoclientversion`);
    }
}
