<template>
	<div class="flexbox-container flex-menu process">
		<NuxtLink v-for="step in steps" :key="step.id" :to="`/process/${step.slug}`" class="flex-link {% if this.page.id == 'process-discovery' %}active{% endif %}">
			<i :class="['icon', step.navIcon]">
				<span>{{step.title}}</span>
			</i>
		</NuxtLink>
	</div>
</template>

<script>
export default {
	data: () => ({
		steps: []
	}),
	async created() {
		this.steps = await this.$content('process').sortBy('id').fetch();
	}
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.flex-menu {
	background: $brand-black-light;
	height: 150px;

	// Hide Scrollbar
	-ms-overflow-style: none;  /* Internet Explorer 10+ */
	scrollbar-width: none;  /* Firefox */
	&::-webkit-scrollbar { 
		display: none;  /* Safari and Chrome */
	}
	.flex-link {
		color: #8787A0;
		height: inherit;
		&:hover {
			background: rgba(0,0,0,0.2);
			text-decoration: none;
			i {
				color: $secondary;
			}
		}
		&.nuxt-link-active {
			background: rgba(0,0,0,0.2);
			border-bottom: solid 6px $secondary;
			color: $secondary;
		}
	}
	i {
		-webkit-transition: all 0.5s ease;
		transition: all 0.5s ease;
		font-size: 28px;
		span {
			display: block;
			font-family: $font-family-sans-serif;
			font-size: 12px;
			font-weight: 600;
			padding-top: 13px;
			color: #fff;
		}
	}
}

.process {
	overflow: auto;
	justify-content: space-between;
	width:100%;

	-webkit-flex-wrap: nowrap;
	-ms-flex-wrap: nowrap;
	flex-wrap: nowrap;

	.flex-link {
		padding: 0 5px;

		i {
			padding:0 25px;
			white-space: nowrap;
		}
	}
}
</style>