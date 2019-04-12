'use strict';

var fork = require('child_process').fork;
var fs = require('fs');
var path = require('path');

var version = process.argv.slice(2)[0];

fork(path.join(__dirname, 'preinstall-node.js'), [version], { stdio: 'inherit' })
.on('exit', function (code) {
	if (!code) {
		try {
			var packageJsonPath = path.join(__dirname, 'package.json');
			var packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

	    	packageJson.bin['node' + version] = packageJson.bin.node;
	    	delete packageJson.bin.node;

		    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
		} catch (err) {
			console.error(err);
			process.exit(1);
		}
	} else {
		process.exit(code);
	}
});
