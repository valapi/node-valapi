(async () => {
    const ValApi = require ('../index');

    //part 1
    const Account = new ValApi.Account();
    await Account.login('KawinThailand', 'kawinth0808');

    //part 2
    const Region = new ValApi.Region("ap");
    const ValPreAccount = new ValApi.ValClient(await Account.toJSON(), await Region.toJSON(), 'release-04.03-shipping-6-671292');  // Use Example Client Version
    const ValAccount = await ValPreAccount.toJSON();  // <---------- This Your Valorant Account
    
    //part 3
    const userinfo = await ValPreAccount.getUserInfo();
    console.log(userinfo)
    //DO NEXT TIME

})();