#!/usr/bin/env node

import {installedPackages} from './lib'
import {starredPackages} from './lib'

let installed = installedPackages();
let starred = starredPackages();
console.log(installed.length + " packages installed")
console.log(starred.length + " packages starred")

let only_in_apm = diff( setOfName(starred) , setOfName(installed) )
console.log("# Only in apm");
console.log(only_in_apm.join(' '));

let only_in_local = diff( setOfName(installed) , setOfName(starred) )
console.log("\n# Only in local");
console.log(only_in_local.join(' '));

function setOfName(arr) {
  return arr.map((s)=>{
    return s.name
  })
}

function diff(a, b) {
  return a.filter((x)=>{
    return b.indexOf(x) < 0
  })
}

function syncWithLocal() {
  // Unstar only_in_apm
  // Star only_in_local
}

function syncWithApm() {
  // Uninstall only_in_local
  // Install only_in_apm
}
