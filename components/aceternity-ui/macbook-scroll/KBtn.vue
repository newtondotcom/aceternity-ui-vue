<template>
  <div
    class="key-btn flex rounded-md justify-center items-center px-1 py-2 w-9 h-9"
    :class="[btnClass]"
    :style="{ boxShadow: '0px 0px 1px 1px #00000020 inset' }"
  >
    <div
      :class="[
        'text-white text-sm font-medium flex flex-col justify-center items-center',
        childrenClassName,
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "KBtn",
  props: {
    btnClass: {
      type: String,
      default: "",
    },
    childrenClassName: {
      type: String,
      default: "",
    },
  },
};
</script>
