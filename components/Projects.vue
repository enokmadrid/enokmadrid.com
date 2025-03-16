<template>
	<section v-if="!loading" id="projects" class="py-16 mb-5">
		<div class="grid container">
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

<script lang="ts">
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

interface GraphQLResponse {
	projects: Project[];
}

export default {
	data() {
		return {
			loading: true,
			projects: [] as Project[]
		}
	},
	async fetch() {
		const query = `
			query {
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
		const { projects } = (await this.$graphql.default.request(query)) as GraphQLResponse
		this.projects = projects
		this.loading = false
	}
}
</script>

<style lang="postcss" scoped>
.grid {
	@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

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