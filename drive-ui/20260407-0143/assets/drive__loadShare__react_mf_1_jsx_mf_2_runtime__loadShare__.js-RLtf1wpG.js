const __mfPromiseGlobalKey = "__mf_init____mf__virtual/drive__mf_v__runtimeInit__mf_v__.js__";
let __mfPromiseState = globalThis[__mfPromiseGlobalKey];
if (!__mfPromiseState) {
  let initResolve, initReject;
  const initPromise2 = new Promise((re, rj) => {
    initResolve = re;
    initReject = rj;
  });
  __mfPromiseState = globalThis[__mfPromiseGlobalKey] = {
    initPromise: initPromise2,
    initResolve,
    initReject
  };
  if (typeof window === "undefined") {
    initResolve({
      loadRemote: function() {
        return Promise.resolve(void 0);
      },
      loadShare: function() {
        return Promise.resolve(void 0);
      }
    });
  }
}
const initPromise = __mfPromiseState.initPromise;
const res = initPromise.then((runtime) => runtime.loadShare("react/jsx-runtime", {
  customShareInfo: { shareConfig: {
    singleton: true,
    strictVersion: false,
    requiredVersion: "^19.2.4"
  } }
}));
const exportModule = await res.then((factory) => typeof factory === "function" ? factory() : factory);
exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
const { Fragment: __mf_0, jsx: __mf_1, jsxs: __mf_2 } = exportModule;
export {
  __mf_1 as _,
  __mf_2 as a
};
