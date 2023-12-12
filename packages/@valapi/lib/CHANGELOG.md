# 4.0.0

**Add**

-   `ValEncryption.encryptJson(object)`
-   `ValEncryption.decryptJson(object)`

**Change**

-   ~~`ValError.fromError`~~ **-->** `ValError.parse`
-   ~~`ValBase64`~~ **-->** `ValEncryption`

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
