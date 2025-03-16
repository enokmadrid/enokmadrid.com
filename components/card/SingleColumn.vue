<template>
    <a class="flex items-center mb-5 text-current hover:text-current hover:no-underline" :href="articleUrl">
        <div class="w-1/2">
            <img :src="imageUrl" class="w-full rounded-lg" alt="Responsive image">
        </div>
        <div class="w-1/2 flex flex-col items-start justify-center">
            <tag :title="tag" :theme="tagTheme"></tag>
            <h3 class="font-['proxima-nova'] font-extrabold text-lg mb-4">{{headline}}</h3>
            <p class="mb-4">{{description}}</p>
            <time class="text-xs font-bold">{{getDate}}</time>
        </div>
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