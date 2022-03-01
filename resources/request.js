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

    async client() {
        const cookie = this.cookie
        const axiosClient = wrapper(axios.create({ cookie }));

        return axiosClient;
    }

    
    /**
    * @param {string} url URL
    */
    async get(url) {
        const axiosClient = await this.client();

        return await axiosClient.get(url, {
            jar: this.cookie,
            withCredentials: true,
            headers: this.headers,
        })
    }

    /**
    * @param {string} url URL
    * @param {JSON} body Body
    */
    async post(url, body = {}) {
        const axiosClient = await this.client();

        return await axiosClient.post(url, body, {
            jar: this.cookie,
            withCredentials: true,
            headers: this.headers,
        })
    }

    /**
    * @param {string} url URL
    * @param {JSON} body Body
    */
    async put(url, body = {}) {
        const axiosClient = await this.client();

        return await axiosClient.put(url, body, {
            jar: this.cookie,
            withCredentials: true,
            headers: this.headers,
        })
    }

    /**
    * @param {string} url URL
    * @param {JSON} body Body
    */
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