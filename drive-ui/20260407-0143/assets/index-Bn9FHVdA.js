import{r as require$$0}from"./drive__loadShare__react__loadShare__.js_commonjs-proxy-Dx5sebzO.js";function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var useSyncExternalStore$1 = { exports: {} };
var useSyncExternalStore_production = {};
/**
 * @license React
 * use-sync-external-store.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var useSyncExternalStore = require$$0.useSyncExternalStore;
useSyncExternalStore_production.useSyncExternalStore = useSyncExternalStore;
{
  useSyncExternalStore$1.exports = useSyncExternalStore_production;
}
var useSyncExternalStoreExports = useSyncExternalStore$1.exports;
const index = /* @__PURE__ */ getDefaultExportFromCjs(useSyncExternalStoreExports);
const index$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index
}, [useSyncExternalStoreExports]);
export {
  index$1 as i
};
