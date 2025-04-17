<template>
	<nav class="fixed bottom-0 w-full z-50 lg:hidden" :class="{ 'hidden': $route.path === '/' }">
		<div class="flex h-[60px] bg-[#171332]/95 backdrop-blur-lg shadow-[0_-2px_4px_rgba(0,0,0,0.2)]">
			<NuxtLink v-for="(item, index) in navItems" 
				:key="index"
				:to="item.path" 
				:exact="item.exact"
				class="flex flex-col items-center justify-center flex-1 text-white/80 hover:text-white">
				<fa v-if="currentPath === item.path" :icon="['fas', item.icon]" class="text-white"/>
				<fa v-else :icon="['far', item.icon]" class="opacity-80"/>
				<span class="text-xs font-semibold mt-0.5">{{ item.text }}</span>
			</NuxtLink>
			<NuxtLink to="/contact" 
				class="flex flex-col items-center justify-center flex-1 text-white/80 hover:text-white">
				<fa :icon="['far', 'envelope']" class="opacity-80"/>
				<span class="text-xs font-semibold mt-0.5">Hire Me</span>
			</NuxtLink>
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
				{ path: '/', text: 'Home', icon: 'home', exact: true },
				{ path: '/about', text: 'About', icon: 'user', exact: false },
				{ path: '/work', text: 'Work', icon: 'briefcase', exact: false },
				{ path: '/case-studies', text: 'Cases', icon: 'project-diagram', exact: false },
				{ path: '/learn', text: 'Learn', icon: 'graduation-cap', exact: false }
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