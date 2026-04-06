import { _ as __vitePreload } from "./preload-helper-Oe6fyKjw.js";
const importMap = {
  "react": async () => {
    let pkg = await __vitePreload(() => import("./index-C8Mub6_Z.js").then((n) => n.i), true ? [] : void 0);
    return pkg;
  },
  "react-dom": async () => {
    let pkg = await __vitePreload(() => import("./index-tgP6Fwpo.js").then((n) => n.i), true ? [] : void 0);
    return pkg;
  },
  "react-router-dom": async () => {
    let pkg = await __vitePreload(() => import("./index-C1n7ShU3.js"), true ? [] : void 0);
    return pkg;
  },
  "react/jsx-runtime": async () => {
    let pkg = await __vitePreload(() => import("./jsx-runtime-CoK3-yOg.js").then((n) => n.j), true ? [] : void 0);
    return pkg;
  },
  "use-sync-external-store": async () => {
    let pkg = await __vitePreload(() => import("./index-Bn9FHVdA.js").then((n) => n.i), true ? [] : void 0);
    return pkg;
  },
  "use-sync-external-store/shim/with-selector": async () => {
    let pkg = await __vitePreload(() => import("./with-selector-BTXW8qwH.js").then((n) => n.w), true ? [] : void 0);
    return pkg;
  }
};
const usedShared = {
  "react": {
    name: "react",
    version: "19.0.0",
    scope: ["default"],
    loaded: false,
    from: "drive",
    async get() {
      usedShared["react"].loaded = true;
      const { "react": pkgDynamicImport } = importMap;
      const res = await pkgDynamicImport();
      const exportModule = { ...res };
      Object.defineProperty(exportModule, "__esModule", {
        value: true,
        enumerable: false
      });
      return function() {
        return exportModule;
      };
    },
    shareConfig: {
      singleton: true,
      requiredVersion: "^19.0.0"
    }
  },
  "react-dom": {
    name: "react-dom",
    version: "19.0.0",
    scope: ["default"],
    loaded: false,
    from: "drive",
    async get() {
      usedShared["react-dom"].loaded = true;
      const { "react-dom": pkgDynamicImport } = importMap;
      const res = await pkgDynamicImport();
      const exportModule = { ...res };
      Object.defineProperty(exportModule, "__esModule", {
        value: true,
        enumerable: false
      });
      return function() {
        return exportModule;
      };
    },
    shareConfig: {
      singleton: true,
      requiredVersion: "^19.0.0"
    }
  },
  "react-router-dom": {
    name: "react-router-dom",
    version: "7.14.0",
    scope: ["default"],
    loaded: false,
    from: "drive",
    async get() {
      usedShared["react-router-dom"].loaded = true;
      const { "react-router-dom": pkgDynamicImport } = importMap;
      const res = await pkgDynamicImport();
      const exportModule = { ...res };
      Object.defineProperty(exportModule, "__esModule", {
        value: true,
        enumerable: false
      });
      return function() {
        return exportModule;
      };
    },
    shareConfig: {
      singleton: true,
      requiredVersion: "^7.14.0"
    }
  },
  "react/jsx-runtime": {
    name: "react/jsx-runtime",
    version: "19.2.4",
    scope: ["default"],
    loaded: false,
    from: "drive",
    async get() {
      usedShared["react/jsx-runtime"].loaded = true;
      const { "react/jsx-runtime": pkgDynamicImport } = importMap;
      const res = await pkgDynamicImport();
      const exportModule = { ...res };
      Object.defineProperty(exportModule, "__esModule", {
        value: true,
        enumerable: false
      });
      return function() {
        return exportModule;
      };
    },
    shareConfig: {
      singleton: true,
      requiredVersion: "^19.2.4"
    }
  },
  "use-sync-external-store": {
    name: "use-sync-external-store",
    version: "1.6.0",
    scope: ["default"],
    loaded: false,
    from: "drive",
    async get() {
      usedShared["use-sync-external-store"].loaded = true;
      const { "use-sync-external-store": pkgDynamicImport } = importMap;
      const res = await pkgDynamicImport();
      const exportModule = { ...res };
      Object.defineProperty(exportModule, "__esModule", {
        value: true,
        enumerable: false
      });
      return function() {
        return exportModule;
      };
    },
    shareConfig: {
      singleton: true,
      requiredVersion: "^1.6.0"
    }
  },
  "use-sync-external-store/shim/with-selector": {
    name: "use-sync-external-store/shim/with-selector",
    version: "1.6.0",
    scope: ["default"],
    loaded: false,
    from: "drive",
    async get() {
      usedShared["use-sync-external-store/shim/with-selector"].loaded = true;
      const { "use-sync-external-store/shim/with-selector": pkgDynamicImport } = importMap;
      const res = await pkgDynamicImport();
      const exportModule = { ...res };
      Object.defineProperty(exportModule, "__esModule", {
        value: true,
        enumerable: false
      });
      return function() {
        return exportModule;
      };
    },
    shareConfig: {
      singleton: true,
      requiredVersion: "^1.6.0"
    }
  }
};
const usedRemotes = [];
export {
  usedRemotes,
  usedShared
};
