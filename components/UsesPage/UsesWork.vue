<template>
  <div class="grid md:grid-cols-4 lg:grid-cols-5 md:border-l md:border-gray-200 dark:md:border-gray-700">
    <span class="text-sm  text-gray-600 font-semibold mb-8 md:pl-4 dark:text-dark-title-color"> Workstation </span>

    <div class="space-y-20 md:col-span-3">
        
        <uses-item-component
        titleInput="16” MacBook Pro, M1 Max, 64GB RAM (2021)"
        descInput="I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."
      />
        <uses-item-component
        titleInput="Apple Pro Display XDR (Standard Glass)"
        descInput="The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts."
      />

      <uses-item-component
        titleInput="IBM Model M SSK Industrial Keyboard"
        descInput="They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main."
      />
    </div>
  </div>
</template>

<script setup>
import usesItemComponent from './usesItemComponent.vue'
</script>
