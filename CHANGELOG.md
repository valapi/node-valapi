# 2.0.0

- All `namespaces.*` have been removed
- All **`expired`** event is removed

---

### <u>@/lib</u>

- ~~ValHttpResponse~~

**Types**

- `.UndefinedOptional`
- `.UndefinedRecord`

**CrosshairColor** _(static)_

- `.Default.*`
- `.DefaultColor.*`
- ~~.Name~~ **-->** `.Color`
- ~~.String~~ **-->** `.Identify`
- ~~.toString()~~ **-->** `.fromColor()`
- ~~.toStringHex()~~ **-->** `.fromColorHex()`

**ItemTypeId**, **Locale**, **QueueId**, **Region** _(static)_

- `.Default.*`
- ~~.String~~ **-->** `.Identify`
- ~~.toString()~~ **-->** `.fromName()`

**ValError** _(static)_

- `.fromError(error)`

**ValEvent** _(static)_

- ~~.Function~~ **-->** `.ListenerFunction`
- `.Structure`
- `.KeyOf<>`
- `.Type<>`

~~ValRequestClient~~ **-->** **`ValAxios`** _(static)_

- ~~.Method~~

---

### <u>@/valorant-api.com</u>

**Client**

- `.Default.*`
- ~~.Service<>~~ **-->** `.Response.Languages<>`
- ~~.Response<>~~ **-->** `.Response.Data<>`

---

### <u>@/auth</u>

- `Auth`
- ~~ValAuthUser~~ **-->** `User`
- ~~ValAuthMultifactor~~ **-->** `Multifactor`
- ~~ValAuthCookie~~ **-->** `Cookie`
- ~~Client~~ **-->** `AuthClient`

~~ValAuthEngine~~ **-->** **`AuthCore`**

- `.Default.*`
- ~~.parseToken()~~ **-->** `.getSubject()`
- ~~.isError~~ **-->** `.isAuthenticationError`
- ~~.isMultifactor~~ **-->** `.isMultifactorAccount`

---

### <u>@/web-client</u>

**Client**

- ~~.Options~~ _(static)_

**Service** (*Reformat*, Sort by API service)

- `AccountXP`
- `Config`
- `Content`
- `ContractDefinitions`
- `Contracts`
- `CoreGame`
- `DisplayNameService`
- `Favorites`
- `Latency`
- `MassRewards`
- `Match`
- `MMR`
- `Party`
- `Personalization`
- `PreGame`
- `Restrictions`
- `Session`
- `Store`

# 1.4.4

-   Error handling
-   -   Add `throwOnError` option
-   -   Fixed `ValEvent`
-   Rename the function to start with a lowercase character

# 1.4.3 (2022-8-29)

**[ Episode 5 Act II ]**

-   @valorant.ts
-   -   Crosshair
-   -   -   Add `*.isHexColor`
-   -   -   Change `*.Lines.Length`
-   @/lib
-   -   Add `CrosshairColor` to resources
-   @/web-client
-   -   Change name of `Client` to `App`

# 1.4.2 (29 July 2022)

-   fixed `@valapi/lib`#resources

# 1.4.1 (29 July 2022)

-   A little bit changes
    -   fixed some bugs
-   Change A lot of Typescript' Type definition

# 1.4.0 (15 July 2022)

