<template>
	<span class="gravatar"></span>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.gravatar {
	border-radius: 50%;
	height: 140px;
	width: 140px;
	margin-top: 10px;
	display: block;
	background: url('https://s.gravatar.com/avatar/e19387847005ca3f652b3176c370b4d1?s=280') no-repeat center center;
	background-size: 100%;
	transition: transform 250ms ease-in-out;
	transform: scale(.95);
	&:hover {
		transform: scale(1);
	}
	@include breakpoint(sm-up) {
		box-shadow: 0 0 0 5px $primary;
	}
}
.large {
	@include breakpoint(xs) {
		padding: $space-xlarge;
		margin-bottom: $space-small;
	}
	@include breakpoint(sm) {
		width: 100px;
		height: 100px;
		padding: 70px;
		margin-left: $space-large;
	}
	@include breakpoint(md-up) {
		width: 180px;
		height: 180px;
	}
}
</style>