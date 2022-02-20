<template>
    <div>
        <ProcessHero />
        <section class="container-fluid bg--gray">
                <div class="container content--container">
                    <div class="row">
                        <div v-for="step in steps" :key="step.id" class="col-md-4 col-sm-6 col-xs-12">
                            <NuxtLink :to="`/process/${step.slug}`" class="process-card">
                                <div class="card mb-3">
                                    <i :class="['icon', step.navIcon]"></i>
                                    <b class="card-subtitle"> {{step.title}}</b>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
        </section>
    </div>
</template>

<script>
export default {
    data: () => ({
        steps: []
    }),
    async created() {
        this.steps = await this.$content('steps').sortBy('id').fetch();
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';

.process-card {
    text-align: center;
    color: unset;
    .icon {
        color: $brand-action-primary;
        margin: 30px auto;
        &::before {
            font-size: 60px;
        }
    }
    .card {
        box-shadow: $shadow-small;
        transition: box-shadow $speed-350 $ease-standard;
        padding: $space-large 0;
        border: none;
    }
    &:hover {
        text-decoration: none;
        .card {
            box-shadow: $shadow-large;
            transition: box-shadow $speed-150 $ease-standard;
        }
    }
}
</style>