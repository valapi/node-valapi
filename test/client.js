(async () => {
    const ValApi = require('../src/index.js');

    const ValAuth_Account = new ValApi.Auth.Account();
    await ValAuth_Account.login('USERNAME', 'PASSWORD');
    const ValAuth_Save = ValAuth_Account.toJSON()

    const ValAccount_Client = new ValApi.ValClient({
        Account: ValAuth_Save,
        Region: ValApi.Resource.Region.data.AsiaPacific,
    });

    //player uuid
    const GetUserDAta = await ValAccount_Client.Player.GetUserInfo()
    const puuid = GetUserDAta.sub;

    //party id
    const GetPartyDAta = await ValAccount_Client.Party.FetchPlayer(puuid);
    var partyId;
    if(!GetPartyDAta.errorCode){
        partyId = GetPartyDAta.CurrentPartyID;
    }

    //script
    await ValAccount_Client.Party.EnterMatchmakingQueue(partyId)
    const getDataS = await ValAccount_Client.Party.LeaveMatchmakingQueue(partyId)
    console.log(getDataS)
})();