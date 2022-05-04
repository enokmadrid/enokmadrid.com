<template>
	<div v-if="loading" class="loading-page">
		<h1 class="display-1 text-decoration">loading . . .</h1>
	</div>
	<div v-else>
		<LayoutNavigationMobile />
		<LayoutNavigation />
		<Nuxt />
		<LayoutFooter />
	</div>
</template>

<script>
export default {
	data: () => ({
		loading: false,
	}),
	created() {
		this.loading = true
	},
	mounted() {
		setTimeout(() => this.loading = false, 1000);
	}
}
</script>
<style lang="scss" scoped>
.loading-page {
    position: fixed;
    top: 0;
    right: 0;
	width: 100%;
    height: 100%;
    z-index: 1000;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	background-image: url("~/assets/images/em_backdrop_animation.svg");
	background-size: cover;
  }
</style>