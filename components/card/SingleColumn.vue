<template>
    <a :class="['row mb-5']" :href="articleUrl">
        <div class="col-6">
            <img :src="imageUrl" class="article-img img-fluid" alt="Responsive image">
        </div>
        <div class="col-6">
            <span>{{tag}}</span>
            <h3>{{headline}}</h3>
            <p>{{description}}</p>
            <time>{{updatedAt}}</time>
        </div>
    </a>
</template>

<script>
    export default {
        props: [
            "articleUrl",
            "imageUrl",
            "tag",
            "headline",
            "description",
            "updatedAt",
        ],
    }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';

.article-img {
    border-radius: 8px;
}
</style>