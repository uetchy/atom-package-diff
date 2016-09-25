const chalk = require('chalk');
const apm = require('./apm');

exports.showStatus = () => {
	var stats = getPackageStats();
	console.log(stats.installed.length, 'packages installed');
	console.log(stats.starred.length, 'packages starred');

	if (stats.onlyInAPM.length) {
		console.log(chalk.green('\n# Packages only in apm'));
		console.log(stats.onlyInAPM.join(' '));
	}

	if (stats.onlyInLocal.length) {
		console.log(chalk.green('\n# Packages only in local machine'));
		console.log(stats.onlyInLocal.join(' '));
	}
};

exports.sync = () => {
	// Install onlyInAPM
	// Star onlyInLocal
	var stats = getPackageStats();

	for (let pkg of stats.onlyInAPM) {
		console.log(chalk.green('Installing ...'), pkg);
		apm.install(pkg);
	}

	for (let pkg of stats.onlyInLocal) {
		console.log(chalk.green('Staring ...'), pkg);
		apm.star(pkg);
	}
};

exports.syncWithLocal = () => {
	// Unstar onlyInAPM
	// Star onlyInLocal
	var stats = getPackageStats();

	for (let pkg of stats.onlyInAPM) {
		console.log(chalk.red('Unstaring ...'), pkg);
		apm.unstar(pkg);
	}

	for (let pkg of stats.onlyInLocal) {
		console.log(chalk.green('Staring ...'), pkg);
		apm.star(pkg);
	}
};

exports.syncWithRemote = () => {
	// Uninstall onlyInLocal
	// Install onlyInAPM
	var stats = getPackageStats();

	for (let pkg of stats.onlyInLocal) {
		console.log(chalk.red('Uninstalling ...'), pkg);
		apm.uninstall(pkg);
	}

	for (let pkg of stats.onlyInAPM) {
		console.log(chalk.green('Installing ...'), pkg);
		apm.install(pkg);
	}
};

function setOfName(arr) {
	return arr.map(s => {
		return s.name;
	});
}

function diff(a, b) {
	return a.filter(x => {
		return b.indexOf(x) < 0;
	});
}

function getPackageStats() {
	var installed = apm.installedPackages();
	var starred = apm.starredPackages();
	return {
		installed: installed,
		starred: starred,
		onlyInAPM: diff(setOfName(starred), setOfName(installed)),
		onlyInLocal: diff(setOfName(installed), setOfName(starred))
	};
}
