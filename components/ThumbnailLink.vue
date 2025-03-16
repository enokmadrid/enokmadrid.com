<template>
    <a 
		:href="href"
		@click="$emit('click')"
		role="button"
        class="block rounded-lg h-[150px] w-[267px] bg-cover transition-transform duration-150 ease-in-out hover:scale-105 lg:min-w-[180px] lg:h-[100px] lg:not-last:mr-4" 
        target="_blank"
        :style="`background-image: url(${thumbnailUrl});`"
    >
    </a>
</template>

<script>
export default {
    name: 'ThumbnailLink',
    props: {
        href: {
            type: String,
            required: true
        },
        thumbnailUrl: {
            type: String,
            required: true
        }
    }
}
</script>