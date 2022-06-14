<template>
<section v-if="!loading" id="projects"
	data-aos="fade-in"
	data-aos-easing="ease-in-out-cubic">
	<section v-for="project in projects" 
		:key="project.id" 
		:style="`background-image: url(${project.imageHero.url})`"
		class="container-fluid dark project--fullwidth" >
			<article class="container">
				<div class="row">
					<header class="col-lg-4 project--description">
						<ul class="project-tags mb-2">
							<li v-for="role in project.roles" :key="role.id">{{role.title}}</li>
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

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.project--description {
	@include breakpoint(lg-down) {
		margin-bottom: $space-large;
	}
}
.project--fullwidth {
  background: #333;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 200px;

  .project-title, li, p {
    color: #fff;
  }

  .project-title {
    font-weight: 800;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -o-hyphens: auto;
    hyphens: auto;
  }

  .project-tags {
    list-style: none;
    padding: 0;

    li {
      display: inline;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      opacity: 0.4;

      &:not(:first-child) {
        padding-left: 4px;
		&::before {
			display: inline;
			content: "\2022";
			padding-left: 6px;
          	padding-right: 10px;
        }
      }
    }
  }

  .project-text {
    margin-bottom: $space-semi;
  }
}
</style>