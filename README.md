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
const ValAuth = new ValApi.Account();
await ValAuth.login('USERNAME', 'PASSWORD');

const Save_ValAuth = ValAuth.toJSON()
```

*But We Have 2 Type Of Account*
### Multi-Factor Authentication
When The Account Have **"Multi-Factor"** You Can't Use Normal Method
```javascript
const MultifactorAccount = await ValAuth.login('USERNAME', 'PASSWORD');
```
Use This Script And Save It. Because We Need **Cookie**,
The Verify Code Will Send To Mail
```javascript
const Multifactor = new ValApi.Multifactor(MultifactorAccount.cookie);
const VerifyCode = 123456;  // <---------- Example Verify Code
await Multifactor.verify(VerifyCode);

const Save_ValAuth = Multifactor.toJSON()
```
Save The `Save_ValAuth` And Go To Next Step
## Client
After We Get **"Account"**, Then We Will Create an **"API Client"**
### Region
 
| Region | String |
| - | - |
| North America | na |
| Europe | eu |
| Asia Pacific | ap |
| Korea | ko |

```javascript
const Region = new ValApi.Region("ap");
```
### Valorant Client / ValClient
```javascript
const ValAccount = new ValApi.ValClient(Save_ValAuth, Region.toJSON(), 'release-04.03-shipping-6-671292');  // <---------- Example Client Version
```
**Account  --->  Save**
```javascript
const Save_ValAccount = ValAccount.toJSON();
```
**Save  --->  Account**
```javascript
const ValAccount = new ValApi.ValClient()
ValClient.fromJSON(Save_ValAccount);
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
    await ValAccount.[Service].[Function]
```

# Example
Example Script For **Copy And Paste**
## Valorant Client
```javascript
    const ValApi = require('@ing3kth/val-api')

    const ValAuth = new ValApi.Account();
    const UnknownAccount = await ValAuth.login('USERNAME', 'PASSWORD');

    var Save_ValAuth
    if (UnknownAccount != undefined) {
        const Multifactor = new ValApi.Multifactor(UnknownAccount.cookie);
        const VerifyCode = 123456;  // <---------- Example Verify Code

        await Multifactor.verify(VerifyCode);
        Save_ValAuth = Multifactor.toJSON();
    }else {
        Save_ValAuth = ValAuth.toJSON();
    }

    const Region = new ValApi.Region("ap");  // <---------- Example Region
    const ValAccount = new ValApi.ValClient(Save_ValAuth, Region.toJSON(), 'release-04.03-shipping-6-671292');  // <---------- Example Client Version

    const GetUserInfo = await ValAccount.Player.GetUserInfo();

    const Valorant_Puuid = GetUserInfo.sub;  // <---------- This is Player UUID
    const Valorant_Account = ValAccount.toJSON();  // <---------- This is Valorant Account
```
## API
```javascript
    const GetStore = await ValAccount.Store.GetStorefront(Valorant_Puuid);
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

- I am new Developer
- I am not great at grammar

#### link

- [Report Bug](https://github.com/KTNG-3/val-api/issues) (Github)
- [Discord](https://discord.gg/pbyWbUYjyt)
- [Website](https://ingkth.wordpress.com/)

# Special Thanks

- [Techchrism](https://github.com/techchrism/valorant-api-docs) (API Docs)
- [RumbleMike](https://github.com/RumbleMike/ValorantClientAPI) (API Docs)
- [Officer](https://valorant-api.com/) (valorant-api.com)
- [Valorant Community Developer Discord](https://discord.gg/sCgvpXJfEE)