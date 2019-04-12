'use strict';

var path = require('path');
var packageJson = require('./package.json');

var nodeScriptName = Object.keys(packageJson.bin).filter(function (scriptName) {
	return /^node\d+$/.test(nodeScriptName);
})[0];

module.exports = path.join(__dirname, packageJson.bin[nodeScriptName]);
