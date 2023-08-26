<template>
  <div class="overflow-x-hidden w-screen h-screen bg-gray-100 dark:bg-black">
    <div
      class="max-w-[1216px] mx-auto bg-white md:mx-8 lg:mx-16 xl:mx-auto dark:bg-dark-background-color"
    >
      <div class="px-4 lg:px-24 md:px-8">
        <div class="pb-32 pt-6 flex justify-between relative">
          <div class="absolute z-10">
            <NuxtLink :to="'/'">
              <img
                class="h-10 rounded-full"
                src="../assets/img/avatar.jpg"
                alt=""
              />
            </NuxtLink>
          </div>
          <app-nav />
        </div>
        <slot />
      </div>
      <div class="mt-32">
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script setup >
onMounted(()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

