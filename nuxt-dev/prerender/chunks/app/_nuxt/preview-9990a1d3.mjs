import { ref } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { b as useRoute, e as useNuxtApp } from '../server.mjs';
import { parse } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';
import { setCookie, getCookie, deleteCookie } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/h3@1.7.1/node_modules/h3/dist/index.mjs';
import destr from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import { isEqual } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/ohash@1.1.2/node_modules/ohash/dist/index.mjs';
import { b as useRequestEvent } from './ssr-a53dbfae.mjs';

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_a2 = cookies[name]) != null ? _a2 : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.node.req.headers.cookie) || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const useContentPreview = () => {
  const getPreviewToken = () => {
    return useCookie("previewToken").value || false || void 0;
  };
  const setPreviewToken = (token) => {
    useCookie("previewToken").value = token;
    useRoute().query.preview = token || "";
  };
  const isEnabled = () => {
    const query = useRoute().query;
    if (Object.prototype.hasOwnProperty.call(query, "preview") && !query.preview) {
      return false;
    }
    if (query.preview || useCookie("previewToken").value) {
      return true;
    }
    return false;
  };
  return {
    isEnabled,
    getPreviewToken,
    setPreviewToken
  };
};

export { useContentPreview as u };
//# sourceMappingURL=preview-9990a1d3.mjs.map
