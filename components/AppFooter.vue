<template>
  <div
    class="grid grid-cols-1 gap-y-4 md:grid-cols-2 place-content-between px-4 lg:px-24 md:px-8 pt-12 pb-16 border-t border-gray-200 dark:border-gray-700"
  >
    <ul
      class="flex text-sm font-semibold text-gray-600 justify-center md:justify-start"
    >
      <li class="px-3 py-2 hover:text-green-600">
        <NuxtLink :to="'/About'">About</NuxtLink>
      </li>
      <li class="px-3 py-2 hover:text-green-600">
        <NuxtLink :to="'/Articles'">Articles</NuxtLink>
      </li>

      <li class="px-3 py-2 hover:text-green-600">
        <NuxtLink :to="'/Projects'">Projects</NuxtLink>
      </li>
      <li class="px-3 py-2 hover:text-green-600">
        <NuxtLink :to="'/Speaking'">Speaking</NuxtLink>
      </li>
      <li class="px-3 py-2 hover:text-green-600">
        <NuxtLink :to="'/Uses'">Uses</NuxtLink>
      </li>
    </ul>
    <div
      class="justify-center md:justify-end text-p-color text-p-style flex items-center"
    >
      © 2023 Spencer Sharp. All rights reserved.
    </div>
  </div>
</template>
