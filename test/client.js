(async () => {
    const ValApi = require('../src/index.js');

    const ValAuth_Account = await ValApi.Auth.Account.login('USERNAME', 'PASSWORD', true);

    const ValAccount_Client = new ValApi.ValClient({
        Account: ValAuth_Account,
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