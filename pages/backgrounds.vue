<template>
<div class="bg-red-100">
<DotBackground>
	<div
		class="mb-2 flex self-center bg-opacity-50 bg-gradient-to-b from-primary to-primary-light bg-clip-text text-center text-4xl font-bold text-primary text-transparent md:text-7xl"
	>
		Dots background
	</div>
</DotBackground>
<SmallGridBackground>
	<div
		class="mb-2 flex self-center bg-opacity-50 bg-gradient-to-b from-primary to-primary-light bg-clip-text text-center text-4xl font-bold text-primary text-transparent md:text-7xl"
	>
		Small Grid background
	</div>
</SmallGridBackground>
<GridBackground>
	<div
		class="mb-2 flex self-center bg-opacity-50 bg-gradient-to-b from-primary to-primary-light bg-clip-text text-center text-4xl font-bold text-primary text-transparent md:text-7xl"
	>
		Grid background
	</div>
</GridBackground>
</div>
    
</template>
<script setup lang="ts">
import DotBackground from '../components/aceternity-ui/grids-dots-bg/DotBackground.vue';
import SmallGridBackground from '../components/aceternity-ui/grids-dots-bg/SmallGridBackground.vue';
import GridBackground from '../components/aceternity-ui/grids-dots-bg/GridBackground.vue';
</script>