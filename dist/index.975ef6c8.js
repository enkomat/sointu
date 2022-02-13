// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7nZVA":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _tonal = require("@tonaljs/tonal");
var _chord = require("@tonaljs/chord");
var _chordDictionary = require("@tonaljs/chord-dictionary");
var _howler = require("howler");
var _fs = require("fs");
const sound = new Howl({
    src: [
        'assets/GlassSprite.mp3'
    ],
    onload () {
        console.log('Sound file has been loaded. Do something here!');
        soundEngine.init();
    },
    onloaderror (e, msg) {
        console.log('Error', e, msg);
    }
});
console.log();
let startTime;
const startNotes = [
    -24,
    -23,
    -22,
    20,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
];
const startChords = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
];
const startTypes = [
    -7,
    -6,
    -5,
    -4,
    -3,
    -2,
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
];
const startNoteSelector = document.querySelector('#start-note');
const firstChordSelector = document.querySelector('#first-chord');
const secondChordSelector = document.querySelector('#second-chord');
const thirdChordSelector = document.querySelector('#third-chord');
const fourthChordSelector = document.querySelector('#fourth-chord');
const firstTypeSelector = document.querySelector('#first-type');
const secondTypeSelector = document.querySelector('#second-type');
const thirdTypeSelector = document.querySelector('#third-type');
const fourthTypeSelector = document.querySelector('#fourth-type');
const buttons = document.querySelector('.buttons');
const intervalsInChord = document.querySelector('.intervals-in-chord');
const notesInChord = document.querySelector('.notes-in-chord');
const doubleUpwards1Selector = document.querySelector('#upwards-1-1');
const doubleUpwards2Selector = document.querySelector('#upwards-1-2');
const doubleUpwards3Selector = document.querySelector('#upwards-1-3');
const doubleUpwards4Selector = document.querySelector('#upwards-1-4');
const doubleUpwards5Selector = document.querySelector('#upwards-1-5');
const doubleUpwards6Selector = document.querySelector('#upwards-1-6');
const doubleUpwards7Selector = document.querySelector('#upwards-1-7');
const doubleUpwards8Selector = document.querySelector('#upwards-1-8');
const octaveMultiplier1Selector = document.querySelector('#mult-1');
const octaveMultiplier2Selector = document.querySelector('#mult-2');
const octaveMultiplier3Selector = document.querySelector('#mult-3');
const octaveMultiplier4Selector = document.querySelector('#mult-4');
const octaveMultiplier5Selector = document.querySelector('#mult-5');
const octaveMultiplier6Selector = document.querySelector('#mult-6');
const octaveMultiplier7Selector = document.querySelector('#mult-7');
const octaveMultiplier8Selector = document.querySelector('#mult-8');
const octaveMultiplier9Selector = document.querySelector('#mult-9');
const octaveMultiplier10Selector = document.querySelector('#mult-10');
const octaveMultiplier11Selector = document.querySelector('#mult-11');
const octaveMultiplier12Selector = document.querySelector('#mult-12');
const octaveMultiplier13Selector = document.querySelector('#mult-13');
const octaveMultiplier14Selector = document.querySelector('#mult-14');
const octaveMultiplier15Selector = document.querySelector('#mult-15');
const octaveMultiplier16Selector = document.querySelector('#mult-16');
const octaveMultiplier17Selector = document.querySelector('#mult-17');
const octaveMultiplier18Selector = document.querySelector('#mult-18');
const octaveMultiplier19Selector = document.querySelector('#mult-19');
const octaveMultiplier20Selector = document.querySelector('#mult-20');
const octaveMultiplier21Selector = document.querySelector('#mult-21');
const octaveMultiplier22Selector = document.querySelector('#mult-22');
const octaveMultiplier23Selector = document.querySelector('#mult-23');
const octaveMultiplier24Selector = document.querySelector('#mult-24');
const octaveMultiplier25Selector = document.querySelector('#mult-25');
const octaveMultiplier26Selector = document.querySelector('#mult-26');
const octaveMultiplier27Selector = document.querySelector('#mult-27');
const octaveMultiplier28Selector = document.querySelector('#mult-28');
const octaveMultiplier29Selector = document.querySelector('#mult-29');
const octaveMultiplier30Selector = document.querySelector('#mult-30');
const octaveMultiplier31Selector = document.querySelector('#mult-31');
const octaveMultiplier32Selector = document.querySelector('#mult-32');
const semitoneOffset9Selector = document.querySelector('#offset-9');
const semitoneOffset10Selector = document.querySelector('#offset-10');
const semitoneOffset11Selector = document.querySelector('#offset-11');
const semitoneOffset12Selector = document.querySelector('#offset-12');
const semitoneOffset13Selector = document.querySelector('#offset-13');
const semitoneOffset14Selector = document.querySelector('#offset-14');
const semitoneOffset15Selector = document.querySelector('#offset-15');
const semitoneOffset16Selector = document.querySelector('#offset-16');
const semitoneOffset17Selector = document.querySelector('#offset-17');
const semitoneOffset18Selector = document.querySelector('#offset-18');
const semitoneOffset19Selector = document.querySelector('#offset-19');
const semitoneOffset20Selector = document.querySelector('#offset-20');
const semitoneOffset21Selector = document.querySelector('#offset-21');
const semitoneOffset22Selector = document.querySelector('#offset-22');
const semitoneOffset23Selector = document.querySelector('#offset-23');
const semitoneOffset24Selector = document.querySelector('#offset-24');
const rootDoublerSelector1 = document.querySelector('#doubler-1');
const rootDoublerSelector2 = document.querySelector('#doubler-2');
const rootDoublerSelector3 = document.querySelector('#doubler-3');
const rootDoublerSelector4 = document.querySelector('#doubler-4');
let selectedStartNote = 'C';
let selectedOctave = '1';
let selectedChord;
let key = 0;
let zeroChordRoot = 0;
let firstChordRoot = 0;
let secondChordRoot = 0;
let thirdChordRoot = 0;
let doubler12 = 0;
let doubler13 = 0;
let doubler14 = 0;
let doubler15 = 0;
let doubler16 = 0;
let doubler17 = 0;
let doubler18 = 0;
let doubleUpwards1 = false;
let doubleUpwards2 = false;
let doubleUpwards3 = false;
let doubleUpwards4 = false;
let doubleUpwards5 = false;
let doubleUpwards6 = false;
let doubleUpwards7 = false;
let doubleUpwards8 = false;
let rootDoubler1 = 0;
let rootDoubler2 = 0;
let rootDoubler3 = 0;
let rootDoubler4 = 0;
let octaveMultiplier1 = 0;
let octaveMultiplier2 = 0;
let octaveMultiplier3 = 0;
let octaveMultiplier4 = 0;
let octaveMultiplier5 = 0;
let octaveMultiplier6 = 0;
let octaveMultiplier7 = 0;
let octaveMultiplier8 = 0;
let octaveMultiplier9 = 0;
let octaveMultiplier10 = 0;
let octaveMultiplier11 = 0;
let octaveMultiplier12 = 0;
let octaveMultiplier13 = 0;
let octaveMultiplier14 = 0;
let octaveMultiplier15 = 0;
let octaveMultiplier16 = 0;
let octaveMultiplier17 = 0;
let octaveMultiplier18 = 0;
let octaveMultiplier19 = 0;
let octaveMultiplier20 = 0;
let octaveMultiplier21 = 0;
let octaveMultiplier22 = 0;
let octaveMultiplier23 = 0;
let octaveMultiplier24 = 0;
let octaveMultiplier25 = 0;
let octaveMultiplier26 = 0;
let octaveMultiplier27 = 0;
let octaveMultiplier28 = 0;
let octaveMultiplier29 = 0;
let octaveMultiplier30 = 0;
let octaveMultiplier31 = 0;
let octaveMultiplier32 = 0;
let semitoneOffset9 = 0;
let semitoneOffset10 = 0;
let semitoneOffset11 = 0;
let semitoneOffset12 = 0;
let semitoneOffset13 = 0;
let semitoneOffset14 = 0;
let semitoneOffset15 = 0;
let semitoneOffset16 = 0;
let semitoneOffset17 = 0;
let semitoneOffset18 = 0;
let semitoneOffset19 = 0;
let semitoneOffset20 = 0;
let semitoneOffset21 = 0;
let semitoneOffset22 = 0;
let semitoneOffset23 = 0;
let semitoneOffset24 = 0;
let zeroChordMinorOffset = 0;
let firstChordMinorOffset = 0;
let secondChordMinorOffset = 0;
let thirdChordMinorOffset = 0;
const rootOctaveOffsetSelector = document.querySelector('#root-pitch');
let rootOctaveOffset = 0;
const noteIds = [];
const app = {
    init () {
        /*
        var JZZ = require('jzz');
        require('jzz-midi-smf')(JZZ);
        var smf = new JZZ.MIDI.SMF(0, 96); // type 0, 96 ticks per quarter note
        var trk = new JZZ.MIDI.SMF.MTrk();
        smf.push(trk);
        // add contents:
        trk.add(0, JZZ.MIDI.smfSeqName('This is a sequence name'))
        .add(0, JZZ.MIDI.smfBPM(90)) // tempo 90 bpm
        .add(96, JZZ.MIDI.noteOn(0, 'C6', 127))
        .add(96, JZZ.MIDI.noteOn(0, 'Eb6', 127))
        .add(96, JZZ.MIDI.noteOn(0, 'G6', 127))
        .add(192, JZZ.MIDI.noteOff(0, 'C6'))
        .add(192, JZZ.MIDI.noteOff(0, 'Eb6'))
        .add(192, JZZ.MIDI.noteOff(0, 'G6'))
        .add(288, JZZ.MIDI.smfEndOfTrack());
        // or an alternative way:
        trk.smfSeqName('This is a sequence name').smfBPM(90).tick(96)
        .noteOn(0, 'C6', 127).noteOn(0, 'Eb6', 127).noteOn(0, 'G6', 127)
        .tick(96).noteOff(0, 'C6').noteOff(0, 'Eb6').noteOff(0, 'G6')
        .tick(96).smfEndOfTrack();
        // or even shorter:
        trk.smfSeqName('This is a sequence name').smfBPM(90).tick(96)
        .ch(0).note('C6', 127, 96).note('Eb6', 127, 96).note('G6', 127, 96)
        .tick(192).smfEndOfTrack();

        try {
            fs.writeFileSync('out.mid', smf.dump(), 'binary');
        } catch (err) {
            console.log('Error writing Metadata.json:' + err.message)
        }
        */ /*
        const fs = require('fs');
  
        let data = "This is a file containing a collection"
                + " of programming languages.\n"
        + "1. C\n2. C++\n3. Python";
        
        fs.writeFileSync("programming.txt", data);
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("programming.txt", "utf8"));
        */ this.setupStartNotes();
        this.setupEventListeners();
        startTime = Date.now();
    },
    setupStartNotes () {
        startNotes.forEach((noteName)=>{
            let noteNameOption = this.createElement('option', noteName);
            startNoteSelector.appendChild(noteNameOption);
        });
        startChords.forEach((chordName)=>{
            let chordNameOption = this.createElement('option', chordName);
            secondChordSelector.appendChild(chordNameOption);
        });
        startChords.forEach((chordName)=>{
            let chordNameOption = this.createElement('option', chordName);
            thirdChordSelector.appendChild(chordNameOption);
        });
        startChords.forEach((chordName)=>{
            let chordNameOption = this.createElement('option', chordName);
            fourthChordSelector.appendChild(chordNameOption);
        });
        startTypes.forEach((typeName)=>{
            let typeNameOption = this.createElement('option', typeName);
            firstTypeSelector.appendChild(typeNameOption);
        });
        startTypes.forEach((typeName)=>{
            let typeNameOption = this.createElement('option', typeName);
            secondTypeSelector.appendChild(typeNameOption);
        });
        startTypes.forEach((typeName)=>{
            let typeNameOption = this.createElement('option', typeName);
            thirdTypeSelector.appendChild(typeNameOption);
        });
        startTypes.forEach((typeName)=>{
            let typeNameOption = this.createElement('option', typeName);
            fourthTypeSelector.appendChild(typeNameOption);
        });
    },
    setupEventListeners () {
        startNoteSelector.addEventListener('change', ()=>{
            key = parseInt(startNoteSelector.value);
            zeroChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(firstChordSelector.value));
            firstChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(firstChordRoot));
            secondChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(secondChordRoot));
            thirdChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(thirdChordRoot));
            firstChordMinorOffset = this.changeToMinorOrMajor(firstChordRoot);
            secondChordMinorOffset = this.changeToMinorOrMajor(secondChordRoot);
            thirdChordMinorOffset = this.changeToMinorOrMajor(thirdChordRoot);
        });
        secondChordSelector.addEventListener('change', ()=>{
            firstChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(secondChordSelector.value));
            firstChordMinorOffset = this.changeToMinorOrMajor(firstChordRoot);
        });
        thirdChordSelector.addEventListener('change', ()=>{
            secondChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(thirdChordSelector.value));
            secondChordMinorOffset = this.changeToMinorOrMajor(secondChordRoot);
        });
        fourthChordSelector.addEventListener('change', ()=>{
            thirdChordRoot = this.getCorrectMinorAndMajorRoot(parseInt(fourthChordSelector.value));
            thirdChordMinorOffset = this.changeToMinorOrMajor(thirdChordRoot);
        });
        firstTypeSelector.addEventListener('change', ()=>{
            zeroChordMinorOffset = parseInt(firstTypeSelector.value);
            firstChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(firstChordRoot));
            secondChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(secondChordRoot));
            thirdChordRoot = this.getCorrectMinorAndMajorRoot(this.getCorrectMinorAndMajorRootFromSemitone(thirdChordRoot));
            firstChordMinorOffset = this.changeToMinorOrMajor(firstChordRoot);
            secondChordMinorOffset = this.changeToMinorOrMajor(secondChordRoot);
            thirdChordMinorOffset = this.changeToMinorOrMajor(thirdChordRoot);
        });
        secondTypeSelector.addEventListener('click', ()=>{
            if (firstChordMinorOffset == 0) firstChordMinorOffset = -1;
            else if (firstChordMinorOffset == -1) firstChordMinorOffset = 0;
        });
        thirdTypeSelector.addEventListener('click', ()=>{
            if (secondChordMinorOffset == 0) secondChordMinorOffset = -1;
            else if (secondChordMinorOffset == -1) secondChordMinorOffset = 0;
        });
        fourthTypeSelector.addEventListener('click', ()=>{
            if (thirdChordMinorOffset == 0) thirdChordMinorOffset = -1;
            else if (thirdChordMinorOffset == -1) thirdChordMinorOffset = 0;
        });
        rootOctaveOffsetSelector.addEventListener('change', ()=>{
            rootOctaveOffset = parseInt(rootOctaveOffsetSelector.value);
        });
        octaveMultiplier1Selector.addEventListener('change', ()=>{
            octaveMultiplier1 = parseInt(octaveMultiplier1Selector.value);
            console.log("octave multiplier works");
        });
        octaveMultiplier2Selector.addEventListener('change', ()=>{
            octaveMultiplier2 = parseInt(octaveMultiplier2Selector.value);
        });
        octaveMultiplier3Selector.addEventListener('change', ()=>{
            octaveMultiplier3 = parseInt(octaveMultiplier3Selector.value);
        });
        octaveMultiplier4Selector.addEventListener('change', ()=>{
            octaveMultiplier4 = parseInt(octaveMultiplier4Selector.value);
        });
        octaveMultiplier5Selector.addEventListener('change', ()=>{
            octaveMultiplier5 = parseInt(octaveMultiplier5Selector.value);
        });
        octaveMultiplier6Selector.addEventListener('change', ()=>{
            octaveMultiplier6 = parseInt(octaveMultiplier6Selector.value);
        });
        octaveMultiplier7Selector.addEventListener('change', ()=>{
            octaveMultiplier7 = parseInt(octaveMultiplier7Selector.value);
        });
        octaveMultiplier8Selector.addEventListener('change', ()=>{
            octaveMultiplier8 = parseInt(octaveMultiplier8Selector.value);
        });
        octaveMultiplier9Selector.addEventListener('change', ()=>{
            octaveMultiplier9 = parseInt(octaveMultiplier9Selector.value);
        });
        octaveMultiplier10Selector.addEventListener('change', ()=>{
            octaveMultiplier10 = parseInt(octaveMultiplier10Selector.value);
        });
        octaveMultiplier11Selector.addEventListener('change', ()=>{
            octaveMultiplier11 = parseInt(octaveMultiplier11Selector.value);
        });
        octaveMultiplier12Selector.addEventListener('change', ()=>{
            octaveMultiplier12 = parseInt(octaveMultiplier12Selector.value);
        });
        octaveMultiplier13Selector.addEventListener('change', ()=>{
            octaveMultiplier13 = parseInt(octaveMultiplier13Selector.value);
        });
        octaveMultiplier14Selector.addEventListener('change', ()=>{
            octaveMultiplier14 = parseInt(octaveMultiplier14Selector.value);
        });
        octaveMultiplier15Selector.addEventListener('change', ()=>{
            octaveMultiplier15 = parseInt(octaveMultiplier15Selector.value);
        });
        octaveMultiplier16Selector.addEventListener('change', ()=>{
            octaveMultiplier16 = parseInt(octaveMultiplier16Selector.value);
        });
        octaveMultiplier17Selector.addEventListener('change', ()=>{
            octaveMultiplier17 = parseInt(octaveMultiplier17Selector.value);
        });
        octaveMultiplier18Selector.addEventListener('change', ()=>{
            octaveMultiplier18 = parseInt(octaveMultiplier18Selector.value);
        });
        octaveMultiplier19Selector.addEventListener('change', ()=>{
            octaveMultiplier19 = parseInt(octaveMultiplier19Selector.value);
        });
        octaveMultiplier20Selector.addEventListener('change', ()=>{
            octaveMultiplier20 = parseInt(octaveMultiplier20Selector.value);
        });
        octaveMultiplier21Selector.addEventListener('change', ()=>{
            octaveMultiplier21 = parseInt(octaveMultiplier21Selector.value);
        });
        octaveMultiplier22Selector.addEventListener('change', ()=>{
            octaveMultiplier22 = parseInt(octaveMultiplier22Selector.value);
        });
        octaveMultiplier23Selector.addEventListener('change', ()=>{
            octaveMultiplier23 = parseInt(octaveMultiplier23Selector.value);
        });
        octaveMultiplier24Selector.addEventListener('change', ()=>{
            octaveMultiplier24 = parseInt(octaveMultiplier24Selector.value);
        });
        octaveMultiplier25Selector.addEventListener('change', ()=>{
            octaveMultiplier25 = parseInt(octaveMultiplier25Selector.value);
        });
        octaveMultiplier26Selector.addEventListener('change', ()=>{
            octaveMultiplier26 = parseInt(octaveMultiplier26Selector.value);
        });
        octaveMultiplier27Selector.addEventListener('change', ()=>{
            octaveMultiplier27 = parseInt(octaveMultiplier27Selector.value);
        });
        octaveMultiplier28Selector.addEventListener('change', ()=>{
            octaveMultiplier28 = parseInt(octaveMultiplier28Selector.value);
        });
        octaveMultiplier29Selector.addEventListener('change', ()=>{
            octaveMultiplier29 = parseInt(octaveMultiplier29Selector.value);
        });
        octaveMultiplier30Selector.addEventListener('change', ()=>{
            octaveMultiplier30 = parseInt(octaveMultiplier30Selector.value);
        });
        octaveMultiplier31Selector.addEventListener('change', ()=>{
            octaveMultiplier31 = parseInt(octaveMultiplier31Selector.value);
        });
        octaveMultiplier32Selector.addEventListener('change', ()=>{
            octaveMultiplier32 = parseInt(octaveMultiplier32Selector.value);
        });
        document.addEventListener('keydown', (event)=>{
            if (event.key === '1') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+zeroChordRoot+key);
                soundEngine.playNote(24 + 12 * octaveMultiplier1 + zeroChordRoot + key + rootOctaveOffset * 12);
                if (rootDoubler1 > 0) soundEngine.playNote(36 + 12 * octaveMultiplier1 + zeroChordRoot + key + rootOctaveOffset * 12);
                if (rootDoubler1 > 1) soundEngine.playNote(48 + 12 * octaveMultiplier1 + zeroChordRoot + key + rootOctaveOffset * 12);
            //soundEngine.playNote(24+12+zeroChordRoot+key);
            //soundEngine.playNote(24+24+zeroChordRoot+key);
            }
            if (event.key === '2') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(28 + 12 * octaveMultiplier2 + zeroChordRoot + zeroChordMinorOffset + key);
            if (event.key === '3') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(31 + 12 * octaveMultiplier3 + zeroChordRoot + key);
            if (event.key === '4') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(35 + 12 * octaveMultiplier4 + zeroChordRoot + zeroChordMinorOffset + key);
            if (event.key === '5') //this.displayAndPlayChord('maj7');
            //sound.stop(noteIds[24+0+0]);
            //sound.stop(noteIds[24+0+7]);
            //sound.stop(noteIds[24+0+9]);
            soundEngine.playNote(38 + 12 * octaveMultiplier5 + zeroChordRoot + key);
            if (event.key === '6') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(40 + 12 * octaveMultiplier6 + zeroChordRoot + zeroChordMinorOffset + key);
            if (event.key === '7') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(43 + 12 * octaveMultiplier7 + zeroChordRoot + key);
            if (event.key === '8') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(24 + 12 * octaveMultiplier8 + zeroChordRoot + key);
            if (event.key === 'q') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+firstChordRoot+key);
                soundEngine.playNote(24 + 12 * octaveMultiplier9 + semitoneOffset9 + firstChordRoot + key + rootOctaveOffset * 12);
                if (rootDoubler2 > 0) soundEngine.playNote(36 + 12 * octaveMultiplier9 + semitoneOffset9 + firstChordRoot + key + rootOctaveOffset * 12);
                if (rootDoubler2 > 1) soundEngine.playNote(48 + 12 * octaveMultiplier9 + semitoneOffset9 + firstChordRoot + key + rootOctaveOffset * 12);
            //soundEngine.playNote(24+12+firstChordRoot+key);
            }
            if (event.key === 'w') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(28 + 12 * octaveMultiplier10 + semitoneOffset10 + firstChordRoot + firstChordMinorOffset + key);
            if (event.key === 'e') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(31 + 12 * octaveMultiplier11 + semitoneOffset11 + firstChordRoot + key);
            if (event.key === 'r') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(35 + 12 * octaveMultiplier12 + semitoneOffset12 + firstChordRoot + firstChordMinorOffset + key);
            if (event.key === 't') //this.displayAndPlayChord('maj7');
            //sound.stop(noteIds[24+0+0]);
            //sound.stop(noteIds[24+0+7]);
            //sound.stop(noteIds[24+0+9]);
            soundEngine.playNote(38 + 12 * octaveMultiplier13 + semitoneOffset13 + firstChordRoot + key);
            if (event.key === 'y') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(40 + 12 * octaveMultiplier14 + semitoneOffset14 + firstChordRoot + firstChordMinorOffset + key);
            if (event.key === 'u') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(43 + 12 * octaveMultiplier15 + semitoneOffset15 + firstChordRoot + key);
            if (event.key === 'i') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(35 + 12 * octaveMultiplier16 + semitoneOffset16 + firstChordRoot + firstChordMinorOffset + key);
            if (event.key === 'a') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+secondChordRoot+key);
                soundEngine.playNote(24 + 12 * octaveMultiplier17 + semitoneOffset17 + secondChordRoot + key + rootOctaveOffset * 12);
                if (rootDoubler3 > 0) soundEngine.playNote(36 + 12 * octaveMultiplier17 + semitoneOffset17 + secondChordRoot + key + rootOctaveOffset * 12);
                if (rootDoubler3 > 1) soundEngine.playNote(48 + 12 * octaveMultiplier17 + semitoneOffset17 + secondChordRoot + key + rootOctaveOffset * 12);
            }
            if (event.key === 's') {
                //this.displayAndPlayChord('maj7');
                soundEngine.playNote(28 + 12 * octaveMultiplier18 + semitoneOffset18 + secondChordRoot + secondChordMinorOffset + key);
                console.log("oct mult: " + octaveMultiplier18);
            }
            if (event.key === 'd') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(31 + 12 * octaveMultiplier19 + semitoneOffset19 + secondChordRoot + key);
            if (event.key === 'f') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(35 + 12 * octaveMultiplier20 + semitoneOffset20 + secondChordRoot + secondChordMinorOffset + key);
            if (event.key === 'g') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(38 + 12 * octaveMultiplier21 + semitoneOffset21 + secondChordRoot + key);
            if (event.key === 'h') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(40 + 12 * octaveMultiplier22 + semitoneOffset22 + secondChordRoot + secondChordMinorOffset + key);
            if (event.key === 'j') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(43 + 12 * octaveMultiplier23 + semitoneOffset23 + secondChordRoot + key);
            if (event.key === 'k') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(35 + 12 * octaveMultiplier24 + semitoneOffset24 + secondChordRoot + secondChordMinorOffset + key);
            if (event.key === 'z') {
                //this.displayAndPlayChord('maj7');
                //sound.stop(noteIds[24+0+0]);
                //sound.stop(noteIds[24+0+7]);
                //sound.stop(noteIds[24+0+9]);
                //soundEngine.playNote(16+thirdChordRoot+key);
                soundEngine.playNote(24 + 12 * octaveMultiplier25 + thirdChordRoot + key + rootOctaveOffset * 12);
                if (rootDoubler4 > 0) soundEngine.playNote(36 + 12 * octaveMultiplier25 + thirdChordRoot + key + rootOctaveOffset * 12);
                if (rootDoubler4 > 1) soundEngine.playNote(48 + 12 * octaveMultiplier25 + thirdChordRoot + key + rootOctaveOffset * 12);
            //soundEngine.playNote(24+12+0+thirdChordRoot+key);
            }
            if (event.key === 'x') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(28 + 12 * octaveMultiplier26 + thirdChordRoot + thirdChordMinorOffset + key);
            if (event.key === 'c') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(31 + 12 * octaveMultiplier27 + thirdChordRoot + key);
            if (event.key === 'v') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(35 + 12 * octaveMultiplier28 + thirdChordRoot + thirdChordMinorOffset + key);
            if (event.key === 'b') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(38 + 12 * octaveMultiplier29 + thirdChordRoot + key);
            if (event.key === 'n') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(40 + 12 * octaveMultiplier30 + thirdChordRoot + thirdChordMinorOffset + key);
            if (event.key === 'm') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(43 + 12 * octaveMultiplier31 + thirdChordRoot + key);
            if (event.key === ',') //this.displayAndPlayChord('maj7');
            soundEngine.playNote(35 + 12 * octaveMultiplier32 + thirdChordRoot + thirdChordMinorOffset + key);
        //console.log(event.keyCode);
        });
    },
    displayAndPlayChord (selectedChord1) {
        let chordIntervals = _chord.chord(selectedChord1).intervals;
        intervalsInChord.innerText = chordIntervals.join(' - ');
        const startNoteWithOctave = selectedStartNote + selectedOctave;
        let chordNotes = chordIntervals.map((val)=>{
            return _tonal.transpose(startNoteWithOctave, val);
        });
        notesInChord.innerText = chordNotes.join(' - ');
        soundEngine.play(chordNotes);
    },
    changeToMinorOrMajor (note) {
        var offset = 0;
        if (zeroChordMinorOffset == 0) {
            if (note == 0) offset = 0;
            else if (note == 2) offset = -1;
            else if (note == 4) offset = -1;
            else if (note == 5) offset = 0;
            else if (note == 7) offset = 0;
            else if (note == 9) offset = -1;
            else if (note == 11) offset = -1;
        } else if (zeroChordMinorOffset == -1) {
            if (note == 0) offset = -1;
            else if (note == 2) offset = 0;
            else if (note == 3) offset = 0;
            else if (note == 5) offset = -1;
            else if (note == 7) offset = -1;
            else if (note == 8) offset = 0;
            else if (note == 10) offset = 0;
        }
        return offset;
    },
    getCorrectMinorAndMajorRoot (note) {
        var semitone = 0;
        if (zeroChordMinorOffset == 0) {
            if (note == 0) semitone = 0;
            else if (note == 1) semitone = 2;
            else if (note == 2) semitone = 4;
            else if (note == 3) semitone = 5;
            else if (note == 4) semitone = 7;
            else if (note == 5) semitone = 9;
            else if (note == 6) semitone = 11;
        } else if (zeroChordMinorOffset == -1) {
            if (note == 0) semitone = 0;
            else if (note == 1) semitone = 2;
            else if (note == 2) semitone = 3;
            else if (note == 3) semitone = 5;
            else if (note == 4) semitone = 7;
            else if (note == 5) semitone = 8;
            else if (note == 6) semitone = 10;
        }
        return semitone;
    },
    getCorrectMinorAndMajorRootFromSemitone (semitone) {
        var note = 0;
        if (semitone == 0) note = 0;
        else if (semitone == 2) note = 1;
        else if (semitone == 3 || semitone == 4) note = 2;
        else if (semitone == 5) note = 3;
        else if (semitone == 7) note = 4;
        else if (semitone == 8 || semitone == 9) note = 5;
        else if (semitone == 10 || semitone == 11) note = 6;
        return note;
    },
    //you could make this able to double notes upwards as well
    doubleNote (noteRoot, doubleAmt, doubleUpwards) {
        //for(i = 1; i <= doubleAmt; i++)
        //{
        //octave multiplier is not included by design
        if (doubleUpwards) soundEngine.playNote(noteRoot + 12 * doubleAmt);
        else soundEngine.playNote(noteRoot + 12 * -doubleAmt);
    //}
    },
    createElement (elementName, content) {
        let element = document.createElement(elementName);
        element.innerHTML = content;
        return element;
    }
};
const soundEngine = {
    init () {
        const lengthOfNote = 2400;
        let timeIndex = 0;
        for(let i = 0; i <= 96; i++){
            sound['_sprite'][i] = [
                timeIndex,
                lengthOfNote
            ];
            timeIndex += lengthOfNote;
        }
    },
    playNote (noteNumber) {
        sound.play(noteNumber.toString());
        console.log(Date.now() - startTime + " " + noteNumber);
    },
    play (soundSequence) {
        const chordMidiNumbers = soundSequence.map((noteName)=>{
            return _tonal.note(noteName).midi;
        });
        sound.volume(1);
        chordMidiNumbers.forEach((noteMidiNumber)=>{
            sound.play(noteMidiNumber.toString());
        });
    }
};
app.init();

},{"@tonaljs/tonal":"43Fcx","@tonaljs/chord":"4pLtF","@tonaljs/chord-dictionary":"jCoqx","howler":"5Vjgk","fs":"jhUEF"}],"43Fcx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "accToAlt", ()=>accToAlt
);
parcelHelpers.export(exports, "altToAcc", ()=>altToAcc
);
parcelHelpers.export(exports, "coordToInterval", ()=>coordToInterval
);
parcelHelpers.export(exports, "coordToNote", ()=>coordToNote
);
parcelHelpers.export(exports, "decode", ()=>decode
);
parcelHelpers.export(exports, "distance", ()=>distance
);
parcelHelpers.export(exports, "encode", ()=>encode
);
parcelHelpers.export(exports, "interval", ()=>interval
);
parcelHelpers.export(exports, "isNamed", ()=>isNamed
);
parcelHelpers.export(exports, "isPitch", ()=>isPitch
);
parcelHelpers.export(exports, "note", ()=>note
);
parcelHelpers.export(exports, "tokenizeInterval", ()=>tokenize$1
);
parcelHelpers.export(exports, "tokenizeNote", ()=>tokenize
);
parcelHelpers.export(exports, "transpose", ()=>transpose
);
function isNamed(src) {
    return typeof src === "object" && typeof src.name === "string";
}
function isPitch(pitch) {
    return typeof pitch === "object" && typeof pitch.step === "number" && typeof pitch.alt === "number";
}
// The nuuber of fifths of [C, D, E, F, G, A, B]
const FIFTHS = [
    0,
    2,
    4,
    -1,
    1,
    3,
    5
];
// The number of octaves it span each step
const STEPS_TO_OCTS = FIFTHS.map((fifths)=>Math.floor(fifths * 7 / 12)
);
function encode(pitch) {
    const { step , alt , oct , dir =1  } = pitch;
    const f = FIFTHS[step] + 7 * alt;
    if (oct === undefined) return [
        dir * f
    ];
    const o = oct - STEPS_TO_OCTS[step] - 4 * alt;
    return [
        dir * f,
        dir * o
    ];
}
// We need to get the steps from fifths
// Fifths for CDEFGAB are [ 0, 2, 4, -1, 1, 3, 5 ]
// We add 1 to fifths to avoid negative numbers, so:
// for ["F", "C", "G", "D", "A", "E", "B"] we have:
const FIFTHS_TO_STEPS = [
    3,
    0,
    4,
    1,
    5,
    2,
    6
];
function decode(coord) {
    const [f, o, dir] = coord;
    const step = FIFTHS_TO_STEPS[unaltered(f)];
    const alt = Math.floor((f + 1) / 7);
    if (o === undefined) return {
        step,
        alt,
        dir
    };
    const oct = o + 4 * alt + STEPS_TO_OCTS[step];
    return {
        step,
        alt,
        oct,
        dir
    };
}
// Return the number of fifths as if it were unaltered
function unaltered(f) {
    const i = (f + 1) % 7;
    return i < 0 ? 7 + i : i;
}
const NoNote = {
    empty: true,
    name: "",
    pc: "",
    acc: ""
};
const cache = {
};
const fillStr = (s, n)=>Array(n + 1).join(s)
;
const stepToLetter = (step)=>"CDEFGAB".charAt(step)
;
const altToAcc = (alt)=>alt < 0 ? fillStr("b", -alt) : fillStr("#", alt)
;
const accToAlt = (acc)=>acc[0] === "b" ? -acc.length : acc.length
;
/**
 * Given a note literal (a note name or a note object), returns the Note object
 * @example
 * note('Bb4') // => { name: "Bb4", midi: 70, chroma: 10, ... }
 */ function note(src) {
    return typeof src === "string" ? cache[src] || (cache[src] = parse(src)) : isPitch(src) ? note(pitchName(src)) : isNamed(src) ? note(src.name) : NoNote;
}
const REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
/**
 * @private
 */ function tokenize(str) {
    const m = REGEX.exec(str);
    return [
        m[1].toUpperCase(),
        m[2].replace(/x/g, "##"),
        m[3],
        m[4]
    ];
}
/**
 * @private
 */ function coordToNote(noteCoord) {
    return note(decode(noteCoord));
}
const SEMI = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
function parse(noteName) {
    const tokens = tokenize(noteName);
    if (tokens[0] === "" || tokens[3] !== "") return NoNote;
    const letter = tokens[0];
    const acc = tokens[1];
    const octStr = tokens[2];
    const step = (letter.charCodeAt(0) + 3) % 7;
    const alt = accToAlt(acc);
    const oct = octStr.length ? +octStr : undefined;
    const coord = encode({
        step,
        alt,
        oct
    });
    const name = letter + acc + octStr;
    const pc = letter + acc;
    const chroma = (SEMI[step] + alt + 120) % 12;
    const o = oct === undefined ? -100 : oct;
    const height = SEMI[step] + alt + 12 * (o + 1);
    const midi = height >= 0 && height <= 127 ? height : null;
    const freq = oct === undefined ? null : Math.pow(2, (height - 69) / 12) * 440;
    return {
        empty: false,
        acc,
        alt,
        chroma,
        coord,
        freq,
        height,
        letter,
        midi,
        name,
        oct,
        pc,
        step
    };
}
function pitchName(props) {
    const { step , alt , oct  } = props;
    const letter = stepToLetter(step);
    if (!letter) return "";
    const pc = letter + altToAcc(alt);
    return oct || oct === 0 ? pc + oct : pc;
}
const NoInterval = {
    empty: true,
    name: "",
    acc: ""
};
// shorthand tonal notation (with quality after number)
const INTERVAL_TONAL_REGEX = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
// standard shorthand notation (with quality before number)
const INTERVAL_SHORTHAND_REGEX = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
const REGEX$1 = new RegExp("^" + INTERVAL_TONAL_REGEX + "|" + INTERVAL_SHORTHAND_REGEX + "$");
/**
 * @private
 */ function tokenize$1(str) {
    const m = REGEX$1.exec(`${str}`);
    if (m === null) return [
        "",
        ""
    ];
    return m[1] ? [
        m[1],
        m[2]
    ] : [
        m[4],
        m[3]
    ];
}
const cache$1 = {
};
/**
 * Get interval properties. It returns an object with:
 *
 * - name: the interval name
 * - num: the interval number
 * - type: 'perfectable' or 'majorable'
 * - q: the interval quality (d, m, M, A)
 * - dir: interval direction (1 ascending, -1 descending)
 * - simple: the simplified number
 * - semitones: the size in semitones
 * - chroma: the interval chroma
 *
 * @param {string} interval - the interval name
 * @return {Object} the interval properties
 *
 * @example
 * import { interval } from '@tonaljs/tonal'
 * interval('P5').semitones // => 7
 * interval('m3').type // => 'majorable'
 */ function interval(src) {
    return typeof src === "string" ? cache$1[src] || (cache$1[src] = parse$1(src)) : isPitch(src) ? interval(pitchName$1(src)) : isNamed(src) ? interval(src.name) : NoInterval;
}
const SIZES = [
    0,
    2,
    4,
    5,
    7,
    9,
    11
];
const TYPES = "PMMPPMM";
function parse$1(str) {
    const tokens = tokenize$1(str);
    if (tokens[0] === "") return NoInterval;
    const num = +tokens[0];
    const q = tokens[1];
    const step = (Math.abs(num) - 1) % 7;
    const t = TYPES[step];
    if (t === "M" && q === "P") return NoInterval;
    const type = t === "M" ? "majorable" : "perfectable";
    const name = "" + num + q;
    const dir = num < 0 ? -1 : 1;
    const simple = num === 8 || num === -8 ? num : dir * (step + 1);
    const alt = qToAlt(type, q);
    const oct = Math.floor((Math.abs(num) - 1) / 7);
    const semitones = dir * (SIZES[step] + alt + 12 * oct);
    const chroma = (dir * (SIZES[step] + alt) % 12 + 12) % 12;
    const coord = encode({
        step,
        alt,
        oct,
        dir
    });
    return {
        empty: false,
        name,
        num,
        q,
        step,
        alt,
        dir,
        type,
        simple,
        semitones,
        chroma,
        coord,
        oct
    };
}
/**
 * @private
 */ function coordToInterval(coord) {
    const [f, o = 0] = coord;
    const isDescending = f * 7 + o * 12 < 0;
    const ivl = isDescending ? [
        -f,
        -o,
        -1
    ] : [
        f,
        o,
        1
    ];
    return interval(decode(ivl));
}
function qToAlt(type, q) {
    return q === "M" && type === "majorable" || q === "P" && type === "perfectable" ? 0 : q === "m" && type === "majorable" ? -1 : /^A+$/.test(q) ? q.length : /^d+$/.test(q) ? -1 * (type === "perfectable" ? q.length : q.length + 1) : 0;
}
// return the interval name of a pitch
function pitchName$1(props) {
    const { step , alt , oct =0 , dir  } = props;
    if (!dir) return "";
    const num = step + 1 + 7 * oct;
    const d = dir < 0 ? "-" : "";
    const type = TYPES[step] === "M" ? "majorable" : "perfectable";
    const name = d + num + altToQ(type, alt);
    return name;
}
const fillStr$1 = (s, n)=>Array(Math.abs(n) + 1).join(s)
;
function altToQ(type, alt) {
    if (alt === 0) return type === "majorable" ? "M" : "P";
    else if (alt === -1 && type === "majorable") return "m";
    else if (alt > 0) return fillStr$1("A", alt);
    else return fillStr$1("d", type === "perfectable" ? alt : alt + 1);
}
/**
 * Transpose a note by an interval.
 *
 * @param {string} note - the note or note name
 * @param {string} interval - the interval or interval name
 * @return {string} the transposed note name or empty string if not valid notes
 * @example
 * import { tranpose } from "@tonaljs/tonal"
 * transpose("d3", "3M") // => "F#3"
 * transpose("D", "3M") // => "F#"
 * ["C", "D", "E", "F", "G"].map(pc => transpose(pc, "M3)) // => ["E", "F#", "G#", "A", "B"]
 */ function transpose(noteName, intervalName) {
    const note$1 = note(noteName);
    const interval$1 = interval(intervalName);
    if (note$1.empty || interval$1.empty) return "";
    const noteCoord = note$1.coord;
    const intervalCoord = interval$1.coord;
    const tr = noteCoord.length === 1 ? [
        noteCoord[0] + intervalCoord[0]
    ] : [
        noteCoord[0] + intervalCoord[0],
        noteCoord[1] + intervalCoord[1]
    ];
    return coordToNote(tr).name;
}
/**
 * Find the interval distance between two notes or coord classes.
 *
 * To find distance between coord classes, both notes must be coord classes and
 * the interval is always ascending
 *
 * @param {Note|string} from - the note or note name to calculate distance from
 * @param {Note|string} to - the note or note name to calculate distance to
 * @return {string} the interval name or empty string if not valid notes
 *
 */ function distance(fromNote, toNote) {
    const from = note(fromNote);
    const to = note(toNote);
    if (from.empty || to.empty) return "";
    const fcoord = from.coord;
    const tcoord = to.coord;
    const fifths = tcoord[0] - fcoord[0];
    const octs = fcoord.length === 2 && tcoord.length === 2 ? tcoord[1] - fcoord[1] : -Math.floor(fifths * 7 / 12);
    return coordToInterval([
        fifths,
        octs
    ]).name;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4pLtF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chord", ()=>chord
);
parcelHelpers.export(exports, "chordScales", ()=>chordScales
);
parcelHelpers.export(exports, "extended", ()=>extended
);
parcelHelpers.export(exports, "reduced", ()=>reduced
);
parcelHelpers.export(exports, "tokenize", ()=>tokenize
);
parcelHelpers.export(exports, "transpose", ()=>transpose
);
var _chordDictionary = require("@tonaljs/chord-dictionary");
var _pcset = require("@tonaljs/pcset");
var _scaleDictionary = require("@tonaljs/scale-dictionary");
var _tonal = require("@tonaljs/tonal");
const NoChord = {
    empty: true,
    name: "",
    type: "",
    tonic: null,
    setNum: NaN,
    quality: "Unknown",
    chroma: "",
    normalized: "",
    aliases: [],
    notes: [],
    intervals: []
};
// 6, 64, 7, 9, 11 and 13 are consider part of the chord
// (see https://github.com/danigb/tonal/issues/55)
const NUM_TYPES = /^(6|64|7|9|11|13)$/;
/**
 * Tokenize a chord name. It returns an array with the tonic and chord type
 * If not tonic is found, all the name is considered the chord name.
 *
 * This function does NOT check if the chord type exists or not. It only tries
 * to split the tonic and chord type.
 *
 * @function
 * @param {string} name - the chord name
 * @return {Array} an array with [tonic, type]
 * @example
 * tokenize("Cmaj7") // => [ "C", "maj7" ]
 * tokenize("C7") // => [ "C", "7" ]
 * tokenize("mMaj7") // => [ null, "mMaj7" ]
 * tokenize("Cnonsense") // => [ null, "nonsense" ]
 */ function tokenize(name) {
    const [lt, acc, oct, type] = _tonal.tokenizeNote(name);
    if (lt === "") return [
        "",
        name
    ];
    // aug is augmented (see https://github.com/danigb/tonal/issues/55)
    if (lt === "A" && type === "ug") return [
        "",
        "aug"
    ];
    // see: https://github.com/tonaljs/tonal/issues/70
    if (!type && (oct === "4" || oct === "5")) return [
        lt + acc,
        oct
    ];
    if (NUM_TYPES.test(oct)) return [
        lt + acc,
        oct + type
    ];
    else return [
        lt + acc + oct,
        type
    ];
}
/**
 * Get a Chord from a chord name.
 */ function chord(src) {
    const tokens = Array.isArray(src) ? src : tokenize(src);
    const tonic = _tonal.note(tokens[0]).name;
    const st = _chordDictionary.chordType(tokens[1]);
    if (st.empty || src === "") return NoChord;
    const type = st.name;
    const notes = tonic ? st.intervals.map((i)=>_tonal.transpose(tonic, i)
    ) : [];
    const name = tonic ? tonic + " " + type : type;
    return {
        ...st,
        name,
        type,
        tonic,
        notes
    };
}
/**
 * Transpose a chord name
 *
 * @param {string} chordName - the chord name
 * @return {string} the transposed chord
 *
 * @example
 * transpose('Dm7', 'P4') // => 'Gm7
 */ function transpose(chordName, interval) {
    const [tonic, type] = tokenize(chordName);
    if (!tonic) return name;
    return _tonal.transpose(tonic, interval) + type;
}
/**
 * Get all scales where the given chord fits
 *
 * @example
 * chordScales('C7b9')
 * // => ["phrygian dominant", "flamenco", "spanish heptatonic", "half-whole diminished", "chromatic"]
 */ function chordScales(name) {
    const s = chord(name);
    const isChordIncluded = _pcset.isSupersetOf(s.chroma);
    return _scaleDictionary.entries().filter((scale)=>isChordIncluded(scale.chroma)
    ).map((scale)=>scale.name
    );
}
/**
 * Get all chords names that are a superset of the given one
 * (has the same notes and at least one more)
 *
 * @function
 * @example
 * extended("CMaj7")
 * // => [ 'Cmaj#4', 'Cmaj7#9#11', 'Cmaj9', 'CM7add13', 'Cmaj13', 'Cmaj9#11', 'CM13#11', 'CM7b9' ]
 */ function extended(chordName) {
    const s = chord(chordName);
    const isSuperset = _pcset.isSupersetOf(s.chroma);
    return _chordDictionary.entries().filter((chord1)=>isSuperset(chord1.chroma)
    ).map((chord2)=>s.tonic + chord2.aliases[0]
    );
}
/**
 * Find all chords names that are a subset of the given one
 * (has less notes but all from the given chord)
 *
 * @example
 */ function reduced(chordName) {
    const s = chord(chordName);
    const isSubset = _pcset.isSubsetOf(s.chroma);
    return _chordDictionary.entries().filter((chord3)=>isSubset(chord3.chroma)
    ).map((chord4)=>s.tonic + chord4.aliases[0]
    );
}

},{"@tonaljs/chord-dictionary":"jCoqx","@tonaljs/pcset":"h5EjG","@tonaljs/scale-dictionary":"4IQ1s","@tonaljs/tonal":"43Fcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jCoqx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "add", ()=>add
);
parcelHelpers.export(exports, "addAlias", ()=>addAlias
);
parcelHelpers.export(exports, "chordType", ()=>chordType
);
parcelHelpers.export(exports, "clear", ()=>clear
);
parcelHelpers.export(exports, "entries", ()=>entries
);
parcelHelpers.export(exports, "keys", ()=>keys
);
var _pcset = require("@tonaljs/pcset");
/**
 * @private
 * Chord List
 * Source: https://en.wikibooks.org/wiki/Music_Theory/Complete_List_of_Chord_Patterns
 * Format: ["intervals", "full name", "abrv1 abrv2"]
 */ const CHORDS = [
    // ==Major==
    [
        "1P 3M 5P",
        "major",
        "M "
    ],
    [
        "1P 3M 5P 7M",
        "major seventh",
        "maj7 Δ ma7 M7 Maj7"
    ],
    [
        "1P 3M 5P 7M 9M",
        "major ninth",
        "maj9 Δ9"
    ],
    [
        "1P 3M 5P 7M 9M 13M",
        "major thirteenth",
        "maj13 Maj13"
    ],
    [
        "1P 3M 5P 6M",
        "sixth",
        "6 add6 add13 M6"
    ],
    [
        "1P 3M 5P 6M 9M",
        "sixth/ninth",
        "6/9 69"
    ],
    [
        "1P 3M 5P 7M 11A",
        "lydian",
        "maj#4 Δ#4 Δ#11"
    ],
    [
        "1P 3M 6m 7M",
        "major seventh b6",
        "M7b6"
    ],
    // ==Minor==
    // '''Normal'''
    [
        "1P 3m 5P",
        "minor",
        "m min -"
    ],
    [
        "1P 3m 5P 7m",
        "minor seventh",
        "m7 min7 mi7 -7"
    ],
    [
        "1P 3m 5P 7M",
        "minor/major seventh",
        "m/ma7 m/maj7 mM7 m/M7 -Δ7 mΔ"
    ],
    [
        "1P 3m 5P 6M",
        "minor sixth",
        "m6"
    ],
    [
        "1P 3m 5P 7m 9M",
        "minor ninth",
        "m9"
    ],
    [
        "1P 3m 5P 7m 9M 11P",
        "minor eleventh",
        "m11"
    ],
    [
        "1P 3m 5P 7m 9M 13M",
        "minor thirteenth",
        "m13"
    ],
    // '''Diminished'''
    [
        "1P 3m 5d",
        "diminished",
        "dim ° o"
    ],
    [
        "1P 3m 5d 7d",
        "diminished seventh",
        "dim7 °7 o7"
    ],
    [
        "1P 3m 5d 7m",
        "half-diminished",
        "m7b5 ø"
    ],
    // ==Dominant/Seventh==
    // '''Normal'''
    [
        "1P 3M 5P 7m",
        "dominant seventh",
        "7 dom"
    ],
    [
        "1P 3M 5P 7m 9M",
        "dominant ninth",
        "9"
    ],
    [
        "1P 3M 5P 7m 9M 13M",
        "dominant thirteenth",
        "13"
    ],
    [
        "1P 3M 5P 7m 11A",
        "lydian dominant seventh",
        "7#11 7#4"
    ],
    // '''Altered'''
    [
        "1P 3M 5P 7m 9m",
        "dominant b9",
        "7b9"
    ],
    [
        "1P 3M 5P 7m 9A",
        "dominant #9",
        "7#9"
    ],
    [
        "1P 3M 7m 9m",
        "altered",
        "alt7"
    ],
    // '''Suspended'''
    [
        "1P 4P 5P",
        "suspended 4th",
        "sus4"
    ],
    [
        "1P 2M 5P",
        "suspended 2nd",
        "sus2"
    ],
    [
        "1P 4P 5P 7m",
        "suspended 4th seventh",
        "7sus4"
    ],
    [
        "1P 5P 7m 9M 11P",
        "eleventh",
        "11 sus Bb/C for C11"
    ],
    [
        "1P 4P 5P 7m 9m",
        "suspended 4th b9",
        "b9sus phryg"
    ],
    // ==Other==
    [
        "1P 5P",
        "fifth",
        "5"
    ],
    [
        "1P 3M 5A",
        "augmented",
        "aug + +5"
    ],
    [
        "1P 3M 5A 7M",
        "augmented seventh",
        "maj7#5 maj7+5"
    ],
    [
        "1P 3M 5P 7M 9M 11A",
        "major #11 (lydian)",
        "maj9#11 Δ9#11"
    ],
    // ==Legacy==
    [
        "1P 2M 4P 5P",
        "",
        "sus24 sus4add9"
    ],
    [
        "1P 3M 13m",
        "",
        "Mb6"
    ],
    [
        "1P 3M 5A 7M 9M",
        "",
        "maj9#5 Maj9#5"
    ],
    [
        "1P 3M 5A 7m",
        "",
        "7#5 +7 7aug aug7"
    ],
    [
        "1P 3M 5A 7m 9A",
        "",
        "7#5#9 7alt 7#5#9_ 7#9b13_"
    ],
    [
        "1P 3M 5A 7m 9M",
        "",
        "9#5 9+"
    ],
    [
        "1P 3M 5A 7m 9M 11A",
        "",
        "9#5#11"
    ],
    [
        "1P 3M 5A 7m 9m",
        "",
        "7#5b9"
    ],
    [
        "1P 3M 5A 7m 9m 11A",
        "",
        "7#5b9#11"
    ],
    [
        "1P 3M 5A 9A",
        "",
        "+add#9"
    ],
    [
        "1P 3M 5A 9M",
        "",
        "M#5add9 +add9"
    ],
    [
        "1P 3M 5P 6M 11A",
        "",
        "M6#11 M6b5 6#11 6b5"
    ],
    [
        "1P 3M 5P 6M 7M 9M",
        "",
        "M7add13"
    ],
    [
        "1P 3M 5P 6M 9M 11A",
        "",
        "69#11"
    ],
    [
        "1P 3M 5P 6m 7m",
        "",
        "7b6"
    ],
    [
        "1P 3M 5P 7M 9A 11A",
        "",
        "maj7#9#11"
    ],
    [
        "1P 3M 5P 7M 9M 11A 13M",
        "",
        "M13#11 maj13#11 M13+4 M13#4"
    ],
    [
        "1P 3M 5P 7M 9m",
        "",
        "M7b9"
    ],
    [
        "1P 3M 5P 7m 11A 13m",
        "",
        "7#11b13 7b5b13"
    ],
    [
        "1P 3M 5P 7m 13M",
        "",
        "7add6 67 7add13"
    ],
    [
        "1P 3M 5P 7m 9A 11A",
        "",
        "7#9#11 7b5#9"
    ],
    [
        "1P 3M 5P 7m 9A 11A 13M",
        "",
        "13#9#11"
    ],
    [
        "1P 3M 5P 7m 9A 11A 13m",
        "",
        "7#9#11b13"
    ],
    [
        "1P 3M 5P 7m 9A 13M",
        "",
        "13#9 13#9_"
    ],
    [
        "1P 3M 5P 7m 9A 13m",
        "",
        "7#9b13"
    ],
    [
        "1P 3M 5P 7m 9M 11A",
        "",
        "9#11 9+4 9#4 9#11_ 9#4_"
    ],
    [
        "1P 3M 5P 7m 9M 11A 13M",
        "",
        "13#11 13+4 13#4"
    ],
    [
        "1P 3M 5P 7m 9M 11A 13m",
        "",
        "9#11b13 9b5b13"
    ],
    [
        "1P 3M 5P 7m 9m 11A",
        "",
        "7b9#11 7b5b9"
    ],
    [
        "1P 3M 5P 7m 9m 11A 13M",
        "",
        "13b9#11"
    ],
    [
        "1P 3M 5P 7m 9m 11A 13m",
        "",
        "7b9b13#11 7b9#11b13 7b5b9b13"
    ],
    [
        "1P 3M 5P 7m 9m 13M",
        "",
        "13b9"
    ],
    [
        "1P 3M 5P 7m 9m 13m",
        "",
        "7b9b13"
    ],
    [
        "1P 3M 5P 7m 9m 9A",
        "",
        "7b9#9"
    ],
    [
        "1P 3M 5P 9M",
        "",
        "Madd9 2 add9 add2"
    ],
    [
        "1P 3M 5P 9m",
        "",
        "Maddb9"
    ],
    [
        "1P 3M 5d",
        "",
        "Mb5"
    ],
    [
        "1P 3M 5d 6M 7m 9M",
        "",
        "13b5"
    ],
    [
        "1P 3M 5d 7M",
        "",
        "M7b5"
    ],
    [
        "1P 3M 5d 7M 9M",
        "",
        "M9b5"
    ],
    [
        "1P 3M 5d 7m",
        "",
        "7b5"
    ],
    [
        "1P 3M 5d 7m 9M",
        "",
        "9b5"
    ],
    [
        "1P 3M 7m",
        "",
        "7no5"
    ],
    [
        "1P 3M 7m 13m",
        "",
        "7b13"
    ],
    [
        "1P 3M 7m 9M",
        "",
        "9no5"
    ],
    [
        "1P 3M 7m 9M 13M",
        "",
        "13no5"
    ],
    [
        "1P 3M 7m 9M 13m",
        "",
        "9b13"
    ],
    [
        "1P 3m 4P 5P",
        "",
        "madd4"
    ],
    [
        "1P 3m 5A",
        "",
        "m#5 m+ mb6"
    ],
    [
        "1P 3m 5P 6M 9M",
        "",
        "m69 _69"
    ],
    [
        "1P 3m 5P 6m 7M",
        "",
        "mMaj7b6"
    ],
    [
        "1P 3m 5P 6m 7M 9M",
        "",
        "mMaj9b6"
    ],
    [
        "1P 3m 5P 7M 9M",
        "",
        "mMaj9 -Maj9"
    ],
    [
        "1P 3m 5P 7m 11P",
        "",
        "m7add11 m7add4"
    ],
    [
        "1P 3m 5P 9M",
        "",
        "madd9"
    ],
    [
        "1P 3m 5d 6M 7M",
        "",
        "o7M7"
    ],
    [
        "1P 3m 5d 7M",
        "",
        "oM7"
    ],
    [
        "1P 3m 5d 7m",
        "",
        "m7b5 half-diminished h7 _7b5"
    ],
    [
        "1P 3m 6m 7M",
        "",
        "mb6M7"
    ],
    [
        "1P 3m 6m 7m",
        "",
        "m7#5"
    ],
    [
        "1P 3m 6m 7m 9M",
        "",
        "m9#5"
    ],
    [
        "1P 3m 6m 7m 9M 11P",
        "",
        "m11A"
    ],
    [
        "1P 3m 6m 9m",
        "",
        "mb6b9"
    ],
    [
        "1P 3m 7m 12d 2M",
        "",
        "m9b5 h9 -9b5"
    ],
    [
        "1P 3m 7m 12d 2M 4P",
        "",
        "m11b5 h11 _11b5"
    ],
    [
        "1P 4P 5A 7M",
        "",
        "M7#5sus4"
    ],
    [
        "1P 4P 5A 7M 9M",
        "",
        "M9#5sus4"
    ],
    [
        "1P 4P 5A 7m",
        "",
        "7#5sus4"
    ],
    [
        "1P 4P 5P 7M",
        "",
        "M7sus4"
    ],
    [
        "1P 4P 5P 7M 9M",
        "",
        "M9sus4"
    ],
    [
        "1P 4P 5P 7m 9M",
        "",
        "9sus4 9sus"
    ],
    [
        "1P 4P 5P 7m 9M 13M",
        "",
        "13sus4 13sus"
    ],
    [
        "1P 4P 5P 7m 9m 13m",
        "",
        "7sus4b9b13 7b9b13sus4"
    ],
    [
        "1P 4P 7m 10m",
        "",
        "4 quartal"
    ],
    [
        "1P 5P 7m 9m 11P",
        "",
        "11b9"
    ]
];
const NoChordType = {
    ..._pcset.EmptyPcset,
    name: "",
    quality: "Unknown",
    intervals: [],
    aliases: []
};
let chords = [];
let index = {
};
/**
 * Given a chord name or chroma, return the chord properties
 * @param {string} source - chord name or pitch class set chroma
 * @example
 * import { chord } from 'tonaljs/chord-dictionary'
 * chord('major')
 */ function chordType(type) {
    return index[type] || NoChordType;
}
/**
 * Keys used to reference chord types
 */ function keys() {
    return Object.keys(index);
}
/**
 * Return a list of all chord types
 */ function entries() {
    return chords.slice();
}
/**
 * Clear the dictionary
 */ function clear() {
    chords = [];
    index = {
    };
}
/**
 * Add a chord to the dictionary.
 * @param intervals
 * @param aliases
 * @param [fullName]
 */ function add(intervals, aliases, fullName) {
    const quality = getQuality(intervals);
    const chord = {
        ..._pcset.pcset(intervals),
        name: fullName || "",
        quality,
        intervals,
        aliases
    };
    chords.push(chord);
    if (chord.name) index[chord.name] = chord;
    index[chord.setNum] = chord;
    index[chord.chroma] = chord;
    chord.aliases.forEach((alias)=>addAlias(chord, alias)
    );
}
function addAlias(chord, alias) {
    index[alias] = chord;
}
function getQuality(intervals) {
    const has = (interval)=>intervals.indexOf(interval) !== -1
    ;
    return has("5A") ? "Augmented" : has("3M") ? "Major" : has("5d") ? "Diminished" : has("3m") ? "Minor" : "Unknown";
}
CHORDS.forEach(([ivls, fullName, names])=>add(ivls.split(" "), names.split(" "), fullName)
);
chords.sort((a, b)=>a.setNum - b.setNum
);

},{"@tonaljs/pcset":"h5EjG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h5EjG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmptyPcset", ()=>EmptyPcset
);
parcelHelpers.export(exports, "chromaToIntervals", ()=>chromaToIntervals
);
parcelHelpers.export(exports, "chromas", ()=>chromas
);
parcelHelpers.export(exports, "filter", ()=>filter
);
parcelHelpers.export(exports, "includes", ()=>includes
);
parcelHelpers.export(exports, "isEqual", ()=>isEqual
);
parcelHelpers.export(exports, "isNoteIncludedInSet", ()=>isNoteIncludedInSet
);
parcelHelpers.export(exports, "isSubsetOf", ()=>isSubsetOf
);
parcelHelpers.export(exports, "isSupersetOf", ()=>isSupersetOf
);
parcelHelpers.export(exports, "modes", ()=>modes
);
parcelHelpers.export(exports, "pcset", ()=>pcset
);
var _array = require("@tonaljs/array");
var _tonal = require("@tonaljs/tonal");
const EmptyPcset = {
    empty: true,
    name: "",
    setNum: 0,
    chroma: "000000000000",
    normalized: "000000000000",
    intervals: []
};
// UTILITIES
const setNumToChroma = (num)=>Number(num).toString(2)
;
const chromaToNumber = (chroma)=>parseInt(chroma, 2)
;
const REGEX = /^[01]{12}$/;
function isChroma(set) {
    return REGEX.test(set);
}
const isPcsetNum = (set)=>typeof set === "number" && set >= 0 && set <= 4095
;
const isPcset = (set)=>set && isChroma(set.chroma)
;
const cache = {
    [EmptyPcset.chroma]: EmptyPcset
};
/**
 * Get the pitch class set of a collection of notes or set number or chroma
 */ function pcset(src) {
    const chroma = isChroma(src) ? src : isPcsetNum(src) ? setNumToChroma(src) : Array.isArray(src) ? listToChroma(src) : isPcset(src) ? src.chroma : EmptyPcset.chroma;
    return cache[chroma] = cache[chroma] || chromaToPcset(chroma);
}
const IVLS = "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M".split(" ");
/**
 * @private
 * Get the intervals of a pcset *starting from C*
 * @param {Set} set - the pitch class set
 * @return {IntervalName[]} an array of interval names or an empty array
 * if not a valid pitch class set
 */ function chromaToIntervals(chroma) {
    const intervals = [];
    for(let i = 0; i < 12; i++)// tslint:disable-next-line:curly
    if (chroma.charAt(i) === "1") intervals.push(IVLS[i]);
    return intervals;
}
let all;
/**
 * Get a list of all possible pitch class sets (all possible chromas) *having
 * C as root*. There are 2048 different chromas. If you want them with another
 * note you have to transpose it
 *
 * @see http://allthescales.org/
 * @return {Array<PcsetChroma>} an array of possible chromas from '10000000000' to '11111111111'
 */ function chromas() {
    all = all || _array.range(2048, 4095).map(setNumToChroma);
    return all.slice();
}
/**
 * Given a a list of notes or a pcset chroma, produce the rotations
 * of the chroma discarding the ones that starts with "0"
 *
 * This is used, for example, to get all the modes of a scale.
 *
 * @param {Array|string} set - the list of notes or pitchChr of the set
 * @param {boolean} normalize - (Optional, true by default) remove all
 * the rotations that starts with "0"
 * @return {Array<string>} an array with all the modes of the chroma
 *
 * @example
 * Pcset.modes(["C", "D", "E"]).map(Pcset.intervals)
 */ function modes(set, normalize = true) {
    const pcs = pcset(set);
    const binary = pcs.chroma.split("");
    return _array.compact(binary.map((_, i)=>{
        const r = _array.rotate(i, binary);
        return normalize && r[0] === "0" ? null : r.join("");
    }));
}
/**
 * Test if two pitch class sets are numentical
 *
 * @param {Array|string} set1 - one of the pitch class sets
 * @param {Array|string} set2 - the other pitch class set
 * @return {boolean} true if they are equal
 * @example
 * Pcset.isEqual(["c2", "d3"], ["c5", "d2"]) // => true
 */ function isEqual(s1, s2) {
    return pcset(s1).setNum === pcset(s2).setNum;
}
/**
 * Create a function that test if a collection of notes is a
 * subset of a given set
 *
 * The function is curryfied.
 *
 * @param {PcsetChroma|NoteName[]} set - the superset to test against (chroma or
 * list of notes)
 * @return{function(PcsetChroma|NoteNames[]): boolean} a function accepting a set
 * to test against (chroma or list of notes)
 * @example
 * const inCMajor = Pcset.isSubsetOf(["C", "E", "G"])
 * inCMajor(["e6", "c4"]) // => true
 * inCMajor(["e6", "c4", "d3"]) // => false
 */ function isSubsetOf(set) {
    const s = pcset(set).setNum;
    return (notes)=>{
        const o = pcset(notes).setNum;
        // tslint:disable-next-line: no-bitwise
        return s && s !== o && (o & s) === o;
    };
}
/**
 * Create a function that test if a collection of notes is a
 * superset of a given set (it contains all notes and at least one more)
 *
 * @param {Set} set - an array of notes or a chroma set string to test against
 * @return {(subset: Set): boolean} a function that given a set
 * returns true if is a subset of the first one
 * @example
 * const extendsCMajor = Pcset.isSupersetOf(["C", "E", "G"])
 * extendsCMajor(["e6", "a", "c4", "g2"]) // => true
 * extendsCMajor(["c6", "e4", "g3"]) // => false
 */ function isSupersetOf(set) {
    const s = pcset(set).setNum;
    return (notes)=>{
        const o = pcset(notes).setNum;
        // tslint:disable-next-line: no-bitwise
        return s && s !== o && (o | s) === o;
    };
}
/**
 * Test if a given pitch class set includes a note
 *
 * @param {Array<string>} set - the base set to test against
 * @param {string} note - the note to test
 * @return {boolean} true if the note is included in the pcset
 *
 * Can be partially applied
 *
 * @example
 * const isNoteInCMajor = isNoteIncludedInSet(['C', 'E', 'G'])
 * isNoteInCMajor('C4') // => true
 * isNoteInCMajor('C#4') // => false
 */ function isNoteIncludedInSet(set) {
    const s = pcset(set);
    return (noteName)=>{
        const n = _tonal.note(noteName);
        return s && !n.empty && s.chroma.charAt(n.chroma) === "1";
    };
}
/** @deprecated use: isNoteIncludedIn */ const includes = isNoteIncludedInSet;
/**
 * Filter a list with a pitch class set
 *
 * @param {Array|string} set - the pitch class set notes
 * @param {Array|string} notes - the note list to be filtered
 * @return {Array} the filtered notes
 *
 * @example
 * Pcset.filter(["C", "D", "E"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "d2", "c3", "d3" ])
 * Pcset.filter(["C2"], ["c2", "c#2", "d2", "c3", "c#3", "d3"]) // => [ "c2", "c3" ])
 */ function filter(set) {
    const isIncluded = isNoteIncludedInSet(set);
    return (notes)=>{
        return notes.filter(isIncluded);
    };
}
// PRIVATE //
function chromaRotations(chroma) {
    const binary = chroma.split("");
    return binary.map((_, i)=>_array.rotate(i, binary).join("")
    );
}
function chromaToPcset(chroma) {
    const setNum = chromaToNumber(chroma);
    const normalizedNum = chromaRotations(chroma).map(chromaToNumber).filter((n)=>n >= 2048
    ).sort()[0];
    const normalized = setNumToChroma(normalizedNum);
    const intervals = chromaToIntervals(chroma);
    return {
        empty: false,
        name: "",
        setNum,
        chroma,
        normalized,
        intervals
    };
}
function listToChroma(set) {
    if (set.length === 0) return EmptyPcset.chroma;
    let pitch;
    const binary = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    // tslint:disable-next-line:prefer-for-of
    for(let i = 0; i < set.length; i++){
        pitch = _tonal.note(set[i]);
        // tslint:disable-next-line: curly
        if (pitch.empty) pitch = _tonal.interval(set[i]);
        // tslint:disable-next-line: curly
        if (!pitch.empty) binary[pitch.chroma] = 1;
    }
    return binary.join("");
}

},{"@tonaljs/array":"6vPtg","@tonaljs/tonal":"43Fcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6vPtg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compact", ()=>compact
);
parcelHelpers.export(exports, "permutations", ()=>permutations
);
parcelHelpers.export(exports, "range", ()=>range
);
parcelHelpers.export(exports, "rotate", ()=>rotate
);
parcelHelpers.export(exports, "shuffle", ()=>shuffle
);
parcelHelpers.export(exports, "sortedNoteNames", ()=>sortedNoteNames
);
parcelHelpers.export(exports, "sortedUniqNoteNames", ()=>sortedUniqNoteNames
);
var _tonal = require("@tonaljs/tonal");
// ascending range
function ascR(b, n) {
    const a = [];
    // tslint:disable-next-line:curly
    for(; n--; a[n] = n + b);
    return a;
}
// descending range
function descR(b, n) {
    const a = [];
    // tslint:disable-next-line:curly
    for(; n--; a[n] = b - n);
    return a;
}
/**
 * Creates a numeric range
 *
 * @param {number} from
 * @param {number} to
 * @return {Array<number>}
 *
 * @example
 * range(-2, 2) // => [-2, -1, 0, 1, 2]
 * range(2, -2) // => [2, 1, 0, -1, -2]
 */ function range(from, to) {
    return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
/**
 * Rotates a list a number of times. It"s completly agnostic about the
 * contents of the list.
 *
 * @param {Integer} times - the number of rotations
 * @param {Array} array
 * @return {Array} the rotated array
 *
 * @example
 * rotate(1, [1, 2, 3]) // => [2, 3, 1]
 */ function rotate(times, arr) {
    const len = arr.length;
    const n = (times % len + len) % len;
    return arr.slice(n, len).concat(arr.slice(0, n));
}
/**
 * Return a copy of the array with the null values removed
 * @function
 * @param {Array} array
 * @return {Array}
 *
 * @example
 * compact(["a", "b", null, "c"]) // => ["a", "b", "c"]
 */ function compact(arr) {
    return arr.filter((n)=>n === 0 || n
    );
}
/**
 * Sort an array of notes in ascending order. Pitch classes are listed
 * before notes. Any string that is not a note is removed.
 *
 * @param {string[]} notes
 * @return {string[]} sorted array of notes
 *
 * @example
 * sortedNoteNames(['c2', 'c5', 'c1', 'c0', 'c6', 'c'])
 * // => ['C', 'C0', 'C1', 'C2', 'C5', 'C6']
 * sortedNoteNames(['c', 'F', 'G', 'a', 'b', 'h', 'J'])
 * // => ['C', 'F', 'G', 'A', 'B']
 */ function sortedNoteNames(notes) {
    const valid = notes.map((n)=>_tonal.note(n)
    ).filter((n)=>!n.empty
    );
    return valid.sort((a, b)=>a.height - b.height
    ).map((n)=>n.name
    );
}
/**
 * Get sorted notes with duplicates removed. Pitch classes are listed
 * before notes.
 *
 * @function
 * @param {string[]} array
 * @return {string[]} unique sorted notes
 *
 * @example
 * Array.sortedUniqNoteNames(['a', 'b', 'c2', '1p', 'p2', 'c2', 'b', 'c', 'c3' ])
 * // => [ 'C', 'A', 'B', 'C2', 'C3' ]
 */ function sortedUniqNoteNames(arr) {
    return sortedNoteNames(arr).filter((n, i, a)=>i === 0 || n !== a[i - 1]
    );
}
/**
 * Randomizes the order of the specified array in-place, using the Fisher–Yates shuffle.
 *
 * @function
 * @param {Array} array
 * @return {Array} the array shuffled
 *
 * @example
 * shuffle(["C", "D", "E", "F"]) // => [...]
 */ function shuffle(arr, rnd = Math.random) {
    let i;
    let t;
    let m = arr.length;
    while(m){
        i = Math.floor(rnd() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}
/**
 * Get all permutations of an array
 *
 * @param {Array} array - the array
 * @return {Array<Array>} an array with all the permutations
 * @example
 * permutations(["a", "b", "c"])) // =>
 * [
 *   ["a", "b", "c"],
 *   ["b", "a", "c"],
 *   ["b", "c", "a"],
 *   ["a", "c", "b"],
 *   ["c", "a", "b"],
 *   ["c", "b", "a"]
 * ]
 */ function permutations(arr) {
    if (arr.length === 0) return [
        []
    ];
    return permutations(arr.slice(1)).reduce((acc, perm)=>{
        return acc.concat(arr.map((e, pos)=>{
            const newPerm = perm.slice();
            newPerm.splice(pos, 0, arr[0]);
            return newPerm;
        }));
    }, []);
}

},{"@tonaljs/tonal":"43Fcx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4IQ1s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoScaleType", ()=>NoScaleType
);
parcelHelpers.export(exports, "add", ()=>add
);
parcelHelpers.export(exports, "addAlias", ()=>addAlias
);
parcelHelpers.export(exports, "clear", ()=>clear
);
parcelHelpers.export(exports, "entries", ()=>entries
);
parcelHelpers.export(exports, "keys", ()=>keys
);
parcelHelpers.export(exports, "scaleType", ()=>scaleType
);
var _pcset = require("@tonaljs/pcset");
// SCALES
// Format: ["intervals", "name", "alias1", "alias2", ...]
const SCALES = [
    // 5-note scales
    [
        "1P 2M 3M 5P 6M",
        "major pentatonic",
        "pentatonic"
    ],
    [
        "1P 3M 4P 5P 7M",
        "ionian pentatonic"
    ],
    [
        "1P 3M 4P 5P 7m",
        "mixolydian pentatonic",
        "indian"
    ],
    [
        "1P 2M 4P 5P 6M",
        "ritusen"
    ],
    [
        "1P 2M 4P 5P 7m",
        "egyptian"
    ],
    [
        "1P 3M 4P 5d 7m",
        "neopolitan major pentatonic"
    ],
    [
        "1P 3m 4P 5P 6m",
        "vietnamese 1"
    ],
    [
        "1P 2m 3m 5P 6m",
        "pelog"
    ],
    [
        "1P 2m 4P 5P 6m",
        "kumoijoshi"
    ],
    [
        "1P 2M 3m 5P 6m",
        "hirajoshi"
    ],
    [
        "1P 2m 4P 5d 7m",
        "iwato"
    ],
    [
        "1P 2m 4P 5P 7m",
        "in-sen"
    ],
    [
        "1P 3M 4A 5P 7M",
        "lydian pentatonic",
        "chinese"
    ],
    [
        "1P 3m 4P 6m 7m",
        "malkos raga"
    ],
    [
        "1P 3m 4P 5d 7m",
        "locrian pentatonic",
        "minor seven flat five pentatonic"
    ],
    [
        "1P 3m 4P 5P 7m",
        "minor pentatonic",
        "vietnamese 2"
    ],
    [
        "1P 3m 4P 5P 6M",
        "minor six pentatonic"
    ],
    [
        "1P 2M 3m 5P 6M",
        "flat three pentatonic",
        "kumoi"
    ],
    [
        "1P 2M 3M 5P 6m",
        "flat six pentatonic"
    ],
    [
        "1P 2m 3M 5P 6M",
        "scriabin"
    ],
    [
        "1P 3M 5d 6m 7m",
        "whole tone pentatonic"
    ],
    [
        "1P 3M 4A 5A 7M",
        "lydian #5P pentatonic"
    ],
    [
        "1P 3M 4A 5P 7m",
        "lydian dominant pentatonic"
    ],
    [
        "1P 3m 4P 5P 7M",
        "minor #7M pentatonic"
    ],
    [
        "1P 3m 4d 5d 7m",
        "super locrian pentatonic"
    ],
    // 6-note scales
    [
        "1P 2M 3m 4P 5P 7M",
        "minor hexatonic"
    ],
    [
        "1P 2A 3M 5P 5A 7M",
        "augmented"
    ],
    [
        "1P 3m 4P 5d 5P 7m",
        "minor blues",
        "blues"
    ],
    [
        "1P 2M 3m 3M 5P 6M",
        "major blues"
    ],
    [
        "1P 2M 4P 5P 6M 7m",
        "piongio"
    ],
    [
        "1P 2m 3M 4A 6M 7m",
        "prometheus neopolitan"
    ],
    [
        "1P 2M 3M 4A 6M 7m",
        "prometheus"
    ],
    [
        "1P 2m 3M 5d 6m 7m",
        "mystery #1"
    ],
    [
        "1P 2m 3M 4P 5A 6M",
        "six tone symmetric"
    ],
    [
        "1P 2M 3M 4A 5A 7m",
        "whole tone"
    ],
    // 7-note scales
    [
        "1P 2M 3M 4P 5d 6m 7m",
        "locrian major",
        "arabian"
    ],
    [
        "1P 2m 3M 4A 5P 6m 7M",
        "double harmonic lydian"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7M",
        "harmonic minor"
    ],
    [
        "1P 2m 3m 3M 5d 6m 7m",
        "altered",
        "super locrian",
        "diminished whole tone",
        "pomeroy"
    ],
    [
        "1P 2M 3m 4P 5d 6m 7m",
        "locrian #2",
        "half-diminished",
        '"aeolian b5'
    ],
    [
        "1P 2M 3M 4P 5P 6m 7m",
        "mixolydian b6",
        "melodic minor fifth mode",
        "hindu"
    ],
    [
        "1P 2M 3M 4A 5P 6M 7m",
        "lydian dominant",
        "lydian b7",
        "overtone"
    ],
    [
        "1P 2M 3M 4A 5P 6M 7M",
        "lydian"
    ],
    [
        "1P 2M 3M 4A 5A 6M 7M",
        "lydian augmented"
    ],
    [
        "1P 2m 3m 4P 5P 6M 7m",
        "dorian b2",
        "phrygian #6",
        "melodic minor second mode"
    ],
    [
        "1P 2M 3m 4P 5P 6M 7M",
        "melodic minor"
    ],
    [
        "1P 2m 3m 4P 5d 6m 7m",
        "locrian"
    ],
    [
        "1P 2m 3m 4d 5d 6m 7d",
        "ultralocrian",
        "superlocrian bb7",
        "·superlocrian diminished"
    ],
    [
        "1P 2m 3m 4P 5d 6M 7m",
        "locrian 6",
        "locrian natural 6",
        "locrian sharp 6"
    ],
    [
        "1P 2A 3M 4P 5P 5A 7M",
        "augmented heptatonic"
    ],
    [
        "1P 2M 3m 5d 5P 6M 7m",
        "romanian minor"
    ],
    [
        "1P 2M 3m 4A 5P 6M 7m",
        "dorian #4"
    ],
    [
        "1P 2M 3m 4A 5P 6M 7M",
        "lydian diminished"
    ],
    [
        "1P 2m 3m 4P 5P 6m 7m",
        "phrygian"
    ],
    [
        "1P 2M 3M 4A 5A 7m 7M",
        "leading whole tone"
    ],
    [
        "1P 2M 3M 4A 5P 6m 7m",
        "lydian minor"
    ],
    [
        "1P 2m 3M 4P 5P 6m 7m",
        "phrygian dominant",
        "spanish",
        "phrygian major"
    ],
    [
        "1P 2m 3m 4P 5P 6m 7M",
        "balinese"
    ],
    [
        "1P 2m 3m 4P 5P 6M 7M",
        "neopolitan major",
        "dorian b2"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7m",
        "aeolian",
        "minor"
    ],
    [
        "1P 2M 3M 4P 5P 6m 7M",
        "harmonic major"
    ],
    [
        "1P 2m 3M 4P 5P 6m 7M",
        "double harmonic major",
        "gypsy"
    ],
    [
        "1P 2M 3m 4P 5P 6M 7m",
        "dorian"
    ],
    [
        "1P 2M 3m 4A 5P 6m 7M",
        "hungarian minor"
    ],
    [
        "1P 2A 3M 4A 5P 6M 7m",
        "hungarian major"
    ],
    [
        "1P 2m 3M 4P 5d 6M 7m",
        "oriental"
    ],
    [
        "1P 2m 3m 3M 4A 5P 7m",
        "flamenco"
    ],
    [
        "1P 2m 3m 4A 5P 6m 7M",
        "todi raga"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7m",
        "mixolydian",
        "dominant"
    ],
    [
        "1P 2m 3M 4P 5d 6m 7M",
        "persian"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7M",
        "major",
        "ionian"
    ],
    [
        "1P 2m 3M 5d 6m 7m 7M",
        "enigmatic"
    ],
    [
        "1P 2M 3M 4P 5A 6M 7M",
        "major augmented",
        "major #5",
        "ionian augmented",
        "ionian #5"
    ],
    [
        "1P 2A 3M 4A 5P 6M 7M",
        "lydian #9"
    ],
    // 8-note scales
    [
        "1P 2m 3M 4P 4A 5P 6m 7M",
        "purvi raga"
    ],
    [
        "1P 2m 3m 3M 4P 5P 6m 7m",
        "spanish heptatonic"
    ],
    [
        "1P 2M 3M 4P 5P 6M 7m 7M",
        "bebop"
    ],
    [
        "1P 2M 3m 3M 4P 5P 6M 7m",
        "bebop minor"
    ],
    [
        "1P 2M 3M 4P 5P 5A 6M 7M",
        "bebop major"
    ],
    [
        "1P 2m 3m 4P 5d 5P 6m 7m",
        "bebop locrian"
    ],
    [
        "1P 2M 3m 4P 5P 6m 7m 7M",
        "minor bebop"
    ],
    [
        "1P 2M 3m 4P 5d 6m 6M 7M",
        "diminished",
        "whole-half diminished"
    ],
    [
        "1P 2M 3M 4P 5d 5P 6M 7M",
        "ichikosucho"
    ],
    [
        "1P 2M 3m 4P 5P 6m 6M 7M",
        "minor six diminished"
    ],
    [
        "1P 2m 3m 3M 4A 5P 6M 7m",
        "half-whole diminished",
        "dominant diminished"
    ],
    [
        "1P 3m 3M 4P 5P 6M 7m 7M",
        "kafi raga"
    ],
    // 9-note scales
    [
        "1P 2M 3m 3M 4P 5d 5P 6M 7m",
        "composite blues"
    ],
    // 12-note scales
    [
        "1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M",
        "chromatic"
    ]
];
const NoScaleType = {
    ..._pcset.EmptyPcset,
    intervals: [],
    aliases: []
};
let scales = [];
let index = {
};
/**
 * Given a scale name or chroma, return the scale properties
 * @param {string} type - scale name or pitch class set chroma
 * @example
 * import { scale } from 'tonaljs/scale-dictionary'
 * scale('major')
 */ function scaleType(type) {
    return index[type] || NoScaleType;
}
/**
 * Return a list of all scale types
 */ function entries() {
    return scales.slice();
}
/**
 * Keys used to reference scale types
 */ function keys() {
    return Object.keys(index);
}
/**
 * Clear the dictionary
 */ function clear() {
    scales = [];
    index = {
    };
}
/**
 * Add a scale into dictionary
 * @param intervals
 * @param name
 * @param aliases
 */ function add(intervals, name, aliases = []) {
    const scale = {
        ..._pcset.pcset(intervals),
        name,
        intervals,
        aliases
    };
    scales.push(scale);
    index[scale.name] = scale;
    index[scale.setNum] = scale;
    index[scale.chroma] = scale;
    scale.aliases.forEach((alias)=>addAlias(scale, alias)
    );
    return scale;
}
function addAlias(scale, alias) {
    index[alias] = scale;
}
SCALES.forEach(([ivls, name, ...aliases])=>add(ivls.split(" "), name, aliases)
);

},{"@tonaljs/pcset":"h5EjG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Vjgk":[function(require,module,exports) {
var global = arguments[3];
/*!
 *  howler.js v2.1.3
 *  howlerjs.com
 *
 *  (c) 2013-2019, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (function() {
    /** Global Methods **/ /***************************************************************************/ /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */ var HowlerGlobal = function() {
        this.init();
    };
    HowlerGlobal.prototype = {
        /**
     * Initialize the global Howler object.
     * @return {Howler}
     */ init: function() {
            var self = this || Howler;
            // Create a global ID counter.
            self._counter = 1000;
            // Pool of unlocked HTML5 Audio objects.
            self._html5AudioPool = [];
            self.html5PoolSize = 10;
            // Internal properties.
            self._codecs = {
            };
            self._howls = [];
            self._muted = false;
            self._volume = 1;
            self._canPlayEvent = 'canplaythrough';
            self._navigator = typeof window !== 'undefined' && window.navigator ? window.navigator : null;
            // Public properties.
            self.masterGain = null;
            self.noAudio = false;
            self.usingWebAudio = true;
            self.autoSuspend = true;
            self.ctx = null;
            // Set to false to disable the auto audio unlocker.
            self.autoUnlock = true;
            // Setup the various state values for global tracking.
            self._setup();
            return self;
        },
        /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */ volume: function(vol) {
            var self = this || Howler;
            vol = parseFloat(vol);
            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) setupAudioContext();
            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                self._volume = vol;
                // Don't update any of the nodes if we are muted.
                if (self._muted) return self;
                // When using Web Audio, we just need to adjust the master gain.
                if (self.usingWebAudio) self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                // Loop through and change volume for all HTML5 audio nodes.
                for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i]._getSoundIds();
                    // Loop through all sounds and change the volumes.
                    for(var j = 0; j < ids.length; j++){
                        var sound = self._howls[i]._soundById(ids[j]);
                        if (sound && sound._node) sound._node.volume = sound._volume * vol;
                    }
                }
                return self;
            }
            return self._volume;
        },
        /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */ mute: function(muted) {
            var self = this || Howler;
            // If we don't have an AudioContext created yet, run the setup.
            if (!self.ctx) setupAudioContext();
            self._muted = muted;
            // With Web Audio, we just need to mute the master gain.
            if (self.usingWebAudio) self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
            // Loop through and mute all HTML5 Audio nodes.
            for(var i = 0; i < self._howls.length; i++)if (!self._howls[i]._webAudio) {
                // Get all of the sounds in this Howl group.
                var ids = self._howls[i]._getSoundIds();
                // Loop through all sounds and mark the audio node as muted.
                for(var j = 0; j < ids.length; j++){
                    var sound = self._howls[i]._soundById(ids[j]);
                    if (sound && sound._node) sound._node.muted = muted ? true : sound._muted;
                }
            }
            return self;
        },
        /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */ unload: function() {
            var self = this || Howler;
            for(var i = self._howls.length - 1; i >= 0; i--)self._howls[i].unload();
            // Create a new AudioContext to make sure it is fully reset.
            if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
                self.ctx.close();
                self.ctx = null;
                setupAudioContext();
            }
            return self;
        },
        /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */ codecs: function(ext) {
            return (this || Howler)._codecs[ext.replace(/^x-/, '')];
        },
        /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */ _setup: function() {
            var self = this || Howler;
            // Keeps track of the suspend/resume state of the AudioContext.
            self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';
            // Automatically begin the 30-second suspend process
            self._autoSuspend();
            // Check if audio is available.
            if (!self.usingWebAudio) {
                // No audio is available on this system if noAudio is set to true.
                if (typeof Audio !== 'undefined') try {
                    var test = new Audio();
                    // Check if the canplaythrough event is available.
                    if (typeof test.oncanplaythrough === 'undefined') self._canPlayEvent = 'canplay';
                } catch (e) {
                    self.noAudio = true;
                }
                else self.noAudio = true;
            }
            // Test to make sure audio isn't disabled in Internet Explorer.
            try {
                var test = new Audio();
                if (test.muted) self.noAudio = true;
            } catch (e) {
            }
            // Check for supported codecs.
            if (!self.noAudio) self._setupCodecs();
            return self;
        },
        /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */ _setupCodecs: function() {
            var self = this || Howler;
            var audioTest = null;
            // Must wrap in a try/catch because IE11 in server mode throws an error.
            try {
                audioTest = typeof Audio !== 'undefined' ? new Audio() : null;
            } catch (err) {
                return self;
            }
            if (!audioTest || typeof audioTest.canPlayType !== 'function') return self;
            var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');
            // Opera version <33 has mixed MP3 support, so we need to check for and block it.
            var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
            var isOldOpera = checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33;
            self._codecs = {
                mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
                mpeg: !!mpegTest,
                opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
                aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
                caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
                weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
                flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
            };
            return self;
        },
        /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */ _unlockAudio: function() {
            var self = this || Howler;
            // Only run this if Web Audio is supported and it hasn't already been unlocked.
            if (self._audioUnlocked || !self.ctx) return;
            self._audioUnlocked = false;
            self.autoUnlock = false;
            // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
            // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
            // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
            if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
                self._mobileUnloaded = true;
                self.unload();
            }
            // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
            // http://stackoverflow.com/questions/24119684
            self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
            // Call this method on touch start to create and play a buffer,
            // then check if the audio actually played to determine if
            // audio has now been unlocked on iOS, Android, etc.
            var unlock = function(e) {
                // Create a pool of unlocked HTML5 Audio objects that can
                // be used for playing sounds without user interaction. HTML5
                // Audio objects must be individually unlocked, as opposed
                // to the WebAudio API which only needs a single activation.
                // This must occur before WebAudio setup or the source.onended
                // event will not fire.
                for(var i1 = 0; i1 < self.html5PoolSize; i1++)try {
                    var audioNode = new Audio();
                    // Mark this Audio object as unlocked to ensure it can get returned
                    // to the unlocked pool when released.
                    audioNode._unlocked = true;
                    // Add the audio node to the pool.
                    self._releaseHtml5Audio(audioNode);
                } catch (e1) {
                    self.noAudio = true;
                }
                // Loop through any assigned audio nodes and unlock them.
                for(var i1 = 0; i1 < self._howls.length; i1++)if (!self._howls[i1]._webAudio) {
                    // Get all of the sounds in this Howl group.
                    var ids = self._howls[i1]._getSoundIds();
                    // Loop through all sounds and unlock the audio nodes.
                    for(var j = 0; j < ids.length; j++){
                        var sound = self._howls[i1]._soundById(ids[j]);
                        if (sound && sound._node && !sound._node._unlocked) {
                            sound._node._unlocked = true;
                            sound._node.load();
                        }
                    }
                }
                // Fix Android can not play in suspend state.
                self._autoResume();
                // Create an empty buffer.
                var source = self.ctx.createBufferSource();
                source.buffer = self._scratchBuffer;
                source.connect(self.ctx.destination);
                // Play the empty buffer.
                if (typeof source.start === 'undefined') source.noteOn(0);
                else source.start(0);
                // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
                if (typeof self.ctx.resume === 'function') self.ctx.resume();
                // Setup a timeout to check that we are unlocked on the next event loop.
                source.onended = function() {
                    source.disconnect(0);
                    // Update the unlocked state and prevent this check from happening again.
                    self._audioUnlocked = true;
                    // Remove the touch start listener.
                    document.removeEventListener('touchstart', unlock, true);
                    document.removeEventListener('touchend', unlock, true);
                    document.removeEventListener('click', unlock, true);
                    // Let all sounds know that audio has been unlocked.
                    for(var i = 0; i < self._howls.length; i++)self._howls[i]._emit('unlock');
                };
            };
            // Setup a touch start listener to attempt an unlock in.
            document.addEventListener('touchstart', unlock, true);
            document.addEventListener('touchend', unlock, true);
            document.addEventListener('click', unlock, true);
            return self;
        },
        /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */ _obtainHtml5Audio: function() {
            var self = this || Howler;
            // Return the next object from the pool if one exists.
            if (self._html5AudioPool.length) return self._html5AudioPool.pop();
            //.Check if the audio is locked and throw a warning.
            var testPlay = new Audio().play();
            if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) testPlay.catch(function() {
                console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
            });
            return new Audio();
        },
        /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */ _releaseHtml5Audio: function(audio) {
            var self = this || Howler;
            // Don't add audio to the pool if we don't know if it has been unlocked.
            if (audio._unlocked) self._html5AudioPool.push(audio);
            return self;
        },
        /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */ _autoSuspend: function() {
            var self = this;
            if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) return;
            // Check if any sounds are playing.
            for(var i = 0; i < self._howls.length; i++){
                if (self._howls[i]._webAudio) for(var j = 0; j < self._howls[i]._sounds.length; j++){
                    if (!self._howls[i]._sounds[j]._paused) return self;
                }
            }
            if (self._suspendTimer) clearTimeout(self._suspendTimer);
            // If no sound has played after 30 seconds, suspend the context.
            self._suspendTimer = setTimeout(function() {
                if (!self.autoSuspend) return;
                self._suspendTimer = null;
                self.state = 'suspending';
                self.ctx.suspend().then(function() {
                    self.state = 'suspended';
                    if (self._resumeAfterSuspend) {
                        delete self._resumeAfterSuspend;
                        self._autoResume();
                    }
                });
            }, 30000);
            return self;
        },
        /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */ _autoResume: function() {
            var self = this;
            if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) return;
            if (self.state === 'running' && self._suspendTimer) {
                clearTimeout(self._suspendTimer);
                self._suspendTimer = null;
            } else if (self.state === 'suspended') {
                self.ctx.resume().then(function() {
                    self.state = 'running';
                    // Emit to all Howls that the audio has resumed.
                    for(var i = 0; i < self._howls.length; i++)self._howls[i]._emit('resume');
                });
                if (self._suspendTimer) {
                    clearTimeout(self._suspendTimer);
                    self._suspendTimer = null;
                }
            } else if (self.state === 'suspending') self._resumeAfterSuspend = true;
            return self;
        }
    };
    // Setup the global audio controller.
    var Howler = new HowlerGlobal();
    /** Group Methods **/ /***************************************************************************/ /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */ var Howl = function(o) {
        var self = this;
        // Throw an error if no source is provided.
        if (!o.src || o.src.length === 0) {
            console.error('An array of source files must be passed with any new Howl.');
            return;
        }
        self.init(o);
    };
    Howl.prototype = {
        /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */ init: function(o) {
            var self = this;
            // If we don't have an AudioContext created yet, run the setup.
            if (!Howler.ctx) setupAudioContext();
            // Setup user-defined default properties.
            self._autoplay = o.autoplay || false;
            self._format = typeof o.format !== 'string' ? o.format : [
                o.format
            ];
            self._html5 = o.html5 || false;
            self._muted = o.mute || false;
            self._loop = o.loop || false;
            self._pool = o.pool || 5;
            self._preload = typeof o.preload === 'boolean' ? o.preload : true;
            self._rate = o.rate || 1;
            self._sprite = o.sprite || {
            };
            self._src = typeof o.src !== 'string' ? o.src : [
                o.src
            ];
            self._volume = o.volume !== undefined ? o.volume : 1;
            self._xhrWithCredentials = o.xhrWithCredentials || false;
            // Setup all other default properties.
            self._duration = 0;
            self._state = 'unloaded';
            self._sounds = [];
            self._endTimers = {
            };
            self._queue = [];
            self._playLock = false;
            // Setup event listeners.
            self._onend = o.onend ? [
                {
                    fn: o.onend
                }
            ] : [];
            self._onfade = o.onfade ? [
                {
                    fn: o.onfade
                }
            ] : [];
            self._onload = o.onload ? [
                {
                    fn: o.onload
                }
            ] : [];
            self._onloaderror = o.onloaderror ? [
                {
                    fn: o.onloaderror
                }
            ] : [];
            self._onplayerror = o.onplayerror ? [
                {
                    fn: o.onplayerror
                }
            ] : [];
            self._onpause = o.onpause ? [
                {
                    fn: o.onpause
                }
            ] : [];
            self._onplay = o.onplay ? [
                {
                    fn: o.onplay
                }
            ] : [];
            self._onstop = o.onstop ? [
                {
                    fn: o.onstop
                }
            ] : [];
            self._onmute = o.onmute ? [
                {
                    fn: o.onmute
                }
            ] : [];
            self._onvolume = o.onvolume ? [
                {
                    fn: o.onvolume
                }
            ] : [];
            self._onrate = o.onrate ? [
                {
                    fn: o.onrate
                }
            ] : [];
            self._onseek = o.onseek ? [
                {
                    fn: o.onseek
                }
            ] : [];
            self._onunlock = o.onunlock ? [
                {
                    fn: o.onunlock
                }
            ] : [];
            self._onresume = [];
            // Web Audio or HTML5 Audio?
            self._webAudio = Howler.usingWebAudio && !self._html5;
            // Automatically try to enable audio.
            if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) Howler._unlockAudio();
            // Keep track of this Howl group in the global controller.
            Howler._howls.push(self);
            // If they selected autoplay, add a play event to the load queue.
            if (self._autoplay) self._queue.push({
                event: 'play',
                action: function() {
                    self.play();
                }
            });
            // Load the source file unless otherwise specified.
            if (self._preload) self.load();
            return self;
        },
        /**
     * Load the audio file.
     * @return {Howler}
     */ load: function() {
            var self = this;
            var url = null;
            // If no audio is available, quit immediately.
            if (Howler.noAudio) {
                self._emit('loaderror', null, 'No audio support.');
                return;
            }
            // Make sure our source is in an array.
            if (typeof self._src === 'string') self._src = [
                self._src
            ];
            // Loop through the sources and pick the first one that is compatible.
            for(var i = 0; i < self._src.length; i++){
                var ext, str;
                if (self._format && self._format[i]) // If an extension was specified, use that instead.
                ext = self._format[i];
                else {
                    // Make sure the source is a string.
                    str = self._src[i];
                    if (typeof str !== 'string') {
                        self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                        continue;
                    }
                    // Extract the file extension from the URL or base64 data URI.
                    ext = /^data:audio\/([^;,]+);/i.exec(str);
                    if (!ext) ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
                    if (ext) ext = ext[1].toLowerCase();
                }
                // Log a warning if no extension was found.
                if (!ext) console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
                // Check if this extension is available.
                if (ext && Howler.codecs(ext)) {
                    url = self._src[i];
                    break;
                }
            }
            if (!url) {
                self._emit('loaderror', null, 'No codec support for selected audio sources.');
                return;
            }
            self._src = url;
            self._state = 'loading';
            // If the hosting page is HTTPS and the source isn't,
            // drop down to HTML5 Audio to avoid Mixed Content errors.
            if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
                self._html5 = true;
                self._webAudio = false;
            }
            // Create a new sound object and add it to the pool.
            new Sound(self);
            // Load and decode the audio data for playback.
            if (self._webAudio) loadBuffer(self);
            return self;
        },
        /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */ play: function(sprite, internal) {
            var self = this;
            var id = null;
            // Determine if a sprite, sound id or nothing was passed
            if (typeof sprite === 'number') {
                id = sprite;
                sprite = null;
            } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) // If the passed sprite doesn't exist, do nothing.
            return null;
            else if (typeof sprite === 'undefined') {
                // Use the default sound sprite (plays the full audio length).
                sprite = '__default';
                // Check if there is a single paused sound that isn't ended. 
                // If there is, play that sound. If not, continue as usual.  
                if (!self._playLock) {
                    var num = 0;
                    for(var i = 0; i < self._sounds.length; i++)if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                        num++;
                        id = self._sounds[i]._id;
                    }
                    if (num === 1) sprite = null;
                    else id = null;
                }
            }
            // Get the selected node, or get one from the pool.
            var sound = id ? self._soundById(id) : self._inactiveSound();
            // If the sound doesn't exist, do nothing.
            if (!sound) return null;
            // Select the sprite definition.
            if (id && !sprite) sprite = sound._sprite || '__default';
            // If the sound hasn't loaded, we must wait to get the audio's duration.
            // We also need to wait to make sure we don't run into race conditions with
            // the order of function calls.
            if (self._state !== 'loaded') {
                // Set the sprite value on this sound.
                sound._sprite = sprite;
                // Mark this sound as not ended in case another sound is played before this one loads.
                sound._ended = false;
                // Add the sound to the queue to be played on load.
                var soundId = sound._id;
                self._queue.push({
                    event: 'play',
                    action: function() {
                        self.play(soundId);
                    }
                });
                return soundId;
            }
            // Don't play the sound if an id was passed and it is already playing.
            if (id && !sound._paused) {
                // Trigger the play event, in order to keep iterating through queue.
                if (!internal) self._loadQueue('play');
                return sound._id;
            }
            // Make sure the AudioContext isn't suspended, and resume it if it is.
            if (self._webAudio) Howler._autoResume();
            // Determine how long to play for and where to start playing.
            var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
            var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000 - seek);
            var timeout = duration * 1000 / Math.abs(sound._rate);
            var start = self._sprite[sprite][0] / 1000;
            var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
            sound._sprite = sprite;
            // Mark the sound as ended instantly so that this async playback
            // doesn't get grabbed by another call to play while this one waits to start.
            sound._ended = false;
            // Update the parameters of the sound.
            var setParams = function() {
                sound._paused = false;
                sound._seek = seek;
                sound._start = start;
                sound._stop = stop;
                sound._loop = !!(sound._loop || self._sprite[sprite][2]);
            };
            // End the sound instantly if seek is at the end.
            if (seek >= stop) {
                self._ended(sound);
                return;
            }
            // Begin the actual playback.
            var node = sound._node;
            if (self._webAudio) {
                // Fire this when the sound is ready to play to begin Web Audio playback.
                var playWebAudio = function() {
                    self._playLock = false;
                    setParams();
                    self._refreshBuffer(sound);
                    // Setup the playback params.
                    var vol = sound._muted || self._muted ? 0 : sound._volume;
                    node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                    sound._playStart = Howler.ctx.currentTime;
                    // Play the sound using the supported method.
                    if (typeof node.bufferSource.start === 'undefined') sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                    else sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                    // Start a new timer if none is present.
                    if (timeout !== Infinity) self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                    if (!internal) setTimeout(function() {
                        self._emit('play', sound._id);
                        self._loadQueue();
                    }, 0);
                };
                if (Howler.state === 'running') playWebAudio();
                else {
                    self._playLock = true;
                    // Wait for the audio context to resume before playing.
                    self.once('resume', playWebAudio);
                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            } else {
                // Fire this when the sound is ready to play to begin HTML5 Audio playback.
                var playHtml5 = function() {
                    node.currentTime = seek;
                    node.muted = sound._muted || self._muted || Howler._muted || node.muted;
                    node.volume = sound._volume * Howler.volume();
                    node.playbackRate = sound._rate;
                    // Some browsers will throw an error if this is called without user interaction.
                    try {
                        var play = node.play();
                        // Support older browsers that don't support promises, and thus don't have this issue.
                        if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
                            // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                            self._playLock = true;
                            // Set param values immediately.
                            setParams();
                            // Releases the lock and executes queued actions.
                            play.then(function() {
                                self._playLock = false;
                                node._unlocked = true;
                                if (!internal) {
                                    self._emit('play', sound._id);
                                    self._loadQueue();
                                }
                            }).catch(function() {
                                self._playLock = false;
                                self._emit('playerror', sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                // Reset the ended and paused values.
                                sound._ended = true;
                                sound._paused = true;
                            });
                        } else if (!internal) {
                            self._playLock = false;
                            setParams();
                            self._emit('play', sound._id);
                            self._loadQueue();
                        }
                        // Setting rate before playing won't work in IE, so we set it again here.
                        node.playbackRate = sound._rate;
                        // If the node is still paused, then we can assume there was a playback issue.
                        if (node.paused) {
                            self._emit('playerror', sound._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                            return;
                        }
                        // Setup the end timer on sprites or listen for the ended event.
                        if (sprite !== '__default' || sound._loop) self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                        else {
                            self._endTimers[sound._id] = function() {
                                // Fire ended on this audio node.
                                self._ended(sound);
                                // Clear this listener.
                                node.removeEventListener('ended', self._endTimers[sound._id], false);
                            };
                            node.addEventListener('ended', self._endTimers[sound._id], false);
                        }
                    } catch (err) {
                        self._emit('playerror', sound._id, err);
                    }
                };
                // If this is streaming audio, make sure the src is set and load again.
                if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
                    node.src = self._src;
                    node.load();
                }
                // Play immediately if ready, or wait for the 'canplaythrough'e vent.
                var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS;
                if (node.readyState >= 3 || loadedNoReadyState) playHtml5();
                else {
                    self._playLock = true;
                    var listener = function() {
                        // Begin playback.
                        playHtml5();
                        // Clear this listener.
                        node.removeEventListener(Howler._canPlayEvent, listener, false);
                    };
                    node.addEventListener(Howler._canPlayEvent, listener, false);
                    // Cancel the end timer.
                    self._clearTimer(sound._id);
                }
            }
            return sound._id;
        },
        /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */ pause: function(id) {
            var self = this;
            // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
            if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                    event: 'pause',
                    action: function() {
                        self.pause(id);
                    }
                });
                return self;
            }
            // If no id is passed, get all ID's to be paused.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Clear the end timer.
                self._clearTimer(ids[i]);
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound && !sound._paused) {
                    // Reset the seek position.
                    sound._seek = self.seek(ids[i]);
                    sound._rateSeek = 0;
                    sound._paused = true;
                    // Stop currently running fades.
                    self._stopFade(ids[i]);
                    if (sound._node) {
                        if (self._webAudio) {
                            // Make sure the sound has been created.
                            if (!sound._node.bufferSource) continue;
                            if (typeof sound._node.bufferSource.stop === 'undefined') sound._node.bufferSource.noteOff(0);
                            else sound._node.bufferSource.stop(0);
                            // Clean up the buffer source.
                            self._cleanBuffer(sound._node);
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) sound._node.pause();
                    }
                }
                // Fire the pause event, unless `true` is passed as the 2nd argument.
                if (!arguments[1]) self._emit('pause', sound ? sound._id : null);
            }
            return self;
        },
        /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */ stop: function(id, internal) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to stop when capable.
            if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                    event: 'stop',
                    action: function() {
                        self.stop(id);
                    }
                });
                return self;
            }
            // If no id is passed, get all ID's to be stopped.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Clear the end timer.
                self._clearTimer(ids[i]);
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound) {
                    // Reset the seek position.
                    sound._seek = sound._start || 0;
                    sound._rateSeek = 0;
                    sound._paused = true;
                    sound._ended = true;
                    // Stop currently running fades.
                    self._stopFade(ids[i]);
                    if (sound._node) {
                        if (self._webAudio) // Make sure the sound's AudioBufferSourceNode has been created.
                        {
                            if (sound._node.bufferSource) {
                                if (typeof sound._node.bufferSource.stop === 'undefined') sound._node.bufferSource.noteOff(0);
                                else sound._node.bufferSource.stop(0);
                                // Clean up the buffer source.
                                self._cleanBuffer(sound._node);
                            }
                        } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                            sound._node.currentTime = sound._start || 0;
                            sound._node.pause();
                            // If this is a live stream, stop download once the audio is stopped.
                            if (sound._node.duration === Infinity) self._clearSound(sound._node);
                        }
                    }
                    if (!internal) self._emit('stop', sound._id);
                }
            }
            return self;
        },
        /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */ mute: function(muted, id) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to mute when capable.
            if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                    event: 'mute',
                    action: function() {
                        self.mute(muted, id);
                    }
                });
                return self;
            }
            // If applying mute/unmute to all sounds, update the group's value.
            if (typeof id === 'undefined') {
                if (typeof muted === 'boolean') self._muted = muted;
                else return self._muted;
            }
            // If no id is passed, get all ID's to be muted.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Get the sound.
                var sound = self._soundById(ids[i]);
                if (sound) {
                    sound._muted = muted;
                    // Cancel active fade and set the volume to the end value.
                    if (sound._interval) self._stopFade(sound._id);
                    if (self._webAudio && sound._node) sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
                    else if (sound._node) sound._node.muted = Howler._muted ? true : muted;
                    self._emit('mute', sound._id);
                }
            }
            return self;
        },
        /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */ volume: function() {
            var self = this;
            var args = arguments;
            var vol, id;
            // Determine the values based on arguments.
            if (args.length === 0) // Return the value of the groups' volume.
            return self._volume;
            else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
                // First check if this is an ID, and if not, assume it is a new volume.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else vol = parseFloat(args[0]);
            } else if (args.length >= 2) {
                vol = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // Update the volume or return the current volume.
            var sound;
            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
                // If the sound hasn't loaded, add it to the load queue to change volume when capable.
                if (self._state !== 'loaded' || self._playLock) {
                    self._queue.push({
                        event: 'volume',
                        action: function() {
                            self.volume.apply(self, args);
                        }
                    });
                    return self;
                }
                // Set the group volume.
                if (typeof id === 'undefined') self._volume = vol;
                // Update one or all volumes.
                id = self._getSoundIds(id);
                for(var i = 0; i < id.length; i++){
                    // Get the sound.
                    sound = self._soundById(id[i]);
                    if (sound) {
                        sound._volume = vol;
                        // Stop currently running fades.
                        if (!args[2]) self._stopFade(id[i]);
                        if (self._webAudio && sound._node && !sound._muted) sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                        else if (sound._node && !sound._muted) sound._node.volume = vol * Howler.volume();
                        self._emit('volume', sound._id);
                    }
                }
            } else {
                sound = id ? self._soundById(id) : self._sounds[0];
                return sound ? sound._volume : 0;
            }
            return self;
        },
        /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */ fade: function(from, to, len, id) {
            var self = this;
            // If the sound hasn't loaded, add it to the load queue to fade when capable.
            if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                    event: 'fade',
                    action: function() {
                        self.fade(from, to, len, id);
                    }
                });
                return self;
            }
            // Make sure the to/from/len values are numbers.
            from = parseFloat(from);
            to = parseFloat(to);
            len = parseFloat(len);
            // Set the volume to the start position.
            self.volume(from, id);
            // Fade the volume of one or all sounds.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                // Get the sound.
                var sound = self._soundById(ids[i]);
                // Create a linear fade or fall back to timeouts with HTML5 Audio.
                if (sound) {
                    // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
                    if (!id) self._stopFade(ids[i]);
                    // If we are using Web Audio, let the native methods do the actual fade.
                    if (self._webAudio && !sound._muted) {
                        var currentTime = Howler.ctx.currentTime;
                        var end = currentTime + len / 1000;
                        sound._volume = from;
                        sound._node.gain.setValueAtTime(from, currentTime);
                        sound._node.gain.linearRampToValueAtTime(to, end);
                    }
                    self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
                }
            }
            return self;
        },
        /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */ _startFadeInterval: function(sound, from, to, len, id, isGroup) {
            var self = this;
            var vol = from;
            var diff = to - from;
            var steps = Math.abs(diff / 0.01);
            var stepLen = Math.max(4, steps > 0 ? len / steps : len);
            var lastTick = Date.now();
            // Store the value being faded to.
            sound._fadeTo = to;
            // Update the volume value on each interval tick.
            sound._interval = setInterval(function() {
                // Update the volume based on the time since the last tick.
                var tick = (Date.now() - lastTick) / len;
                lastTick = Date.now();
                vol += diff * tick;
                // Make sure the volume is in the right bounds.
                vol = Math.max(0, vol);
                vol = Math.min(1, vol);
                // Round to within 2 decimal points.
                vol = Math.round(vol * 100) / 100;
                // Change the volume.
                if (self._webAudio) sound._volume = vol;
                else self.volume(vol, sound._id, true);
                // Set the group's volume.
                if (isGroup) self._volume = vol;
                // When the fade is complete, stop it and fire event.
                if (to < from && vol <= to || to > from && vol >= to) {
                    clearInterval(sound._interval);
                    sound._interval = null;
                    sound._fadeTo = null;
                    self.volume(to, sound._id);
                    self._emit('fade', sound._id);
                }
            }, stepLen);
        },
        /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */ _stopFade: function(id) {
            var self = this;
            var sound = self._soundById(id);
            if (sound && sound._interval) {
                if (self._webAudio) sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
                clearInterval(sound._interval);
                sound._interval = null;
                self.volume(sound._fadeTo, id);
                sound._fadeTo = null;
                self._emit('fade', id);
            }
            return self;
        },
        /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */ loop: function() {
            var self = this;
            var args = arguments;
            var loop, id, sound;
            // Determine the values for loop and id.
            if (args.length === 0) // Return the grou's loop value.
            return self._loop;
            else if (args.length === 1) {
                if (typeof args[0] === 'boolean') {
                    loop = args[0];
                    self._loop = loop;
                } else {
                    // Return this sound's loop value.
                    sound = self._soundById(parseInt(args[0], 10));
                    return sound ? sound._loop : false;
                }
            } else if (args.length === 2) {
                loop = args[0];
                id = parseInt(args[1], 10);
            }
            // If no id is passed, get all ID's to be looped.
            var ids = self._getSoundIds(id);
            for(var i = 0; i < ids.length; i++){
                sound = self._soundById(ids[i]);
                if (sound) {
                    sound._loop = loop;
                    if (self._webAudio && sound._node && sound._node.bufferSource) {
                        sound._node.bufferSource.loop = loop;
                        if (loop) {
                            sound._node.bufferSource.loopStart = sound._start || 0;
                            sound._node.bufferSource.loopEnd = sound._stop;
                        }
                    }
                }
            }
            return self;
        },
        /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */ rate: function() {
            var self = this;
            var args = arguments;
            var rate, id;
            // Determine the values based on arguments.
            if (args.length === 0) // We will simply return the current rate of the first node.
            id = self._sounds[0]._id;
            else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new rate value.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else rate = parseFloat(args[0]);
            } else if (args.length === 2) {
                rate = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // Update the playback rate or return the current value.
            var sound;
            if (typeof rate === 'number') {
                // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
                if (self._state !== 'loaded' || self._playLock) {
                    self._queue.push({
                        event: 'rate',
                        action: function() {
                            self.rate.apply(self, args);
                        }
                    });
                    return self;
                }
                // Set the group rate.
                if (typeof id === 'undefined') self._rate = rate;
                // Update one or all volumes.
                id = self._getSoundIds(id);
                for(var i = 0; i < id.length; i++){
                    // Get the sound.
                    sound = self._soundById(id[i]);
                    if (sound) {
                        // Keep track of our position when the rate changed and update the playback
                        // start position so we can properly adjust the seek position for time elapsed.
                        if (self.playing(id[i])) {
                            sound._rateSeek = self.seek(id[i]);
                            sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
                        }
                        sound._rate = rate;
                        // Change the playback rate.
                        if (self._webAudio && sound._node && sound._node.bufferSource) sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
                        else if (sound._node) sound._node.playbackRate = rate;
                        // Reset the timers.
                        var seek = self.seek(id[i]);
                        var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000 - seek;
                        var timeout = duration * 1000 / Math.abs(sound._rate);
                        // Start a new end timer if sound is already playing.
                        if (self._endTimers[id[i]] || !sound._paused) {
                            self._clearTimer(id[i]);
                            self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                        }
                        self._emit('rate', sound._id);
                    }
                }
            } else {
                sound = self._soundById(id);
                return sound ? sound._rate : self._rate;
            }
            return self;
        },
        /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */ seek: function() {
            var self = this;
            var args = arguments;
            var seek, id;
            // Determine the values based on arguments.
            if (args.length === 0) // We will simply return the current position of the first node.
            id = self._sounds[0]._id;
            else if (args.length === 1) {
                // First check if this is an ID, and if not, assume it is a new seek position.
                var ids = self._getSoundIds();
                var index = ids.indexOf(args[0]);
                if (index >= 0) id = parseInt(args[0], 10);
                else if (self._sounds.length) {
                    id = self._sounds[0]._id;
                    seek = parseFloat(args[0]);
                }
            } else if (args.length === 2) {
                seek = parseFloat(args[0]);
                id = parseInt(args[1], 10);
            }
            // If there is no ID, bail out.
            if (typeof id === 'undefined') return self;
            // If the sound hasn't loaded, add it to the load queue to seek when capable.
            if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                    event: 'seek',
                    action: function() {
                        self.seek.apply(self, args);
                    }
                });
                return self;
            }
            // Get the sound.
            var sound = self._soundById(id);
            if (sound) {
                if (typeof seek === 'number' && seek >= 0) {
                    // Pause the sound and update position for restarting playback.
                    var playing = self.playing(id);
                    if (playing) self.pause(id, true);
                    // Move the position of the track and cancel timer.
                    sound._seek = seek;
                    sound._ended = false;
                    self._clearTimer(id);
                    // Update the seek position for HTML5 Audio.
                    if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) sound._node.currentTime = seek;
                    // Seek and emit when ready.
                    var seekAndEmit = function() {
                        self._emit('seek', id);
                        // Restart the playback if the sound was playing.
                        if (playing) self.play(id, true);
                    };
                    // Wait for the play lock to be unset before emitting (HTML5 Audio).
                    if (playing && !self._webAudio) {
                        var emitSeek = function() {
                            if (!self._playLock) seekAndEmit();
                            else setTimeout(emitSeek, 0);
                        };
                        setTimeout(emitSeek, 0);
                    } else seekAndEmit();
                } else {
                    if (self._webAudio) {
                        var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
                        var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                        return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                    } else return sound._node.currentTime;
                }
            }
            return self;
        },
        /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */ playing: function(id) {
            var self = this;
            // Check the passed sound ID (if any).
            if (typeof id === 'number') {
                var sound = self._soundById(id);
                return sound ? !sound._paused : false;
            }
            // Otherwise, loop through all sounds and check if any are playing.
            for(var i = 0; i < self._sounds.length; i++){
                if (!self._sounds[i]._paused) return true;
            }
            return false;
        },
        /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */ duration: function(id) {
            var self = this;
            var duration = self._duration;
            // If we pass an ID, get the sound and return the sprite length.
            var sound = self._soundById(id);
            if (sound) duration = self._sprite[sound._sprite][1] / 1000;
            return duration;
        },
        /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */ state: function() {
            return this._state;
        },
        /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */ unload: function() {
            var self = this;
            // Stop playing any active sounds.
            var sounds = self._sounds;
            for(var i = 0; i < sounds.length; i++){
                // Stop the sound if it is currently playing.
                if (!sounds[i]._paused) self.stop(sounds[i]._id);
                // Remove the source or disconnect.
                if (!self._webAudio) {
                    // Set the source to 0-second silence to stop any downloading (except in IE).
                    self._clearSound(sounds[i]._node);
                    // Remove any event listeners.
                    sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
                    sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
                    // Release the Audio object back to the pool.
                    Howler._releaseHtml5Audio(sounds[i]._node);
                }
                // Empty out all of the nodes.
                delete sounds[i]._node;
                // Make sure all timers are cleared out.
                self._clearTimer(sounds[i]._id);
            }
            // Remove the references in the global Howler object.
            var index = Howler._howls.indexOf(self);
            if (index >= 0) Howler._howls.splice(index, 1);
            // Delete this sound from the cache (if no other Howl is using it).
            var remCache = true;
            for(i = 0; i < Howler._howls.length; i++)if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
                remCache = false;
                break;
            }
            if (cache && remCache) delete cache[self._src];
            // Clear global errors.
            Howler.noAudio = false;
            // Clear out `self`.
            self._state = 'unloaded';
            self._sounds = [];
            self = null;
            return null;
        },
        /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */ on: function(event, fn, id, once) {
            var self = this;
            var events = self['_on' + event];
            if (typeof fn === 'function') events.push(once ? {
                id: id,
                fn: fn,
                once: once
            } : {
                id: id,
                fn: fn
            });
            return self;
        },
        /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */ off: function(event, fn, id) {
            var self = this;
            var events = self['_on' + event];
            var i = 0;
            // Allow passing just an event and ID.
            if (typeof fn === 'number') {
                id = fn;
                fn = null;
            }
            if (fn || id) // Loop through event store and remove the passed function.
            for(i = 0; i < events.length; i++){
                var isId = id === events[i].id;
                if (fn === events[i].fn && isId || !fn && isId) {
                    events.splice(i, 1);
                    break;
                }
            }
            else if (event) // Clear out all events of this type.
            self['_on' + event] = [];
            else {
                // Clear out all events of every type.
                var keys = Object.keys(self);
                for(i = 0; i < keys.length; i++)if (keys[i].indexOf('_on') === 0 && Array.isArray(self[keys[i]])) self[keys[i]] = [];
            }
            return self;
        },
        /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */ once: function(event, fn, id) {
            var self = this;
            // Setup the event listener.
            self.on(event, fn, id, 1);
            return self;
        },
        /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */ _emit: function(event, id, msg) {
            var self = this;
            var events = self['_on' + event];
            // Loop through event store and fire all functions.
            for(var i = events.length - 1; i >= 0; i--)// Only fire the listener if the correct ID is used.
            if (!events[i].id || events[i].id === id || event === 'load') {
                setTimeout((function(fn) {
                    fn.call(this, id, msg);
                }).bind(self, events[i].fn), 0);
                // If this event was setup with `once`, remove it.
                if (events[i].once) self.off(event, events[i].fn, events[i].id);
            }
            // Pass the event type into load queue so that it can continue stepping.
            self._loadQueue(event);
            return self;
        },
        /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */ _loadQueue: function(event) {
            var self = this;
            if (self._queue.length > 0) {
                var task = self._queue[0];
                // Remove this task if a matching event was passed.
                if (task.event === event) {
                    self._queue.shift();
                    self._loadQueue();
                }
                // Run the task if no event type is passed.
                if (!event) task.action();
            }
            return self;
        },
        /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */ _ended: function(sound) {
            var self = this;
            var sprite = sound._sprite;
            // If we are using IE and there was network latency we may be clipping
            // audio before it completes playing. Lets check the node to make sure it
            // believes it has completed, before ending the playback.
            if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
                setTimeout(self._ended.bind(self, sound), 100);
                return self;
            }
            // Should this sound loop?
            var loop = !!(sound._loop || self._sprite[sprite][2]);
            // Fire the ended event.
            self._emit('end', sound._id);
            // Restart the playback for HTML5 Audio loop.
            if (!self._webAudio && loop) self.stop(sound._id, true).play(sound._id);
            // Restart this timer if on a Web Audio loop.
            if (self._webAudio && loop) {
                self._emit('play', sound._id);
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._playStart = Howler.ctx.currentTime;
                var timeout = (sound._stop - sound._start) * 1000 / Math.abs(sound._rate);
                self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            }
            // Mark the node as paused.
            if (self._webAudio && !loop) {
                sound._paused = true;
                sound._ended = true;
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                self._clearTimer(sound._id);
                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
                // Attempt to auto-suspend AudioContext if no sounds are still playing.
                Howler._autoSuspend();
            }
            // When using a sprite, end the track.
            if (!self._webAudio && !loop) self.stop(sound._id, true);
            return self;
        },
        /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */ _clearTimer: function(id) {
            var self = this;
            if (self._endTimers[id]) {
                // Clear the timeout or remove the ended listener.
                if (typeof self._endTimers[id] !== 'function') clearTimeout(self._endTimers[id]);
                else {
                    var sound = self._soundById(id);
                    if (sound && sound._node) sound._node.removeEventListener('ended', self._endTimers[id], false);
                }
                delete self._endTimers[id];
            }
            return self;
        },
        /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */ _soundById: function(id) {
            var self = this;
            // Loop through all sounds and find the one with this ID.
            for(var i = 0; i < self._sounds.length; i++){
                if (id === self._sounds[i]._id) return self._sounds[i];
            }
            return null;
        },
        /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */ _inactiveSound: function() {
            var self = this;
            self._drain();
            // Find the first inactive node to recycle.
            for(var i = 0; i < self._sounds.length; i++){
                if (self._sounds[i]._ended) return self._sounds[i].reset();
            }
            // If no inactive node was found, create a new one.
            return new Sound(self);
        },
        /**
     * Drain excess inactive sounds from the pool.
     */ _drain: function() {
            var self = this;
            var limit = self._pool;
            var cnt = 0;
            var i = 0;
            // If there are less sounds than the max pool size, we are done.
            if (self._sounds.length < limit) return;
            // Count the number of inactive sounds.
            for(i = 0; i < self._sounds.length; i++)if (self._sounds[i]._ended) cnt++;
            // Remove excess inactive sounds, going in reverse order.
            for(i = self._sounds.length - 1; i >= 0; i--){
                if (cnt <= limit) return;
                if (self._sounds[i]._ended) {
                    // Disconnect the audio source when using Web Audio.
                    if (self._webAudio && self._sounds[i]._node) self._sounds[i]._node.disconnect(0);
                    // Remove sounds until we have the pool size.
                    self._sounds.splice(i, 1);
                    cnt--;
                }
            }
        },
        /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */ _getSoundIds: function(id) {
            var self = this;
            if (typeof id === 'undefined') {
                var ids = [];
                for(var i = 0; i < self._sounds.length; i++)ids.push(self._sounds[i]._id);
                return ids;
            } else return [
                id
            ];
        },
        /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */ _refreshBuffer: function(sound) {
            var self = this;
            // Setup the buffer source for playback.
            sound._node.bufferSource = Howler.ctx.createBufferSource();
            sound._node.bufferSource.buffer = cache[self._src];
            // Connect to the correct node.
            if (sound._panner) sound._node.bufferSource.connect(sound._panner);
            else sound._node.bufferSource.connect(sound._node);
            // Setup looping and playback rate.
            sound._node.bufferSource.loop = sound._loop;
            if (sound._loop) {
                sound._node.bufferSource.loopStart = sound._start || 0;
                sound._node.bufferSource.loopEnd = sound._stop || 0;
            }
            sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);
            return self;
        },
        /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */ _cleanBuffer: function(node) {
            var self = this;
            var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;
            if (Howler._scratchBuffer && node.bufferSource) {
                node.bufferSource.onended = null;
                node.bufferSource.disconnect(0);
                if (isIOS) try {
                    node.bufferSource.buffer = Howler._scratchBuffer;
                } catch (e) {
                }
            }
            node.bufferSource = null;
            return self;
        },
        /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */ _clearSound: function(node) {
            var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
            if (!checkIE) node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
        }
    };
    /** Single Sound Methods **/ /***************************************************************************/ /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */ var Sound = function(howl) {
        this._parent = howl;
        this.init();
    };
    Sound.prototype = {
        /**
     * Initialize a new Sound object.
     * @return {Sound}
     */ init: function() {
            var self = this;
            var parent = self._parent;
            // Setup the default parameters.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default';
            // Generate a unique ID for this sound.
            self._id = ++Howler._counter;
            // Add itself to the parent's pool.
            parent._sounds.push(self);
            // Create the new node.
            self.create();
            return self;
        },
        /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */ create: function() {
            var self = this;
            var parent = self._parent;
            var volume = Howler._muted || self._muted || self._parent._muted ? 0 : self._volume;
            if (parent._webAudio) {
                // Create the gain node for controlling volume (the source will connect to this).
                self._node = typeof Howler.ctx.createGain === 'undefined' ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
                self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
                self._node.paused = true;
                self._node.connect(Howler.masterGain);
            } else if (!Howler.noAudio) {
                // Get an unlocked Audio object from the pool.
                self._node = Howler._obtainHtml5Audio();
                // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
                self._errorFn = self._errorListener.bind(self);
                self._node.addEventListener('error', self._errorFn, false);
                // Listen for 'canplaythrough' event to let us know the sound is ready.
                self._loadFn = self._loadListener.bind(self);
                self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);
                // Setup the new audio node.
                self._node.src = parent._src;
                self._node.preload = 'auto';
                self._node.volume = volume * Howler.volume();
                // Begin loading the source.
                self._node.load();
            }
            return self;
        },
        /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */ reset: function() {
            var self = this;
            var parent = self._parent;
            // Reset all of the parameters of this sound.
            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._rateSeek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default';
            // Generate a new ID so that it isn't confused with the previous sound.
            self._id = ++Howler._counter;
            return self;
        },
        /**
     * HTML5 Audio error listener callback.
     */ _errorListener: function() {
            var self = this;
            // Fire an error event and pass back the code.
            self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);
            // Clear the event listener.
            self._node.removeEventListener('error', self._errorFn, false);
        },
        /**
     * HTML5 Audio canplaythrough listener callback.
     */ _loadListener: function() {
            var self = this;
            var parent = self._parent;
            // Round up the duration to account for the lower precision in HTML5 Audio.
            parent._duration = Math.ceil(self._node.duration * 10) / 10;
            // Setup a sprite if none is defined.
            if (Object.keys(parent._sprite).length === 0) parent._sprite = {
                __default: [
                    0,
                    parent._duration * 1000
                ]
            };
            if (parent._state !== 'loaded') {
                parent._state = 'loaded';
                parent._emit('load');
                parent._loadQueue();
            }
            // Clear the event listener.
            self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
        }
    };
    /** Helper Methods **/ /***************************************************************************/ var cache = {
    };
    /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */ var loadBuffer = function(self) {
        var url = self._src;
        // Check if the buffer has already been cached and use it instead.
        if (cache[url]) {
            // Set the duration from the cache.
            self._duration = cache[url].duration;
            // Load the sound into this Howl.
            loadSound(self);
            return;
        }
        if (/^data:[^;]+;base64,/.test(url)) {
            // Decode the base64 data URI without XHR, since some browsers don't support it.
            var data = atob(url.split(',')[1]);
            var dataView = new Uint8Array(data.length);
            for(var i = 0; i < data.length; ++i)dataView[i] = data.charCodeAt(i);
            decodeAudioData(dataView.buffer, self);
        } else {
            // Load the buffer from the URL.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.withCredentials = self._xhrWithCredentials;
            xhr.responseType = 'arraybuffer';
            xhr.onload = function() {
                // Make sure we get a successful response back.
                var code = (xhr.status + '')[0];
                if (code !== '0' && code !== '2' && code !== '3') {
                    self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
                    return;
                }
                decodeAudioData(xhr.response, self);
            };
            xhr.onerror = function() {
                // If there is an error, switch to HTML5 Audio.
                if (self._webAudio) {
                    self._html5 = true;
                    self._webAudio = false;
                    self._sounds = [];
                    delete cache[url];
                    self.load();
                }
            };
            safeXhrSend(xhr);
        }
    };
    /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */ var safeXhrSend = function(xhr) {
        try {
            xhr.send();
        } catch (e) {
            xhr.onerror();
        }
    };
    /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */ var decodeAudioData = function(arraybuffer, self) {
        // Fire a load error if something broke.
        var error = function() {
            self._emit('loaderror', null, 'Decoding audio data failed.');
        };
        // Load the sound on success.
        var success = function(buffer) {
            if (buffer && self._sounds.length > 0) {
                cache[self._src] = buffer;
                loadSound(self, buffer);
            } else error();
        };
        // Decode the buffer into an audio source.
        if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
        else Howler.ctx.decodeAudioData(arraybuffer, success, error);
    };
    /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */ var loadSound = function(self, buffer) {
        // Set the duration.
        if (buffer && !self._duration) self._duration = buffer.duration;
        // Setup a sprite if none is defined.
        if (Object.keys(self._sprite).length === 0) self._sprite = {
            __default: [
                0,
                self._duration * 1000
            ]
        };
        // Fire the loaded event.
        if (self._state !== 'loaded') {
            self._state = 'loaded';
            self._emit('load');
            self._loadQueue();
        }
    };
    /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */ var setupAudioContext = function() {
        // If we have already detected that Web Audio isn't supported, don't run this step again.
        if (!Howler.usingWebAudio) return;
        // Check if we are using Web Audio and setup the AudioContext if we are.
        try {
            if (typeof AudioContext !== 'undefined') Howler.ctx = new AudioContext();
            else if (typeof webkitAudioContext !== 'undefined') Howler.ctx = new webkitAudioContext();
            else Howler.usingWebAudio = false;
        } catch (e) {
            Howler.usingWebAudio = false;
        }
        // If the audio context creation still failed, set using web audio to false.
        if (!Howler.ctx) Howler.usingWebAudio = false;
        // Check if a webview is being used on iOS8 or earlier (rather than the browser).
        // If it is, disable Web Audio as it causes crashing.
        var iOS = /iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform);
        var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var version = appVersion ? parseInt(appVersion[1], 10) : null;
        if (iOS && version && version < 9) {
            var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
            if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) Howler.usingWebAudio = false;
        }
        // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
        if (Howler.usingWebAudio) {
            Howler.masterGain = typeof Howler.ctx.createGain === 'undefined' ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
            Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
            Howler.masterGain.connect(Howler.ctx.destination);
        }
        // Re-run the setup on Howler.
        Howler._setup();
    };
    // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
    if (typeof define === 'function' && define.amd) define([], function() {
        return {
            Howler: Howler,
            Howl: Howl
        };
    });
    // Add support for CommonJS libraries such as browserify.
    if (typeof exports !== 'undefined') {
        exports.Howler = Howler;
        exports.Howl = Howl;
    }
    // Define globally in case AMD is not available or unused.
    if (typeof window !== 'undefined') {
        window.HowlerGlobal = HowlerGlobal;
        window.Howler = Howler;
        window.Howl = Howl;
        window.Sound = Sound;
    } else if (typeof global !== 'undefined') {
        global.HowlerGlobal = HowlerGlobal;
        global.Howler = Howler;
        global.Howl = Howl;
        global.Sound = Sound;
    }
})();
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.1.3
 *  howlerjs.com
 *
 *  (c) 2013-2019, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (function() {
    // Setup default properties.
    HowlerGlobal.prototype._pos = [
        0,
        0,
        0
    ];
    HowlerGlobal.prototype._orientation = [
        0,
        0,
        -1,
        0,
        1,
        0
    ];
    /** Global Methods **/ /***************************************************************************/ /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */ HowlerGlobal.prototype.stereo = function(pan) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Loop through all Howls and update their stereo panning.
        for(var i = self._howls.length - 1; i >= 0; i--)self._howls[i].stereo(pan);
        return self;
    };
    /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */ HowlerGlobal.prototype.pos = function(x, y, z) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== 'number' ? self._pos[1] : y;
        z = typeof z !== 'number' ? self._pos[2] : z;
        if (typeof x === 'number') {
            self._pos = [
                x,
                y,
                z
            ];
            if (typeof self.ctx.listener.positionX !== 'undefined') {
                self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
                self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
                self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
            } else self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
        } else return self._pos;
        return self;
    };
    /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */ HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self.ctx || !self.ctx.listener) return self;
        // Set the defaults for optional 'y' & 'z'.
        var or = self._orientation;
        y = typeof y !== 'number' ? or[1] : y;
        z = typeof z !== 'number' ? or[2] : z;
        xUp = typeof xUp !== 'number' ? or[3] : xUp;
        yUp = typeof yUp !== 'number' ? or[4] : yUp;
        zUp = typeof zUp !== 'number' ? or[5] : zUp;
        if (typeof x === 'number') {
            self._orientation = [
                x,
                y,
                z,
                xUp,
                yUp,
                zUp
            ];
            if (typeof self.ctx.listener.forwardX !== 'undefined') {
                self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
                self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
            } else self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
        } else return or;
        return self;
    };
    /** Group Methods **/ /***************************************************************************/ /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */ Howl.prototype.init = (function(_super) {
        return function(o) {
            var self = this;
            // Setup user-defined default properties.
            self._orientation = o.orientation || [
                1,
                0,
                0
            ];
            self._stereo = o.stereo || null;
            self._pos = o.pos || null;
            self._pannerAttr = {
                coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
                coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
                coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
                distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
                maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
                panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
                refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
                rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
            };
            // Setup event listeners.
            self._onstereo = o.onstereo ? [
                {
                    fn: o.onstereo
                }
            ] : [];
            self._onpos = o.onpos ? [
                {
                    fn: o.onpos
                }
            ] : [];
            self._onorientation = o.onorientation ? [
                {
                    fn: o.onorientation
                }
            ] : [];
            // Complete initilization with howler.js core's init function.
            return _super.call(this, o);
        };
    })(Howl.prototype.init);
    /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */ Howl.prototype.stereo = function(pan, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'stereo',
                action: function() {
                    self.stereo(pan, id);
                }
            });
            return self;
        }
        // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
        var pannerType = typeof Howler.ctx.createStereoPanner === 'undefined' ? 'spatial' : 'stereo';
        // Setup the group's stereo panning if no ID is passed.
        if (typeof id === 'undefined') {
            // Return the group's stereo panning if no parameters are passed.
            if (typeof pan === 'number') {
                self._stereo = pan;
                self._pos = [
                    pan,
                    0,
                    0
                ];
            } else return self._stereo;
        }
        // Change the streo panning of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof pan === 'number') {
                    sound._stereo = pan;
                    sound._pos = [
                        pan,
                        0,
                        0
                    ];
                    if (sound._node) {
                        // If we are falling back, make sure the panningModel is equalpower.
                        sound._pannerAttr.panningModel = 'equalpower';
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner || !sound._panner.pan) setupPanner(sound, pannerType);
                        if (pannerType === 'spatial') {
                            if (typeof sound._panner.positionX !== 'undefined') {
                                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                            } else sound._panner.setPosition(pan, 0, 0);
                        } else sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                    }
                    self._emit('stereo', sound._id);
                } else return sound._stereo;
            }
        }
        return self;
    };
    /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */ Howl.prototype.pos = function(x, y, z, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change position when capable.
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'pos',
                action: function() {
                    self.pos(x, y, z, id);
                }
            });
            return self;
        }
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== 'number' ? 0 : y;
        z = typeof z !== 'number' ? -0.5 : z;
        // Setup the group's spatial position if no ID is passed.
        if (typeof id === 'undefined') {
            // Return the group's spatial position if no parameters are passed.
            if (typeof x === 'number') self._pos = [
                x,
                y,
                z
            ];
            else return self._pos;
        }
        // Change the spatial position of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof x === 'number') {
                    sound._pos = [
                        x,
                        y,
                        z
                    ];
                    if (sound._node) {
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner || sound._panner.pan) setupPanner(sound, 'spatial');
                        if (typeof sound._panner.positionX !== 'undefined') {
                            sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                            sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                            sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                        } else sound._panner.setPosition(x, y, z);
                    }
                    self._emit('pos', sound._id);
                } else return sound._pos;
            }
        }
        return self;
    };
    /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */ Howl.prototype.orientation = function(x, y, z, id) {
        var self = this;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
        if (self._state !== 'loaded') {
            self._queue.push({
                event: 'orientation',
                action: function() {
                    self.orientation(x, y, z, id);
                }
            });
            return self;
        }
        // Set the defaults for optional 'y' & 'z'.
        y = typeof y !== 'number' ? self._orientation[1] : y;
        z = typeof z !== 'number' ? self._orientation[2] : z;
        // Setup the group's spatial orientation if no ID is passed.
        if (typeof id === 'undefined') {
            // Return the group's spatial orientation if no parameters are passed.
            if (typeof x === 'number') self._orientation = [
                x,
                y,
                z
            ];
            else return self._orientation;
        }
        // Change the spatial orientation of one or all sounds in group.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            // Get the sound.
            var sound = self._soundById(ids[i]);
            if (sound) {
                if (typeof x === 'number') {
                    sound._orientation = [
                        x,
                        y,
                        z
                    ];
                    if (sound._node) {
                        // Check if there is a panner setup and create a new one if not.
                        if (!sound._panner) {
                            // Make sure we have a position to setup the node with.
                            if (!sound._pos) sound._pos = self._pos || [
                                0,
                                0,
                                -0.5
                            ];
                            setupPanner(sound, 'spatial');
                        }
                        if (typeof sound._panner.orientationX !== 'undefined') {
                            sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                            sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                            sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                        } else sound._panner.setOrientation(x, y, z);
                    }
                    self._emit('orientation', sound._id);
                } else return sound._orientation;
            }
        }
        return self;
    };
    /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */ Howl.prototype.pannerAttr = function() {
        var self = this;
        var args = arguments;
        var o, id, sound;
        // Stop right here if not using Web Audio.
        if (!self._webAudio) return self;
        // Determine the values based on arguments.
        if (args.length === 0) // Return the group's panner attribute values.
        return self._pannerAttr;
        else if (args.length === 1) {
            if (typeof args[0] === 'object') {
                o = args[0];
                // Set the grou's panner attribute values.
                if (typeof id === 'undefined') {
                    if (!o.pannerAttr) o.pannerAttr = {
                        coneInnerAngle: o.coneInnerAngle,
                        coneOuterAngle: o.coneOuterAngle,
                        coneOuterGain: o.coneOuterGain,
                        distanceModel: o.distanceModel,
                        maxDistance: o.maxDistance,
                        refDistance: o.refDistance,
                        rolloffFactor: o.rolloffFactor,
                        panningModel: o.panningModel
                    };
                    self._pannerAttr = {
                        coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                        coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                        coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                        distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
                        maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
                        refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
                        rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                        panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
                    };
                }
            } else {
                // Return this sound's panner attribute values.
                sound = self._soundById(parseInt(args[0], 10));
                return sound ? sound._pannerAttr : self._pannerAttr;
            }
        } else if (args.length === 2) {
            o = args[0];
            id = parseInt(args[1], 10);
        }
        // Update the values of the specified sounds.
        var ids = self._getSoundIds(id);
        for(var i = 0; i < ids.length; i++){
            sound = self._soundById(ids[i]);
            if (sound) {
                // Merge the new values into the sound.
                var pa = sound._pannerAttr;
                pa = {
                    coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
                    coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
                    coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
                    distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
                    maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
                    refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
                    rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
                    panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
                };
                // Update the panner values or create a new panner if none exists.
                var panner = sound._panner;
                if (panner) {
                    panner.coneInnerAngle = pa.coneInnerAngle;
                    panner.coneOuterAngle = pa.coneOuterAngle;
                    panner.coneOuterGain = pa.coneOuterGain;
                    panner.distanceModel = pa.distanceModel;
                    panner.maxDistance = pa.maxDistance;
                    panner.refDistance = pa.refDistance;
                    panner.rolloffFactor = pa.rolloffFactor;
                    panner.panningModel = pa.panningModel;
                } else {
                    // Make sure we have a position to setup the node with.
                    if (!sound._pos) sound._pos = self._pos || [
                        0,
                        0,
                        -0.5
                    ];
                    // Create a new panner node.
                    setupPanner(sound, 'spatial');
                }
            }
        }
        return self;
    };
    /** Single Sound Methods **/ /***************************************************************************/ /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */ Sound.prototype.init = (function(_super) {
        return function() {
            var self = this;
            var parent = self._parent;
            // Setup user-defined default properties.
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            // Complete initilization with howler.js core Sound's init function.
            _super.call(this);
            // If a stereo or position was specified, set it up.
            if (self._stereo) parent.stereo(self._stereo);
            else if (self._pos) parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
        };
    })(Sound.prototype.init);
    /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */ Sound.prototype.reset = (function(_super) {
        return function() {
            var self = this;
            var parent = self._parent;
            // Reset all spatial plugin properties on this sound.
            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr;
            // If a stereo or position was specified, set it up.
            if (self._stereo) parent.stereo(self._stereo);
            else if (self._pos) parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
            else if (self._panner) {
                // Disconnect the panner.
                self._panner.disconnect(0);
                self._panner = undefined;
                parent._refreshBuffer(self);
            }
            // Complete resetting of the sound.
            return _super.call(this);
        };
    })(Sound.prototype.reset);
    /** Helper Methods **/ /***************************************************************************/ /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */ var setupPanner = function(sound, type) {
        type = type || 'spatial';
        // Create the new panner node.
        if (type === 'spatial') {
            sound._panner = Howler.ctx.createPanner();
            sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
            sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
            sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
            sound._panner.distanceModel = sound._pannerAttr.distanceModel;
            sound._panner.maxDistance = sound._pannerAttr.maxDistance;
            sound._panner.refDistance = sound._pannerAttr.refDistance;
            sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
            sound._panner.panningModel = sound._pannerAttr.panningModel;
            if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
            } else sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
            if (typeof sound._panner.orientationX !== 'undefined') {
                sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
                sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
                sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
            } else sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
        } else {
            sound._panner = Howler.ctx.createStereoPanner();
            sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
        }
        sound._panner.connect(sound._node);
        // Update the connections.
        if (!sound._paused) sound._parent.pause(sound._id, true).play(sound._id, true);
    };
})();

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}]},["7nZVA","8lqZg"], "8lqZg", "parcelRequirebab9")

//# sourceMappingURL=index.975ef6c8.js.map
