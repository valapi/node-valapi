(async () => {

    //import
    const ValApi = require ('../../index');

    const Account = new ValApi.Multifactor("YOUR_COOKIE_HERE");  // <----- This is Account

    //verify
    await Account.verify("YOUR_VERIFICATION_CODE_HERE");

})();