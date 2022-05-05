<template>
	<nav class="sticky-header fixed-bottom">
		<div class="flexbox-container flex-menu d-flex d-lg-none">
			<NuxtLink to="/" exact class="flex-link">
				<fa v-if="this.$store.state.currentPage === '/'" :icon="['fas', 'suitcase']" class="icon"/>
				<fa v-else :icon="['far', 'suitcase']" class="icon"/>
				<span>Work</span>
			</NuxtLink>
			<NuxtLink to="/about" class="flex-link">
				<fa v-if="this.$store.state.currentPage === '/about'" :icon="['fas', 'user']" class="icon"/>
				<fa v-else :icon="['far', 'user']" class="icon"/>
				<span>About</span>
			</NuxtLink>
			<NuxtLink to="/process" class="flex-link">
				<fa v-if="this.$store.state.currentPage === '/process'" :icon="['fas', 'sitemap']" class="icon"/>
				<fa v-else :icon="['far', 'sitemap']" class="icon"/>
				<span>Process</span>
			</NuxtLink>
			<NuxtLink to="/learn" class="flex-link">
				<fa v-if="this.$store.state.currentPage === '/learn'" :icon="['fas', 'chalkboard-teacher']" class="icon"/>
				<fa v-else :icon="['far', 'chalkboard-teacher']" class="icon"/>
				<span>Training</span>
			</NuxtLink>
			<a href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" target="_blank" class="flex-link">
				<fa :icon="['far', 'paper-plane']" class="icon"/>
				<span>Contact</span>
			</a>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.flex-menu {
	background: rgba(255,255,255, 0.85);
    backdrop-filter: blur(8px);
	box-shadow: $shadow-medium-top;
	height: 60px;
	.flex-link {
		color: $brand-text;
		height: inherit;
		flex-direction: column;
		.icon {
			color: $brand-text;
			opacity: 0.8;
		}
		&.nuxt-link-active {
			border-bottom: solid 2px $primary;
			color: $brand-text;
			@extend %transition-fade-in;
			.icon {
				margin-top: 2px;
				opacity: 1;
				@extend %transition-fade-in;
			}
			span {
				opacity: 1;
			}
		}
	}
	
	span {
		display: block;
		font-family: $font-family-sans-serif;
		font-size: 11px;
		font-weight: 600;
		padding-top: 2px;
		color: $brand-text;
		opacity: 0.6;
	}
}
</style>