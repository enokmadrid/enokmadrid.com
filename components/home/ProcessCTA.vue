<template>
	<section class="container section-title text-center mb-5">
		<h2 class="display-1 mb-4 text-decoration">My Approach To Design Thinking </h2>
		<p class="section-subtitle text-light mb-4">All the steps I take to approach from start to finish.</p>
		<Button class="btn btn-primary btn-lg rounded-pill brand-gradient has-arrow __right" to="/process">Learn More</Button>
	</section>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
@include breakpoint(md-down) {
	.text-light {
		color: $brand-text !important;
	}
}
</style>