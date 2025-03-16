<template>
    <a class="w-1/3 text-current hover:text-current hover:no-underline" :href="articleUrl">
        <img :src="imageUrl" class="w-full rounded mb-4" alt="Responsive image">
        <article>
            <tag :title="tag" :theme="tagTheme"></tag>
            <h3 class="font-['proxima-nova'] font-extrabold text-lg mb-4">{{headline}}</h3>
            <p class="mb-4">{{description}}</p>
            <time class="text-xs font-bold">{{getDate}}</time>
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