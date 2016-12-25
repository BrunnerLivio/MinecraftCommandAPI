#!env node
"use strict";

var version = require('../package.json').version;

var readlineSync = require('readline-sync');
var fs = require('fs');
var path = require('path');
var cd = require('cd');
var exec = require('exec');
var execSync = require('child_process').execSync;
var bowerFile = 'bower.json';

cd(path.join(__dirname, '..'));

if (!readlineSync.keyInYN('Did you bump the version number in package.json?')) {
    process.exit(1);
}

if (!readlineSync.keyInYN('Did you update CHANGELOG.md using scripts/update_changelog.js?')) {
    process.exit(1);
}

if (!readlineSync.keyInYN('Did you push all changes back to origin?')) {
    process.exit(1);
}

execSync('npm run package');

console.log('Updating version in bower.json to ' + version + '');

var bowerJson = JSON.parse(fs.readFileSync(bowerFile, 'UTF-8'));
bowerJson.version = version;
fs.writeFileSync(bowerFile, JSON.stringify(bowerJson));

execSync('git add bower.json');
execSync('git commit -m "Release ' + version + '"');


// publish to npm first
execSync('npm publish');

// then branch, add/commit release files, tag, and push
execSync('git tag ' + version);
execSync('git push');
execSync('git push origin ' + version);

execSync('git checkout -b bower-' + version + '');
execSync('git add --force lib');
execSync('git commit -m "bower release ' + version + '"');
execSync('git tag ' + version + '+bower');
execSync('git remote add bower https://github.com/BrunnerLivio/bower-minecraftcommandapi');
execSync('git push bower ' + version + '+bower:' + version);
execSync('git remote rm bower');
execSync('git checkout master');