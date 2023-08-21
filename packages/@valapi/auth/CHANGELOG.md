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

static

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
