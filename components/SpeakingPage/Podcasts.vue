
<template>
  <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
    <h2
      class="pb-1 md:border-l md:border-gray-200 md:pl-4 pr-12 font-semibold md:col-span-1 dark:text-dark-title-color dark:border-gray-700"
    >
      Podcasts
    </h2>
    <div class="space-y-8 md:-my-6 md:col-span-3 lg:col-span-4 md:box-content">
      <box-item
        inputTime="Encoding Design, July 2022"
        inputTitle="Using design as a competitive advantage"
        inputDesc="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
        button="Listen to podcast"
        inputLink="https://www.youtube.com/"
      >
      </box-item>

      <box-item
        inputTime="The Escape Velocity Show, March 2022"
        inputTitle="Bootstrapping an aerospace company to $17M ARR"
        inputDesc="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
        button="Listen to podcast"
        inputLink="https://www.youtube.com/"
      >
      </box-item>

      <box-item
        inputTime="How They Work Radio, September 2021"
        inputTitle="Programming your company operating system"
        inputDesc="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
        button="Listen to podcast"
        inputLink="https://www.youtube.com/"
      >
      </box-item>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>