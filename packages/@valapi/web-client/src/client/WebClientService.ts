import type { AxiosInstance } from "axios";

import type { WebClientRegionURL } from "./WebClientRegionURL";

export class WebClientService {
    protected readonly request: AxiosInstance;
    protected readonly regionURL: WebClientRegionURL;

    public constructor(request: AxiosInstance, regionURL: WebClientRegionURL) {
        this.request = request;
        this.regionURL = regionURL;
    }
}
