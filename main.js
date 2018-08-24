const { execSync } = require('child_process');
let helper = require('../development-setup/lib/helper.js');


var _executeCommand = function(sCommand, bDebug) {
    if (bDebug) console.log(`[debug] Executing command: ${sCommand}`);
    try {
        var stdout = execSync(sCommand);
        console.log("Command Output: ");
        console.log(stdout.toString('utf8'));
    } catch (stderr) {
        console.log("--------------------------------------------------");
        console.log("Error executing command: " + sCommand);
        console.log("--------------------------------------------------");
        console.log("stderr: " + stderr);
        console.log("--------------------------------------------------");
    }
};

var install = function(oConfig) {
    console.log("-- [config-atom] - running install");
    helper.changeDirectory(oConfig.platform, oConfig.workspace, "config-chrome", oConfig.options.debug);
    helper.executeCommand(`bash install.sh --os=${oConfig.platform}`, oConfig.options.debug);
};

var configure = function(oConfig) {
    console.log("-- [config-chrome] - configure not implemented");
};

var backup = function(oConfig) {
    console.log("-- [config-chrome] - backup not implemented");
};

module.exports.install = install;
module.exports.configure = configure;
module.exports.backup = backup;
