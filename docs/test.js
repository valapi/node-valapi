(async () => {
    const ValApi = require ('../index');

    //part 1
    const Account = new ValApi.Account();
    await Account.login('USENAME', 'PASSWORD');

    //part 2
    const Region = new ValApi.Region("ap");
    const ValPreAccount = new ValApi.ValClient(await Account.toJSON(), await Region.toJSON(), 'release-04.03-shipping-6-671292');  // Use Example Client Version
    const ValAccount = await ValPreAccount.toJSON();  // <---------- This Your Valorant Account <<----- Save This To Use
    
    //part 3
    const userinfo = await ValPreAccount.getUserInfo();
    const puuid = userinfo.sub

    const GetClass = ValPreAccount.Party;
    const getDatas = await GetClass.FetchParty('351e215b-d3dc-4583-98ec-e24b94e37263');

})();