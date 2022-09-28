<template>
	<a :class="['project-card', 'd-flex', 'align-items-end', setGridClass]" :href="projectUrl">
		<span class="project-counter">0{{this.index + 1}}</span>
		<picture class="project-card-background absolute" :style="`background-image: url(${imageUrl})`"></picture>
		<div class="project-details">
			<div class="d-flex justify-content-between">
				<h3 class="project-title font-weight-bold">{{title}}</h3>
				<ul class="project-tags mb-2">
					<li v-for="role in roles" :key="role.id" class="tag">{{role.title}}</li>
				</ul>
			</div>
			<p class="project-description">{{ description }}</p>
			<span class="project-cta"><fa :icon="['fas', 'arrow-right']"/></span>
		</div>
	</a>
</template>

<script>
export default {
	props: [
		"projectUrl",
		"imageUrl",
		"heroUrl",
		"title",
		"description",
		"color",
		"index",
		"roles",
	],
	computed: {
		setGridClass() {
			return `item-${this.index + 1}`
		},
		cssVars() {
			return {
				'--card-color': this.color
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';


.project-card, .card-body {
	position: relative;
}
.project-card-background {
	background-size: cover;
	background-position: center;
	position: absolute;
	left: 0;
	top: 0;
	height: 800px;
	width: 100%;
	opacity: 1;
	z-index: -1;
	transition: transform $speed-150 $ease-accelerate;
	&::after {
		content: "";
		background: linear-gradient(0deg, rgba(82,85,151,0.9), rgba(0,0,0,0.9));
		height: inherit;
		width: inherit;
		display: block;
		opacity: 0;
		transition: all $speed-150 $ease-accelerate;
	}
}
.project-card {
	color: $brand-text;
	height: 850px;
	overflow: hidden;
	@include breakpoint(md-down) {
		padding-bottom: $space-small;
		margin-bottom: $space-small;
	}
}
@include breakpoint(xs) {
	.project-card {
		height: 400px;
		.project-card-background {
			height: 343px;
		}
	}
}
@include breakpoint(sm) {
	.project-card {
		height: 600px;
		.project-card-background {
			height: 543px;
		}
	}
}
@include breakpoint(md) {
	.project-card {
		height: 540px;
		.project-card-background {
			height: 442px;
		}
	}
}
@include breakpoint(lg) {
	.project-card {
		height: 700px;
		.project-card-background {
			height: 643px;
		}
	}
}

@include breakpoint(lg) {
	.project-card {
		height: 700px;
		.project-card-background {
			height: 643px;
		}
	}
}
.card-img-top {
	margin-bottom: $space-large;
}

.project-details {
	width: 100%;
	transition: all 250ms $ease-accelerate;
	.project-title {
		white-space: nowrap;
		transform-origin: bottom left;
		transition: all $speed-150 $ease-accelerate;
	}
	.project-description {
		opacity: 0;
		height: 0;
		margin: 0;
		width: 376px;
		transition: all 150ms $ease-accelerate;
		transition-delay: none;
		@include breakpoint(lg) {
			max-width: 330px;
		}
		@include breakpoint(md-down) {
			font-size: 14px;
			width: 100%;
		}
	}
	.project-cta {
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		border-radius: 50%;
		height: 100px;
		width: 100px;
		color: $primary;
		box-shadow: $shadow-large;
		position: absolute;
		right: 20px;
		bottom: -60px;
		opacity: 0;
		transform-origin: bottom right;
		transform: translateX(-10px);
		transition: all 200ms $ease-decelerate;
		@include breakpoint(lg-down) {
			height: 70px;
			width: 70px;
		}
		@include breakpoint(md-down) {
			display: none;
		}
	}
}

.project-counter {
	@include heading-font;
	color: $brand-secondary;
	font-size: 160px;
	text-align: right;
	position: absolute;
	right: -8px;
	top: -36px;
	opacity: 0;
	transition: all 150ms $ease-accelerate;
}

.project-tags {
	@include breakpoint(xs) {
		display: none;
	}
	display: block;
	justify-content: flex-end;
	list-style: none;
	padding-left: auto;
	text-align: right;

	.tag {
		display: inline;
		font-size: 10px;
		font-weight: 600;
		text-transform: uppercase;
		opacity: 0.7;
		&:not(:first-child) {
		padding-left: $space-micro;
			&::before {
				padding-right: $space-micro;
				content: "\00B7"
			}
		}
	}
}


.project-card:hover {
	text-decoration: none;
	.project-card-background {
		transform: scale(1.03);
	}
	.project-details {
		transform: translateY(-140px);
		padding: 0 16px;
		transition: all $speed-150 $ease-decelerate;
		.project-title {
			color: white;
			transform-origin: bottom left;
			transform: scale(1.5);
			transition: all $speed-150 $ease-decelerate;
		}
		.tag {
			opacity: 0;
			transition: opacity $speed-150 $ease-accelerate;
		}
		.project-description {
			color: white;
			opacity: 1;
			transform: scaleY(1);
			transition: all $speed-150 $ease-decelerate;
			transition-delay: 200ms;
		}
		.project-cta {
			opacity: 1;
			transform: translateX(0px);
			transition-delay: 350ms;
		}
	}

	.project-card-background::after {
		opacity: 1;
		backdrop-filter: blur(6px);
	}

	.project-counter {
		opacity: 1;
		transform: translateY(-20px);
		transition: all 350ms $ease-decelerate;
	}
}
</style>