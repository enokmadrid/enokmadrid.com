<template>
    <div class="d-flex flex-sm-row justify-content-between">
        <thumbnail-link
            v-for="video in videos"
            :href="video.url"
            :thumbnailUrl="video.thumbnailUrl"
            :key="video.id"
        ></thumbnail-link>
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