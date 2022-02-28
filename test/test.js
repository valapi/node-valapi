(async () => {
    const ValApi = require('val-api')

    const test = await ValApi.doVal("ING3_")
    console.log(test)
})();