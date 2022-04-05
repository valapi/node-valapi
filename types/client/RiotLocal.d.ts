export = RiotLocal;
/**
 * All Api Base On https://github.com/techchrism/valorant-api-docs
 * Because I'm lazy to write all api endpoint
 *
 * * READ DOCS BEFORE USE
 */
declare class RiotLocal {
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {String} body Request Body
     */
    static requestSync(method?: string, endpoint?: string, body?: string): Promise<any>;
    /**
     *
     * @param {JSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     */
    static requestFromJSONSync(data?: JSON): Promise<any>;
    static getResourceSync(): {
        Chat: {
            'All Chat History': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'All Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'All Chat Participants': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Game Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Party Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Pregame Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Specific Chat History': {
                method: string;
                endpoint: string;
                body: {};
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            TEXT_CHAT_RNet_FetchParticipants: {
                method: string;
                endpoint: string;
                body: {};
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            'Send Chat': {
                method: string;
                endpoint: string;
                body: {
                    cid: string;
                    message: string;
                    type: string;
                };
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            'Send Whisper': {
                method: string;
                endpoint: string;
                body: {
                    cid: string;
                    message: string;
                    type: string;
                };
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
        };
        Main: {
            CHATFRIENDS_RNet_GET_ALL: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            FRIENDS_RNet_FetchFriendRequests: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Local Help': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            PRESENCE_RNet_GET_ALL: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            PlayerAlias_RNet_GetActiveAlias: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'RSO Auth User Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_GetEntitlementsToken: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Riot Client Region': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RiotClientSession_FetchSessions: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RiotKV_RNet_GetSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            /**
             * @param {String} path path to lockfile
             */
            RiotKV_RNet_GetSettingsTEXT_CHAT_RNet_FetchSession: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
        };
        More: {
            ANTI_ADDICTION_RNet_FetchShutdownPolicyState: {
                method: string;
                endpoint: string;
                body: {};
                /**
                 *
                 * @param {String} ip ip of local api
                 * @param {JSON} lockfile lockfile data
                 */
                replace: never[];
            };
            ANTI_ADDICTION_RNet_FetchWarningMessagePolicyState: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            CLIENTCONFIG_RNET_GET_ValorantClientConfig: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LEGAL_INFO_RNet_EULA: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LEGAL_INFO_RNet_Privacy: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LOCALE_RNet_FetchAvailableLocales: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LOCALE_RNet_FetchLocale: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Local Swagger Docs': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            REPORTER_FEEDBACK_RNet_GetReporterFeedback: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RIOT_WARNING_RNet_GetRiotWarning: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_FetchClientAuthorizations: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_GetAccessToken: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_GetUserInfoToken: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Riot Client Command-Line Args': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RiotStatus_RNet_FetchStatus: {
                method: string;
                endpoint: string;
                body: {};
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            TEXT_CHAT_RNet_FetchSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - coregame': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - parties': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - pregame': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - tournaments': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            URNetClient_CheckPluginStatus: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            URNetClient_CheckRMSSession: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            URNetClient_GetProcessInfo: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchAudioProperties: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchCaptureDevices: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchPTTSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchRenderDevices: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchSessions: {
                method: string;
                endpoint: string;
                /**
                 *
                 * @param {String} method Method to request
                 * @param {String} endpoint Url Endpoint
                 * @param {String} body Request Body
                 */
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Valorant Log Path': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
        };
    };
    /**
     *
     * @param {String} ip ip of local api
     * @param {JSON} lockfile lockfile data
     */
    constructor(ip?: string, lockfile?: JSON);
    classId: string;
    lockfile: {
        name: any;
        pid: any;
        port: any;
        password: any;
        protocol: any;
    };
    ip: string;
    getResource(): {
        Chat: {
            'All Chat History': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'All Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'All Chat Participants': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Game Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Party Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Pregame Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Specific Chat History': {
                method: string;
                endpoint: string;
                body: {};
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            TEXT_CHAT_RNet_FetchParticipants: {
                method: string;
                endpoint: string;
                body: {};
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            'Send Chat': {
                method: string;
                endpoint: string;
                body: {
                    cid: string;
                    message: string;
                    type: string;
                };
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            'Send Whisper': {
                method: string;
                endpoint: string;
                body: {
                    cid: string;
                    message: string;
                    type: string;
                };
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
        };
        Main: {
            CHATFRIENDS_RNet_GET_ALL: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            FRIENDS_RNet_FetchFriendRequests: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Local Help': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            PRESENCE_RNet_GET_ALL: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            PlayerAlias_RNet_GetActiveAlias: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'RSO Auth User Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_GetEntitlementsToken: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Riot Client Region': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RiotClientSession_FetchSessions: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RiotKV_RNet_GetSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            /**
             * @param {String} path path to lockfile
             */
            RiotKV_RNet_GetSettingsTEXT_CHAT_RNet_FetchSession: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
        };
        More: {
            ANTI_ADDICTION_RNet_FetchShutdownPolicyState: {
                method: string;
                endpoint: string;
                body: {};
                /**
                 *
                 * @param {String} ip ip of local api
                 * @param {JSON} lockfile lockfile data
                 */
                replace: never[];
            };
            ANTI_ADDICTION_RNet_FetchWarningMessagePolicyState: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            CLIENTCONFIG_RNET_GET_ValorantClientConfig: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LEGAL_INFO_RNet_EULA: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LEGAL_INFO_RNet_Privacy: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LOCALE_RNet_FetchAvailableLocales: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LOCALE_RNet_FetchLocale: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Local Swagger Docs': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            REPORTER_FEEDBACK_RNet_GetReporterFeedback: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RIOT_WARNING_RNet_GetRiotWarning: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_FetchClientAuthorizations: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_GetAccessToken: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_GetUserInfoToken: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Riot Client Command-Line Args': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RiotStatus_RNet_FetchStatus: {
                method: string;
                endpoint: string;
                body: {};
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            TEXT_CHAT_RNet_FetchSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - coregame': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - parties': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - pregame': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - tournaments': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            URNetClient_CheckPluginStatus: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            URNetClient_CheckRMSSession: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            URNetClient_GetProcessInfo: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchAudioProperties: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchCaptureDevices: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchPTTSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchRenderDevices: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchSessions: {
                method: string;
                endpoint: string;
                /**
                 *
                 * @param {String} method Method to request
                 * @param {String} endpoint Url Endpoint
                 * @param {String} body Request Body
                 */
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Valorant Log Path': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
        };
    };
    reload(): Promise<void>;
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient") | undefined;
    baseUrl: string | undefined;
    resourse: {
        Chat: {
            'All Chat History': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'All Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'All Chat Participants': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Game Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Party Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Pregame Chat Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Specific Chat History': {
                method: string;
                endpoint: string;
                body: {};
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            TEXT_CHAT_RNet_FetchParticipants: {
                method: string;
                endpoint: string;
                body: {};
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            'Send Chat': {
                method: string;
                endpoint: string;
                body: {
                    cid: string;
                    message: string;
                    type: string;
                };
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            'Send Whisper': {
                method: string;
                endpoint: string;
                body: {
                    cid: string;
                    message: string;
                    type: string;
                };
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
        };
        Main: {
            CHATFRIENDS_RNet_GET_ALL: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            FRIENDS_RNet_FetchFriendRequests: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Local Help': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            PRESENCE_RNet_GET_ALL: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            PlayerAlias_RNet_GetActiveAlias: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'RSO Auth User Info': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_GetEntitlementsToken: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Riot Client Region': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RiotClientSession_FetchSessions: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RiotKV_RNet_GetSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            /**
             * @param {String} path path to lockfile
             */
            RiotKV_RNet_GetSettingsTEXT_CHAT_RNet_FetchSession: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
        };
        More: {
            ANTI_ADDICTION_RNet_FetchShutdownPolicyState: {
                method: string;
                endpoint: string;
                body: {};
                /**
                 *
                 * @param {String} ip ip of local api
                 * @param {JSON} lockfile lockfile data
                 */
                replace: never[];
            };
            ANTI_ADDICTION_RNet_FetchWarningMessagePolicyState: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            CLIENTCONFIG_RNET_GET_ValorantClientConfig: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LEGAL_INFO_RNet_EULA: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LEGAL_INFO_RNet_Privacy: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LOCALE_RNet_FetchAvailableLocales: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            LOCALE_RNet_FetchLocale: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Local Swagger Docs': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            REPORTER_FEEDBACK_RNet_GetReporterFeedback: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RIOT_WARNING_RNet_GetRiotWarning: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_FetchClientAuthorizations: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_GetAccessToken: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RSO_RNet_GetUserInfoToken: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Riot Client Command-Line Args': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            RiotStatus_RNet_FetchStatus: {
                method: string;
                endpoint: string;
                body: {};
                replace: {
                    name: string;
                    with: string;
                    where: string;
                }[];
            };
            TEXT_CHAT_RNet_FetchSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - coregame': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - parties': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - pregame': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'TEXT_CHAT_RNet_GetMUCInfos - tournaments': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            URNetClient_CheckPluginStatus: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            URNetClient_CheckRMSSession: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            URNetClient_GetProcessInfo: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchAudioProperties: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchCaptureDevices: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchPTTSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchRenderDevices: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchSessions: {
                method: string;
                endpoint: string;
                /**
                 *
                 * @param {String} method Method to request
                 * @param {String} endpoint Url Endpoint
                 * @param {String} body Request Body
                 */
                body: {};
                replace: never[];
            };
            VOICE_CHAT_RNet_FetchSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
            'Valorant Log Path': {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
        };
    } | undefined;
    /**
     * @param {String} path path to lockfile
     */
    getlockfile(path?: string): Promise<{
        name: any;
        pid: any;
        port: any;
        password: any;
        protocol: any;
    } | undefined>;
    /**
     *
     * @param {JSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     */
    requestFromJSON(data?: JSON, ...args: any[]): Promise<any>;
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {String} body Request Body
     */
    request(method?: string, endpoint?: string, body?: string): Promise<any>;
    setIp(ip?: string): Promise<void>;
}
declare namespace RiotLocal {
    import request = RiotLocal.requestSync;
    export { request };
    import requestFromJSON = RiotLocal.requestFromJSONSync;
    export { requestFromJSON };
    import getResource = RiotLocal.getResourceSync;
    export { getResource };
}
//# sourceMappingURL=RiotLocal.d.ts.map