-   Add [@valapi/web-client](https://www.npmjs.com/package/@valapi/web-client)

# 1.3.1 (14 July 2022)

-   Remove `declarationMap` and `sourceMap`
-   Change A lot of Typescript' Type definition

# 1.3.0 (6 July 2022)

-   [Banned](https://twitter.com/PlayVALORANT/status/1539728676815642624)
    -   Disable [api-wrapper](https://www.npmjs.com/package/@valapi/api-wrapper)
    -   Disable [riot-client](https://www.npmjs.com/package/@valapi/riot-client)
-   Add [@valapi/auth](https://www.npmjs.com/package/@valapi/auth)
-   Using [tslib](https://www.npmjs.com/package/tslib)
-   A little bit changes

# 1.2.0 (24 June 2022)

# 1.1.1 (23 June 2022)

-   [Legal notice](https://valapi.github.io/docs/resources/Legal.html) _(Work In Progress)_
-   PatchNotes URL _(beta)_
-   Crosshair Compiler _(beta)_
-   valorant.ts
    -   change import of _@valapi/lib_
        -   ~~ValApiLib~~ **--->** `Lib`
    -   more easier to use _Region_
        -   > `import { Region } from 'valorant.ts'`
        -   example
            -   new Client({ region: **Region.Europe** });
-   [api-wrapper](https://www.npmjs.com/package/@valapi/api-wrapper)
    -   add 1 [Endpoint](https://valapi.github.io/docs/api-wrapper/API.html) **-->** `Party.TransferOwner()`
-   [valorant-api.com](https://www.npmjs.com/package/@valapi/valorant-api.com)
    -   add 1 [Language](https://valapi.github.io/docs/valorant-api.com/Language.html) **-->** `all`

# 1.1.0 (12 June 2022)

-   Crosshair Compiler

# [valorant.ts](https://www.npmjs.com/package/valorant.ts)

---

# 2.0.0 (11 May, 2022)

-   Move Package to [@valapi](https://github.com/valapi)

# 1.6.2 (11 May, 2022 | In Development)

### ValClient

-   Cookie ReAuth - _beta_
-   -   ValClient.Auth.Cookie(ValClient_Auth)

### Typescript

-   A little bit changes

# 1.6.1 (3 May, 2022 | In Development)

### ValRegion

-   Use Sort Region (old school)
-   Example: `na` , `eu` , `ap`

### ValClient

-   Fix error code: `403`, `1020`
-   -   Thanks To: **teyd#8766** for the report
-   -   Sometime **403** error code is still not working.
-   id_token
-   token_type
-   ~~ValClient(ValClient_Auth, Region)~~ **--->** `ValClient(ValClient_Auth)`
-   -   Auto Region For You - \*Thanks To: **ev3nvy#9996\***
-   -   Still can use `.setRegion(Region)`
-   New Method for auth
-   -   ~~ValApi.Auth.Account.login~~ **--->** `ValClient.Auth.login`
-   -   ~~ValApi.Auth.Multifactor.verify~~ **--->** `ValClient.Auth.verify`

### RiotLocal

-   New Method for auth
-   -   lockfile = RiotLocal.Auth.lockfile()
-   -   ~~RiotLocal(ip, lockfile)~~ **--->** `RiotLocal(lockfile, ip)`

### Resource

-   -   ~~RiotLocal.getResource()~~ **--->** `RiotLocal.Resource`

### Typescript

-   Interface
-   -   left a comment on [comment channel](https://discord.com/channels/870655534993399848/889152216332640277) at my [Discord server](https://discord.gg/pbyWbUYjyt) about Interface to let me know if you have any idea
-   Data Modifiers

# 1.6.0 (April 29, 2022 | In Development)

#### 1.5.9 is moved to 1.6.0

-   About Legal
-   -   Remove Utils (**MMO** and **ELO** culculator is banned)
-   -   Update [README.md](README.md)
-   Full [TypeScript](https://www.typescriptlang.org/) Support !!!
-   Remove [HTTP_Response](/src/resources/HTTP_Response.ts) Resource from module

# 1.5.8 (April 18, 2022 | In Development)

-   Utils
-   A little bit changes

# 1.5.7 (April 16, 2022 | In Development)

-   change all API return that makes you know if the request is a success or not.
-   A little bit changes

# 1.5.6 (April 15, 2022 | In Development)

-   A little bit changes (maybe i will change back)

# 1.5.5 (April 9, 2022 | In Development)

-   More RiotLocal Settings
-   RiotLocal Save
-   RiotLocal Interface

# 1.5.4 (~ April 8, 2022 | In Development)

-   Local API (RiotLocal)
-   Documentation
-   Interfaces
-   A little bit changes

# 1.5.3 (April 5, 2022 | In Development)

-   Local API (RiotLocal) is now available to use. `90% DONE`
-   [HTTP_Response](/src/resources/data/HTTP_Response.js) Resource
-   Update [README.md](README.md)
-   Update [ValClient](/src/client/ValClient.js) [Services](/src/service/ValClient/)
-   A little bit changes

# 1.5.2 (April 4, 2020 | In Development)

-   Change [@ing3kth/core](https://www.npmjs.com/package/@ing3kth/core) Path To Folder
-   Public Beta Environment (PBE) - Region
-   A little bit changes

# 1.5.1 (March 28, 2022 | In Development)

-   A little bit changes

# 1.5.0 (March 27, 2022 | In Development)

-   Logs System
-   Config File
-   Using @ing3kth/core
-   Local API

# 1.4.6 (March 25, 2022)

-   Update [README.md](README.md)
-   TypeScript Support
-   Yarn Support
-   .gitignore
-   .npmignore

# 1.4.5 (March 24, 2022)

-   New Method For "Auth.Account"
-   A little changes

# 1.4.4 (March 23, 2022)

-   New Method For "Auth.Account" And "Auth.Multifactor"
-   API Client Can Return Error
-   Change "ValClient.Region" To "ValClient.region"
-   A little changes

# 1.4.3 (March 22, 2022)

-   RiotApi Settings
-   ValClient Cookie Setting

# 1.4.2 (March 21, 2022)

-   Remove "AxiosData" from ValClient/Service class
-   More function in ValClient/Service

# 1.4.1 (March 21, 2022)

-   MIT License

# Before 1.4.1 (~ March 1, 2022 --> March 20, 2022)

no data
