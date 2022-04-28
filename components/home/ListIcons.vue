<template>
	<div class="text-center offset-top-50">
		<b class="d-block">Tool I Use</b>
		<div class="list-icons">
			<i v-for="icon in icons" :key="icon">
				<img :src="require(`~/assets/images/svg/logos/${icon}`)" alt="">
			</i>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			icons: [
				'figma.svg',
				'sketch.svg',
				'invision.svg',
				'principle.svg',
				'ai.svg',
				'html5.svg',
				'sass.svg',
				'nuxt.svg',
				'laravel.svg'
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.offset-top-50 {
	margin-top: -50px;
}
.list-icons {
	@include breakpoint(sm) {
		max-width: 520px;
	}
	@include breakpoint(md) {
		max-width: 620px;
	}
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-content: center;
	margin: 0 auto;
	background-color: white;
	max-width: 860px;
	border-radius: $border-radius-default;
	padding: $space-small;
	box-shadow: $shadow-large;

	i {
		@include breakpoint(xs) {
			padding: $space-small;
		}
		@include breakpoint(sm-down) {
			height: $space-large;
			width: $space-large;
			padding: $space-xsmall;
		}
		display: flex;
		padding: $space-small;
		align-content: center;
		justify-content: center;
		border-radius: 50%;
		height: $space-xlarge;
		width: $space-xlarge;
		background-color: #F9F9F9;
	}
}
</style>