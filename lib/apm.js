const {execSync} = require('child_process');

exports.installedPackages = () => {
	let list = JSON.parse(execSync('apm list -i -j'));
	return list.user;
};

exports.starredPackages = () => {
	let list = JSON.parse(execSync('apm stars --json'));
	return list;
};

exports.star = pkg => {
	execSync('apm star ' + pkg);
};

exports.unstar = pkg => {
	execSync('apm unstar ' + pkg);
};

exports.install = pkg => {
	execSync('apm install ' + pkg);
};

exports.uninstall = pkg => {
	execSync('apm uninstall ' + pkg);
};
