(async () => {
    const ValApi = require('../src/index.js');

    const ValAuth_Account = await ValApi.Auth.Account.login('KawinThailand', 'ingkth0808', true);

    const ValAccount_Client = new ValApi.ValClient({
        Account: ValAuth_Account,
        Region: ValApi.Resource.Region.data.AsiaPacific,
    });

    //player uuid
    const GetUserDAta = await ValAccount_Client.Player.GetUserInfo();
    const puuid = GetUserDAta.sub;

    //party id
    const getDataS = await ValAccount_Client.Match.FetchMatchHistory(puuid);
    console.log(getDataS)
})();