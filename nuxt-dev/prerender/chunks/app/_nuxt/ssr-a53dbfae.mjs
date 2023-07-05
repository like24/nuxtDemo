import { e as useNuxtApp } from '../server.mjs';

function useRequestHeaders(include) {
  var _a2;
  var _a;
  const headers = (_a2 = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event.node.req.headers) != null ? _a2 : {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  const event = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event;
  return (event == null ? void 0 : event.$fetch) || globalThis.$fetch;
}

export { useRequestFetch as a, useRequestEvent as b, useRequestHeaders as u };
//# sourceMappingURL=ssr-a53dbfae.mjs.map
