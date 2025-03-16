<template>
	<nav class="fixed bottom-0 w-full z-50">
		<div class="flex lg:hidden h-[60px] bg-white/85 backdrop-blur-lg shadow-[0_-2px_4px_rgba(0,0,0,0.1)]">
			<NuxtLink v-for="(item, index) in navItems" 
				:key="index"
				:to="item.path" 
				:exact="item.exact"
				class="flex flex-col items-center justify-center flex-1 text-gray-700 hover:text-primary">
				<fa v-if="currentPath === item.path" :icon="['fas', item.icon]" class="opacity-80"/>
				<fa v-else :icon="['far', item.icon]" class="opacity-80"/>
				<span class="text-xs font-semibold mt-0.5">{{ item.text }}</span>
			</NuxtLink>
			<a href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" 
				target="_blank" 
				class="flex flex-col items-center justify-center flex-1 text-gray-700 hover:text-primary">
				<fa :icon="['far', 'paper-plane']" class="opacity-80"/>
				<span class="text-xs font-semibold mt-0.5">Contact</span>
			</a>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavigationMobile',
	data() {
		return {
			currentPath: '/',
			navItems: [
				{ path: '/', text: 'Work', icon: 'suitcase', exact: true },
				{ path: '/about', text: 'About', icon: 'user', exact: false },
				{ path: '/process', text: 'Process', icon: 'sitemap', exact: false },
				{ path: '/learn', text: 'Training', icon: 'chalkboard-teacher', exact: false }
			]
		}
	},
	created() {
		this.currentPath = this.$route.path;
	},
	watch: {
		'$route'(to) {
			this.currentPath = to.path;
		}
	}
}
</script>