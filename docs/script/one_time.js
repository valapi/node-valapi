(async () => {
    //import
    const ValApi = require('@ing3kth/val-api');

    //login to account
    const Account = new ValApi.Account();
    await Account.login('USERNAME', 'PASSWORD'); // <<----- One Time Use Is Not Support Multifactor

    //setup account
    const Region = new ValApi.Region("ap");
    const ValAccount = new ValApi.ValClient(await Account.toJSON(), await Region.toJSON(), 'release-04.03-shipping-6-671292'); // <<----- Valorant Account

    //example script
    const userinfo = await ValAccount.Player.GetUserInfo();
    const _puuid = userinfo.sub; // <<----- Player UUID

    const getUsername = await ValAccount.Player.GetUsername(_puuid);
    console.log(getUsername);

})();