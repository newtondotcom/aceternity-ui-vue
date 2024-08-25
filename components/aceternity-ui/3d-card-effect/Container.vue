<template>
  <div
    :class="['py-20 flex items-center justify-center', containerClassName]"
    :style="{ perspective: '1000px' }"
  >
    <div
      ref="containerRef"
      v-on:mouseover="handleMouseEnter"
      @mousemove="handleMouseMove"
      v-on:mouseleave="handleMouseLeave"
      :class="[
        'flex items-center justify-center relative transition-all duration-200 ease-linear',
        className,
      ]"
      :style="{ transformStyle: 'preserve-3d' }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  className: String,
  containerClassName: String,
  mouseInside: Boolean,
  mouseEntered: Function,
  mouseLeft: Function,
});

const containerRef = ref(null);

const handleMouseEnter = () => {
  if (props.mouseEntered) {
    props.mouseEntered();
  }
};

const handleMouseLeave = () => {
  if (props.mouseLeft) {
    props.mouseLeft();
  }
  if (containerRef.value) {
    containerRef.value.style.transform = `rotateY(0deg) rotateX(0deg)`;
  }
};

const handleMouseMove = (event) => {
  if (!containerRef.value) return;
  const { left, top, width, height } =
    containerRef.value.getBoundingClientRect();
  if (
    event.pageX < left ||
    event.pageX > left + width ||
    event.pageY < top ||
    event.pageY > top + height
  ) {
    return;
  }
  const x = (event.pageX - left - width / 2) / 25;
  const y = (event.pageY - top - height / 2) / 25;
  containerRef.value.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
};

watch(
  () => props.mouseInside,
  (newVal) => {
    if (!newVal && containerRef.value) {
      containerRef.value.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
  },
);

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>
