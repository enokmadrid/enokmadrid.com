<template>
    <div class="flex flex-row justify-between lg:scrollbar-hide lg:overflow-y-scroll lg:justify-evenly">
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
    name: 'Videos',
    data: () => ({
        limit: 4
    }),
    computed: {
        videos() {
            return this.$store?.state?.videos?.slice(0, this.limit) || [];
        }
    }
}
</script>