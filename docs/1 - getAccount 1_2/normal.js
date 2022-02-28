(async () => {

    //import
    const ValApi = require ('../../index');

    const Account = new ValApi.Account();  // <----- This is Account

    //login
    await Account.login('USERNAME', 'PASSWORD');

})();