<template>
	<div class="text-center offset-top-50 rounded-panel">
		<b class="d-block">My Tech Stack</b>
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
				'rive.jpeg',
				'html5.svg',
				'javascript.svg',
				'sass.svg',
				'vuejs.svg',
				'nuxt.svg',
				'laravel.svg'
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.rounded-panel {
	@include breakpoint(sm) {
		max-width: 520px;
	}
	@include breakpoint(md) {
		max-width: 620px;
	}
	max-width: 860px;
	width: 100%;
	margin: 0 auto;
	background-color: white;
	border-radius: $border-radius-default;
}
.offset-top-50 {
	margin-top: -50px;
}
.list-icons {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-content: center;
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