<template>
    <div class="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-6">
      <h2 class="pb-1 dark:border-gray-700 md:border-l md:border-gray-200 md:pl-4 pr-12 font-semibold md:col-span-1 dark:text-dark-title-color">Conferences</h2>
      <div class="space-y-8 md:-my-6 md:col-span-3 lg:col-span-4 md:box-content">
        <box-item
          inputTime="SysConf 2021"
          inputTitle="In space, no one can watch you stream — until now"
          inputDesc="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
          button="Watch video"
          inputLink="https://www.youtube.com/"
        >
        </box-item>
  
        <box-item
          inputTime="Business of Startups 2020"
          inputTitle="Lessons learned from our first product recall"
          inputDesc="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
          button="Watch video"
          inputLink="https://www.youtube.com/"
          >
        </box-item>
      </div>
    </div>
  </template>

<script lang="ts" setup>
  import  BoxItem  from '~/components/BoxItem.vue';
</script>