<template>
    <a 
		:href="href"
		@click="$emit('click')"
		role="button"
        class="thumbnail-link" 
        target="_blank"
        :style="`background-image: url(${thumbnailUrl});`"
    >
    </a>
</template>
<script>
    export default {
        props: [ "href", "thumbnailUrl" ]
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/_mixins.scss';
    .thumbnail-link {
        border-radius: 8px;
        height: 150px;
        width: 267px;
        background-size: cover;
        transition: all 150ms ease-in-out;
        &:hover {
            transform: scale(1.05);
        }
    }
    @include breakpoint(lg-down) {
        .thumbnail-link {
            // width: 200px;
            min-width: 180px;
            height: 100px;
            &:not(:last-child){
                margin-right: $space-small;
            }
        }
    }
</style>