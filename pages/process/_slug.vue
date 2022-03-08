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
        <SectionPrevNext :prev="prev" :next="next"/>
    </main>
</template>

<script>
export default {
    data: () => ({
        step: {},
        slug: {},
        prev: {},
        next: {}
    }),
    async created() {
        this.step = await this.$content(`process/${this.$route.params.slug}`).fetch();

        // assign the first two objects in returned array to prev & next constant variables
        const [prev, next] = await this.$content('process')
        // fetch only the title and slug from the steps
        .only(['title', 'slug', 'path', 'id'])
        // sortby id, in ascending order
        .sortBy('id', 'asc')
        // get the correct slug
        .surround(this.step['slug'])
        // fetch data
        .fetch()

        this.prev = prev;
        this.next = next;
    }
}
</script>
