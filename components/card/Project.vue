<template>
	<a :class="[
		'relative flex items-end overflow-hidden text-gray-100',
		'h-[400px] sm:h-[600px] md:h-[540px] lg:h-[700px]',
		setGridClass
	]" :href="projectUrl">
		<span class="absolute right-[-8px] top-[-36px] text-[160px] text-secondary font-heading text-right opacity-0 transition-all duration-150 ease-in-out group-hover:opacity-100">0{{index + 1}}</span>
		<div class="absolute inset-0 bg-cover bg-center -z-10 transition-transform duration-150 ease-in-out group-hover:scale-103"
			:style="`background-image: url(${imageUrl})`">
			<div class="absolute inset-0 bg-gradient-to-t from-[rgba(82,85,151,0.9)] to-[rgba(0,0,0,0.9)] opacity-0 transition-all duration-150 ease-in-out backdrop-blur-sm group-hover:opacity-100"></div>
		</div>
		<div class="w-full transition-all duration-250 ease-in-out group-hover:-translate-y-[140px] group-hover:px-4">
			<div class="flex justify-between">
				<h3 class="font-bold whitespace-nowrap origin-bottom-left transition-all duration-150 ease-in-out group-hover:scale-150 group-hover:text-white">{{title}}</h3>
				<ul class="hidden sm:block text-right list-none pl-auto mb-2">
					<li v-for="role in roles" :key="role.id" class="inline text-xs font-semibold uppercase opacity-70 group-hover:opacity-0 transition-opacity duration-150 ease-in-out first:pl-0 first:before:hidden pl-2 before:content-['\00B7'] before:pr-2">
						{{role.title}}
					</li>
				</ul>
			</div>
			<p class="m-0 w-full md:max-w-[330px] lg:max-w-[376px] opacity-0 h-0 transition-all duration-150 ease-in-out delay-200 group-hover:opacity-100 group-hover:h-auto md:text-sm">{{ description }}</p>
			<span class="hidden md:flex absolute right-5 -bottom-[60px] items-center justify-center bg-white rounded-full h-[70px] w-[70px] lg:h-[100px] lg:w-[100px] text-primary shadow-lg opacity-0 origin-bottom-right -translate-x-2.5 transition-all duration-200 ease-out delay-350 group-hover:opacity-100 group-hover:translate-x-0">
				<fa :icon="['fas', 'arrow-right']"/>
			</span>
		</div>
	</a>
</template>

<script lang="ts">
interface Props {
	projectUrl: string;
	imageUrl: string;
	heroUrl: string;
	title: string;
	description: string;
	color: string;
	index: number;
	roles: Array<{
		id: string;
		title: string;
	}>;
}

export default {
	name: 'ProjectCard',
	props: {
		projectUrl: {
			type: String,
			required: true
		},
		imageUrl: {
			type: String,
			required: true
		},
		heroUrl: {
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
		},
		color: {
			type: String,
			required: true
		},
		index: {
			type: Number,
			required: true
		},
		roles: {
			type: Array,
			required: true
		}
	} as Record<keyof Props, any>,
	computed: {
		setGridClass() {
			return `item-${this.index + 1}`
		}
	}
}
</script>