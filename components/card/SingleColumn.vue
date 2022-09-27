<template>
    <a :class="['blog-card', 'row mb-5']" :href="articleUrl">
        <div class="col-6">
            <img :src="imageUrl" class="article-img img-fluid" alt="Responsive image">
        </div>
        <div class="col-6 d-inline-flex flex-column align-items-start justify-content-center">
            <tag :title="tag" :theme="tagTheme"></tag>
            <h3 class="headline">{{headline}}</h3>
            <p>{{description}}</p>
            <time class="time">{{updatedAt}}</time>
        </div>
    </a>
</template>

<script>
    export default {
        props: [
            "articleUrl",
            "imageUrl",
            "tag",
            "tagTheme",
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
.blog-card {
    color: unset;
    &:hover {
        color: unset;
        text-decoration: none;
    }
    .headline {
        font-family: "Proxima Nova";
        font-weight: 800;
        font-size: $space-standard;
        text-transform: none;
        margin-bottom: $space-standard;
    }
    .time {
        font-size: 11px;
        font-weight: 700;
    }
    .headline,
    .decription {
        margin-bottom: $space-standard;
    }
}
</style>