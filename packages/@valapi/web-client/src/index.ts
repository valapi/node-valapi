import { WebClient } from "./client/WebClient";

export { WebClient };
export type { Config, UserInfoResponse } from "./client/WebClient";
export { WebClientRegionURL } from "./client/WebClientRegionURL";
export { WebClientService } from "./client/WebClientService";

export { AccountXP } from "./service/AccountXP";
export { Configuration } from "./service/Configuration";
export { Content } from "./service/Content";
export { ContractDefinitions } from "./service/ContractDefinitions";
export { Contracts } from "./service/Contracts";
export { CoreGame } from "./service/CoreGame";
export { DailyTicket } from "./service/DailyTicket";
export { Favorites } from "./service/Favorites";
export { Latency } from "./service/Latency";
export { MassRewards } from "./service/MassRewards";
export { Match } from "./service/Match";
export { MMR } from "./service/MMR";
export { NameService } from "./service/NameService";
export { Party, MatchMaking, Player, CustomGame, PartyCode } from "./service/Party";
export { Personalization } from "./service/Personalization";
export { PreGame } from "./service/PreGame";
export { Premier } from "./service/Premier";
export { Restrictions } from "./service/Restrictions";
export { Session } from "./service/Session";
export { Store, StoreFront } from "./service/Store";

export default WebClient;
