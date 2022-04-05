/**
 * https://github.com/techchrism/valorant-api-docs/tree/trunk/docs/Local%20Chat
 */
module.exports = {
    'All Chat History': {
        method: 'get',
        endpoint: '/chat/v6/messages',
        body: {},
        replace: [],
    },
    'All Chat Info': {
        method: 'get',
        endpoint: '/chat/v6/info/conversations/',
        body: {},
        replace: [],
    },
    'All Chat Participants': {
        method: 'get',
        endpoint: '/chat/v5/participants/',
        body: {},
        replace: [],
    },
    'Game Chat Info': {
        method: 'get',
        endpoint: '/chat/v6/conversations/ares-coregame',
        body: {},
        replace: [],
    },
    'Party Chat Info': {
        method: 'get',
        endpoint: '/chat/v6/conversations/ares-parties',
        body: {},
        replace: [],
    },
    'Pregame Chat Info': {
        method: 'get',
        endpoint: '/chat/v6/conversations/ares-pregame',
        body: {},
        replace: [],
    },
    'Specific Chat History': {
        method: 'get',
        endpoint: '/chat/v6/messages?cid=RE_chatId_PLACE',
        body: {},
        replace: [
            {
                name: 'Chat ID',
                with: 'RE_chatId_PLACE',
                where: 'url',
            }
        ]
    },
    'TEXT_CHAT_RNet_FetchParticipants': {
        method: 'get',
        endpoint: '/chat/v5/participants/?cid=RE_chatId_PLACE',
        body: {},
        replace: [
            {
                name: 'Chat ID',
                with: 'RE_chatId_PLACE',
                where: 'url',
            }
        ]
    },
    'Send Chat': {
        method: 'post',
        endpoint: '/chat/v6/messages/',
        body: {
            "cid": "RE_chatId_PLACE",
            "message": "RE_message_PLACE",
            "type": "groupchat"
        },
        replace: [
            {
                name: 'Chat ID',
                with: 'RE_chatId_PLACE',
                where: 'body',
            },
            {
                name: 'Message',
                with: 'RE_message_PLACE',
                where: 'body',
            },
        ],
    },
    'Send Whisper': {
        method: 'post',
        endpoint: '/chat/v6/messages/',
        body: {
            "cid": "RE_chatId_PLACE",
            "message": "RE_message_PLACE",
            "type": "chat"
        },
        replace: [
            {
                name: 'Chat ID',
                with: 'RE_chatId_PLACE',
                where: 'body',
            },
            {
                name: 'Message',
                with: 'RE_message_PLACE',
                where: 'body',
            },
        ],

    },
};