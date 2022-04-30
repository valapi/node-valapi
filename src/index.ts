//client
export { ValClient, type ValClient_Service } from "./client/ValClient";
export { RiotApi } from "./client/RiotApi";
export { RiotLocal } from "./client/RiotLocal";

//resource
export { ValRegion } from "./resources/ValRegion";

export * as Currency from "./resources/data/Currency";
export * as ItemTypeId from "./resources/data/ItemTypeId";
export * as Locale from "./resources/data/Locale";
export * as QueueId from "./resources/data/QueueId";
export * as Region from "./resources/data/Region";

//interface
export * as Interface_RiotApi from "./resources/interface/IRiotApi";
export * as Interface_RiotLocal from "./resources/interface/IRiotLocal";
export * as Interface_ValClient from "./resources/interface/IValClient";
export * as Interface_ValRegion from "./resources/interface/IValRegion";