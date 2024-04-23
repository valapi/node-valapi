import { RiotApi } from "./client/RiotApi";

export { RiotApi };
export type { Config } from "./client/RiotApi";
export { RiotApiRegionURL } from "./client/RiotApiRegionURL";
export { RiotApiService } from "./client/RiotApiService";

export { AccountV1 } from "./service/AccountV1";
export { ContentV1 } from "./service/ContentV1";
export { MatchV1 } from "./service/MatchV1";
export { RankedV1 } from "./service/RankedV1";
export { StatusV1 } from "./service/StatusV1";

export default RiotApi;
