<template>
	<li class="col-md-4 col-sm-6 col-xs-12">
		<article class="icon-card">
			<img :src="icon" :alt="`${title} Icon`" class="icon">
			<h4 class="title">{{ title }}</h4>
			<p>{{ description }}</p>
		</article>
	</li>
</template>

<script>
export default {
	props: ["icon", "title", "description"]
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';

li {
	list-style: none;
	margin: 0;
}
.icon-card {
  padding: 35px;
  border: none;

	.icon {
		width: 100%;
		height: 65px;
		margin: 30px auto;
		font-size: 70px;
	}

	.title, p {
		text-align: center;
		display: block;
		margin: 0 auto;
	}

	.title {
		@include fontSize(32px);
		font-weight: 600;
		padding-bottom: 15px;
	}
}
</style>