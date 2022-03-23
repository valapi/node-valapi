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

        this.axiosClient = wrapper(axios.create({ jar: this.cookie, withCredentials: true, headers: this.headers }));
    }

    /**
    * @param {String} url URL
    */
     async get(url) {
        var response;
        try{
            response = await this.axiosClient.get(url)
        }catch(err){
            response = err.response;
        }finally {
            return response;
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    async post(url, body = {}) {
        var response;
        try{
            response = await this.axiosClient.post(url, body)
        }catch(err){
            response = err.response;
        }finally {
            return response;
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    async put(url, body = {}) {
        var response;
        try{
            response = await this.axiosClient.put(url, body)
        }catch(err){
            response = err.response;
        }finally {
            return response;
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    async delete(url, body = {}) {
        var response;
        try{
            response = await this.axiosClient.delete(url, body)
        }catch(err){
            response = err.response;
        }finally {
            return response;
        }
    }

    static clientSync(data = {
        cookie: new toughCookie().toJSON(),
        headers: {},
    }) {
        const NewClient = new AxiosClient(data);
        return NewClient.axiosClient;
    }
}

//export
AxiosClient.client = AxiosClient.clientSync;

module.exports = AxiosClient;