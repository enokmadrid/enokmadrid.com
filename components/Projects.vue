<template>
	<section v-if="!loading" id="projects" class="py-16 mb-5">
		<div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="item-first">
				<span class="text-left text-6xl text-decoration block">Recent Work</span>
				<img src="~/assets/images/svg/robot-animated.svg" width="360" height="281" alt="robot-animation" class="float-right">
			</div>
			<card-project
				v-for="(project, index) in projects"
				:index="index"
				:key="project.id"
				:image-url="project.imageCard.url"
				:hero-url="project.imageHero.url"
				:title="project.title"
				:description="project.clientDescription"
				:roles="project.roles"
				:project-url="`/projects/${project.slug}`"
				:color="project.color.hex"
				data-aos="zoom-in-up" 
				data-aos-duration="500"
				data-aos-easing="ease-in-out-cubic"
				>
			</card-project>
			<div class="item-last">
				<span class="block text-center text-6xl text-decoration">Enjoying These?</span>
				<Button class="btn btn-primary btn-lg rounded-pill brand-gradient has-arrow __right" to="/projects">See All my Projects</Button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gql from 'graphql-tag'

interface Project {
	id: string;
	title: string;
	slug: string;
	clientDescription: string;
	roles: string[];
	order: number;
	color: {
		hex: string;
	};
	imageCard: {
		url: string;
	};
	imageHero: {
		url: string;
	};
}

interface ProjectsData {
	projects: Project[];
}

const loading = ref(true)
const projects = ref<Project[]>([])

const PROJECTS_QUERY = gql`
	query GetProjects {
		projects(first: 6, orderBy: order_ASC) {
			id
			title
			slug
			clientDescription
			roles
			order
			color {
				hex
			}
			imageCard {
				url
			}
			imageHero {
				url
			}
		}
	}
`

const fetchProjects = async () => {
	try {
		const nuxtApp = useNuxtApp()
		const config = useRuntimeConfig()
		console.log('Environment endpoint:', config.public.graphcmsEndpoint)
		console.log('Apollo Client Config:', nuxtApp.$apollo.clients.default)
		console.log('Query:', PROJECTS_QUERY)
		const { data } = await nuxtApp.$apollo.clients.default.query<ProjectsData>({
			query: PROJECTS_QUERY,
			fetchPolicy: 'no-cache' // Temporarily disable cache to ensure fresh request
		})
		projects.value = data.projects
		loading.value = false
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error details:', {
				message: error.message,
				// @ts-ignore - Apollo error properties
				networkError: error.networkError,
				// @ts-ignore - Apollo error properties
				graphQLErrors: error.graphQLErrors
			})
		} else {
			console.error('Unknown error:', error)
		}
		loading.value = false
	}
}

onMounted(() => {
	fetchProjects()
})
</script>

<style lang="postcss" scoped>
.item-first {
	@apply col-span-full text-center mb-16;
}

.item-last {
	@apply col-span-full text-center mt-16;
}

.text-decoration {
	@apply font-bold relative;
}

.text-decoration::after {
	content: '';
	@apply absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary;
}
</style>