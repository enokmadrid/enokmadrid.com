<template>
    <div class="col-md-4 col-sm-6 col-xs-12">
        <div class="icon-card">
            <img :src="icon" :alt="`${title} Icon`" class="icon">
            <h4 class="title">{{ title }}</h4>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "icon",
        "title",
        "description"
    ]
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';

.icon-card {
  padding: 35px;
  border: none;

    .icon {
        width: 100%;
        height: 65px;
        margin: 30px auto;
        font-size: 70px;
    }

    .title, p {
        text-align: center;
        display: block;
        max-width: 30ch;
        margin: 0 auto;
    }

    .title {
        @include fontSize(32px);
        font-weight: 600;
        padding-bottom: 15px;
    }
}
</style>