
/**
 * This script deploys the entire application to my server.
 */

var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var serverConfig = require('./deploy-config.json');
var generalConfig = {
    port: 21,
    localRoot: __dirname + '/../dist/',
    remoteRoot: '/htdocs/app/exercises-javascript/',
    include: ['*', '**/*'],
    deleteRemote: true,
    forcePasv: true
};
var mergedConfig = {...generalConfig, ...serverConfig};


ftpDeploy.deploy(mergedConfig, function(err, res) {
    if (err) console.log(err)
    else console.log('Finished:', res);
});