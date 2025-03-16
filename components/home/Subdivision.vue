<template>
	<section class="container-fluid bg-gray-100">
		<div class="container mx-auto px-4 py-24 text-center md:text-left">
			<h4 class="text-4xl font-bold">{{ title }}</h4>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Subdivision',
	props: {
		title: {
			type: String,
			required: true
		}
	}
}
</script>