<template>
  <div class=" w-screen h-full bg-gray-100 dark:bg-black">
    <div
      class="max-w-[1216px] mx-auto bg-white md:mx-8 lg:mx-16 xl:mx-auto dark:bg-dark-background-color"
    >
      <div class="px-4 lg:px-24 md:px-8 h-full">
        <div class="z-10 pb-32 pt-6 flex justify-between top-0"
        :class="{sticky:isSticky}">
          <div class="absolute z-10">
            <NuxtLink :to="'/'">
              <img
                class="h-10 rounded-full"
                src="../assets/img/avatar.jpg"
                alt=""
              />
            </NuxtLink>
          </div>
          <app-nav />
        </div>
        <slot />
      </div>
      <div class="mt-32">
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isSticky = ref<boolean>(false)
onMounted(() => {
    let lastScrollY = 0
  document.addEventListener("scroll", () => {
      const currenScrollY = scrollY
    
      if (currenScrollY>lastScrollY) {
          isSticky.value = false
        } else {
            isSticky.value = true
        }
    lastScrollY = currenScrollY


  });
});
</script>

