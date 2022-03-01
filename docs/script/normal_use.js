const ValApi = require('@ing3kth/val-api');

// From Database 
// "./Val-Api/docs/auth/" For Example
const _puuid = "PUUID_STRING" // <---------- This is Player UUID
const _account = { "ACCOUNT": "JSON" } // <---------- This is Valorant Account

//login to account
const ValClient = new ValApi.ValClient()
ValClient.fromJSON(_account);

//replace with your own script here
//replace with your own script here
//replace with your own script here