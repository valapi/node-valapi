"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * https://github.com/techchrism/valorant-api-docs/tree/trunk/docs/Other%20Local
 */
exports.default = {
    'ANTI_ADDICTION_RNet_FetchShutdownPolicyState': {
        method: 'get',
        endpoint: '/anti-addiction/v1/products/valorant/policies/shutdown/anti-addiction-state',
        body: {},
        replace: [],
    },
    'ANTI_ADDICTION_RNet_FetchWarningMessagePolicyState': {
        method: 'get',
        endpoint: '/anti-addiction/v1/products/valorant/policies/warningMessage/anti-addiction-state',
        body: {},
        replace: [],
    },
    'CLIENTCONFIG_RNET_GET_ValorantClientConfig': {
        method: 'get',
        endpoint: '/client-config/v2/namespace/valorant.client/player',
        body: {},
        replace: [],
    },
    'LEGAL_INFO_RNet_EULA': {
        method: 'get',
        endpoint: '/eula/v1/agreement/content',
        body: {},
        replace: [],
    },
    'LEGAL_INFO_RNet_Privacy': {
        method: 'get',
        endpoint: '/eula/v1/privacy-policy/content',
        body: {},
        replace: [],
    },
    'LOCALE_RNet_FetchAvailableLocales': {
        method: 'get',
        endpoint: '/rnet-product-registry/v4/available-product-locales/products/valorant/patchlines/live',
        body: {},
        replace: [],
    },
    'LOCALE_RNet_FetchLocale': {
        method: 'get',
        endpoint: '/riotclient/product-locales/products/valorant/patchlines/live',
        body: {},
        replace: [],
    },
    'Local Swagger Docs': {
        method: 'get',
        endpoint: '/swagger/v3/openapi.json',
        body: {},
        replace: [],
    },
    'REPORTER_FEEDBACK_RNet_GetReporterFeedback': {
        method: 'get',
        endpoint: '/player-reporting/v1/reporter-feedback',
        body: {},
        replace: [],
    },
    'RIOT_WARNING_RNet_GetRiotWarning': {
        method: 'get',
        endpoint: '/ga-warning/v1/warnings',
        body: {},
        replace: [],
    },
    'RSO_RNet_FetchClientAuthorizations': {
        method: 'get',
        endpoint: '/rso-auth/v2/authorizations/valorant-client',
        body: {},
        replace: [],
    },
    'RSO_RNet_GetAccessToken': {
        method: 'get',
        endpoint: '/rso-auth/v1/authorization/access-token',
        body: {},
        replace: [],
    },
    'RSO_RNet_GetUserInfoToken': {
        method: 'get',
        endpoint: '/rso-auth/v1/userinfo/valorant-client',
        body: {},
        replace: [],
    },
    'Riot Client Command-Line Args': {
        method: 'get',
        endpoint: '/riotclient/command-line-args',
        body: {},
        replace: [],
    },
    'RiotStatus_RNet_FetchStatus': {
        method: 'get',
        endpoint: '/riot-status/v1/products/valorant/patchlines/live/deployments/RE_region_PLACE',
        body: {},
        replace: [{
                name: 'Region',
                with: 'RE_region_PLACE',
                where: 'url',
            }],
    },
    'TEXT_CHAT_RNet_FetchSettings': {
        method: 'get',
        endpoint: '/chat/v1/settings',
        body: {},
        replace: [],
    },
    'TEXT_CHAT_RNet_GetMUCInfos - coregame': {
        method: 'get',
        endpoint: '/chat/v6/conversations/ares-coregame',
        body: {},
        replace: [],
    },
    'TEXT_CHAT_RNet_GetMUCInfos - parties': {
        method: 'get',
        endpoint: '/chat/v6/conversations/ares-parties',
        body: {},
        replace: [],
    },
    'TEXT_CHAT_RNet_GetMUCInfos - pregame': {
        method: 'get',
        endpoint: '/chat/v6/conversations/ares-pregame',
        body: {},
        replace: [],
    },
    'TEXT_CHAT_RNet_GetMUCInfos - tournaments': {
        method: 'get',
        endpoint: '/chat/v6/conversations/ares-tournaments',
        body: {},
        replace: [],
    },
    'URNetClient_CheckPluginStatus': {
        method: 'get',
        endpoint: '/plugin-manager/v1/status',
        body: {},
        replace: [],
    },
    'URNetClient_CheckRMSSession': {
        method: 'get',
        endpoint: '/riot-messaging-service/v1/session',
        body: {},
        replace: [],
    },
    'URNetClient_GetProcessInfo': {
        method: 'get',
        endpoint: '/process-control/v1/process',
        body: {},
        replace: [],
    },
    'VOICE_CHAT_RNet_FetchAudioProperties': {
        method: 'get',
        endpoint: '/voice-chat/v1/audio-properties',
        body: {},
        replace: [],
    },
    'VOICE_CHAT_RNet_FetchCaptureDevices': {
        method: 'get',
        endpoint: '/voice-chat/v2/devices/capture',
        body: {},
        replace: [],
    },
    'VOICE_CHAT_RNet_FetchPTTSettings': {
        method: 'get',
        endpoint: '/voice-chat/v2/push-to-talk/valorant',
        body: {},
        replace: [],
    },
    'VOICE_CHAT_RNet_FetchRenderDevices': {
        method: 'get',
        endpoint: '/voice-chat/v2/devices/render',
        body: {},
        replace: [],
    },
    'VOICE_CHAT_RNet_FetchSessions': {
        method: 'get',
        endpoint: '/voice-chat/v3/sessions/valorant',
        body: {},
        replace: [],
    },
    'VOICE_CHAT_RNet_FetchSettings': {
        method: 'get',
        endpoint: '/voice-chat/v3/settings/valorant',
        body: {},
        replace: [],
    },
    'Valorant Log Path': {
        method: 'get',
        endpoint: '/product-session/v1/logs/path/VALORANT',
        body: {},
        replace: [],
    }
};
//# sourceMappingURL=More.js.map