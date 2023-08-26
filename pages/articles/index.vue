<template>
  <div>
    <article-component/>
  </div>
</template>

<script lang="ts" setup>
import ArticleComponent from '~/components/ArticlesPage/ArticleComponent.vue'
definePageMeta({
  layout: "default-layout",
});

onBeforeRouteUpdate(()=>{
  console.log("onBeforeRouteLeave");
})

</script> 