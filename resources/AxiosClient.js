//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support')
const tough = require('tough-cookie');

const toughCookie = tough.CookieJar;

//class
class AxiosClient {
    constructor(data = {
        cookie: new toughCookie().toJSON(),
        headers: {},
    }) {
        this.cookie = toughCookie.fromJSON(data.cookie);
        this.headers = data.headers;

        const _cookie = this.cookie
        this.axiosClient = wrapper(axios.create({ _cookie }));
    }
    
    /**
    * @param {string} url URL
    */
    async get(url) {
        return await this.axiosClient.get(url, {
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
        return await this.axiosClient.post(url, body, {
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
        return await this.axiosClient.put(url, body, {
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
        return await this.axiosClient.delete(url, body, {
            jar: this.cookie,
            withCredentials: true,
            headers: this.headers,
        })
    }
}

//export
module.exports = AxiosClient;