<template>
	<div class="flexbox-container content--menu">
		<Button
			v-if="prev" 
			:to="`${prev.path}`" 
			class="flex-link btn btn-link has-arrow __left">
				<span>{{prev.title}}</span>
		</Button>
		<Button
			v-if="next" 
			:to="`${next.path}`" 
			class="flex-link btn btn-link has-arrow __right"
			>
			<span>{{next.title}}</span>
		</Button>
	</div>
</template>

<script>
export default {
    props: {
        prev: {},
        next: {}
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
</style>