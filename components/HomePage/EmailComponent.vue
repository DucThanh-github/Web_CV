<template>
  <div class="border border-gray-200 dark:border-gray-700 rounded-3xl p-8">
    <h1
      class="flex font-semibold text-black items-center dark:text-dark-title-color"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        class="dark:fill-dark-title-color"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
        />
      </svg>
      <span class="ml-4"> Stay up to date </span>
    </h1>

    <p class="text-p-color text-p-style py-8">
      Get notified when I publish something new, and unsubscribe at any time.
    </p>

    <div class="flex">
      <input
        class="grow border dark:text-dark-title-color dark:border-gray-700 p-2 rounded-md shadow-lg dark:bg-dark-icon-color"
        type="text"
        placeholder="Email address"
      />
      <button
        class="ml-4 bg-black text-white px-4 rounded-md hover:opacity-60 dark:bg-dark-icon-color"
      >
        Join
      </button>
    </div>
  </div>
</template>