<template>
    <div class="flexbox-container content--menu">
        <!-- 
        <a href="#" class="flex-link btn btn-link hasArrow __left">
            <span>Previous Step</span>
        </a>
        <a href="#" class="flex-link btn btn-link hasArrow __right">
            <span>Next Step</span>
        </a>
        -->

    <nuxt-link 
        v-if="prev" 
        :to="{ params: { slug: prev.slug }}" 
        class="flex-link btn btn-link hasArrow __left">
            <span>{{prev.title}}</span>
    </nuxt-link>
    <nuxt-link 
        v-if="next" 
        :to="{ params: { slug: next.slug }}" 
        class="flex-link btn btn-link hasArrow __right"
        >
        <span>{{next.title}}</span>
    </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        prev: {
            type: Object,
            default: () => null,
        },
        next: {
            type: Object,
            default: () => null
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';

</style>