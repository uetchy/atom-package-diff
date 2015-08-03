#!/usr/bin/env node

import colors from 'colors'
import * as apm from './lib'

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

function showStatus() {
  let installed = apm.installedPackages();
  let starred = apm.starredPackages();
  console.log(installed.length + " packages installed")
  console.log(starred.length + " packages starred")

  let only_in_apm = diff( setOfName(starred) , setOfName(installed) )
  let only_in_local = diff( setOfName(installed) , setOfName(starred) )

  console.log(colors.green("\n# Packages only in apm"));
  console.log(only_in_apm.join(' '));

  console.log(colors.green("\n# Packages only in local machine"));
  console.log(only_in_local.join(' '));
}

function syncWithLocal() {
  // Unstar only_in_apm
  // Star only_in_local
  let installed = apm.installedPackages();
  let starred = apm.starredPackages();
  let only_in_apm = diff( setOfName(starred) , setOfName(installed) )
  let only_in_local = diff( setOfName(installed) , setOfName(starred) )

  for (let pkg of only_in_apm) {
    console.log(colors.red("Unstaring ... ") + pkg);
    apm.unstar(pkg);
  }

  for (let pkg of only_in_local) {
    console.log(colors.green("Staring ... ") + pkg);
    apm.star(pkg);
  }
}

function syncWithApm() {
  // Uninstall only_in_local
  // Install only_in_apm
  let installed = apm.installedPackages();
  let starred = apm.starredPackages();
  let only_in_apm = diff( setOfName(starred) , setOfName(installed) )
  let only_in_local = diff( setOfName(installed) , setOfName(starred) )

  for (let pkg of only_in_local) {
    console.log(colors.red("Uninstalling ... ") + pkg);
    apm.uninstall(pkg);
  }

  for (let pkg of only_in_apm) {
    console.log(colors.green("Installing ... ") + pkg);
    apm.install(pkg);
  }
}

function sync() {
  // Install only_in_apm
  // Star only_in_local
  let installed = apm.installedPackages();
  let starred = apm.starredPackages();
  let only_in_apm = diff( setOfName(starred) , setOfName(installed) )
  let only_in_local = diff( setOfName(installed) , setOfName(starred) )

  for (let pkg of only_in_apm) {
    console.log(colors.green("Installing ... ") + pkg);
    apm.install(pkg);
  }

  for (let pkg of only_in_local) {
    console.log(colors.green("Staring ... ") + pkg);
    apm.star(pkg);
  }
}

sync();
