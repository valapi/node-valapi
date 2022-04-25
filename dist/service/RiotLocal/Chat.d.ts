declare const _default: {
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
/**
 * https://github.com/techchrism/valorant-api-docs/tree/trunk/docs/Local%20Chat
 */
export default _default;
//# sourceMappingURL=Chat.d.ts.map