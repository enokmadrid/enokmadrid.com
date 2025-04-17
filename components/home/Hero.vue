<template>
	<div class="min-h-screen bg-gradient-to-b from-[#171332] via-[#49299C] to-[#AB84FF] py-20 md:py-36">
		<div class="container mx-auto px-6 md:px-8">
			<div class="text-purple-300 text-3xl md:text-4xl font-script mb-4">
				Hi, I'm Enok!
			</div>
			
			<h1 class="text-5xl md:text-7xl font-bold text-white leading-tight max-w-3xl mb-8">
				I Illustrate
				<br />
				Experiences that Delight.
			</h1>
			
			<div class="mb-12 text-white">
				<div class="flex items-center space-x-2 mb-2">
					<span class="h-1.5 w-1.5 bg-white rounded-full"></span>
					<span class="text-lg">10+ Years in UX/UI Design Engineering</span>
				</div>
				<div class="flex items-center space-x-2">
					<span class="h-1.5 w-1.5 bg-white rounded-full"></span>
					<span class="text-lg">Interactive Experience Creator</span>
				</div>
			</div>
			
			<div class="flex flex-wrap gap-4">
				<NuxtLink to="/work" class="px-8 py-3 bg-white rounded-full text-[#171332] font-medium hover:bg-opacity-90 transition-all">
					View My Work
				</NuxtLink>
				<NuxtLink to="/about" class="px-8 py-3 bg-transparent border border-white rounded-full text-white font-medium hover:bg-white hover:bg-opacity-10 transition-all">
					About Me
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
// No reactive state needed
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

.font-script {
	font-family: 'Satisfy', cursive;
}
</style>