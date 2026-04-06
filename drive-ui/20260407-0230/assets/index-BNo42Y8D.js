const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-BTou2UIg.js","assets/drive__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-RLtf1wpG.js","assets/drive__loadShare__react__loadShare__.js-Ci9JbhqK.js","assets/drive__loadShare__react__loadShare__.js_commonjs-proxy-Dx5sebzO.js","assets/drive__loadShare__react_mf_2_dom__loadShare__.js_commonjs-proxy-CO_iv89_.js","assets/drive__loadShare__react_mf_2_dom__loadShare__.js-BMpYX_ZK.js","assets/drive__loadShare__react_mf_2_router_mf_2_dom__loadShare__.js-D6UqKDyg.js","assets/expose-CePCtv3t.js","assets/with-selector-BTXW8qwH.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-C0VDnph2.js";
import "../remoteEntry.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
__vitePreload(() => import("./main-BTou2UIg.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0);
