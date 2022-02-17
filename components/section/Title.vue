<template>
    <div class="section-title">
        <h2 class="display-3 decoration-line">{{ title }}</h2>
        <p class="section-subtitle">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
    props: [
        "title",
        "subtitle"
    ]
}
</script>


<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.section-subtitle {
    max-width: 600px;
    margin: 0 auto;
}
</style>