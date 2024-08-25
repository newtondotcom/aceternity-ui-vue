<template>
  <div
    class="speaker-grid flex px-[0.5px] gap-[2px] mt-2 h-40"
    :style="speakerGridStyle"
  ></div>
</template>

<script setup>
const speakerGridStyle = {
  backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
  backgroundSize: "3px 3px",
};
</script>

<style scoped>
.speaker-grid {
  background-image: radial-gradient(circle, #08080a 0.5px, transparent 0.5px);
  background-size: 3px 3px;
}
</style>
