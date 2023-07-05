<template>
  <div>
    <ul>
      <li v-for="item in dataList" :key="item.id" @click="toDetail(item.id)">
        <div class="left">
          <img :src="item.image" alt="" />
        </div>
        <div class="right">
          <h6>{{ item.title }}</h6>
          <p class="des">
            {{ item.describes }}
          </p>
          <div class="bottom-container">
            <p class="text">
              <i class="sprite-icon browse browse-icon"></i
              ><span>{{ item.readNum }}</span>
              <i class="sprite-icon article_like like-icon"></i
              ><span>{{ item.praiseNum }}</span>
            </p>
            <span class="time" v-if="item.hadRead == 1">已读</span>
            <span class="noreader" v-if="item.hadRead == 0">未读</span>
          </div>
        </div>
      </li>
    </ul>

    <button type="button" @click="toHome">go to home</button>
  </div>
</template>
<script  setup>
definePageMeta({
  layout: "custom",
});
const router = useRouter();
const headers = useRequestHeaders();
console.log(headers, "headers");
console.log(process, "process");
const list = ref([
  {
    title: "title1",
    id: 1,
  },
  {
    title: "title1",
    id: 2,
  },
  {
    title: "title1",
    id: 3,
  },
]);
  const { data, pending, refresh, error } = await useFetch(
    "https://app.keepyoga.com/api/v1/article/list",
    {
      query: { page: 1, size: 20 },
      headers: {
        "access-token":
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTg2MiIsImV4cCI6MTY5MDk0MTk5MX0.FTBxcRpOJC3SIqaqVzialM1XhT8IUfIgIcrv3FtYj44",
        target: 1,
      },
    }
  );
  const dataList = reactive(data.value.data.dataList);
const toHome = () => {
  router.back();
};
const toDetail = (id) => {
  // router.push({ path: `/details-${id}` });
  router.push({ path: `/details/${id}` });
};
</script>
<style>
ul,
li {
  list-style: none;
}
</style>