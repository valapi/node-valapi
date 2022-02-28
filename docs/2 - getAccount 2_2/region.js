(async () => {
    //import
    const ValApi = require('../../index');
    
    //Get Region
    const Region = new ValApi.Region("ap");
    /* All Regions I Know:
        ap: Asia
        eu: Europe
        ko: Korea
        na: North America
    */

    module.exports = Region;

})();