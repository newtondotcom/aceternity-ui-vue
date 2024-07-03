<template>
  <div :class="['h-96 w-96', className]" style="transform-style: preserve-3d">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  className: String,
});
</script>