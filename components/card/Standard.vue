<template>
    <a class="col-3" :href="articleUrl">
        <header>
            <img :src="imageUrl" class="article-img img-fluid" alt="Responsive image">
        </header>
        <article class="card-body">
            <span>{{tag}}</span>
            <h3>{{headline}}</h3>
            <p>{{description}}</p>
            <time>{{updatedAt}}</time>
        </article>
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