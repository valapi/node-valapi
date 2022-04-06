const i_RiotLocalJsonReplace = require('./i_RiotLocalReplace');

module.exports = interface = {
    method: String, //GET || POST || PUT || DELETE
    endpoint: String,
    body: Object,
    replace: Array(i_RiotLocalJsonReplace),
};