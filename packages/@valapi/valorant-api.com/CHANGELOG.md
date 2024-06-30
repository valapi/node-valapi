# 5.0.0-beta.0

**Change**

-   ~~`ValorantApiCom.axios`~~ **-->** `ValorantApiCom.request`
-   ~~`ValorantApiComService.axios`~~ **-->** `ValorantApiComService.request`

**Remove**

-   `ValorantApiCom.Default`
-   `ValorantApiCom.config`

### Typescript

**Change**

-   ~~`ValorantApiCom.Language`~~ **-->** `Language`
-   ~~`ValorantApiCom.Config`~~ **-->** `Config`
-   ~~`ValorantApiComService.MultipleLanguage`~~ **-->** `AllLanguageResponse`
-   ~~`ValorantApiComService.Languages`~~ **-->** `LanguageResponse`
-   ~~`ValorantApiComService.Response`~~ **-->** `Response`

**Remove**

-   `ValorantApiComService.SingleLanguage`
-   `ValorantApiComService.BaseResponse`

# 4.0.0

**Change**

-   ~~`Agents.get(isPlayableCharacter?)`~~ **-->** `Agents.get(isPlayableCharacter = true)`

# 3.2.1

### Typescript

**Add**

-   `ValorantApiComService`

**Remove**

-   `ValorantApiCom.Response`

# 3.2.0

**Add**

-   `ValorantApiCom.request()`

**Remove**

-   `ValorantApiCom.getService()`

# 3.0.0

**Add**

-   `ValorantApiCom.getService()`

_service_

-   `Missions`
-   `Objectives`

### Typescript

**Change**

-   ~~`ValorantApiCom.Options`~~ **-->** `ValorantApiCom.Config`
