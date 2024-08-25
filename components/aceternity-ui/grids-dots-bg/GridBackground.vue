<template>
<div
	class="relative flex h-[20rem] w-full flex-col items-center justify-center bg-white align-middle bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2] md:h-[50rem]"
>
	<div
		class="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
	/>
	<p
		class="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"
	>
		<slot />
	</p>
</div>
</template>