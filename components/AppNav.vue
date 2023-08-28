<template>
  <div class="relative w-full font-semibold text-[14px] text-gray-600">
    <!-- Nav desktop -->
    <nav class="hidden md:flex justify-center relative">
      <ul
        class="flex border border-gray-200 dark:border-gray-700 px-3 rounded-full shadow-xl bg-white dark:text-dark-title-color dark:bg-dark-icon-color"
      >
        <li
          v-for="navItem in navList"
          :key="navItem.navTitle"
          :class="{ 'text-green-500': navItem.statusItem }"
          class="px-3 py-2 hover:text-green-600"
          @click="handleActiveNav"
        >
          <NuxtLink :to="`/${navItem.navTitle}`">
            {{ navItem.navTitle }}
          </NuxtLink>
        </li>
      </ul>
      <button
        class="absolute px-3 py-2 right-0 text-green-500 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow-xl bg-white dark:bg-dark-icon-color"
        @click="toggleDarkMode"
      >
        <div v-if="!isDarkMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </div>
        <div v-if="isDarkMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            class="w-4 h-4 fill-dark-title-color"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"
            />
          </svg>
        </div>
      </button>
    </nav>

    <!-- Nav Mobile -->
    <nav class="flex md:hidden justify-end text-xs">
      <button
        class="flex px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-full items-center dark:text-dark-title-color bg-white dark:bg-dark-icon-color"
        @click="toggleNavMobileMenu"
      >
        <p>Menu</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <button
        class="px-3 py-2 ml-1 text-green-500 border border-gray-200 dark:border-gray-700 rounded-full shadow-xl bg-white dark:bg-dark-icon-color"
        @click="toggleDarkMode"
      >
        <div v-if="!isDarkMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </div>
        <div v-if="isDarkMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            class="w-4 h-4 fill-dark-title-color"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"
            />
          </svg>
        </div>
      </button>
    </nav>
  </div>
  <!-- Nav Mobile menu -->
  <div
    class="fixed left-0 right-0 top-0 bottom-0 md:hidden z-10"
    :class="{ hidden: navMobileMenu }"
  >
    <div
      class="w-full h-full bg-gray-600 opacity-60 blur-2xl"
      @click="toggleNavMobileMenu"
    ></div>
    <div
      class="animate-navMobileAnimated w-11/12 bg-white top-0 mt-4 mx-auto left-0 right-0 rounded-3xl absolute p-8 dark:bg-dark-icon-color"
    >
      <div class="font-bold dark:text-dark-title-color">Navigation</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 absolute right-5 top-5 text-gray-500 hover:opacity-50"
        @click="toggleNavMobileMenu"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <ul
        class="mt-4 divide-y divide-gray-200 dark:divide-gray-700 dark:text-dark-desc-color"
      >
        <li
          v-for="navItem in navList"
          :key="navItem.navTitle"
          class="py-2 hover:text-green-600"
          @click="toggleNavMobileMenu"
        >
          <NuxtLink :to="navItem.navTitle">
            {{ navItem.navTitle }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAppnavStore } from "../modules/stores/store.js";

const store = useAppnavStore();
const navList = store.$state.navList;
const isDarkMode = ref<boolean>();
let navMobileMenu = ref<boolean>(true);
function toggleNavMobileMenu() {
  navMobileMenu.value = !navMobileMenu.value;
}
function handleActiveNav(e: Event) {
  const useTitle = e.target.innerText;
  store.handleActive(useTitle);
}
function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
</script>