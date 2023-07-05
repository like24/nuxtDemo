<template>
  <van-button type="primary" @click="showToast('toast')">button</van-button>
  <VanButton type="success" @click="showNotify('notify')">button</VanButton>
  <LazyVanButton type="default">lazy button</LazyVanButton>
  <nuxt-img
    src="https://picossoutput.keepyoga.com/20230420170744_590.jpg"
    loading="lazy"
    width="200"
    height="100"
    fit="fill"
  />
  <!-- https://picossoutput.keepyoga.com/20230420170744_590.jpg -->
  <h2>page 1</h2>
  <LazyTheHeader v-if="show" />

  <ClientOnly fallbackTag="span">
    <!-- this component will only be rendered on client side -->
    <TheFooter />
    <BaseHeader />
    <template #fallback>
      <!-- this will be rendered on server side -->
      <p>Loading comments...</p>
    </template>
  </ClientOnly>
  <button type="button" @click="toList">go to list</button>
  <button type="button" @click="show = true">show</button>
</template>
<script setup>
const router = useRouter();
const toList = () => {
  router.push({ path: "/list" });
};
const show = ref(false);
const foo = useFoo();
const bar = useBar();
</script>
