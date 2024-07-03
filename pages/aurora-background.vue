<template>
  <AceternityUiAuroraBackground>
    <div
      v-motion
      :initial="{
        opacity: 0.0,
        y: 40,
        transition: { delay: 0.3, duration: 1.8, ease: 'easeInOut' },
      }"
      :visible="{ opacity: 1, y: 0 }"
      class="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div class="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Background lights are cool you know.
      </div>
      <div
        class="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4"
      >
        And this, is chemical burn.
      </div>
      <button
        class="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
      >
        Debug now
      </button>
    </div>
  </AceternityUiAuroraBackground>
</template>

<script setup></script>
