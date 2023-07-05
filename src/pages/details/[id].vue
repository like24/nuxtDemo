<template>
  <header class="header-container">
    <h6 class="title">{{ dataObj.title }}</h6>
    <div class="other">
      <p v-if="dataObj.author" class="author">作者：{{ dataObj.author }}</p>
      <a href="./index.html">随心瑜名师堂</a>
      <!-- <p class="time">{{time}}</p> -->
      <button type="button" v-if="!dataObj.hadFollow"></button>
    </div>
  </header>
  <div class="article-container">
    <div class="article-main" v-html="dataObj.content"></div>
    <div class="article-other">
      <p>阅读&nbsp;&nbsp;{{ dataObj.readNum  }}次</p>
      <div @click="praiseFn">
        <i :class="{ active: dataObj.hadPraise }"></i>
        <span :class="{ active: dataObj.hadPraise }">{{ dataObj.praiseNum }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const { data, pending, refresh, error } = await useFetch(
  `https://weixin.keepyoga.com/v1/article/detail/${route.params.id}?access_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTg2MiIsImV4cCI6MTY5MDk0MTk5MX0.FTBxcRpOJC3SIqaqVzialM1XhT8IUfIgIcrv3FtYj44&isApp=0&sid=0`
);
const dataObj = reactive(data.value.data);
</script>