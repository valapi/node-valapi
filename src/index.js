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
    }
};