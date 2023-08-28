<template>
  <div>
  <div class="w-screen h-full bg-gray-100 dark:bg-black">
    <div
      class="max-w-[1216px] mx-auto bg-white dark:bg-dark-background-color md:mx-8 lg:mx-16 xl:mx-auto"
    >
      <div class="px-4 lg:px-24 md:px-8">
        <header class="z-10 pt-6 top-0"
        :class="{sticky:isSticky}">
          <app-nav />
        </header>
        <div class="pt-16">
          <avatar />
        </div>
        <div class="pt-9">
          <home-page-begin />
        </div>
        <div class="pt-16">
          <home-image-component />
        </div>

        <div class="my-28">
          <home-page-body />
        </div>
      </div>
      <footer>
        <app-footer />
      </footer>
    </div>
    
  </div>
  </div>
  
</template>

<script lang="ts" setup>
import HomeImageComponent from "~/components/HomePage/HomeImageComponent.vue";
const isSticky = ref<boolean>(false);
onMounted(() => {
  let lastScrollY = 0;
  document.addEventListener("scroll", () => {
    const currenScrollY = scrollY;
    if (currenScrollY > lastScrollY) {
      isSticky.value = false;
    } else {
      isSticky.value = true;
    }
    lastScrollY = currenScrollY;
  });
});
</script>