# 5.0.0-beta.0

**Change**

-   ~~`AuthInstance.fromJSON(user)`~~
    -   **-->** `new AuthInstance(user?)`
    -   **-->** `new Auth({ user })`

### Typescript

**Change**

-   ~~`UserAuthInfo`~~ **-->** `AuthUserInfo`
-   ~~`AuthConfig`~~ **-->** `Config`
-   ~~`AuthPromiseResponse`~~ **-->** `PromiseResponse`
-   ~~`AuthResponse`~~ **-->** `Response`
-   ~~`AuthRequestPlatform`~~ **-->** `ClientPlatform`
-   ~~`AuthRequestConfig`~~ **-->** `RequestConfig`

# 5.0.0-alpha.0

**Add**

-   `AuthRequest`

**Change**

-   ~~`AuthClient`~~ **-->** `Auth`
-   ~~`AuthClient.refresh()`~~ **-->** `Auth.reauthorize()`
-   ~~`AuthService.fromUrl(TokenUrl)`~~ **-->** `Auth.uriTokenization(url)`
-   ~~`AuthService.fromToken(token)`~~
    -   **-->** `Auth.entitlementsTokenization()`
    -   **-->** `Auth.regionTokenization()`
-   ~~`Cookie.authorize()`~~ **-->** `Auth.authorize(ignoreCookie = false)`
-   ~~`User.loginform(username, password)`~~ **-->** `Auth.login(username, password)`
-   ~~`AuthCore`~~ **-->** `AuthInstance`
-   ~~`AuthCore.getSubject(token)`~~ **-->** `AuthInstance.subject`
-   ~~`AuthCore.getExpirationDate(token)`~~ **-->** `AuthInstance.expirationDate`
-   ~~`AuthCore.authenticationInfo.isMultifactor`~~ **-->** `AuthInstance.isMultifactor`

**Remove**

-   `AuthClient.verify()`
-   `AuthClient.fromCookie()`
-   `AuthService`
-   `Cookie`
-   `Multifactor`
-   `User`
-   `AuthCore.authenticationInfo`

_static_

-   `AuthClient.fromCookie()`
-   `AuthClient.fromJSON()`
-   `AuthCore.fromJSON()`
-   `AuthCore.Default`
-   `AuthService.fromJSON()`

### Typescript

**Add**

-   `EntitlementsTokenResponse`
-   `RegionTokenResponse`
-   `UserTokenParse`
-   `AuthPromiseResponse`
-   `AuthResponse`
-   `AuthRequestConfig`

**Change**

-   ~~`AuthService.TokenResponse`~~ **-->** `AuthRequestResponse`
-   ~~`AuthCore.Json`~~ **-->** `UserAuthInfo`
-   ~~`AuthCore.ClientPlatfrom`~~ **-->** `AuthRequestPlatfrom`
-   ~~`AuthCore.Config`~~ **-->** `AuthConfig`

**Remove**

-   `AuthCore.JsonRegion`
-   `AuthCore.JsonAuthenticationInfoMessage`
-   `AuthCore.JsonAuthenticationInfo`

# 3.2.1-beta

**Add**

-   `<AuthCore.Config>.userAgent`

**Change**

-   `<AuthCore.Config>.client.version` **-->** `<AuthCore.Config>.version`
-   `<AuthCore.Config>.client.platform` **-->** `<AuthCore.Config>.platform`

# 3.2.0

**Add**

-   `AuthCore.authenticationInfo`

**Remove**

-   `AuthCore.isMultifactorAccount`
-   `AuthCore.isAuthenticationError`

### Typescript

**Add**

-   `AuthCore.JsonRegion`
-   `AuthCore.JsonAuthenticationInfo`
-   `AuthCore.JsonAuthenticationInfoMessage`

# 3.0.0

**Add**

-   `AuthCore.getExpirationDate()`
-   `Cookie.authorize()`

_static_

-   `AuthCore.expires_in`
-   `AuthCore.token_type`

**Remove**

-   `AuthCore.build()`
-   `Auth`

**Change**

-   ~~`new AuthService(options)`~~ **-->** `new AuthService(options, data)`
-   ~~`Auth.fromToken()`~~ **-->** `AuthService.fromToken()`
-   ~~`Auth.fromUrl()`~~ **-->** `AuthService.fromUrl()`
-   ~~`Auth.fromResponse()`~~ **-->** `AuthService.fromResponse()`
-   ~~`Cookie.reAuthorize()`~~ **-->** `Cookie.reauthorize()`
-   ~~`Multifactor.twoFactor()`~~ **-->** `Multifactor.twofactor()`
-   ~~`User.loginForm()`~~ **-->** `User.loginform()`

### Typescript

**Remove**

-   `ValError`
-   `AuthCore.BuildConfig`

**Change**

-   ~~`AuthCore.Options`~~ **-->** `AuthCore.Config`
-   ~~`Auth.TokenResponse`~~ **-->** `AuthService.TokenResponse`
