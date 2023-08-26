<template>
    <div class="grid md:grid-cols-4 lg:grid-cols-5 md:border-l md:border-gray-200 dark:md:border-gray-700">
      <span class="text-sm  text-gray-600 font-semibold mb-8 md:pl-4 dark:text-dark-title-color"> Development tools </span>
  
      <div class="space-y-20 md:col-span-3">
          
          <uses-item-component
          titleInput="Sublime Text 4"
          descInput="I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made."
        />
          <uses-item-component
          titleInput="iTerm2"
          descInput="I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use."
        />
  
      </div>
    </div>
  </template>

  
<script setup>
import usesItemComponent from './usesItemComponent.vue'
</script>