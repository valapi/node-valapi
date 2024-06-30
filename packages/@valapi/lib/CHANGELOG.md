# 5.0.0-beta.0

**Add**

-   `ValVersion`

**Change**

-   ~~`QueueId.fromName(x)`~~ **-->** `QueueId.fromName(x, newMapID?)`
-   ~~`QueueId.fromID(x)`~~ **-->** `QueueId.fromID(x, newMapID?)`

# 4.0.0

**Add**

-   `ValEncryption.encryptJson(object)`
-   `ValEncryption.decryptJson(object)`
-   `CrosshairHexColor`

**Change**

-   ~~`ValError.fromError`~~ **-->** `ValError.parse`
-   ~~`ValBase64`~~ **-->** `ValEncryption`

-   ~~`CrosshairColor.fromColor()`~~ **-->** `CrosshairColor.fromName()`
-   ~~`CrosshairColor.fromString()`~~ **-->** `CrosshairColor.fromID()`
-   ~~`CrosshairColor.fromColorHex()`~~ **-->** `CrosshairHexColor.fromName()`
-   ~~`CrosshairColor.fromStringHex()`~~ **-->** `CrosshairHexColor.fromHex()`
-   ~~`ItemTypeId.fromString()`~~ **-->** `ItemTypeId.fromID()`
-   ~~`Locale.fromString()`~~ **-->** `Locale.fromID()`
-   ~~`QueueId.fromString()`~~ **-->** `QueueId.fromID()`
-   ~~`Region.fromString()`~~ **-->** `Region.fromID()`

**Remove**

-   `CrosshairColor.Data`
-   `ItemTypeId.Data`
-   `Locale.Data`
-   `QueueId.Data`
-   `Region.Data`

### Typescript

**Change**

-   ~~`CrosshairColor.Color`~~ **-->** `CrosshairColor.Name`
-   ~~`CrosshairColor.Identify`~~ **-->** `CrosshairColor.ID`
-   ~~`CrosshairColor.ColorHex`~~ **-->** `CrosshairHexColor.Name`
-   ~~`CrosshairColor.IdentifyHex`~~ **-->** `CrosshairHexColor.Hex`
-   ~~`ItemTypeId.Identify`~~ **-->** `ItemTypeId.ID`
-   ~~`Locale.Identify`~~ **-->** `Locale.ID`
-   ~~`QueueId.Identify`~~ **-->** `QueueId.ID`
-   ~~`Region.Identify`~~ **-->** `Region.ID`

# 3.1.0

**Remove**

-   `ValAxios`

# 3.0.2

**Change**

-   ~~`toUft8(text, technique)`~~ **-->** `ValBase64.encrypt(text)`
-   ~~`fromUft8(text, technique)`~~ **-->** `ValBase64.decrypt(text)`

# 3.0.0

**Remove**

-   `ValRegion.toJSON()`
-   `ValRegion.data`
-   `ValEvent`

**Change**

-   ~~`ValRegion.data.id`~~ **-->** `ValRegion.id`

### Typescript

**Remove**

-   `ValAxios.Config`
-   `ValAxios.Request`
-   `ValAxios.RequestData`
-   `ValRegion.JSON`
