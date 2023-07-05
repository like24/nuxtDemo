import { ref, reactive, createVNode, unref, withCtx, createTextVNode, useSSRContext, defineComponent, computed, inject, mergeProps, h, createElementBlock, Transition, watch, nextTick, provide, Teleport, Fragment, onUnmounted, defineAsyncComponent, getCurrentInstance, withDirectives, vShow, onActivated } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { a as useRouter, u as useHead, e as useNuxtApp, d as useRuntimeConfig } from '../server.mjs';
import { defu } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import { encodeParam, hasProtocol, withLeadingSlash, joinURL, parseURL, encodePath } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/ufo@1.1.2/node_modules/ufo/dist/index.mjs';
import { appendHeader } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/h3@1.7.1/node_modules/h3/dist/index.mjs';
import { b as useRequestEvent } from './ssr-a53dbfae.mjs';
import { ssrRenderComponent } from 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/ofetch@1.1.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/vue-router@4.2.2_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/@unhead+ssr@1.1.29/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/unhead@1.1.29/node_modules/unhead/dist/index.mjs';
import 'file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/@unhead+shared@1.1.29/node_modules/@unhead/shared/dist/index.mjs';
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

const isDef = (val) => val !== void 0 && val !== null;
const isFunction = (val) => typeof val === "function";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch);
const isNumeric = (val) => typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
function noop() {
}
const extend = Object.assign;
function get(object, path) {
  const keys = path.split(".");
  let result = object;
  keys.forEach((key) => {
    var _a;
    result = isObject(result) ? (_a = result[key]) != null ? _a : "" : "";
  });
  return result;
}
function pick(obj, keys, ignoreUndefined) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== void 0) {
      ret[key] = obj[key];
    }
    return ret;
  }, {});
}
const unknownProp = null;
const numericProp = [Number, String];
const truthProp = {
  type: Boolean,
  default: true
};
const makeNumberProp = (defaultVal) => ({
  type: Number,
  default: defaultVal
});
const makeStringProp = (defaultVal) => ({
  type: String,
  default: defaultVal
});
function onMountedOrActivated(hook) {
  onActivated(() => {
  });
}
var width;
var height;
function useWindowSize() {
  if (!width) {
    width = ref(0);
    height = ref(0);
  }
  return { width, height };
}
var overflowScrollReg = /scroll|auto|overlay/i;
var defaultRoot = void 0;
function isElement(node) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== "HTML" && node.tagName !== "BODY" && node.nodeType === ELEMENT_NODE_TYPE;
}
function getScrollParent(el, root = defaultRoot) {
  let node = el;
  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode;
  }
  return root;
}
const stopPropagation = (event) => event.stopPropagation();
function preventDefault(event, isStopPropagation) {
  if (typeof event.cancelable !== "boolean" || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}
useWindowSize();
function addUnit(value) {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value);
  }
  return void 0;
}
function getSizeStyle(originSize) {
  if (isDef(originSize)) {
    if (Array.isArray(originSize)) {
      return {
        width: addUnit(originSize[0]),
        height: addUnit(originSize[1])
      };
    }
    const size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
}
function getZIndexStyle(zIndex) {
  const style = {};
  if (zIndex !== void 0) {
    style.zIndex = +zIndex;
  }
  return style;
}
const camelizeRE = /-(\w)/g;
const camelize = (str) => str.replace(camelizeRE, (_, c) => c.toUpperCase());
const { hasOwnProperty } = Object.prototype;
function assignKey(to, from, key) {
  const val = from[key];
  if (!isDef(val)) {
    return;
  }
  if (!hasOwnProperty.call(to, key) || !isObject(val)) {
    to[key] = val;
  } else {
    to[key] = deepAssign(Object(to[key]), val);
  }
}
function deepAssign(to, from) {
  Object.keys(from).forEach((key) => {
    assignKey(to, from, key);
  });
  return to;
}
var stdin_default$9 = {
  name: "\u59D3\u540D",
  tel: "\u7535\u8BDD",
  save: "\u4FDD\u5B58",
  clear: "\u6E05\u7A7A",
  cancel: "\u53D6\u6D88",
  confirm: "\u786E\u8BA4",
  delete: "\u5220\u9664",
  loading: "\u52A0\u8F7D\u4E2D...",
  noCoupon: "\u6682\u65E0\u4F18\u60E0\u5238",
  nameEmpty: "\u8BF7\u586B\u5199\u59D3\u540D",
  addContact: "\u6DFB\u52A0\u8054\u7CFB\u4EBA",
  telInvalid: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",
  vanCalendar: {
    end: "\u7ED3\u675F",
    start: "\u5F00\u59CB",
    title: "\u65E5\u671F\u9009\u62E9",
    weekdays: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
    monthTitle: (year, month) => `${year}\u5E74${month}\u6708`,
    rangePrompt: (maxRange) => `\u6700\u591A\u9009\u62E9 ${maxRange} \u5929`
  },
  vanCascader: {
    select: "\u8BF7\u9009\u62E9"
  },
  vanPagination: {
    prev: "\u4E0A\u4E00\u9875",
    next: "\u4E0B\u4E00\u9875"
  },
  vanPullRefresh: {
    pulling: "\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",
    loosing: "\u91CA\u653E\u5373\u53EF\u5237\u65B0..."
  },
  vanSubmitBar: {
    label: "\u5408\u8BA1:"
  },
  vanCoupon: {
    unlimited: "\u65E0\u95E8\u69DB",
    discount: (discount) => `${discount}\u6298`,
    condition: (condition) => `\u6EE1${condition}\u5143\u53EF\u7528`
  },
  vanCouponCell: {
    title: "\u4F18\u60E0\u5238",
    count: (count) => `${count}\u5F20\u53EF\u7528`
  },
  vanCouponList: {
    exchange: "\u5151\u6362",
    close: "\u4E0D\u4F7F\u7528",
    enable: "\u53EF\u7528",
    disabled: "\u4E0D\u53EF\u7528",
    placeholder: "\u8F93\u5165\u4F18\u60E0\u7801"
  },
  vanAddressEdit: {
    area: "\u5730\u533A",
    areaEmpty: "\u8BF7\u9009\u62E9\u5730\u533A",
    addressEmpty: "\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",
    addressDetail: "\u8BE6\u7EC6\u5730\u5740",
    defaultAddress: "\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"
  },
  vanAddressList: {
    add: "\u65B0\u589E\u5730\u5740"
  }
};
const lang = ref("zh-CN");
const messages = reactive({
  "zh-CN": stdin_default$9
});
const Locale = {
  messages() {
    return messages[lang.value];
  },
  use(newLang, newMessages) {
    lang.value = newLang;
    this.add({ [newLang]: newMessages });
  },
  add(newMessages = {}) {
    deepAssign(messages, newMessages);
  }
};
var stdin_default$8 = Locale;
function createTranslate(name2) {
  const prefix = camelize(name2) + ".";
  return (path, ...args) => {
    const messages2 = stdin_default$8.messages();
    const message = get(messages2, prefix + path) || get(messages2, path);
    return isFunction(message) ? message(...args) : message;
  };
}
function genBem(name2, mods) {
  if (!mods) {
    return "";
  }
  if (typeof mods === "string") {
    return ` ${name2}--${mods}`;
  }
  if (Array.isArray(mods)) {
    return mods.reduce(
      (ret, item) => ret + genBem(name2, item),
      ""
    );
  }
  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? genBem(name2, key) : ""),
    ""
  );
}
function createBEM(name2) {
  return (el, mods) => {
    if (el && typeof el !== "string") {
      mods = el;
      el = "";
    }
    el = el ? `${name2}__${el}` : name2;
    return `${el}${genBem(el, mods)}`;
  };
}
function createNamespace(name2) {
  const prefixedName = `van-${name2}`;
  return [
    prefixedName,
    createBEM(prefixedName),
    createTranslate(prefixedName)
  ];
}
const BORDER = "van-hairline";
const BORDER_SURROUND = `${BORDER}--surround`;
const HAPTICS_FEEDBACK = "van-haptics-feedback";
const TAP_OFFSET = 5;
function callInterceptor(interceptor, {
  args = [],
  done,
  canceled
}) {
  if (interceptor) {
    const returnVal = interceptor.apply(null, args);
    if (isPromise(returnVal)) {
      returnVal.then((value) => {
        if (value) {
          done();
        } else if (canceled) {
          canceled();
        }
      }).catch(noop);
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}
function withInstall(options) {
  options.install = (app) => {
    const { name: name2 } = options;
    if (name2) {
      app.component(name2, options);
      app.component(camelize(`-${name2}`), options);
    }
  };
  return options;
}
const routeProps = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function route({
  to,
  url,
  replace,
  $router: router
}) {
  if (to && router) {
    router[replace ? "replace" : "push"](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function useRoute() {
  const vm = getCurrentInstance().proxy;
  return () => route(vm);
}
const [name$8, bem$8] = createNamespace("badge");
const badgeProps = {
  dot: Boolean,
  max: numericProp,
  tag: makeStringProp("div"),
  color: String,
  offset: Array,
  content: numericProp,
  showZero: truthProp,
  position: makeStringProp("top-right")
};
var stdin_default$7 = /* @__PURE__ */ defineComponent({
  name: name$8,
  props: badgeProps,
  setup(props, {
    slots
  }) {
    const hasContent = () => {
      if (slots.content) {
        return true;
      }
      const {
        content,
        showZero
      } = props;
      return isDef(content) && content !== "" && (showZero || content !== 0 && content !== "0");
    };
    const renderContent = () => {
      const {
        dot,
        max,
        content
      } = props;
      if (!dot && hasContent()) {
        if (slots.content) {
          return slots.content();
        }
        if (isDef(max) && isNumeric(content) && +content > +max) {
          return `${max}+`;
        }
        return content;
      }
    };
    const getOffsetWithMinusString = (val) => val.startsWith("-") ? val.replace("-", "") : `-${val}`;
    const style = computed(() => {
      const style2 = {
        background: props.color
      };
      if (props.offset) {
        const [x, y] = props.offset;
        const {
          position
        } = props;
        const [offsetY, offsetX] = position.split("-");
        if (slots.default) {
          if (typeof y === "number") {
            style2[offsetY] = addUnit(offsetY === "top" ? y : -y);
          } else {
            style2[offsetY] = offsetY === "top" ? addUnit(y) : getOffsetWithMinusString(y);
          }
          if (typeof x === "number") {
            style2[offsetX] = addUnit(offsetX === "left" ? x : -x);
          } else {
            style2[offsetX] = offsetX === "left" ? addUnit(x) : getOffsetWithMinusString(x);
          }
        } else {
          style2.marginTop = addUnit(y);
          style2.marginLeft = addUnit(x);
        }
      }
      return style2;
    });
    const renderBadge = () => {
      if (hasContent() || props.dot) {
        return createVNode("div", {
          "class": bem$8([props.position, {
            dot: props.dot,
            fixed: !!slots.default
          }]),
          "style": style.value
        }, [renderContent()]);
      }
    };
    return () => {
      if (slots.default) {
        const {
          tag
        } = props;
        return createVNode(tag, {
          "class": bem$8("wrapper")
        }, {
          default: () => [slots.default(), renderBadge()]
        });
      }
      return renderBadge();
    };
  }
});
const Badge = withInstall(stdin_default$7);
let globalZIndex = 2e3;
const useGlobalZIndex = () => ++globalZIndex;
const [name$7, bem$7] = createNamespace("config-provider");
const CONFIG_PROVIDER_KEY = Symbol(name$7);
const [name$6, bem$6] = createNamespace("icon");
const isImage = (name2) => name2 == null ? void 0 : name2.includes("/");
const iconProps = {
  dot: Boolean,
  tag: makeStringProp("i"),
  name: String,
  size: numericProp,
  badge: numericProp,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var stdin_default$6 = /* @__PURE__ */ defineComponent({
  name: name$6,
  props: iconProps,
  setup(props, {
    slots
  }) {
    const config = inject(CONFIG_PROVIDER_KEY, null);
    const classPrefix = computed(() => props.classPrefix || (config == null ? void 0 : config.iconPrefix) || bem$6());
    return () => {
      const {
        tag,
        dot,
        name: name2,
        size,
        badge,
        color
      } = props;
      const isImageIcon = isImage(name2);
      return createVNode(Badge, mergeProps({
        "dot": dot,
        "tag": tag,
        "class": [classPrefix.value, isImageIcon ? "" : `${classPrefix.value}-${name2}`],
        "style": {
          color,
          fontSize: addUnit(size)
        },
        "content": badge
      }, props.badgeProps), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots), isImageIcon && createVNode("img", {
            "class": bem$6("image"),
            "src": name2
          }, null)];
        }
      });
    };
  }
});
const Icon = withInstall(stdin_default$6);
const [name$5, bem$5] = createNamespace("loading");
const SpinIcon = Array(12).fill(null).map((_, index2) => createVNode("i", {
  "class": bem$5("line", String(index2 + 1))
}, null));
const CircularIcon = createVNode("svg", {
  "class": bem$5("circular"),
  "viewBox": "25 25 50 50"
}, [createVNode("circle", {
  "cx": "50",
  "cy": "50",
  "r": "20",
  "fill": "none"
}, null)]);
const loadingProps = {
  size: numericProp,
  type: makeStringProp("circular"),
  color: String,
  vertical: Boolean,
  textSize: numericProp,
  textColor: String
};
var stdin_default$5 = /* @__PURE__ */ defineComponent({
  name: name$5,
  props: loadingProps,
  setup(props, {
    slots
  }) {
    const spinnerStyle = computed(() => extend({
      color: props.color
    }, getSizeStyle(props.size)));
    const renderIcon = () => {
      const DefaultIcon = props.type === "spinner" ? SpinIcon : CircularIcon;
      return createVNode("span", {
        "class": bem$5("spinner", props.type),
        "style": spinnerStyle.value
      }, [slots.icon ? slots.icon() : DefaultIcon]);
    };
    const renderText = () => {
      var _a;
      if (slots.default) {
        return createVNode("span", {
          "class": bem$5("text"),
          "style": {
            fontSize: addUnit(props.textSize),
            color: (_a = props.textColor) != null ? _a : props.color
          }
        }, [slots.default()]);
      }
    };
    return () => {
      const {
        type,
        vertical
      } = props;
      return createVNode("div", {
        "class": bem$5([type, {
          vertical
        }]),
        "aria-live": "polite",
        "aria-busy": true
      }, [renderIcon(), renderText()]);
    };
  }
});
const Loading = withInstall(stdin_default$5);
const [name$4, bem$4] = createNamespace("button");
const buttonProps = extend({}, routeProps, {
  tag: makeStringProp("button"),
  text: String,
  icon: String,
  type: makeStringProp("default"),
  size: makeStringProp("normal"),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: makeStringProp("button"),
  loadingSize: numericProp,
  loadingText: String,
  loadingType: String,
  iconPosition: makeStringProp("left")
});
var stdin_default$4 = /* @__PURE__ */ defineComponent({
  name: name$4,
  props: buttonProps,
  emits: ["click"],
  setup(props, {
    emit,
    slots
  }) {
    const route2 = useRoute();
    const renderLoadingIcon = () => {
      if (slots.loading) {
        return slots.loading();
      }
      return createVNode(Loading, {
        "size": props.loadingSize,
        "type": props.loadingType,
        "class": bem$4("loading")
      }, null);
    };
    const renderIcon = () => {
      if (props.loading) {
        return renderLoadingIcon();
      }
      if (slots.icon) {
        return createVNode("div", {
          "class": bem$4("icon")
        }, [slots.icon()]);
      }
      if (props.icon) {
        return createVNode(Icon, {
          "name": props.icon,
          "class": bem$4("icon"),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };
    const renderText = () => {
      let text;
      if (props.loading) {
        text = props.loadingText;
      } else {
        text = slots.default ? slots.default() : props.text;
      }
      if (text) {
        return createVNode("span", {
          "class": bem$4("text")
        }, [text]);
      }
    };
    const getStyle = () => {
      const {
        color,
        plain
      } = props;
      if (color) {
        const style = {
          color: plain ? color : "white"
        };
        if (!plain) {
          style.background = color;
        }
        if (color.includes("gradient")) {
          style.border = 0;
        } else {
          style.borderColor = color;
        }
        return style;
      }
    };
    const onClick = (event) => {
      if (props.loading) {
        preventDefault(event);
      } else if (!props.disabled) {
        emit("click", event);
        route2();
      }
    };
    return () => {
      const {
        tag,
        type,
        size,
        block,
        round,
        plain,
        square,
        loading,
        disabled,
        hairline,
        nativeType,
        iconPosition
      } = props;
      const classes = [bem$4([type, size, {
        plain,
        block,
        round,
        square,
        loading,
        disabled,
        hairline
      }]), {
        [BORDER_SURROUND]: hairline
      }];
      return createVNode(tag, {
        "type": nativeType,
        "class": classes,
        "style": getStyle(),
        "disabled": disabled,
        "onClick": onClick
      }, {
        default: () => [createVNode("div", {
          "class": bem$4("content")
        }, [iconPosition === "left" && renderIcon(), renderText(), iconPosition === "right" && renderIcon()])]
      });
    };
  }
});
const Button = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  buttonProps,
  default: stdin_default$4
});
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('file:///Users/yinlu/Downloads/starter-3/node_modules/.pnpm/image-meta@0.1.1/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width: width2, height: height2 } = metadata;
    const meta = {
      width: width2,
      height: height2,
      ratio: width2 && height2 ? width2 / height2 : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function prerenderStaticImages(src = "", srcset = "") {
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(
    useRequestEvent(),
    "x-nitro-prerender",
    paths.map((p) => encodeURIComponent(p)).join(", ")
  );
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    {
      prerenderStaticImages(image.url);
    }
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base2 in ctx.options.alias) {
      if (input.startsWith(base2)) {
        input = joinURL(ctx.options.alias[base2], input.substr(base2.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name2) {
  const provider = ctx.options.providers[name2];
  if (!provider) {
    throw new Error("Unknown provider: " + name2);
  }
  return provider;
}
function getPreset(ctx, name2) {
  if (!name2) {
    return {};
  }
  if (!ctx.options.presets[name2]) {
    throw new Error("Unknown preset: " + name2);
  }
  return ctx.options.presets[name2];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width2 = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height2 = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width2 && height2 ? height2 / width2 : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        continue;
      }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height2;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers, width: _cWidth, height: _cHeight }, opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$fhWlkV4HPJ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$fhWlkV4HPJ, defaults: void 0 }
};
const useImage = () => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    }
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: true },
  // modifiers
  format: { type: String, default: void 0 },
  quality: { type: [Number, String], default: void 0 },
  background: { type: String, default: void 0 },
  fit: { type: String, default: void 0 },
  modifiers: { type: Object, default: void 0 },
  // options
  preset: { type: String, default: void 0 },
  provider: { type: String, default: void 0 },
  sizes: { type: [Object, String], default: void 0 },
  preload: { type: Boolean, default: void 0 },
  // <img> attributes
  width: { type: [String, Number], default: void 0 },
  height: { type: [String, Number], default: void 0 },
  alt: { type: String, default: void 0 },
  referrerpolicy: { type: String, default: void 0 },
  usemap: { type: String, default: void 0 },
  longdesc: { type: String, default: void 0 },
  ismap: { type: Boolean, default: void 0 },
  loading: { type: String, default: void 0 },
  crossorigin: {
    type: [Boolean, String],
    default: void 0,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    default: void 0,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding
    };
  });
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], default: void 0 }
};
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtImg",
  props: imgProps,
  emits: ["load", "error"],
  setup: (props, ctx) => {
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const attrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (props.sizes) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          }
        }]
      });
    }
    {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const imgEl = ref();
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return () => h("img", {
      ref: imgEl,
      key: src.value,
      src: src.value,
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs.value,
      ...ctx.attrs
    });
  }
});
const __nuxt_component_3 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const POPUP_TOGGLE_KEY = Symbol();
function useExpose(apis) {
  const instance = getCurrentInstance();
  if (instance) {
    extend(instance.proxy, apis);
  }
}
const popupSharedProps = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: numericProp,
  // whether to show overlay
  overlay: truthProp,
  // transition duration
  duration: numericProp,
  // teleport
  teleport: [String, Object],
  // prevent body scroll
  lockScroll: truthProp,
  // whether to lazy render
  lazyRender: truthProp,
  // callback function before close
  beforeClose: Function,
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: unknownProp,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to close popup when overlay is clicked
  closeOnClickOverlay: truthProp
};
function getDirection(x, y) {
  if (x > y) {
    return "horizontal";
  }
  if (y > x) {
    return "vertical";
  }
  return "";
}
function useTouch() {
  const startX = ref(0);
  const startY = ref(0);
  const deltaX = ref(0);
  const deltaY = ref(0);
  const offsetX = ref(0);
  const offsetY = ref(0);
  const direction = ref("");
  const isTap = ref(true);
  const isVertical = () => direction.value === "vertical";
  const isHorizontal = () => direction.value === "horizontal";
  const reset = () => {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = "";
    isTap.value = true;
  };
  const start = (event) => {
    reset();
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };
  const move = (event) => {
    const touch = event.touches[0];
    deltaX.value = (touch.clientX < 0 ? 0 : touch.clientX) - startX.value;
    deltaY.value = touch.clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);
    const LOCK_DIRECTION_DISTANCE = 10;
    if (!direction.value || offsetX.value < LOCK_DIRECTION_DISTANCE && offsetY.value < LOCK_DIRECTION_DISTANCE) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
    if (isTap.value && (offsetX.value > TAP_OFFSET || offsetY.value > TAP_OFFSET)) {
      isTap.value = false;
    }
  };
  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    isVertical,
    isHorizontal,
    isTap
  };
}
let totalLockCount = 0;
const BODY_LOCK_CLASS = "van-overflow-hidden";
function useLockScroll(rootRef, shouldLock) {
  const touch = useTouch();
  const DIRECTION_UP = "01";
  const DIRECTION_DOWN = "10";
  const onTouchMove = (event) => {
    touch.move(event);
    const direction = touch.deltaY.value > 0 ? DIRECTION_DOWN : DIRECTION_UP;
    const el = getScrollParent(
      event.target,
      rootRef.value
    );
    const { scrollHeight, offsetHeight, scrollTop } = el;
    let status = "11";
    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? "00" : "01";
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = "10";
    }
    if (status !== "11" && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
      preventDefault(event, true);
    }
  };
  const lock = () => {
    document.addEventListener("touchstart", touch.start);
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }
    totalLockCount++;
  };
  const unlock = () => {
    if (totalLockCount) {
      document.removeEventListener("touchstart", touch.start);
      document.removeEventListener("touchmove", onTouchMove);
      totalLockCount--;
      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };
  onMountedOrActivated();
  watch(shouldLock, (value) => {
    value ? lock() : unlock();
  });
}
function useLazyRender(show) {
  const inited = ref(false);
  watch(
    show,
    (value) => {
      if (value) {
        inited.value = value;
      }
    },
    { immediate: true }
  );
  return (render) => () => inited.value ? render() : null;
}
const [name$3, bem$3] = createNamespace("overlay");
const overlayProps = {
  show: Boolean,
  zIndex: numericProp,
  duration: numericProp,
  className: unknownProp,
  lockScroll: truthProp,
  lazyRender: truthProp,
  customStyle: Object
};
var stdin_default$3 = /* @__PURE__ */ defineComponent({
  name: name$3,
  props: overlayProps,
  setup(props, {
    slots
  }) {
    const root = ref();
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
    const renderOverlay = lazyRender(() => {
      var _a;
      const style = extend(getZIndexStyle(props.zIndex), props.customStyle);
      if (isDef(props.duration)) {
        style.animationDuration = `${props.duration}s`;
      }
      return withDirectives(createVNode("div", {
        "ref": root,
        "style": style,
        "class": [bem$3(), props.className]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vShow, props.show]]);
    });
    return () => createVNode(Transition, {
      "name": "van-fade",
      "appear": true
    }, {
      default: renderOverlay
    });
  }
});
const Overlay = withInstall(stdin_default$3);
const popupProps = extend({}, popupSharedProps, {
  round: Boolean,
  position: makeStringProp("center"),
  closeIcon: makeStringProp("cross"),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: makeStringProp("top-right"),
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: Boolean
});
const [name$2, bem$2] = createNamespace("popup");
var stdin_default$2 = /* @__PURE__ */ defineComponent({
  name: name$2,
  inheritAttrs: false,
  props: popupProps,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
  setup(props, {
    emit,
    attrs,
    slots
  }) {
    let opened;
    const zIndex = ref();
    const popupRef = ref();
    const lazyRender = useLazyRender(() => props.show || !props.lazyRender);
    const style = computed(() => {
      const style2 = {
        zIndex: zIndex.value
      };
      if (isDef(props.duration)) {
        const key = props.position === "center" ? "animationDuration" : "transitionDuration";
        style2[key] = `${props.duration}s`;
      }
      return style2;
    });
    const open = () => {
      if (!opened) {
        opened = true;
        zIndex.value = props.zIndex !== void 0 ? +props.zIndex : useGlobalZIndex();
        emit("open");
      }
    };
    const close = () => {
      if (opened) {
        callInterceptor(props.beforeClose, {
          done() {
            opened = false;
            emit("close");
            emit("update:show", false);
          }
        });
      }
    };
    const onClickOverlay = (event) => {
      emit("clickOverlay", event);
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const renderOverlay = () => {
      if (props.overlay) {
        return createVNode(Overlay, {
          "show": props.show,
          "class": props.overlayClass,
          "zIndex": zIndex.value,
          "duration": props.duration,
          "customStyle": props.overlayStyle,
          "role": props.closeOnClickOverlay ? "button" : void 0,
          "tabindex": props.closeOnClickOverlay ? 0 : void 0,
          "onClick": onClickOverlay
        }, {
          default: slots["overlay-content"]
        });
      }
    };
    const onClickCloseIcon = (event) => {
      emit("clickCloseIcon", event);
      close();
    };
    const renderCloseIcon = () => {
      if (props.closeable) {
        return createVNode(Icon, {
          "role": "button",
          "tabindex": 0,
          "name": props.closeIcon,
          "class": [bem$2("close-icon", props.closeIconPosition), HAPTICS_FEEDBACK],
          "classPrefix": props.iconPrefix,
          "onClick": onClickCloseIcon
        }, null);
      }
    };
    let timer;
    const onOpened = () => {
      if (timer)
        clearTimeout(timer);
      timer = setTimeout(() => {
        emit("opened");
      });
    };
    const onClosed = () => emit("closed");
    const onKeydown = (event) => emit("keydown", event);
    const renderPopup = lazyRender(() => {
      var _a;
      const {
        round,
        position,
        safeAreaInsetTop,
        safeAreaInsetBottom
      } = props;
      return withDirectives(createVNode("div", mergeProps({
        "ref": popupRef,
        "style": style.value,
        "role": "dialog",
        "tabindex": 0,
        "class": [bem$2({
          round,
          [position]: position
        }), {
          "van-safe-area-top": safeAreaInsetTop,
          "van-safe-area-bottom": safeAreaInsetBottom
        }],
        "onKeydown": onKeydown
      }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots), renderCloseIcon()]), [[vShow, props.show]]);
    });
    const renderTransition = () => {
      const {
        position,
        transition,
        transitionAppear
      } = props;
      const name2 = position === "center" ? "van-fade" : `van-popup-slide-${position}`;
      return createVNode(Transition, {
        "name": transition || name2,
        "appear": transitionAppear,
        "onAfterEnter": onOpened,
        "onAfterLeave": onClosed
      }, {
        default: renderPopup
      });
    };
    watch(() => props.show, (show) => {
      if (show && !opened) {
        open();
        if (attrs.tabindex === 0) {
          nextTick(() => {
            var _a;
            (_a = popupRef.value) == null ? void 0 : _a.focus();
          });
        }
      }
      if (!show && opened) {
        opened = false;
        emit("close");
      }
    });
    useExpose({
      popupRef
    });
    useLockScroll(popupRef, () => props.show && props.lockScroll);
    provide(POPUP_TOGGLE_KEY, () => props.show);
    return () => {
      if (props.teleport) {
        return createVNode(Teleport, {
          "to": props.teleport
        }, {
          default: () => [renderOverlay(), renderTransition()]
        });
      }
      return createVNode(Fragment, null, [renderOverlay(), renderTransition()]);
    };
  }
});
const Popup = withInstall(stdin_default$2);
let lockCount = 0;
function lockClick(lock) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add("van-toast--unclickable");
    }
    lockCount++;
  } else if (lockCount) {
    lockCount--;
    if (!lockCount) {
      document.body.classList.remove("van-toast--unclickable");
    }
  }
}
const [name$1, bem$1] = createNamespace("toast");
const popupInheritProps = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay"];
const toastProps = {
  icon: String,
  show: Boolean,
  type: makeStringProp("text"),
  overlay: Boolean,
  message: numericProp,
  iconSize: numericProp,
  duration: makeNumberProp(2e3),
  position: makeStringProp("middle"),
  teleport: [String, Object],
  wordBreak: String,
  className: unknownProp,
  iconPrefix: String,
  transition: makeStringProp("van-fade"),
  loadingType: String,
  forbidClick: Boolean,
  overlayClass: unknownProp,
  overlayStyle: Object,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean
};
var stdin_default$1 = /* @__PURE__ */ defineComponent({
  name: name$1,
  props: toastProps,
  emits: ["update:show"],
  setup(props, {
    emit,
    slots
  }) {
    let timer;
    let clickable = false;
    const toggleClickable = () => {
      const newValue = props.show && props.forbidClick;
      if (clickable !== newValue) {
        clickable = newValue;
        lockClick(clickable);
      }
    };
    const updateShow = (show) => emit("update:show", show);
    const onClick = () => {
      if (props.closeOnClick) {
        updateShow(false);
      }
    };
    const clearTimer = () => clearTimeout(timer);
    const renderIcon = () => {
      const {
        icon,
        type,
        iconSize,
        iconPrefix,
        loadingType
      } = props;
      const hasIcon = icon || type === "success" || type === "fail";
      if (hasIcon) {
        return createVNode(Icon, {
          "name": icon || type,
          "size": iconSize,
          "class": bem$1("icon"),
          "classPrefix": iconPrefix
        }, null);
      }
      if (type === "loading") {
        return createVNode(Loading, {
          "class": bem$1("loading"),
          "size": iconSize,
          "type": loadingType
        }, null);
      }
    };
    const renderMessage = () => {
      const {
        type,
        message
      } = props;
      if (slots.message) {
        return createVNode("div", {
          "class": bem$1("text")
        }, [slots.message()]);
      }
      if (isDef(message) && message !== "") {
        return type === "html" ? createVNode("div", {
          "key": 0,
          "class": bem$1("text"),
          "innerHTML": String(message)
        }, null) : createVNode("div", {
          "class": bem$1("text")
        }, [message]);
      }
    };
    watch(() => [props.show, props.forbidClick], toggleClickable);
    watch(() => [props.show, props.type, props.message, props.duration], () => {
      clearTimer();
      if (props.show && props.duration > 0) {
        timer = setTimeout(() => {
          updateShow(false);
        }, props.duration);
      }
    });
    onUnmounted(toggleClickable);
    return () => createVNode(Popup, mergeProps({
      "class": [bem$1([props.position, props.wordBreak === "normal" ? "break-normal" : props.wordBreak, {
        [props.type]: !props.icon
      }]), props.className],
      "lockScroll": false,
      "onClick": onClick,
      "onClosed": clearTimer,
      "onUpdate:show": updateShow
    }, pick(props, popupInheritProps)), {
      default: () => [renderIcon(), renderMessage()]
    });
  }
});
const defaultOptions = {
  icon: "",
  type: "text",
  message: "",
  className: "",
  overlay: false,
  onClose: void 0,
  onOpened: void 0,
  duration: 2e3,
  teleport: "body",
  iconSize: void 0,
  iconPrefix: void 0,
  position: "middle",
  transition: "van-fade",
  forbidClick: false,
  loadingType: void 0,
  overlayClass: "",
  overlayStyle: void 0,
  closeOnClick: false,
  closeOnClickOverlay: false
};
extend({}, defaultOptions);
function showToast(options = {}) {
  {
    return {};
  }
}
withInstall(stdin_default$1);
const [name, bem] = createNamespace("notify");
const notifyProps = extend({}, popupSharedProps, {
  type: makeStringProp("danger"),
  color: String,
  message: numericProp,
  position: makeStringProp("top"),
  className: unknownProp,
  background: String,
  lockScroll: Boolean
});
var stdin_default = /* @__PURE__ */ defineComponent({
  name,
  props: notifyProps,
  emits: ["update:show"],
  setup(props, {
    emit,
    slots
  }) {
    const updateShow = (show) => emit("update:show", show);
    return () => createVNode(Popup, {
      "show": props.show,
      "class": [bem([props.type]), props.className],
      "style": {
        color: props.color,
        background: props.background
      },
      "overlay": false,
      "zIndex": props.zIndex,
      "position": props.position,
      "duration": 0.2,
      "lockScroll": props.lockScroll,
      "onUpdate:show": updateShow
    }, {
      default: () => [slots.default ? slots.default() : props.message]
    });
  }
});
function showNotify(options) {
  {
    return;
  }
}
withInstall(stdin_default);
const __nuxt_component_0_lazy = /* @__PURE__ */ defineAsyncComponent(() => Promise.resolve().then(function() {
  return Button;
}).then((m) => m.default || m));
const __nuxt_component_2_lazy = /* @__PURE__ */ defineAsyncComponent(() => import('./TheHeader-eac659de.mjs').then((m) => m.default || m));
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_van_button = stdin_default$4;
      const _component_VanButton = stdin_default$4;
      const _component_LazyVanButton = __nuxt_component_0_lazy;
      const _component_nuxt_img = __nuxt_component_1;
      const _component_LazyTheHeader = __nuxt_component_2_lazy;
      const _component_ClientOnly = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_van_button, {
        type: "primary",
        onClick: ($event) => ("showToast" in _ctx ? _ctx.showToast : unref(showToast))("toast")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`button`);
          } else {
            return [
              createTextVNode("button")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VanButton, {
        type: "success",
        onClick: ($event) => ("showNotify" in _ctx ? _ctx.showNotify : unref(showNotify))("notify")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`button`);
          } else {
            return [
              createTextVNode("button")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LazyVanButton, { type: "default" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`lazy button`);
          } else {
            return [
              createTextVNode("lazy button")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "https://picossoutput.keepyoga.com/20230420170744_590.jpg",
        loading: "lazy",
        width: "200",
        height: "100",
        fit: "fill"
      }, null, _parent));
      _push(`<h2>page 1</h2>`);
      if (unref(show)) {
        _push(ssrRenderComponent(_component_LazyTheHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, { fallbackTag: "span" }, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Loading comments...</p>`);
          } else {
            return [
              createVNode("p", null, "Loading comments...")
            ];
          }
        })
      }, _parent));
      _push(`<button type="button">go to list</button><button type="button">show</button><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-d697c0bc.mjs.map
