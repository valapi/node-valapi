(async () => {
    //import
    const axios = require('axios');

    //Get Client Version
    //This is example ways to get Client Version
    const clientVersion_url = 'https://valorant-api.com/v1/version';  // <------- This is Third Party Valorant Api
    const clientVersion_api = (await axios({
        method: `get`,
        url: clientVersion_url
    })).data;

    const clientVersion = await clientVersion_api.data.data.riotClientVersion; // !! EXAMPLE !!

    module.exports = clientVersion;
})();