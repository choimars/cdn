import { _ as __mf_1, a as __mf_2 } from "./drive__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-RLtf1wpG.js";
import { g as __mf_16, b as __mf_14, s as React3, c as __mf_37, j as __mf_28, k as __mf_13$1, _ as __mf_25 } from "./drive__loadShare__react__loadShare__.js-Ci9JbhqK.js";
import { a as __mf_116, b as __mf_21, c as __mf_17, d as __mf_13, e as __mf_121 } from "./drive__loadShare__react_mf_2_router_mf_2_dom__loadShare__.js-D6UqKDyg.js";
import { u as useSyncExternalStoreExports } from "./with-selector-BTXW8qwH.js";
import "./drive__loadShare__react__loadShare__.js_commonjs-proxy-Dx5sebzO.js";
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && array.indexOf(className) === index;
}).join(" ");
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = __mf_16(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return __mf_14(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => __mf_14(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = __mf_16(
    ({ className, ...props }, ref) => __mf_14(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const File = createLucideIcon("File", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FolderPlus = createLucideIcon("FolderPlus", [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Folder = createLucideIcon("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LoaderCircle = createLucideIcon("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LogOut = createLucideIcon("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trash2 = createLucideIcon("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Upload = createLucideIcon("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
const __vite_import_meta_env__$1 = {};
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((__vite_import_meta_env__$1 ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, getInitialState, subscribe, destroy };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
const __vite_import_meta_env__ = {};
const { useDebugValue } = React3;
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
let didWarnAboutEqualityFn = false;
const identity = (arg) => arg;
function useStore(api, selector = identity, equalityFn) {
  if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if ((__vite_import_meta_env__ ? "production" : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
function createApiClient(baseUrl, token) {
  function getCsrfToken() {
    var _a;
    return ((_a = document.cookie.split("; ").find((row) => row.startsWith("oxicloud_csrf="))) == null ? void 0 : _a.split("=")[1]) ?? "";
  }
  const headers = (withCsrf = false) => ({
    ...token ? { "Authorization": `Bearer ${token}` } : {},
    "Content-Type": "application/json",
    ...withCsrf ? { "X-CSRF-Token": getCsrfToken() } : {}
  });
  async function request(method, path, body) {
    const needsCsrf = ["POST", "PUT", "DELETE", "PATCH"].includes(method);
    const res = await fetch(`${baseUrl}${path}`, {
      method,
      headers: headers(needsCsrf),
      credentials: "include",
      body: body ? JSON.stringify(body) : void 0
    });
    if (res.status === 204) return void 0;
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`[${res.status}] ${path}: ${text}`);
    }
    return res.json();
  }
  return {
    get: (path) => request("GET", path),
    post: (path, body) => request("POST", path, body),
    put: (path, body) => request("PUT", path, body),
    delete: (path) => request("DELETE", path),
    async upload(path, file, onProgress) {
      return new Promise((resolve, reject) => {
        const qIdx = path.indexOf("?");
        const cleanPath = qIdx >= 0 ? path.slice(0, qIdx) : path;
        const queryStr = qIdx >= 0 ? path.slice(qIdx + 1) : "";
        const params = new URLSearchParams(queryStr);
        const folderId = params.get("folder_id");
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${baseUrl}${cleanPath}`);
        if (token) xhr.setRequestHeader("Authorization", `Bearer ${token}`);
        xhr.setRequestHeader("X-CSRF-Token", getCsrfToken());
        xhr.withCredentials = true;
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable && onProgress) {
            onProgress(Math.round(e.loaded / e.total * 100));
          }
        };
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(new Error(`Upload failed: ${xhr.status}`));
          }
        };
        xhr.onerror = () => reject(new Error("Upload network error"));
        const formData = new FormData();
        if (folderId) formData.append("folder_id", folderId);
        formData.append("file", file);
        xhr.send(formData);
      });
    }
  };
}
const useDriveStore = create((set, get) => ({
  client: null,
  currentFolderId: null,
  homeFolderId: null,
  folders: [],
  files: [],
  isLoading: false,
  error: null,
  selectedIds: /* @__PURE__ */ new Set(),
  init(baseUrl, token) {
    const client = createApiClient(baseUrl, token);
    set({ client });
    client.get("/folders").then((rootFolders) => {
      const arr = Array.isArray(rootFolders) ? rootFolders : [];
      if (arr.length >= 1) {
        set({ homeFolderId: arr[0].id });
      }
    }).catch(() => {
    });
  },
  async loadFolder(folderId) {
    const { client } = get();
    if (!client) return;
    set({ isLoading: true, error: null, currentFolderId: folderId });
    try {
      const [folders, files] = await Promise.all([
        folderId ? client.get(`/folders/${folderId}/contents`) : client.get("/folders"),
        client.get(`/files${folderId ? `?folder_id=${folderId}` : ""}`)
      ]);
      set({
        folders: Array.isArray(folders) ? folders : [],
        files: Array.isArray(files) ? files : [],
        isLoading: false
      });
    } catch (e) {
      set({ error: String(e), isLoading: false });
    }
  },
  async createFolder(name, parentId) {
    const { client, loadFolder, currentFolderId } = get();
    if (!client) return;
    try {
      await client.post("/folders", { name, parent_id: parentId });
      await loadFolder(currentFolderId);
    } catch (e) {
      const msg = String(e);
      if (msg.includes("409") || msg.toLowerCase().includes("already exists")) {
        throw new Error(`'${name}' 폴더가 이미 존재합니다.`);
      }
      throw e;
    }
  },
  async deleteFolder(id) {
    const { client, loadFolder, currentFolderId } = get();
    if (!client) return;
    await client.delete(`/folders/${id}`);
    await loadFolder(currentFolderId);
  },
  async uploadFile(file, folderId, onProgress) {
    const { client, loadFolder, currentFolderId } = get();
    if (!client) return;
    if (!folderId) {
      throw new Error("폴더를 먼저 선택하거나 새 폴더를 만들어 주세요.");
    }
    await client.upload(
      `/files/upload?folder_id=${folderId}`,
      file,
      onProgress
    );
    await loadFolder(currentFolderId);
  },
  async deleteFile(id) {
    const { client, loadFolder, currentFolderId } = get();
    if (!client) return;
    await client.delete(`/files/${id}`);
    await loadFolder(currentFolderId);
  },
  selectItem(id, multi = false) {
    set((s) => {
      const next = new Set(multi ? s.selectedIds : []);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return { selectedIds: next };
    });
  },
  clearSelection() {
    set({ selectedIds: /* @__PURE__ */ new Set() });
  }
}));
function startLogin() {
  window.location.href = "/polyon/auth/login";
}
async function checkSession() {
  try {
    const res = await fetch("/api/auth/me", { credentials: "include" });
    return res.ok;
  } catch {
    return false;
  }
}
async function logout() {
  try {
    const res = await fetch("/polyon/auth/logout", {
      method: "POST",
      credentials: "include"
    });
    if (res.ok) {
      const data = await res.json().catch(() => ({}));
      if (data.logout_url) {
        window.location.href = data.logout_url;
        return;
      }
    }
  } catch {
  }
  window.location.href = "/polyon/auth/login";
}
let sessionPollInterval = null;
function startSessionPolling(intervalMs = 1e4) {
  if (sessionPollInterval) return;
  sessionPollInterval = setInterval(async () => {
    const valid = await checkSession();
    if (!valid) {
      stopSessionPolling();
      startLogin();
    }
  }, intervalMs);
}
function stopSessionPolling() {
  if (sessionPollInterval) {
    clearInterval(sessionPollInterval);
    sessionPollInterval = null;
  }
}
function FileExplorer() {
  const {
    folders,
    files,
    isLoading,
    error,
    currentFolderId,
    homeFolderId,
    createFolder,
    deleteFolder,
    uploadFile,
    deleteFile,
    selectedIds,
    selectItem,
    clearSelection
  } = useDriveStore();
  const navigate = __mf_116();
  const basePath = useBasePath();
  const fileInputRef = __mf_37(null);
  const navigateToFolder = (folderId) => {
    navigate(`${basePath}/folders/${folderId}`);
  };
  const navigateBack = () => {
    if (homeFolderId) {
      navigate(`${basePath}/folders/${homeFolderId}`);
    }
  };
  const handleUpload = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    if (!currentFolderId) {
      alert("폴더를 먼저 더블클릭해서 열고 업로드해 주세요.\n(루트에는 직접 업로드할 수 없습니다)");
      e.target.value = "";
      return;
    }
    await uploadFile(file, currentFolderId);
    e.target.value = "";
  };
  const handleNewFolder = async () => {
    const name = window.prompt("새 폴더 이름");
    if (!(name == null ? void 0 : name.trim())) return;
    try {
      await createFolder(name.trim(), currentFolderId);
    } catch (e) {
      alert(String(e).replace("Error: ", ""));
    }
  };
  if (isLoading) return /* @__PURE__ */ __mf_1("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ __mf_1(LoaderCircle, { className: "animate-spin text-blue-500", size: 32 }) });
  if (error) return /* @__PURE__ */ __mf_1("div", { className: "flex flex-1 items-center justify-center text-red-500 text-sm p-8", children: error });
  return /* @__PURE__ */ __mf_2("div", { className: "flex flex-col flex-1 min-h-0 p-4 gap-3", onClick: () => clearSelection(), children: [
    /* @__PURE__ */ __mf_2("div", { className: "flex items-center gap-2", children: [
      currentFolderId && currentFolderId !== homeFolderId && /* @__PURE__ */ __mf_2(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            navigateBack();
          },
          className: "flex items-center gap-1 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded",
          children: [
            /* @__PURE__ */ __mf_1(ArrowLeft, { size: 15 }),
            " 뒤로"
          ]
        }
      ),
      /* @__PURE__ */ __mf_1("div", { className: "flex-1" }),
      /* @__PURE__ */ __mf_2(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            handleNewFolder();
          },
          className: "flex items-center gap-1 px-3 py-1.5 text-sm bg-white border border-gray-200 rounded hover:bg-gray-50",
          children: [
            /* @__PURE__ */ __mf_1(FolderPlus, { size: 14 }),
            " 새 폴더"
          ]
        }
      ),
      /* @__PURE__ */ __mf_2(
        "button",
        {
          onClick: (e) => {
            var _a;
            e.stopPropagation();
            (_a = fileInputRef.current) == null ? void 0 : _a.click();
          },
          className: "flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700",
          children: [
            /* @__PURE__ */ __mf_1(Upload, { size: 14 }),
            " 업로드"
          ]
        }
      ),
      /* @__PURE__ */ __mf_1("input", { ref: fileInputRef, type: "file", className: "hidden", onChange: handleUpload }),
      /* @__PURE__ */ __mf_2(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            logout();
          },
          className: "flex items-center gap-1 px-3 py-1.5 text-sm text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded",
          children: [
            /* @__PURE__ */ __mf_1(LogOut, { size: 14 }),
            " 로그아웃"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ __mf_1("div", { className: "flex-1 overflow-auto", children: folders.length === 0 && files.length === 0 ? /* @__PURE__ */ __mf_2("div", { className: "flex flex-col items-center justify-center h-40 text-gray-400 text-sm", children: [
      /* @__PURE__ */ __mf_1(Folder, { size: 32, className: "mb-2 opacity-50" }),
      "비어있습니다"
    ] }) : /* @__PURE__ */ __mf_2("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2", children: [
      folders.map((folder) => /* @__PURE__ */ __mf_2(
        "div",
        {
          onClick: (e) => {
            e.stopPropagation();
            selectItem(folder.id);
          },
          onDoubleClick: () => navigateToFolder(folder.id),
          className: `flex flex-col items-center p-3 rounded-lg cursor-pointer group select-none
                  ${selectedIds.has(folder.id) ? "bg-blue-100 ring-2 ring-blue-400" : "hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ __mf_1(Folder, { size: 36, className: "text-yellow-400 mb-1", fill: "currentColor" }),
            /* @__PURE__ */ __mf_1("span", { className: "text-xs text-center text-gray-700 truncate w-full", children: folder.name }),
            selectedIds.has(folder.id) && /* @__PURE__ */ __mf_1(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  deleteFolder(folder.id);
                },
                className: "mt-1 text-red-500 hover:text-red-700",
                children: /* @__PURE__ */ __mf_1(Trash2, { size: 12 })
              }
            )
          ]
        },
        folder.id
      )),
      files.map((file) => /* @__PURE__ */ __mf_2(
        "div",
        {
          onClick: (e) => {
            e.stopPropagation();
            selectItem(file.id);
          },
          className: `flex flex-col items-center p-3 rounded-lg cursor-pointer select-none
                  ${selectedIds.has(file.id) ? "bg-blue-100 ring-2 ring-blue-400" : "hover:bg-gray-100"}`,
          children: [
            /* @__PURE__ */ __mf_1(File, { size: 36, className: "text-gray-400 mb-1" }),
            /* @__PURE__ */ __mf_1("span", { className: "text-xs text-center text-gray-700 truncate w-full", children: file.name }),
            /* @__PURE__ */ __mf_2("span", { className: "text-xs text-gray-400", children: [
              (file.size / 1024).toFixed(0),
              "KB"
            ] }),
            selectedIds.has(file.id) && /* @__PURE__ */ __mf_1(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  deleteFile(file.id);
                },
                className: "mt-1 text-red-500 hover:text-red-700",
                children: /* @__PURE__ */ __mf_1(Trash2, { size: 12 })
              }
            )
          ]
        },
        file.id
      ))
    ] }) })
  ] });
}
const BasePathContext = __mf_13$1("");
const useBasePath = () => __mf_25(BasePathContext);
function FolderView() {
  const { folderId } = __mf_121();
  const { loadFolder, client } = useDriveStore();
  __mf_28(() => {
    if (client && folderId) {
      loadFolder(folderId);
    }
  }, [client, folderId, loadFolder]);
  return /* @__PURE__ */ __mf_1(FileExplorer, {});
}
function HomeRedirect() {
  const { client, homeFolderId } = useDriveStore();
  const navigate = __mf_116();
  const basePath = useBasePath();
  __mf_28(() => {
    if (client && homeFolderId) {
      navigate(`${basePath}/folders/${homeFolderId}`, { replace: true });
    }
  }, [client, homeFolderId, navigate, basePath]);
  return /* @__PURE__ */ __mf_1("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ __mf_1("div", { className: "w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" }) });
}
function App({ token, baseUrl = "/api", basePath = "" }) {
  const { init } = useDriveStore();
  __mf_28(() => {
    init(baseUrl, token);
  }, [baseUrl, token, init]);
  return /* @__PURE__ */ __mf_1(BasePathContext.Provider, { value: basePath, children: /* @__PURE__ */ __mf_1("div", { className: "flex h-full w-full bg-gray-50 overflow-hidden", children: /* @__PURE__ */ __mf_2(__mf_21, { children: [
    /* @__PURE__ */ __mf_1(__mf_17, { index: true, element: /* @__PURE__ */ __mf_1(HomeRedirect, {}) }),
    /* @__PURE__ */ __mf_1(__mf_17, { path: "folders/:folderId", element: /* @__PURE__ */ __mf_1(FolderView, {}) }),
    /* @__PURE__ */ __mf_1(__mf_17, { path: "*", element: /* @__PURE__ */ __mf_1(__mf_13, { to: "", replace: true }) })
  ] }) }) });
}
const expose = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DriveApp: App
}, Symbol.toStringTag, { value: "Module" }));
export {
  App as A,
  startSessionPolling as a,
  checkSession as c,
  expose as e,
  startLogin as s
};
