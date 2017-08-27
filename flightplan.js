var plan = require('flightplan');

var tmpDir = 'react-blog' + new Date().getTime();
var host = 'some host';
var username = 'some username';

plan.target('production', {
  host: host,
  username: username,
  agent: process.env.SSH_AUTH_SOCK
});


plan.local(function() {
  local.log('Start tests');
  local.exec('npm run test');

  local.log('Copy files to remote host');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});


plan.remote(function(remote) {
  remote.exec('nvm use default');

  remote.log('Move folder to web root');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~');
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.exec('npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir);

  remote.log('Build');
  remote.exec('npm --prefix ~/' + tmpDir + ' run build');

  remote.log('Reload application');
  remote.exec('ls -snf ~/' + tmpDir + ' ~/current');
  remote.exec('(cd ~/current && pm2 restart pm2.config.js --env production');


  remote.log('Finish');
});