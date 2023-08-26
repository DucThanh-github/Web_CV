<template>
  <div class="max-w-2xl">
    <h1 class="text-5xl font-bold dark:text-dark-title-color">
      {{ props.beginTitle }}
    </h1>

    <p class="pt-9 text-p-color text-p-style">
      {{ props.beginDesc }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  beginTitle: String,
  beginDesc: String,
});
</script>