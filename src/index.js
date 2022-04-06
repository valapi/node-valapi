module.exports = {
    //auth
    Auth: {
        Account: require('./auth/Account'),
        Multifactor: require('./auth/Multifactor'),
    },

    //client
    ValClient: require('./client/ValClient'),
    RiotApi: require('./client/RiotApi'),
    RiotLocal: require('./client/RiotLocal'),

    //resource
    ValRegion: require('./resources/ValRegion'),
    Resource: {
        Currency: require(`./resources/data/Currency`),
        ItemTypeId: require(`./resources/data/ItemTypeId`),
        Locale: require(`./resources/data/Locale`),
        QueueId: require(`./resources/data/QueueId`),
        Region: require(`./resources/data/Region`),
        HTTP_Response: require(`./resources/data/HTTP_Response`),
    },

    //interface
    Interface: {
        RiotApi: require('./resources/interface/i_RiotApi'),
        RiotLocalJSON: require('./resources/interface/i_RiotLocalJSON'),
        RiotLocalLockfile: require('./resources/interface/i_RiotLocalLockfile'),
        RiotLocalReplace: require('./resources/interface/i_RiotLocalReplace'),
        RiotLocalResources: require('./resources/interface/i_RiotLocalResources'),
        ValClient: require('./resources/interface/i_ValClient'),
        ValClientAuth: require('./resources/interface/i_ValClientAuth'),
        ValRegion: require('./resources/interface/i_ValRegion'),
    },
};