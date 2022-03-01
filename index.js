module.exports = {
    //class
    Account: require(`./auth/account`),
    Multifactor: require(`./auth/multifactor`),
    ValClient: require(`./auth/client`),
    Region: require(`./resources/region`),

    //data
    QueueId: require(`./resources/data/queueId`),
    ItemTypeId: require(`./resources/data/itemTypeId`),
    Currency: require(`./resources/data/currency`),
}