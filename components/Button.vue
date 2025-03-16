<template>
	<component
		:is="to ? 'nuxt-link' : href ? 'a' : 'button'"
		:to="to"
		:href="href"
		@click="$emit('click')"
		role="button"
		:class="[
			'transition-fade-in uppercase tracking-wider shadow-sm hover:shadow-lg',
			{ 'text-primary': isPrimary },
			{ 'w-full': isMobile },
			{ 'text-sm tracking-wide': isSmall },
			{ 'inline-block mb-1.5': isSpaced }
		]"
	>
		<slot></slot>
	</component>
</template>

<script lang="ts">
interface Props {
	to?: string;
	href?: string;
	label?: string;
	isPrimary?: boolean;
	isSmall?: boolean;
	isSpaced?: boolean;
}

export default {
	props: {
		to: String,
		href: String,
		label: String,
		isPrimary: Boolean,
		isSmall: Boolean,
		isSpaced: Boolean
	},
	data() {
		return {
			isMobile: window.innerWidth < 576
		}
	},
	mounted() {
		window.addEventListener('resize', this.handleResize)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.handleResize)
	},
	methods: {
		handleResize() {
			this.isMobile = window.innerWidth < 576
		}
	}
}
</script>

<style lang="postcss" scoped>
.has-arrow.__right::after, 
.has-arrow.__left::before {
	@apply font-['streamline-icons-font'] opacity-100 relative top-0.5 leading-[0.9] transition-all duration-150 ease-in-out;
}

.has-arrow.__right {
	&::after {
		content: "\65";
		@apply relative left-2;
	}
	&:hover::after {
		@apply left-[15px];
	}
}

.has-arrow.__left {
	&::before {
		content: "\63";
		@apply relative right-2;
	}
	&:hover::before {
		@apply right-[15px];
	}
}
</style>