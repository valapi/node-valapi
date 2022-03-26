export = AxiosClient;
declare class AxiosClient {
    static clientSync(data?: {
        cookie: any;
        headers: {};
    }): import("axios").AxiosInstance;
    /**
    * @param {JSON} data Services Data
    */
    constructor(data?: JSON);
    cookie: any;
    headers: any;
    axiosClient: import("axios").AxiosInstance;
    /**
    * @param {String} url URL
    */
    get(url: string): Promise<boolean>;
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    post(url: string, body?: JSON): Promise<boolean>;
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    put(url: string, body?: JSON): Promise<boolean>;
    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    delete(url: string, body?: JSON): Promise<boolean>;
}
declare namespace AxiosClient {
    import client = AxiosClient.clientSync;
    export { client };
}
