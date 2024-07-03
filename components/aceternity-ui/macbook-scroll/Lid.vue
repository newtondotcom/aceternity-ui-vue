<template>
  <div class="relative perspective-800px">
    <div
      :style="{
        transform: 'perspective(800px); rotateX(-25deg); translateZ(0px);',
        transformOrigin: 'bottom',
        transformStyle: 'preserve-3d',
      }"
      class="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
    >
      <div
        :style="{ boxShadow: '0px 2px 0px 2px var(--neutral-900) inset' }"
        class="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
      >
        <span class="text-white">
          <!-- <AceternityLogo /> -->
          AceternityLogo
        </span>
      </div>
    </div>
    <div
      class="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
      v-motion="motionProperties"
    >
      <div class="absolute inset-0 bg-[#272729] rounded-lg" />
      <img
        :src="src"
        alt="aceternity logo"
        fill
        class="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
//import AceternityLogo from './AceternityLogo.vue';

const props = defineProps({
  motionProperties: Object,
  src: String,
});
</script>
