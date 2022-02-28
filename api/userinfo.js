//import
const axios = require('axios').default;
const { wrapper } = require('axios-cookiejar-support')
const tough = require('tough-cookie');

const toughCookie = tough.CookieJar;

//function
async function function_Userinfo(Account) {
    const _cookie = await toughCookie.fromJSON(Account.request.cookie);
    const axiosClient = wrapper(axios.create({ _cookie }));

    const response = await axiosClient.post('https://auth.riotgames.com/userinfo', {}, {
        jar: _cookie,
        withCredentials: true,
        headers: Account.request.headers,
    })

    return response.data;
}

//export
module.exports = function_Userinfo;