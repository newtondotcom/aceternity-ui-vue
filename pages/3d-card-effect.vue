<template>
    <AceternityUi3dCardEffectContainer className="inter-var" :mouseEntered :mouseLeft :mouseInside>
      <AceternityUi3dCardEffectBody className="bg-gray-50 relative group/3dCardEffect  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <AceternityUi3dCardEffectItem
          :mouseInside
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </AceternityUi3dCardEffectItem>
        <AceternityUi3dCardEffectItem
            :mouseInside
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this 3dCardEffect to unleash the power of CSS perspective
        </AceternityUi3dCardEffectItem>
        <AceternityUi3dCardEffectItem translateZ="100" className="w-full mt-4" :mouseInside>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </AceternityUi3dCardEffectItem>
        <div className="flex justify-between items-center mt-20">
          <AceternityUi3dCardEffectItem
            translateZ="20"
            as="link"
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            :mouseInside
          >
            Try now →
          </AceternityUi3dCardEffectItem>
          <AceternityUi3dCardEffectItem
            translateZ="20"
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            :mouseInside
          >
            Sign up
          </AceternityUi3dCardEffectItem>
        </div>
      </AceternityUi3dCardEffectBody>
    </AceternityUi3dCardEffectContainer>
  </template>

<script setup lang="ts">
const mouseInside = ref(false);

const mouseLeft = () => {
  mouseInside.value = false;
};
const mouseEntered = () => {
  mouseInside.value = true;
};
</script>