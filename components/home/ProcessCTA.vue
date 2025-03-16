<template>
	<section class="container mx-auto px-4 text-center mb-5">
		<h2 class="text-4xl md:text-6xl font-bold mb-4 relative">
			My Approach To Design Thinking
			<span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary"></span>
		</h2>
		<p class="text-lg text-gray-200 md:text-gray-100 mb-4">All the steps I take to approach from start to finish.</p>
		<Button class="btn btn-primary btn-lg rounded-pill brand-gradient has-arrow __right" to="/process">Learn More</Button>
	</section>
</template>

<script lang="ts">
export default {
	name: 'ProcessCTA'
}
</script>