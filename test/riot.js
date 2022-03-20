(async () => {
    const ValApi = require('../index.js');

    const _apikey = 'ABCDEF-ghi1j234-k5l6-78mn-9012-345op678q901';
    const _region = ValApi.Resource.Region.data.NorthAmerica;
    const RiotApiClient = new ValApi.RiotApi({
        key: _apikey,
        region: _region,
    })

    const getPuuid = await RiotApiClient.AccountV1.ByRiotId('KawinTH', 'In3gG')
    const _puuid = getPuuid.puuid

    const getDataS = await RiotApiClient.ContentV1.Contents(ValApi.Resource.Locale.data.Thai_Thailand)
    console.log(getDataS)
})();