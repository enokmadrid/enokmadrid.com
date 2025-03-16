<template>
	<li class="list-none m-0">
		<article class="p-9 text-center">
			<img :src="icon" :alt="`${title} Icon`" class="w-full h-16 object-contain mb-4 mx-auto">
			<h4 class="text-2xl font-semibold text-white mb-4">{{ title }}</h4>
			<p class="text-gray-200 m-0">{{ description }}</p>
		</article>
	</li>
</template>

<script lang="ts">
interface Props {
	icon: string;
	title: string;
	description: string;
}

export default {
	name: 'IconCard',
	props: {
		icon: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		}
	} as Record<keyof Props, any>
}
</script>