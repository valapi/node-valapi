import { IAxiosClient } from "@ing3kth/core/dist/interface/IAxiosClient";
import _Region from "../data/Region";
import { IValRegion } from "./IValRegion";

interface IRiotApi {
    apiKey: string,
    region: keyof typeof _Region.data,
};

interface IRiotApi_Service {
    key: string,
    region: IValRegion,
    AxiosData: IAxiosClient,
}

export type { IRiotApi, IRiotApi_Service };