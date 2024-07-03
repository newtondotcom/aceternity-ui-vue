<template>
  <div
    ref="itemRef"
    :class="['w-fit transition duration-200 ease-linear', className]"
    :style="computedStyle"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
  className: String,
  translateX: {
    type: [Number, String],
    default: 0,
  },
  translateY: {
    type: [Number, String],
    default: 0,
  },
  translateZ: {
    type: [Number, String],
    default: 0,
  },
  rotateX: {
    type: [Number, String],
    default: 0,
  },
  rotateY: {
    type: [Number, String],
    default: 0,
  },
  rotateZ: {
    type: [Number, String],
    default: 0,
  },
  mouseInside: Boolean,
});

const itemRef = ref(null);

const computedStyle = computed(() => {
  if (props.mouseInside) {
    return {
      transform: `translate3d(${props.translateX}px, ${props.translateY}px, ${props.translateZ}px) rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg) rotateZ(${props.rotateZ}deg)`,
    };
  } else {
    return {
      transform: `translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`,
    };
  }
});

watch(
  () => props.mouseInside,
  (newValue) => {
    handleAnimations(newValue);
  }
);

const handleAnimations = (isMouseEntered) => {
  if (!itemRef.value) return;
  itemRef.value.style.transform = isMouseEntered
    ? `translate3d(${props.translateX}px, ${props.translateY}px, ${props.translateZ}px) rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg) rotateZ(${props.rotateZ}deg)`
    : `translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
};
</script>