//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support');
const tough = require('tough-cookie');

const toughCookie = tough.CookieJar;

const Logs = require('../Logs/Logs');

//class
class AxiosClient {
    /**
    * @param {JSON} data Services Data
    */
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
        var response = false;
        try{
            response = await this.axiosClient.get(url);
            await Logs.log("GET " + url, 'log');
        }catch(err){
            response = err.response;
            await Logs.log("GET " + url, 'err', false);
        }finally {
            return response;
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    async post(url, body = {}) {
        var response = false;
        try{
            response = await this.axiosClient.post(url, body);
            await Logs.log("POST " + url, 'log');
        }catch(err){
            response = err.response;
            await Logs.log("POST " + url, 'err', false);
        }finally {
            return response;
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    async put(url, body = {}) {
        var response = false;
        try{
            response = await this.axiosClient.put(url, body);
            await Logs.log("PUT " + url, 'log');
        }catch(err){
            response = err.response;
            await Logs.log("PUT " + url, 'err', false);
        }finally {
            return response;
        }
    }

    /**
    * @param {String} url URL
    * @param {JSON} body Body
    */
    async delete(url, body = {}) {
        var response = false;
        try{
            response = await this.axiosClient.delete(url, body);
            await Logs.log("DELETE " + url, 'log');
        }catch(err){
            response = err.response;
            await Logs.log("DELETE " + url, 'err', false);
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