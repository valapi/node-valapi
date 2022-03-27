module.exports = {
    //auth
    Auth: {
        Account: require('./auth/Account'),
        Multifactor: require('./auth/Multifactor'),
    },

    //client
    ValClient: require('./client/ValClient'),
    RiotApi: require('./client/RiotApi'),

    //resource
    ValRegion: require('./resources/ValRegion'),
    Resource: {
        QueueId: require(`./resources/data/QueueId`),
        ItemTypeId: require(`./resources/data/ItemTypeId`),
        Currency: require(`./resources/data/Currency`),
        Region: require(`./resources/data/Region`),
        Locale: require(`./resources/data/Locale`),
    }
};