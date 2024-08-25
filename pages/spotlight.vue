<template>
<div
	class="relative flex h-[25rem] w-full flex-col overflow-hidden rounded-md bg-white/[0.96] antialiased bg-grid-white/[0.02] dark:bg-black/[0.96] md:h-[40rem] md:items-center md:justify-center"
>
	<Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="currentColor" />
	<div class=" relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
		<h1
			class="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-700 bg-clip-text text-center text-4xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 md:text-7xl"
		>
			spotlight
		</h1>
		<h2
			class="bg-opacity-50 text-neutral-600 text-center text-2xl font-bold dark:from-neutral-50 dark:to-neutral-400 md:text-2xl"
		>
			wait the spotlight is coming
		</h2>
	</div>
</div>
</template>
<script setup lang="ts">
import Spotlight from '../components/aceternity-ui/spotlight/Spotlight.vue';
</script>