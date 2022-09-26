<template>
	<main>
		{{initArticles}}
		<div class="jumbotron jumbotron-fluid dark shift-up has-overlay" :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${article.coverImage.url});`">
			<div class="container text-center">
				<h1 class="display-3">{{article.headline}}</h1>
				<card-image :src="`${article.coverImage.url}`" class="img-fluid featured-image"/>
			</div>
		</div>

		<section class="container-fluid bg--gray">
			<p class="container introduction hidden-md-down">{{article.description}}</p>
		</section>

		<section class="container-fluid">
				<div class="container">
					<div class="row content--container">
						<div class="col-md-4 content--summary">
							<div class="row">
								<div class="col-md-6 col-lg-12 mb-4">
									<span class="content--step-subtext">Tags</span>
									<ul class="content--tools project-tags">
										<li v-for="tag in article.tags" :key="tag.id">{{tag.title}}</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-8 content--about">
							<h5 class="content--title">The Description</h5>
							<p>{{article.description}}</p>
						</div>
					</div>
				</div>
		</section>

		<section class="container-fluid cms-editable format-paragraph">
			<div class="container">
				<div class="row">
					<div class="col-12" v-html="$md.render(article.content)"></div>
				</div>
			</div>
		</section>
		<PrevNext/>
	</main>
</template>

<script>
export default {
	data: () => ({
		loading: 0,
		article: {},
	}),
	computed: {
		initArticles() {
			this.article = this.$store.getters.getArticlesBySlug(this.$route.params.slug);
		}
	}
}
</script>

<style lang="scss" scoped>
.loader-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: radial-gradient(darken($brand-text, 20%), darken($brand-text, 30%));
	height: 100vh;
	b {
		color: lighten($brand-text, 10%);
		text-transform: uppercase;
		letter-spacing: 0.2rem;
	}
}

.loader {
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  
	> span {
		position: absolute;
		border: 4px solid $brand-action-primary;
		opacity: 1;
		border-radius: 50%;
		animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
		&:nth-child(2) {
			animation-delay: -0.5s;
		}
	}
}

@keyframes ripple {
	0% {
		top: 36px;
		left: 36px;
		width: 0;
		height: 0;
		opacity: 1;
	}
	100% {
		top: 0px;
		left: 0px;
		width: 72px;
		height: 72px;
		opacity: 0;
	}
}
</style>