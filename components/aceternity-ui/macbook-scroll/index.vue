<template>
  <div
    ref="ref"
    class="min-h-[200vh] flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 perspective-800px transform md:scale-100 scale-35 sm:scale-50"
  >
    <h2
      v-motion
      :style="{
        translateY: motionProperties.textTransform,
        opacity: motionProperties.textOpacity,
      }"
      class="dark:text-white text-neutral-800 text-3xl font-bold mb-20 text-center"
    >
      <template v-if="title">
        {{ title }}
      </template>
      <template v-else>
        This Macbook is built with Tailwindcss. <br />
        No kidding.
      </template>
    </h2>
    <!-- Lid -->
    <Lid :src="src" :motionProperties />
    <!-- Base area -->
    <div
      class="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10"
    >
      <!-- above keyboard bar -->
      <div class="h-10 w-full relative">
        <div class="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
      </div>
      <div class="flex relative">
        <div class="mx-auto w-[10%] overflow-hidden h-full">
          <SpeakerGrid />
        </div>
        <div class="mx-auto w-[80%] h-full">
          <Keypad />
        </div>
        <div class="mx-auto w-[10%] overflow-hidden h-full">
          <SpeakerGrid />
        </div>
      </div>
      <Trackpad />
      <div
        class="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl"
      />
      <template v-if="showGradient">
        <div
          class="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"
        ></div>
      </template>
      <template v-if="badge">
        <div class="absolute bottom-4 left-4">
          {{ badge }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, watch } from "vue";
import { useScroll } from "@vueuse/core";
import { useMotion, motion } from "@vueuse/motion";
import Trackpad from "./Trackpad.vue";
import Keypad from "./Keypad.vue";
import SpeakerGrid from "./SpeakerGrid.vue";
import Lid from "./Lid.vue";

const props = defineProps({
  src: String,
  showGradient: Boolean,
  title: [String, Object],
  badge: Object,
});

const state = reactive({
  isMobile: false,
});

const scrollElement = ref(null);
const { y } = useScroll(scrollElement);

const refElement = ref(null);

const { motionProperties } = useMotion(refElement, {
  initial: {
    scaleX: 1.2,
    scaleY: 0.6,
    translateY: 0,
    rotate: -28,
    opacity: 1,
  },
  animate: {
    scaleX: state.isMobile ? 1 : 1.5,
    scaleY: state.isMobile ? 1 : 1.5,
    translateY: 1500,
    rotate: 0,
    opacity: 0,
  },
  transition: {
    scaleX: { duration: 1, ease: "easeInOut" },
    scaleY: { duration: 1, ease: "easeInOut" },
    translateY: { duration: 1, ease: "easeInOut" },
    rotate: { duration: 1, ease: "easeInOut" },
    opacity: { duration: 0.5, ease: "easeInOut" },
  },
});

watch(y, (newY) => {
  const scrollProgress = newY / window.innerHeight;
  motionProperties.scaleX =
    scrollProgress < 0.3
      ? 1.2 + (0.3 - scrollProgress) * (state.isMobile ? -0.2 : 0.3)
      : state.isMobile
        ? 1
        : 1.5;
  motionProperties.scaleY =
    scrollProgress < 0.3
      ? 0.6 + (0.3 - scrollProgress) * (state.isMobile ? 0.4 : 0.9)
      : state.isMobile
        ? 1
        : 1.5;
  motionProperties.translateY = scrollProgress * 1500;
  motionProperties.rotate =
    scrollProgress < 0.3 ? -28 + ((0.3 - scrollProgress) * 28) / 0.2 : 0;
  motionProperties.opacity =
    scrollProgress < 0.2 ? 1 - scrollProgress / 0.2 : 0;
});

onMounted(() => {
  if (window.innerWidth < 768) {
    state.isMobile = true;
  }

  window.addEventListener("resize", () => {
    state.isMobile = window.innerWidth < 768;
  });
});
</script>
