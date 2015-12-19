'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installedPackages = installedPackages;
exports.starredPackages = starredPackages;
exports.star = star;
exports.unstar = unstar;
exports.install = install;
exports.uninstall = uninstall;

var _child_process = require('child_process');

function installedPackages() {
  var list = JSON.parse((0, _child_process.execSync)('apm list -i -j'));
  return list.user;
}

function starredPackages() {
  var list = JSON.parse((0, _child_process.execSync)('apm stars --json'));
  return list;
}

function star(pkg) {
  (0, _child_process.execSync)('apm star ' + pkg);
}

function unstar(pkg) {
  (0, _child_process.execSync)('apm unstar ' + pkg);
}

function install(pkg) {
  (0, _child_process.execSync)('apm install ' + pkg);
}

function uninstall(pkg) {
  (0, _child_process.execSync)('apm uninstall ' + pkg);
}