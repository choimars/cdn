import { _ as __vitePreload } from "./preload-helper-C0VDnph2.js";
const cssAssetMap = {"./DriveApp":["./style-DXzgwrVk.css"]};
const injectedCssHrefs = /* @__PURE__ */ new Set();
async function injectCssAssets(exposeKey) {
  if (typeof document === "undefined") {
    return;
  }
  const cssAssets = cssAssetMap[exposeKey] || [];
  await Promise.all(
    cssAssets.map((cssAsset) => {
      const href = new URL(cssAsset, import.meta.url).href;
      if (injectedCssHrefs.has(href)) {
        return Promise.resolve();
      }
      injectedCssHrefs.add(href);
      const existingLink = document.querySelector(
        `link[rel="stylesheet"][data-mf-href="${href}"]`
      );
      if (existingLink) {
        return Promise.resolve();
      }
      return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.setAttribute("data-mf-href", href);
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`[Module Federation] Failed to load CSS asset: ${href}`));
        document.head.appendChild(link);
      });
    })
  );
}
const virtual_mfExposes_drive__remoteEntry_js = {
  "./DriveApp": async () => {
    await injectCssAssets("./DriveApp");
    const importModule = await __vitePreload(() => import("./expose-CePCtv3t.js").then((n) => n.e), true ? [] : void 0);
    const exportModule = {};
    Object.assign(exportModule, importModule);
    Object.defineProperty(exportModule, "__esModule", {
      value: true,
      enumerable: false
    });
    return exportModule;
  }
};
export {
  virtual_mfExposes_drive__remoteEntry_js as default
};
