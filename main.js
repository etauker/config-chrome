const { execSync } = require('child_process');

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
    console.log("Starting config-chrome setup - running install");
    process.chdir(oConfig.workspace + "/config-chrome");
    _executeCommand(`bash install.sh --os=${oConfig.platform}`, oConfig.options.debug);
};

var configure = function(oConfig) {
    console.log("config-chrome setup - configure not implemented");
};

var backup = function(oConfig) {
    console.log("config-chrome setup - backup not implemented");
};

module.exports.install = install;
module.exports.configure = configure;
module.exports.backup = backup;
