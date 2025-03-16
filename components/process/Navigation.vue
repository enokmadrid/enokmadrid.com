<template>
	<div class="flex overflow-x-auto scrollbar-hide h-[150px] bg-gray-900">
		<NuxtLink 
			v-for="step in steps" 
			:key="step.id" 
			:to="`/process/${step.slug}`" 
			class="flex flex-col items-center justify-center flex-1 min-w-[150px] text-gray-400 hover:bg-black/20 hover:text-secondary transition-colors"
			:class="{ 'bg-black/20 border-b-[6px] border-secondary text-secondary': $route.path === `/process/${step.slug}` }">
			<i :class="['text-2xl mb-2', step.navIcon]">
				<span class="block text-sm mt-1">{{step.title}}</span>
			</i>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	name: 'ProcessNavigation',
	data: () => ({
		steps: []
	}),
	async created() {
		this.steps = await this.$content('process').sortBy('id').fetch();
	}
}
</script>