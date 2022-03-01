const ValApi = require('@ing3kth/val-api');

//login to account
const AccountMFA = new ValApi.Account();
const LoginedAccount = await AccountMFA.login('USERNAME', 'PASSWORD');

//Multifactor

const _cookie = LoginedAccount.cookie // <---------- Save This To Use // Don't Share This

// You Will Get Verify Code In Mail That You Register // Then
// You Will Get Verify Code In Mail That You Register // Then
const Multifactor = new ValApi.Multifactor(_cookie);

const VerifyCode = 123456; // Type Your Verify Code Here

const Account = Multifactor.verify(VerifyCode); //All Done!! //You Will Have ~30 Days Permission To Use This Account

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