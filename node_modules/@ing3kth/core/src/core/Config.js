(async () => {
    //import
    const fs = require('fs');
    const process = require('process')

    //script
    var _path = process.cwd() + "/.ingconfig.json";
    if (!fs.existsSync(_path)) {
        var _newFile = await fs.createWriteStream(_path, { flags: 'w' });

        await _newFile.write(JSON.stringify({
            "logs": {
                "mode": true,
                "show": false
            }
        }))
    }

    //exports
    module.exports = await fs.readFileSync(_path);
})();