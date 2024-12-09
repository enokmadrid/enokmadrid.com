<template>
    <a class="col-4 blog-card" :href="articleUrl">
        <img :src="imageUrl" class="article-img img-fluid" alt="Responsive image">
        <article>
            <tag :title="tag" :theme="tagTheme"></tag>
            <h3 class="headline">{{headline}}</h3>
            <p>{{description}}</p>
            <time class="time">{{getDate}}</time>
        </article>
    </a>
</template>

<script>
    import dayjs from 'dayjs';
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
        computed: {
            getDate() {
                return dayjs(this.updatedAt).format('MMM DD, YYYY');
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';

.article-img {
    border-radius: $space-tiny;
    margin-bottom: $space-small;
}
.blog-card {
    color: unset;
    &:hover {
        color: unset;
        text-decoration: none;
    }
    .headline {
        font-family: "proxima-nova";
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