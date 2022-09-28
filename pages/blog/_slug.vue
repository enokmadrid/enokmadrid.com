<template>
	<main>
		{{initArticles}}
		<div class="jumbotron jumbotron-fluid dark shift-up has-overlay d-flex align-items-center" :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${article.coverImage.url});`">
			<div class="container text-center height-70 d-flex flex-column justify-content-end">
				<a :if="article.videoUrl" :href="article.videoUrl" target="_blank" class="play-button">
					<fa :icon="['fas', 'play']"/>
				</a>
				<h1 class="display-3">{{article.headline}}</h1>
			</div>
		</div>

		<section class="container pill-large">
			<img class="avatar" :src="article.author.avatar.url" alt="Author Avatar">
			<dl class="data-label">
				<dt>by</dt>
				<dd>{{article.author.fullName}}</dd>
			</dl>
			<dl class="data-label">
				<dt>Reading Time</dt>
				<dd>5 min</dd>
			</dl>
			<dl class="data-label">
				<dt>Created</dt>
				<dd>{{getCreatedDate}}</dd>
			</dl>
			<dl :if="article.updatedAt" class="data-label">
				<dt>Updated</dt>
				<dd>{{getUpdatedDate}}</dd>
			</dl>
		</section>

		<section class="container cms-editable format-paragraph">
			<div class="row justify-content-center">
				<div class="col-7 text-left" v-html="$md.render(article.content)"></div>
			</div>
		</section>
		<PrevNext/>
	</main>
</template>

<script>
import dayjs from 'dayjs';
export default {
	data: () => ({
		loading: 0,
		article: {},
	}),
	computed: {
		initArticles() {
			this.article = this.$store.getters.getArticlesBySlug(this.$route.params.slug);
		},
		getCreatedDate() {
			if (this.createdAt);
			return dayjs(this.createdAt).format('MMM DD, YYYY');
		},
		getPublishedDate() {
			if (this.publishedAt);
			return dayjs(this.publishedAt).format('MMM DD, YYYY');
		},
		getUpdatedDate() {
			if (this.updatedAt);
			return dayjs(this.updatedAt).format('MMM DD, YYYY');
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.jumbotron {
	height: 450px;
	background-position-y: top;
}
.height-70 {
	height: 70%;
}
.play-button {
	height: 72px;
	width: 72px;
	border-radius: 50%;
	background-color: white;
	display: block;
	font-size: 12px;
	line-height: 72px;
	margin: 0 auto 48px;
	text-align: center;
	box-shadow: $shadow-medium;
	transition: transform $speed-150 $ease-standard;
	svg path {
		fill: $brand-action-primary;
	}

	&:hover {
		transform: scale(1.2);
	}
}
.pill-large {
	height: 100px;
	background: white;
	box-shadow: $shadow-medium;
	border-radius: 50px;
	margin-top: -50px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-left: 32px;
	padding-right: 32px; 
}
.data-label {
	margin-right: 128px;
	margin-bottom: 0;
	address {
		margin: 0;
	}
	dt {
		font-size: 12px;
		font-weight: bold;
		color: $brand-text-light;
	}
	dd {
		font-size: 16px;
		font-weight: bold;
		color: $brand-text;
		margin-bottom: 0;
	}
}
.avatar {
	float: left;
	border-radius: 20px;
	margin-right: 8px;
}

</style>