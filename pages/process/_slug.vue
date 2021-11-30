<template>
    <main>
        <ProcessHero />
        <ProcessNavigation />
        <section class="container-fluid bg--gray">
            <div class="container content--container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="content--step-title h1"><small>Step {{step.id}}</small> {{step.title}}</h2>
                        <i class="icon icon-compass-3 content--icon"></i>
                    </div>
                    <div class="col-md-4 content--info">
                        <span class="content--step-subtext">Tools I like to use include:</span>
                        <ul class="content--tools">
                            <li v-for="tool in step.tools" :key="step.slug + tool">{{tool}}</li>
                        </ul>
                    </div>
                    <div class="col-md-8 content--about">
                        <h6 class="content--title">{{step.subtitle}}</h6>
                        <nuxt-content :document="{ body: step.body }" />
                    </div>

                    <div class="col-md-12 content--images">
                    </div>
                </div>
            </div>
        </section> <!-- /container -->


        <div class="flexbox-container content--menu">
            <a href="#" class="flex-link btn btn-link hasArrow __left">
                <span>Previous Step</span>
            </a>
            <a href="#" class="flex-link btn btn-link hasArrow __right">
                <span>Next Step</span>
            </a>
        </div>
    </main>
</template>

<script>
export default {
    data: () => ({
        step: {}
    }),
    async created() {
        this.step = await this.$content(`steps/${this.$route.params.slug}`).fetch();
    }
}
</script>
