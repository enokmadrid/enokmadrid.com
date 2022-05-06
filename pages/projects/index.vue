<template>
<section v-if="!loading" id="projects">
	<section v-for="project in projects" 
		:key="project.id" 
		:style="`background-image: url(${project.imageHero.url})`"
		data-aos="fade-in" 
		data-aos-duration="500"
		data-aos-easing="ease-in-out-cubic"
		data-aos-anchor-placement="top-center"
		class="container-fluid dark project--fullwidth" >
			<article class="container">
				<div class="row">
					<header class="col-lg-4 project--description">
						<ul class="project-tags mb-2">
							<li v-for="role in project.roles" :key="role.id">{{role.title}} &middot;</li>
						</ul>
						<h3 class="project-title h1 mb-4">{{project.title}}</h3>
						<p class="project-text">
							{{project.clientDescription}}
						</p>
						<Button
							:to="`/projects/${project.slug}`"
							:key="project.slug"
							class="btn btn-lg btn-light rounded-pill">
							View Case Study
						</Button>
					</header>
					<aside class="col-lg-8 col-lg-push-1 no-gutter project--image">
						<ProjectImage :src="`${project.imageScreen.url}`" class="img-fluid" />
					</aside>
				</div>
			</article>
		</section>
</section>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
	data: () => ({
		loading: 0,
		projectNext: '',
		projectPrevious: ''
	}),
	computed: {
		projects() {
			return this.$store.state.projects
		}
	},
	mixins: [aosMixin]
}
</script>