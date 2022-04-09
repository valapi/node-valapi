export = RiotLocal;
/**
 * All Api Base On https://github.com/techchrism/valorant-api-docs
 *
 * Because I'm lazy to write all api endpoint
 *
 * * Class ID: @ing3kth/val-api/RiotLocal
 * * Use Anywhere: false
 */
declare class RiotLocal {
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {String} body Request Body
     * @returns {Object}
     */
    static request(method?: string, endpoint?: string, body?: string): Object;
    /**
     *
     * @param {JSON} data Data from LocalResourse
     * @param {any} args.. Replace Data With Arguments
     * @returns {Object}
     */
    static requestFromJSON(data?: JSON): Object;
    /**
     *
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {RiotLocal}
     */
    static fromJSON(data?: {
        ip: StringConstructor;
        lockfile: {
            name: StringConstructor;
            pid: NumberConstructor;
            port: NumberConstructor;
            password: StringConstructor;
            protocol: StringConstructor;
        };
    }): RiotLocal;
    static getResource(): {
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
                /**
                 * All Api Base On https://github.com/techchrism/valorant-api-docs
                 *
                 * Because I'm lazy to write all api endpoint
                 *
                 * * Class ID: @ing3kth/val-api/RiotLocal
                 * * Use Anywhere: false
                 */
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
            }; /**
             *
             * @param {String} ip IP of local api
             * @param {IRiotLocalLockfile} lockfile lockfile data
             */
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
                replace: never[]; /**
                 * @returns {void}
                 */
            };
            RiotKV_RNet_GetSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
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
                replace: never[];
            };
            ANTI_ADDICTION_RNet_FetchWarningMessagePolicyState: {
                method: string;
                endpoint: string;
                body: {}; /**
                 *
                 * @param {String} ip IP of local api
                 * @param {IRiotLocalLockfile} lockfile lockfile data
                 */
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
                replace: never[]; /**
                 * @returns {void}
                 */
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
            }; /**
             * @param {String} path path to lockfile
             * @returns {IRiotLocalLockfile}
             */
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
     * @param {String} ip IP of local api
     * @param {IRiotLocalLockfile} lockfile lockfile data
     */
    constructor(ip?: string, lockfile?: {
        name: StringConstructor;
        pid: NumberConstructor;
        port: NumberConstructor;
        password: StringConstructor;
        protocol: StringConstructor;
    });
    classId: string;
    lockfile: {
        name: StringConstructor;
        pid: NumberConstructor;
        port: NumberConstructor;
        password: StringConstructor;
        protocol: StringConstructor;
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
                /**
                 * All Api Base On https://github.com/techchrism/valorant-api-docs
                 *
                 * Because I'm lazy to write all api endpoint
                 *
                 * * Class ID: @ing3kth/val-api/RiotLocal
                 * * Use Anywhere: false
                 */
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
            }; /**
             *
             * @param {String} ip IP of local api
             * @param {IRiotLocalLockfile} lockfile lockfile data
             */
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
                replace: never[]; /**
                 * @returns {void}
                 */
            };
            RiotKV_RNet_GetSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
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
                replace: never[];
            };
            ANTI_ADDICTION_RNet_FetchWarningMessagePolicyState: {
                method: string;
                endpoint: string;
                body: {}; /**
                 *
                 * @param {String} ip IP of local api
                 * @param {IRiotLocalLockfile} lockfile lockfile data
                 */
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
                replace: never[]; /**
                 * @returns {void}
                 */
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
            }; /**
             * @param {String} path path to lockfile
             * @returns {IRiotLocalLockfile}
             */
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
     * @returns {void}
     */
    reload(): void;
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
                /**
                 * All Api Base On https://github.com/techchrism/valorant-api-docs
                 *
                 * Because I'm lazy to write all api endpoint
                 *
                 * * Class ID: @ing3kth/val-api/RiotLocal
                 * * Use Anywhere: false
                 */
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
            }; /**
             *
             * @param {String} ip IP of local api
             * @param {IRiotLocalLockfile} lockfile lockfile data
             */
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
                replace: never[]; /**
                 * @returns {void}
                 */
            };
            RiotKV_RNet_GetSettings: {
                method: string;
                endpoint: string;
                body: {};
                replace: never[];
            };
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
                replace: never[];
            };
            ANTI_ADDICTION_RNet_FetchWarningMessagePolicyState: {
                method: string;
                endpoint: string;
                body: {}; /**
                 *
                 * @param {String} ip IP of local api
                 * @param {IRiotLocalLockfile} lockfile lockfile data
                 */
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
                replace: never[]; /**
                 * @returns {void}
                 */
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
            }; /**
             * @param {String} path path to lockfile
             * @returns {IRiotLocalLockfile}
             */
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
     * @returns {IRiotLocalLockfile}
     */
    getlockfile(path?: string): {
        name: StringConstructor;
        pid: NumberConstructor;
        port: NumberConstructor;
        password: StringConstructor;
        protocol: StringConstructor;
    };
    /**
     *
     * @param {IRiotLocalJSON} data Data from LocalResourse
     * @param {any} args.. Replace With Arguments
     * @returns {Object}
     */
    requestFromJSON(data?: {
        method: StringConstructor;
        endpoint: StringConstructor;
        body: ObjectConstructor;
        replace: ArrayConstructor;
    }, ...args: any[]): Object;
    /**
     *
     * @param {String} method Method to request
     * @param {String} endpoint Url Endpoint
     * @param {String} body Request Body
     * @returns {Object}
     */
    request(method?: string, endpoint?: string, body?: string): Object;
    /**
     *
     * @returns {IRiotLocal}
     */
    toJSON(): {
        ip: StringConstructor;
        lockfile: {
            name: StringConstructor;
            pid: NumberConstructor;
            port: NumberConstructor;
            password: StringConstructor;
            protocol: StringConstructor;
        };
    };
    /**
     *
     * @param {IRiotLocal} data RiotLocal toJSON Data
     * @returns {void}
     */
    fromJSON(data?: {
        ip: StringConstructor;
        lockfile: {
            name: StringConstructor;
            pid: NumberConstructor;
            port: NumberConstructor;
            password: StringConstructor;
            protocol: StringConstructor;
        };
    }): void;
    /**
     *
     * @param {String} ip IP of local api
     * @returns {void}
     */
    setIp(ip?: string): void;
    /**
     * @param {String} name
     * @returns {void}
     */
    setLockfileName(name?: string): void;
    /**
     * @param {Number} pid
     * @returns {void}
     */
    setLockfilePid(pid: number): void;
    /**
     * @param {Number} port
     * @returns {void}
     */
    setLockfilePort(port: number): void;
    /**
     * @param {String} password
     * @returns {void}
     */
    setLockfilePassword(password: string): void;
    /**
     * @param {String} protocol
     * @returns {void}
     */
    setLockfileProtocol(protocol?: string): void;
}
//# sourceMappingURL=RiotLocal.d.ts.map