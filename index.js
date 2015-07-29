#!/usr/bin/env node

import {installedPackages} from './lib'
import {starredPackages} from './lib'

let installed = installedPackages();
let starred = starredPackages();
console.log(installed.length + " packages installed")
console.log(starred.length + " packages starred")

let only_in_apm = diff( setOfName(starred) , setOfName(installed) )
console.log("apm install " + only_in_apm);

let only_in_local = diff( setOfName(installed) , setOfName(starred) )
console.log("apm star " + only_in_local);

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
