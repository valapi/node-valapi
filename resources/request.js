//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support')
const tough = require('tough-cookie');

const toughCookie = tough.CookieJar;

//class
class AxiosClient {
    constructor(data) {
        this.cookie = toughCookie.fromJSON(data.cookie);
        this.headers = data.headers;
    }

    //client

    async client() {
        const cookie = this.cookie
        const axiosClient = wrapper(axios.create({ cookie }));

        return axiosClient;
    }

    //request

    async get(url) {
        const axiosClient = await this.client();

        return await axiosClient.get(url, {
            jar: this.cookie,
            withCredentials: true,
            headers: this.headers,
        })
    }

    async post(url, body = {}) {
        const axiosClient = await this.client();

        return await axiosClient.post(url, body, {
            jar: this.cookie,
            withCredentials: true,
            headers: this.headers,
        })
    }

    async put(url, body = {}) {
        const axiosClient = await this.client();

        return await axiosClient.put(url, body, {
            jar: this.cookie,
            withCredentials: true,
            headers: this.headers,
        })
    }

    async delete(url, body = {}) {
        const axiosClient = await this.client();

        return await axiosClient.delete(url, body, {
            jar: this.cookie,
            withCredentials: true,
            headers: this.headers,
        })
    }
}

//export
module.exports = AxiosClient;