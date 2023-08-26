<template>
  <div>
    <h1 class=" font-semibold text-black dark:text-dark-title-color">{{ props.titleInput }}</h1>
    <p class="text-p-style text-p-color ">{{ props.descInput }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  titleInput: String,
  descInput: String,
});
</script>