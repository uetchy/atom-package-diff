import {execSync} from 'child_process'

export function installedPackages() {
  let list = JSON.parse(execSync('apm list -i -j'))
  return list.user
}

export function starredPackages() {
  let list = JSON.parse(execSync('apm stars --json'))
  return list
}
