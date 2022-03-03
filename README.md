# **Valorant API - Support MFA**

## Installation

```bash
npm install @ing3kth/val-api
```

# Usage
## Account

```javascript
const ValApi = require('@ing3kth/val-api')
```

First We Need To **Login** To Valorant Account

```javascript
const ValAuth_Account = new ValApi.Auth.Account();
await ValAuth_Account.login('USERNAME', 'PASSWORD');

const ValAuth_Save = ValAuth_Account.toJSON()
```

*But We Have 2 Type Of Account*
### Multi-Factor Authentication
When The Account Have **"Multi-Factor"** You Can't Use Normal Method
```javascript
const Multifactor_Account = await ValAuth.login('USERNAME', 'PASSWORD');
```
Use This Script And Save It. Because We Need **Cookie**,
The Verify Code Will Send To Mail
```javascript
const Multifactor_Auth = new ValApi.Auth.Multifactor(Multifactor_Account);
const VerifyCode = 123456;  // <---------- Example Verify Code
await Multifactor_Auth.verify(VerifyCode);

const ValAuth_Save = Multifactor.toJSON()
```
Save The `ValAuth_Save` And Go To Next Step
## Client
After We Get **"Account"**, Then We Will Create an **"API Client"**
### Region
 
| Region | String |
| - | - |
| North America | na |
| Europe | eu |
| Asia Pacific | ap |
| Korea | ko |

### Valorant Client / ValClient
```javascript
const ValAccount_Client = new ValApi.ValClient({
        Account: ValAuth_Save,
        Region: "ap",  // <---------- Region
    });
```
**Account  --->  Save**
```javascript
const Save_ValAccount = ValAccount_Client.toJSON();
```
**Save  --->  Account**
```javascript
const ValAccount_Client = new ValApi.ValClient()
ValAccount_Client.fromJSON(Save_ValAccount);
```
Now We Have **"Api Client"** !!
## API
After We Get **"Api Client"**, Then We Will Use **Valorant Api**
| Service | Function |
| - | - |
| Client | GetSession(puuid) |
|  | FetchContent() |
| Contract | DefinitionsFetch() |
|  | Fetch(puuid) |
|  | Activate(puuid, contractId) |
| Coregame | FetchMatch(matchId) |
|  | FetchMatchLoadouts(matchId) |
|  | FetchPlayer(puuid) |
| Match | FetchMatchDetails(matchId) |
|  | FetchMatchHistory(puuid, queueId?, startIndex?, endIndex?) |
| Party | FetchPlayer(puuid) |
|  | FetchParty(partyId) |
|  | ChangeQueue(partyId, queueId) |
|  | LeaveQueue(partyId) |
|  | SetAccessibility(partyId, accessibility?) |
| Player | GetUserInfo() |
|  | FetchPlayer(puuid) |
|  | GetUsername(puuid) |
|  | FetchCompetitiveUpdates(puuid, queueId?, startIndex?, endIndex?) |
|  | Loadout(puuid) |
|  | AccountXP(puuid) |
| Pregame | GetPlayer(puuid) |
|  | GetMatch(matchId) |
|  | GetMatchLoadouts(matchId) |
|  | QuitMatch(matchId) |
|  | SelectCharacter(matchId, agentId) |
|  | LockCharacter(matchId, agentId) |
| Store | GetEntitlements(puuid, itemTypeId) |
|  | GetOffers() |
|  | GetStorefront(puuid) |
|  | GetWallet(puuid) |


### Usage
```javascript
    await ValAccount_Client.[Service].[Function]
```

# Example
Example Script For **Copy And Paste**
## Valorant Client
```javascript
    //auth
    const ValAuth_Account = new ValApi.Auth.Account();

    const ValAuth_Auth = await ValAuth_Account.login("USERNAME", "PASSWORD")
    const ValAuth_Save = ValAuth_Account.toJSON();

    //client

    const ValAccount_Client = new ValApi.ValClient({
        Account: ValAuth_Save,
        Region: "ap",  // <---------- Example Region //OR //ValApi.Resource.Region.data.AsiaPacific
    });

    const GetUserInfo = await ValAccount_Client.Player.GetUserInfo();

    const Valorant_Puuid = GetUserInfo.sub;  // <---------- This is Player UUID
    const Valorant_Account = ValAccount_Client.toJSON();  // <---------- This is Valorant Account
```
## API
```javascript
    const GetStore = await ValAccount_Client.Store.GetStorefront(Valorant_Puuid);
    const Bundle = GetStore.FeaturedBundle.Bundles[0]
    for(const Items of Bundle.Items){
        const _Price = Items.BasePrice
        const _Currency = ValApi.Currency[Items.CurrencyID]
        const _id = Items.Item.ItemID

        console.log(`[ ID: ${_id}, Price: ${_Price} ${_Currency} ]`)
    }
```
# Message From Developer

Thanks For Use My Package.

I am new Developer, I am not great at grammar

- [Report Bug](https://github.com/KTNG-3/val-api/issues) (Github)
- [Discord](https://discord.gg/pbyWbUYjyt)
- [Website](https://ingkth.wordpress.com/)

# Special Thanks

- [Techchrism](https://github.com/techchrism/valorant-api-docs) (API Docs)
- [RumbleMike](https://github.com/RumbleMike/ValorantClientAPI) (API Docs)
- [Officer](https://valorant-api.com/) (valorant-api.com)
- [Valorant Community Developer Discord](https://discord.gg/sCgvpXJfEE)
- [Play Valorant](https://playvalorant.com/) (VALORANT)