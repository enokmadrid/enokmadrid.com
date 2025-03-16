<template>
	<main>
		{{initArticles}}
		<div class="relative h-[450px] bg-top flex items-center" :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${article.coverImage.url});`">
			<div class="container mx-auto text-center h-[70%] flex flex-col justify-end">
				<a v-if="article.videoUrl" :href="article.videoUrl" target="_blank" 
					class="h-[72px] w-[72px] rounded-full bg-white block text-xs leading-[72px] mx-auto mb-12 text-center shadow-md transition-transform duration-150 ease-in-out hover:scale-110">
					<fa :icon="['fas', 'play']" class="text-primary"/>
				</a>
				<h1 class="text-4xl">{{article.headline}}</h1>
			</div>
		</div>

		<section class="container mx-auto h-[100px] bg-white shadow-md rounded-[50px] -mt-[50px] flex items-center justify-start px-8">
			<img class="float-left rounded-[20px] mr-2" :src="article.author.avatar.url" alt="Author Avatar">
			<dl class="mr-32 mb-0">
				<dt class="text-xs font-bold text-gray-500">by</dt>
				<dd class="text-base font-bold text-gray-900 mb-0">{{article.author.fullName}}</dd>
			</dl>
			<dl v-if="article.readingTime" class="mr-32 mb-0">
				<dt class="text-xs font-bold text-gray-500">Reading Time</dt>
				<dd class="text-base font-bold text-gray-900 mb-0">{{article.readingTime}} min</dd>
			</dl>
			<dl class="mr-32 mb-0">
				<dt class="text-xs font-bold text-gray-500">Created</dt>
				<dd class="text-base font-bold text-gray-900 mb-0">{{getCreatedDate}}</dd>
			</dl>
			<dl v-if="article.updatedAt" class="mr-32 mb-0">
				<dt class="text-xs font-bold text-gray-500">Updated</dt>
				<dd class="text-base font-bold text-gray-900 mb-0">{{getUpdatedDate}}</dd>
			</dl>
		</section>

		<section class="container mx-auto cms-editable format-paragraph">
			<div class="flex justify-center">
				<div class="w-7/12 text-left" v-html="$md.render(article.content)"></div>
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
			if (this.article.createdAt);
			return dayjs(this.article.createdAt).format('MMM DD, YYYY');
		},
		getPublishedDate() {
			if (this.article.publishedAt);
			return dayjs(this.article.publishedAt).format('MMM DD, YYYY');
		},
		getUpdatedDate() {
			if (this.article.updatedAt);
			return dayjs(this.article.updatedAt).format('MMM DD, YYYY');
		}
	}
}
</script>