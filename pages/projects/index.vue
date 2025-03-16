<template>
<section v-if="!loading" id="projects" class="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
	data-aos="fade-in"
	data-aos-easing="ease-in-out-cubic">
	<section v-for="project in projects" 
		:key="project.id" 
		:style="`background-image: url(${project.imageHero.url})`"
		class="snap-start h-screen bg-[#333] bg-center bg-no-repeat bg-cover pt-[200px]" >
			<article class="container mx-auto px-4">
				<div class="flex flex-col lg:flex-row">
					<header class="lg:w-1/3 lg:mb-0 mb-8">
						<ul class="list-none p-0 mb-2">
							<li v-for="role in project.roles" :key="role.id" 
								class="inline text-white text-[10px] font-semibold uppercase opacity-40 first:pl-0 first:before:hidden pl-1 before:content-['\2022'] before:inline before:pl-1.5 before:pr-2.5">
								{{role.title}}
							</li>
						</ul>
						<h3 class="text-white font-extrabold mb-4 break-words hyphens-auto">{{project.title}}</h3>
						<p class="text-white mb-6">
							{{project.clientDescription}}
						</p>
						<Button
							:to="`/projects/${project.slug}`"
							:key="project.slug"
							class="btn btn-lg btn-light rounded-pill">
							View Case Study
						</Button>
					</header>
					<aside class="lg:w-2/3 lg:ml-4">
						<card-image :src="`${project.imageScreen.url}`" class="w-full" />
					</aside>
				</div>
			</article>
		</section>
</section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAos } from '~/composables/useAos'
import { useContentStore } from '~/stores/content'

interface Role {
	id: string;
	title: string;
}

interface Project {
	id: string;
	title: string;
	slug: string;
	clientDescription: string;
	roles: Role[];
	imageHero: {
		url: string;
	};
	imageScreen: {
		url: string;
	};
}

useAos({
	duration: 500,
	easing: 'ease-in-out-cubic'
})

const { loading, projectNext, projectPrevious } = defineProps<{
	loading: number;
	projectNext: string;
	projectPrevious: string;
}>()

const contentStore = useContentStore()
const projects = computed<Project[]>(() => contentStore.projects)
</script>