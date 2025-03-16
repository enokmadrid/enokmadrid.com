<template>
	<div class="relative -mt-16 bg-white bg-center bg-no-repeat bg-cover">
		<div class="container relative z-5 sm:py-30 md:py-[250px] md:pb-15">
			<div class="flex flex-col-reverse sm:flex-row">
				<div class="w-full md:w-[70%] lg:w-[60%] text-center sm:text-left">
					<span class="block text-6xl mb-4 font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-primary">Hi, I'm Enok!</span>
					<h1 class="text-5xl text-hero-title">Design Engineer</h1>
					<p class="mt-4 lg:pr-[30%] text-hero-description">I <a href="https://www.youtube.com/enokmadrid" target="blank" class="text-primary hover:text-primary-dark">create UX content</a> and help tech startups make profits by leading them into delighting their customers.</p>
				</div>
				<Gravatar class="self-center large"/>
			</div>
			<div class="mt-4 mb-1 xs:space-y-2 sm:space-x-4">
				<Button class="btn rounded-pill btn-lg btn-primary brand-gradient has-arrow __right" href="#solutions">Learn How I Can Help</Button>
				<Button class="btn rounded-pill btn-lg btn-light" to="/projects">View My Portfolio</Button>
			</div>
		</div>
		<div class="hidden lg:block absolute inset-0 overflow-hidden">
			<div class="absolute inset-0 h-[700px] -mr-[40%] ml-[60%] border-l-[7px] border-[#e21955] bg-[#070710] transform skew-x-45">
				<div class="absolute left-[-49%] top-0 border-b-[5px] border-[#e21955]"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useAos } from '~/composables/useAos'

useAos({
	duration: 500,
	easing: 'ease-in-out-cubic'
})
</script>