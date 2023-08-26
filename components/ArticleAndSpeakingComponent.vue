<template>
  <!-- index page and mobile article page -->
  <div
    v-if="!isArticlePage"
    class="p-8 mx-[-2rem] rounded-3xl hover:bg-gray-100 hover:cursor-pointer"
  >
    <span class="text-gray-500 border-l px-4 border-gray-300">{{
      props.inputTime
    }}</span>
    <h1 class="py-8 font-semibold text-black">{{ props.inputTitle }}</h1>
    <p class="text-p-style text-p-color pb-8">{{ props.inputDesc }}</p>

    <div class="text-green-500 flex items-center">
      <p>Read article</p>
      <svg
        class="ml-2 fill-green-500"
        xmlns="http://www.w3.org/2000/svg"
        height="0.625em"
        viewBox="0 0 320 512"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
        />
      </svg>
    </div>
  </div>

  <!-- ariclePage -->

  <div v-if="isArticlePage">
    <div
      class="px-8 py-12 mx-[-2rem] rounded-3xl hover:bg-gray-100 hover:cursor-pointer md:hidden"
    >
      <span class="text-gray-500 border-l px-4 border-gray-300">{{
        props.inputTime
      }}</span>
      <h1 class="py-8 font-semibold text-black">{{ props.inputTitle }}</h1>
      <p class="text-p-style text-p-color pb-8">{{ props.inputDesc }}</p>

      <div class="text-green-500 flex items-center">
        <p>Read article</p>
        <svg
          class="ml-2 fill-green-500"
          xmlns="http://www.w3.org/2000/svg"
          height="0.625em"
          viewBox="0 0 320 512"
        >
          <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
          />
        </svg>
      </div>
    </div>

    <!-- aricle page-->
    <div class="hidden md:block">
      <div class="grid grid-cols-6 border-l border-gray-300 py-8">
        <span
          class="text-gray-500  px-4  col-span-1"
          >{{ props.inputTime }}</span
        >
        <div
          class="col-span-4 hover:bg-gray-100 hover:cursor-pointer mt-[-2rem] p-8 rounded-3xl"
        >
          <h1 class="pb-8 font-semibold text-black">{{ props.inputTitle }}</h1>
          <p class="text-p-style text-p-color pb-8">{{ props.inputDesc }}</p>

          <div class="text-green-500 flex items-center">
            <p>Read article</p>
            <svg
              class="ml-2 fill-green-500"
              xmlns="http://www.w3.org/2000/svg"
              height="0.625em"
              viewBox="0 0 320 512"
            >
              <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  inputTime: String,
  inputTitle: String,
  inputDesc: String,
  isArticlePage: Boolean
});
</script>