const ValApi = require('../../index');

//login to account
const Account = new ValApi.Account();
await Account.login('USERNAME', 'PASSWORD'); //All Done!!

//setup account
const Region = new ValApi.Region("ap");
const ValAccount = new ValApi.ValClient(await Account.toJSON(), await Region.toJSON(), 'release-04.03-shipping-6-671292'); // Use Example Client Version

//Get Normal User Data
const userinfo = await ValAccount.Player.GetUserInfo();

// <<----- Save This To Use //
// <<----- Save This To Use //

//THIS IS ALL WE USE
const _puuid = userinfo.sub;  // <---------- This is Player UUID // You Can Share This
const _account = ValAccount.toJSON();  // <---------- This is Valorant Account // Don't Share This

// <<----- Save This To Use //
// <<----- Save This To Use //