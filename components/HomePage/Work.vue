<template>
  <div class="border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:mr-8 space-y-4">
    <h1 class="flex items-center font-semibold text-black dark:text-dark-title-color">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        class="fill-dark-title-color"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
        />
      </svg>
      <span class="ml-4"> Work </span>
    </h1>
    <work-item
      urlImage="data:image/jpeg;base64,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"
      companyName="Placetaria"
      position="CEO"
      timeInput="2019 — Present"
    />
    <work-item
      urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqL-GgsBNG9vfP1UfOjbuxQ6oCax5f2COexE0RqgvSwg&s"
      companyName="Airbnb"
      position="Product Designer"
      timeInput="2014 — 2019
"
    />
    <work-item
      urlImage="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png?20200820101156"
      companyName="Facebook"
      position="iOS Software Engineer"
      timeInput="2011 — 2014"
    />

    <work-item
      urlImage="https://creative.starbucks.com/images/logos/logo-1987.png"
      companyName="Starbucks"
      position="Shift Supervisor"
      timeInput="2008 — 2011"
    />

    <button
      class="w-full py-2 bg-gray-100 rounded-lg flex items-center justify-center hover:opacity-60 dark:bg-dark-icon-color dark:text-dark-title-color"
    >
      <p class="">Download CV</p>
      <svg
        class="ml-1 dark:fill-dark-title-color"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 384 512"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import WorkItem from './WorkItem.vue'
</script>