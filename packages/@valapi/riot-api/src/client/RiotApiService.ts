import type { AxiosInstance } from "axios";

import type { RiotApiRegionURL } from "./RiotApiRegionURL";

export class RiotApiService {
    protected readonly request: AxiosInstance;
    protected readonly regionURL: RiotApiRegionURL;

    public constructor(request: AxiosInstance, regionURL: RiotApiRegionURL) {
        this.request = request;
        this.regionURL = regionURL;
    }
}
