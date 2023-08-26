<template>
    <div class="flex items-center">
        <img class=" h-10 border-4 border-white rounded-full outline outline-offset-0 outline-gray-200" 
        :src="props.urlImage" alt="">
        <div class="grow ml-4">
            <h1 class="text-black font-semibold dark:text-dark-title-color">{{ props.companyName }}</h1>
            <div class="flex place-content-between text-p-color">
                <span>{{ props.position }}</span>
                <span>{{ props.timeInput }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        urlImage: String,
        companyName: String,
        position: String,
        timeInput: String
    })
</script>