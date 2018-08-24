const { execSync } = require('child_process');
let helper = require('../development-setup/lib/helper.js');

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
