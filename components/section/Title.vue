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

.section-title {
  width: 100%;
  display: block;

  h1,h2,h3,h4,h5,h6,p {
    text-align: center;
    display: block;
    &:after {
      text-align: center;
      margin: $space-standard auto;
    }
  }

  .section-subtitle {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>