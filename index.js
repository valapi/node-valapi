module.exports = {
    //client
    Auth: {
        Account: require('./auth/Account'),
        Multifactor: require('./auth/MultiFactor'),
    },
    ValClient: require('./auth/ValClient'),

    //api
    ValRegion: require('./resources/ValRegion'),
    AxiosClient: require('./resources/AxiosClient'),
    RiotApi: require('./auth/RiotApi'),

    //data
    Resource: {
        QueueId: require(`./resources/data/QueueId`),
        ItemTypeId: require(`./resources/data/ItemTypeId`),
        Currency: require(`./resources/data/Currency`),
        Region: require(`./resources/data/Region`),
        Locale: require(`./resources/data/Locale`),
    }
}