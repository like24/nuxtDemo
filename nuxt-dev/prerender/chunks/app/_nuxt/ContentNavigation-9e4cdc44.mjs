import { defineComponent, toRefs, computed, useSlots, useSSRContext, h } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { u as useAsyncData } from './asyncData-ddf0e9e2.mjs';
import { f as useState, d as useRuntimeConfig } from '../server.mjs';
import { hash } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/ohash@1.1.2/node_modules/ohash/dist/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-744fccd2.mjs';
import { q as queryContent, e as encodeQueryParams, j as jsonStringify } from './query-96e61de4.mjs';
import { u as useContentDisabled, w as withContentBase, a as addPrerenderPath, s as shouldUseClientDB } from './utils-49fe4d55.mjs';
import { u as useContentPreview } from './preview-9990a1d3.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/ofetch@1.1.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/vue-router@4.2.2_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/h3@1.7.1/node_modules/h3/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/ufo@1.1.2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/@unhead+ssr@1.1.29/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unhead@1.1.29/node_modules/unhead/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/@unhead+shared@1.1.29/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/node-fetch-native@1.2.0/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unenv@1.5.1/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unstorage@1.7.0/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unstorage@1.7.0/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/radix3@1.0.1/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/pathe@1.1.1/node_modules/pathe/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/mdast-util-to-string@3.2.0/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/micromark@3.2.0/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unist-util-stringify-position@3.0.3/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/micromark-util-character@1.2.0/node_modules/micromark-util-character/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/micromark-util-chunked@1.1.0/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/micromark-util-resolve-all@1.1.0/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/remark-emoji@3.1.1/node_modules/remark-emoji/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/rehype-slug@5.1.0/node_modules/rehype-slug/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/remark-squeeze-paragraphs@5.0.1/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/rehype-external-links@2.1.0/node_modules/rehype-external-links/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/rehype-sort-attribute-values@4.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/rehype-sort-attributes@4.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/remark-mdc@1.1.3/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/remark-parse@10.0.2/node_modules/remark-parse/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/mdast-util-to-hast@12.3.0/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/detab@3.0.2/node_modules/detab/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unist-builder@3.0.1/node_modules/unist-builder/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/mdurl@1.0.1/node_modules/mdurl/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unist-util-position@4.0.4/node_modules/unist-util-position/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unist-util-visit@4.1.2/node_modules/unist-util-visit/index.js';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/shiki-es@0.2.0/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unenv@1.5.1/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/ipx@1.2.0/node_modules/ipx/dist/index.mjs';
import './ssr-a53dbfae.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/cookie-es@1.0.0/node_modules/cookie-es/dist/index.mjs';

const fetchContentNavigation = async (queryBuilder) => {
  const { content } = useRuntimeConfig().public;
  if (typeof (queryBuilder == null ? void 0 : queryBuilder.params) !== "function") {
    queryBuilder = queryContent(queryBuilder);
  }
  const params = queryBuilder.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/navigation/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/navigation/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import('./client-db-0f0d1077.mjs').then((m) => m.generateNavigation);
    return generateNavigation(params);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useContentPreview().getPreviewToken()
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "ContentNavigation",
  props: {
    /**
     * A query to be passed to `fetchContentNavigation()`.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = toRefs(props);
    const queryBuilder = computed(() => {
      var _a;
      if (typeof ((_a = query.value) == null ? void 0 : _a.params) === "function") {
        return query.value.params();
      }
      return query.value;
    });
    if (!queryBuilder.value && useState("dd-navigation").value) {
      const { navigation: navigation2 } = useContentDisabled();
      return { navigation: navigation2 };
    }
    const { data: navigation } = await useAsyncData(
      `content-navigation-${hash(queryBuilder.value)}`,
      () => fetchContentNavigation(queryBuilder.value)
    );
    return { navigation };
  },
  /**
   * Navigation empty fallback
   * @slot empty
   */
  render(ctx) {
    const slots = useSlots();
    const { navigation } = ctx;
    const renderLink = (link) => h(__nuxt_component_0, { to: link._path }, () => link.title);
    const renderLinks = (data, level) => h(
      "ul",
      level ? { "data-level": level } : null,
      data.map((link) => {
        if (link.children) {
          return h("li", null, [renderLink(link), renderLinks(link.children, level + 1)]);
        }
        return h("li", null, renderLink(link));
      })
    );
    const defaultNode = (data) => renderLinks(data, 0);
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation, ...this.$attrs }) : defaultNode(navigation);
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+content@2.7.0/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentNavigation-9e4cdc44.mjs.map
