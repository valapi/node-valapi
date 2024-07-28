# 5.0.0-beta.0

**Add**

-   `WebClient.regionURL`

**Change**

-   ~~`WebClient.axios`~~ **-->** `WebClient.request`
-   ~~`WebClientRegion`~~ **-->** `WebClientRegionURL`
-   ~~`WebClientService.axios`~~ **-->** `WebClientService.request`
-   ~~`WebClientService.apiRegion`~~ **-->** `WebClientService.regionURL`
-   ~~`Config`~~ **-->** `Configuration`

_refactor_

-   `WebClient`~~`extends AuthClient`~~ **-->** `new WebClient({ user: Auth.toJSON() })`

**Remove**

-   `WebClient.toUserJSON()`
-   `WebClient.fromUserJSON()`
-   `WebClient.request`

_static_

-   `WebClient.fromUserJSON()`
-   `WebClient.fromCookie()`
-   `WebClient.fromJSON()`

### Typescript

**Add**

-   `Config`

**Change**

-   ~~`WebClient.UserInfo`~~ **-->** `UserInfoResponse`

**Remove**

-   `WebClient.UserJson`

# 4.0.0

_endpoints_

**Add**

-   `Party.PartyCode.create(partyId)`
-   `Party.PartyCode.delete(partyId)`
-   `Party.PartyCode.join(partyCode)`

**Change**

-   ~~`Config.fetchConfig`~~ **-->** `Config.get`
-   ~~`Content.fetchContent`~~ **-->** `Content.get`
-   ~~`ContractDefinitions.fetchActiveStory`~~ **-->** `ContractDefinitions.getActiveStory`
-   ~~`ContractDefinitions.fetch`~~ **-->** `ContractDefinitions.get`
-   ~~`ContractDefinitions.fetchItemProgression`~~ **-->** `ContractDefinitions.getItemProgression`
-   ~~`Contracts.fetch`~~ **-->** `Contracts.get`
-   ~~`Contracts.unlockItemProgress`~~ **-->** `Contracts.unlockItemProgression`
-   ~~`MMR.fetchPlayer`~~ **-->** `MMR.getPlayer`
-   ~~`MMR.fetchLeaderboard`~~ **-->** `MMR.getLeaderboard`
-   ~~`MMR.fetchCompetitiveUpdates`~~ **-->** `MMR.getCompetitiveUpdates`
-   ~~`DisplayNameService.fetchPlayers`~~ **-->** `NameService.getPlayer`
-   ~~`Party.fetchPlayer`~~ **-->** `Party.Player.get`
-   ~~`Party.removePlayer`~~ **-->** `Party.Player.remove`
-   ~~`Party.joinParty`~~ **-->** `Party.Player.joinParty`
-   ~~`Party.leaveParty`~~ **-->** `Party.Player.leaveParty`
-   ~~`Party.setMemberReady`~~ **-->** `Party.Player.setReady`
-   ~~`Party.fetchParty`~~ **-->** `Party.get`
-   ~~`Party.leaveFromParty`~~ **-->** `Party.Player.leaveFromParty`
-   ~~`Party.makeIntoCustomGame`~~ **-->** `Party.CustomGame.makeInto`
-   ~~`Party.changeQueue`~~ **-->** `Party.MatchMaking.changeQueue`
-   ~~`Party.makeDefault`~~ **-->** `Party.MatchMaking.makeDefaultQueue`
-   ~~`Party.startCustomGame`~~ **-->** `Party.CustomGame.start`
-   ~~`Party.startSoloExperience`~~ **-->** `Party.MatchMaking.startSoloExperience`
-   ~~`Party.setCustomGameSettings`~~ **-->** `Party.CustomGame.changeSettings`
-   ~~`Party.changeTeamInCustomGame`~~ **-->** `Party.CustomGame.changeTeam`
-   ~~`Party.enterMatchmakingQueue`~~ **-->** `Party.MatchMaking.start`
-   ~~`Party.leaveMatchmakingQueue`~~ **-->** `Partyy.MatchMaking.leave`
-   ~~`Party.setBalance`~~ **-->** `Party.CustomGame.setBalance`
-   ~~`Party.fetchCustomGameConfigs`~~ **-->** `Party.CustomGame.getConfig`
-   ~~`Party.transferOwner`~~ **-->** `Party.Player.transferOwner`
-   ~~`Personalization.playerLoadoutUpdate`~~ **-->** `Personalization.changePlayerLoadout`
-   ~~`Store.getStorefront`~~ **-->** `Store.StoreFront.get`
-   ~~`Store.revealNightMarketOffers`~~ **-->** `Store.StoreFront.revealNightMarketOffers`
-   ~~`Store.getAgent`~~ **-->** `Store.StoreFront.getAgent`

### Typescript

**Add**

-   `WebClient.UserInfo`
-   `Party.CustomGame.Member`
-   `Party.CustomGame.Config`

**Change**

-   ~~`Party.CustomGameSettings`~~ **-->** `Party.CustomGame.Settings`
-   ~~`Party.CustomGameTeam`~~ **-->** `Party.CustomGame.Team`

# 3.2.0

**Add**

-   `WebClient.request`

_endpoints_

-   `Store.getAgent()`
-   `DailyTicket.get(subject)`
-   `DailyTicket.renew(subject)`

**Remove**

-   `WebClient.getService()`

# 3.0.0

**Add**

-   `WebClientRegion`
-   `WebClient.getService()`
-   `WebClient.toUserJSON()`
-   `WebClient.fromUserJSON()`

_static_

-   `WebClient.fromUserJSON()`

_in development_

-   `WebClient.getUserSettings()`
-   `WebClient.updateUserSettings(data)`

**Change**

-   ~~`Personalization.playerLoadoutUpdate(subject)`~~ **-->** `Personalization.playerLoadoutUpdate(subject, loadout)`

### Typescript

**Add**

> types for all services

-   `WebClient.UserJson`
