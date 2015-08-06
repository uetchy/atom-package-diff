'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.cmdStatus = cmdStatus;
exports.cmdSync = cmdSync;
exports.cmdSyncWithRemote = cmdSyncWithRemote;
exports.cmdSyncWithLocal = cmdSyncWithLocal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _apm = require('./apm');

var apm = _interopRequireWildcard(_apm);

function cmdStatus(cmd, options) {
  var stats = getPackageStats();
  console.log(stats.installed.length + " packages installed");
  console.log(stats.starred.length + " packages starred");

  console.log(_chalk2['default'].green("\n# Packages only in apm"));
  console.log(stats.only_in_apm.join(' '));

  console.log(_chalk2['default'].green("\n# Packages only in local machine"));
  console.log(stats.only_in_local.join(' '));
}

function cmdSync(cmd, options) {
  // Install only_in_apm
  // Star only_in_local
  var stats = getPackageStats();

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = stats.only_in_apm[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pkg = _step.value;

      console.log(_chalk2['default'].green("Installing ... ") + pkg);
      apm.install(pkg);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = stats.only_in_local[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var pkg = _step2.value;

      console.log(_chalk2['default'].green("Staring ... ") + pkg);
      apm.star(pkg);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2['return']) {
        _iterator2['return']();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function cmdSyncWithRemote(cmd, options) {
  // Uninstall only_in_local
  // Install only_in_apm
  var stats = getPackageStats();

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = stats.only_in_local[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var pkg = _step3.value;

      console.log(_chalk2['default'].red("Uninstalling ... ") + pkg);
      apm.uninstall(pkg);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3['return']) {
        _iterator3['return']();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = stats.only_in_apm[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var pkg = _step4.value;

      console.log(_chalk2['default'].green("Installing ... ") + pkg);
      apm.install(pkg);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4['return']) {
        _iterator4['return']();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

function cmdSyncWithLocal(cmd, options) {
  // Unstar only_in_apm
  // Star only_in_local
  var stats = getPackageStats();

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = stats.only_in_apm[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var pkg = _step5.value;

      console.log(_chalk2['default'].red("Unstaring ... ") + pkg);
      apm.unstar(pkg);
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5['return']) {
        _iterator5['return']();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = stats.only_in_local[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var pkg = _step6.value;

      console.log(_chalk2['default'].green("Staring ... ") + pkg);
      apm.star(pkg);
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6['return']) {
        _iterator6['return']();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }
}

function setOfName(arr) {
  return arr.map(function (s) {
    return s.name;
  });
}

function diff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) < 0;
  });
}

function getPackageStats() {
  var installed = apm.installedPackages();
  var starred = apm.starredPackages();
  return {
    installed: installed,
    starred: starred,
    only_in_apm: diff(setOfName(starred), setOfName(installed)),
    only_in_local: diff(setOfName(installed), setOfName(starred))
  };
}