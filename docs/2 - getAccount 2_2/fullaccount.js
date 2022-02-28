(async () => {

    //import
    const ValApi = require('../../index');

    const Part_1_Account = "ACCOUNT_FROM_PART_1"  // if have multifactor verification use Multifactor Account
    /* Account Example:
        cookie: Cookie In JSON Format
        accessToken: 'eyJraAndLoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooongRandomString',
        entitlements: 'eyJraAndLooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooongRandomString'
    */

    //GET FULL ACCOUNT
    //GET FULL ACCOUNT

    //Get Region
    const Region = require('./region');

    //Get Client Version
    const clientVersion = require('./clientVersion');

    //Get Account
    const ValPreAccount = new ValApi.ValClient(await Part_1_Account.toJSON(), await Region.toJSON(), clientVersion);
    const ValAccount = ValPreAccount.toJSON();  // <---------- This Your Valorant Account YAY!

    //NOW WE WILL GO TO EASY PART
    //LET'S GO

})();