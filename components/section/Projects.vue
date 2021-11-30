<template>
    <section>
        <section v-for="project in projects" 
        :key="project.id" 
        :style="`background-image: url(/images/projectCovers/${project.imageHero})`"
        class="container-fluid dark project--fullwidth" >
            <article class="container">
                <div class="row">
                    <header class="col-lg-4 project--description">
                        <ul class="project-tags mb-2">
                            <li v-for="role in project.roles" :key="role.slug + role">{{role}} &middot;</li>
                        </ul>
                        <h3 class="project-title h1 mb-4">{{project.title}}</h3>
                        <p class="project-text">
                            {{project.clientDescription}}
                        </p>
                        <NuxtLink :to="`/projects/${project.slug}`" class="btn btn-lg btn-light rounded-pill" target="blank">
                            View Case Study
                        </NuxtLink>
                    </header>
                    <aside class="col-lg-8 col-lg-push-1 no-gutter project--image">
                        <ProjectImage :src="`${project.imageScreen}`" />
                    </aside>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
export default {
    data: () => ({
        projects: []
    }),
    async created() {
        this.projects = await this.$content('projects').sortBy('id').fetch();
    },
    methods: {
        bgImg(img) {
            return `background-image: url(${img})`;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>