<template>
	<div>
		<ProcessHero />
		<section class="bg-gray-50">
			<div class="container mx-auto px-4 py-16">
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					<NuxtLink v-for="step in steps" :key="step.id" :to="`${step.path}`" class="text-center text-current hover:no-underline">
						<div class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-150 ease-in-out py-8 mb-3">
							<i :class="['icon text-primary mx-auto my-7.5 text-[60px]', step.navIcon]"></i>
							<b class="block"> {{step.title}}</b>
						</div>
					</NuxtLink>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data: () => ({
		steps: []
	}),
	async created() {
		this.steps = await this.$content('process').sortBy('id').fetch();
	}
}
</script>