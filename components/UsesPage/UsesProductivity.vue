<template>
    <div class="grid md:grid-cols-4 lg:grid-cols-5 md:border-l md:border-gray-200 dark:md:border-gray-700">
      <span class="text-sm  text-gray-600 font-semibold mb-8 md:pl-4 dark:text-dark-title-color"> Productivity </span>
  
      <div class="space-y-20 md:col-span-3">
          
          <uses-item-component
          titleInput="Alfred"
          descInput="It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world."
        />

        <uses-item-component
          titleInput="Reflect"
          descInput="Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note."
        />

  
      </div>
    </div>
  </template>

  
<script setup>
import usesItemComponent from './usesItemComponent.vue'
</script>