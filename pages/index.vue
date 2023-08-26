<template>
    <div class="overflow-x-hidden w-screen h-screen bg-gray-100 dark:bg-black">
    <div class="max-w-[1216px] mx-auto bg-white dark:bg-dark-background-color md:mx-8 lg:mx-16 xl:mx-auto dark:">
      
      <div class="px-4 lg:px-24 md:px-8">
        <header class="pt-6">
        <app-nav />
      </header>
        <div class="mt-16">
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
      <div>
          <app-footer />
        </div>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import HomeImageComponent from "~/components/HomePage/HomeImageComponent.vue";
</script>