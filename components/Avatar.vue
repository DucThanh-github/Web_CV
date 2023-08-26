<template>
  <NuxtLink :to="'/'">
    <img :style="{height:changeValue + 'px'}" class="rounded-full" src="../assets/img/avatar.jpg" alt="" />
  </NuxtLink>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
let changeValue = ref<number>(64)


onMounted(() => {
  document.addEventListener("scroll", (event) => {
    if (event)
    console.log(event)
    // changeValue.value = Math.floor(document.scrollY || document.pageXOffset);
    // console.log()
  });
});
</script>