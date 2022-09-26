<template>
    <div class="d-flex flex-sm-row justify-content-between">
        <ThumbnailLink
            v-for="(video, index) in videos"
            :href="video.url"
            :thumbnailUrl="video.thumbnailUrl"
        ></ThumbnailLink>
    </div>
</template>

<script>
export default {
    data: () => ({
		limit: 4
	}),
    computed: {
		videos() {
			return this.$store.state.videos.slice(0,this.limit);
		}
	},
}
</script>

<style lang="scss" scoped>

</style>