<template>
	<div class="w-full block">
		<h2 class="text-4xl font-bold text-center mb-6 after:content-[''] after:block after:w-24 after:h-1 after:bg-primary after:mx-auto after:my-6">{{ title }}</h2>
		<p class="text-xl text-center max-w-[600px] mx-auto">{{ subtitle }}</p>
	</div>
</template>

<script>
export default {
	name: 'Title',
	props: {
		title: {
			type: String,
			required: true
		},
		subtitle: {
			type: String,
			required: true
		}
	}
}
</script>