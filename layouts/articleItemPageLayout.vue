<template>
  <div class="overflow-x-hidden w-screen h-screen bg-gray-100 dark:bg-black">
    <div
      class="relative max-w-[1216px] mx-auto bg-white md:mx-8 lg:mx-16 xl:mx-auto dark:bg-dark-background-color"
    >
      <div
        class="justify-center items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-full absolute w-10 h-10 -translate-x-1/2 top-48 shadow-xl hidden lg:flex"
        @click="goBackWeb"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          class="fill-p-color"
        >
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
      </div>
      <div class="px-4 lg:px-24 md:px-8">
        <div class="pb-32 pt-6 flex justify-between relative">
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
        <div class="max-w-2xl mx-auto">
          <div
            class="mb-8 justify-center items-center bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-full w-10 h-10 shadow-xl flex lg:hidden"
            @click="goBackWeb"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              class="fill-p-color"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
          </div>
          <slot />
        </div>
      </div>
      <div class="mt-32">
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
function goBackWeb() {
  window.history.back();
}
</script>