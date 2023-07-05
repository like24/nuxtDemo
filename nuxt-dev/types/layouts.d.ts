import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "default"
declare module "/Users/yinlu/Downloads/starter-3/node_modules/.pnpm/nuxt@3.6.1_@types+node@18.0.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}