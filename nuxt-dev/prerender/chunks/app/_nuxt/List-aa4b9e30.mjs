import { ref, withAsyncContext, reactive, unref, useSSRContext } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { a as useRouter } from '../server.mjs';
import { u as useFetch } from './fetch-3f760c76.mjs';
import { u as useRequestHeaders } from './ssr-a53dbfae.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/ofetch@1.1.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/vue-router@4.2.2_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/h3@1.7.1/node_modules/h3/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/ufo@1.1.2/node_modules/ufo/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/@unhead+ssr@1.1.29/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unhead@1.1.29/node_modules/unhead/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/@unhead+shared@1.1.29/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/node-fetch-native@1.2.0/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unenv@1.5.1/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/ohash@1.1.2/node_modules/ohash/dist/index.mjs';
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
import './asyncData-ddf0e9e2.mjs';

const _sfc_main = {
  __name: "List",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const headers = useRequestHeaders();
    console.log(headers, "headers");
    console.log(process, "process");
    ref([
      {
        title: "title1",
        id: 1
      },
      {
        title: "title1",
        id: 2
      },
      {
        title: "title1",
        id: 3
      }
    ]);
    const { data, pending, refresh, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://app.keepyoga.com/api/v1/article/list",
      {
        query: { page: 1, size: 20 },
        headers: {
          "access-token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTg2MiIsImV4cCI6MTY5MDk0MTk5MX0.FTBxcRpOJC3SIqaqVzialM1XhT8IUfIgIcrv3FtYj44",
          target: 1
        }
      },
      "$Am8GPlA9ee"
    )), __temp = await __temp, __restore(), __temp);
    const dataList = reactive(data.value.data.dataList);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><ul><!--[-->`);
      ssrRenderList(unref(dataList), (item) => {
        _push(`<li><div class="left"><img${ssrRenderAttr("src", item.image)} alt=""></div><div class="right"><h6>${ssrInterpolate(item.title)}</h6><p class="des">${ssrInterpolate(item.describes)}</p><div class="bottom-container"><p class="text"><i class="sprite-icon browse browse-icon"></i><span>${ssrInterpolate(item.readNum)}</span><i class="sprite-icon article_like like-icon"></i><span>${ssrInterpolate(item.praiseNum)}</span></p>`);
        if (item.hadRead == 1) {
          _push(`<span class="time">\u5DF2\u8BFB</span>`);
        } else {
          _push(`<!---->`);
        }
        if (item.hadRead == 0) {
          _push(`<span class="noreader">\u672A\u8BFB</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></li>`);
      });
      _push(`<!--]--></ul><button type="button">go to home</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=List-aa4b9e30.mjs.map
