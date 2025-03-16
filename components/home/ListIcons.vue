<template>
	<div class="text-center mt-12 bg-white rounded-lg shadow-lg p-8 w-full max-w-[860px] mx-auto">
		<b class="block text-xl mb-6">My Tech Stack</b>
		<div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center">
			<div v-for="icon in icons" :key="icon" class="flex items-center justify-center p-2 sm:p-3 md:p-4 bg-gray-50 rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
				<img :src="require(`~/assets/images/svg/logos/${icon}`)" :alt="icon.replace('.svg', '').replace('.jpeg', '')" class="h-8 w-auto object-contain">
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'ListIcons',
	data() {
		return {
			icons: [
				'figma.svg',
				'rive.jpeg',
				'html5.svg',
				'javascript.svg',
				'sass.svg',
				'vuejs.svg',
				'nuxt.svg',
				'laravel.svg'
			] as string[]
		}
	}
}
</script>