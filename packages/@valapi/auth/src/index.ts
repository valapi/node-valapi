// import

import { Auth } from "./client/Auth";

// export

export { Auth };
export type { AuthRequestResponse, EntitlementsTokenResponse, RegionTokenResponse, AuthConfig } from "./client/Auth";

export { AuthInstance } from "./client/AuthInstance";
export type { UserAuthInfo, UserTokenParse } from "./client/AuthInstance";

export { AuthRequest } from "./client/AuthRequest";
export type { AuthPromiseResponse, AuthResponse, AuthRequestPlatfrom, AuthRequestConfig } from "./client/AuthRequest";

export default Auth;
