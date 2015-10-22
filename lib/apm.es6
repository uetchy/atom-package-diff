import {execSync} from 'child_process'

export function installedPackages() {
  let list = JSON.parse(execSync('apm list -i -j'))
  return list.user
}

export function starredPackages() {
  let list = JSON.parse(execSync('apm stars --json'))
  return list
}

export function star(pkg) {
  execSync('apm star ' + pkg)
}

export function unstar(pkg) {
  execSync('apm unstar ' + pkg)
}

export function install(pkg) {
  execSync('apm install ' + pkg)
}

export function uninstall(pkg) {
  execSync('apm uninstall ' + pkg)
}
