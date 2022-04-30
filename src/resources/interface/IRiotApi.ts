import { Interface_AxiosClient } from "@ing3kth/core";
import _Region from "../data/Region";
import { IValRegion } from "./IValRegion";

interface IRiotApi {
    apiKey: string,
    region: keyof typeof _Region,
}

interface IRiotApi_Service {
    key: string,
    region: IValRegion,
    AxiosData: Interface_AxiosClient.IAxiosClient,
}

export type { IRiotApi, IRiotApi_Service };