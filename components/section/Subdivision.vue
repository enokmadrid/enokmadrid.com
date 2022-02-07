<template>
    <section class="container-fluid bg--gray">
        <div class="container section-subdivision text-center text-md-left">
            <h4 class="display-4">{{ sectionTitle }}</h4>
        </div>
    </section>
</template>

<script>
export default {
    props: [
        "sectionTitle"
    ]
}
</script>


<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';

.section-subdivision {
  padding-top: $space-xlarge;
  padding-bottom: $space-xlarge;
}
</style>