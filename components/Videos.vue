<template>
    <div class="d-flex flex-sm-row justify-content-between">
        <ThumbnailLink
            href="https://www.youtube.com/watch?v=oMEfXkbl-XE"
            thumbnailUrl="https://i.ytimg.com/vi/oMEfXkbl-XE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRwpTd5oyB0v07c66_WLxxshFLCg"
        ></ThumbnailLink>
        <ThumbnailLink
            href="https://www.youtube.com/watch?v=oOgqPt4wX5s"
            thumbnailUrl="https://i.ytimg.com/vi/oOgqPt4wX5s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGWUajgW7pS5EmTXEGUQLLT7gz6g"
        ></ThumbnailLink>
        <ThumbnailLink
            href="https://www.youtube.com/watch?v=0pDbIWC30KI"
            thumbnailUrl="https://i.ytimg.com/vi/0pDbIWC30KI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAuSgLfPiaj4vZQcdyHRoVjPfSPxA"
        ></ThumbnailLink>
        <ThumbnailLink
            href="https://www.youtube.com/watch?v=x5O2vaA83Qs"
            thumbnailUrl="https://i.ytimg.com/vi/x5O2vaA83Qs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI9RwU339fiE0k5em8Cb1twOpZ2g"
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
			// return this.$store.state.videos.slice(0,this.limit);
		}
	},
}
</script>

<style lang="scss" scoped>

</style>