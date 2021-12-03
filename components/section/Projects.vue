<template>
    <section>
        <section v-for="project in projects" 
        :key="project.id" 
        :style="`background-image: url(${project.imageHero.url})`"
        class="container-fluid dark project--fullwidth" >
            <article class="container">
                <div class="row">
                    <header class="col-lg-4 project--description">
                        <ul class="project-tags mb-2">
                            <li v-for="role in project.roles" :key="role.id">{{role.title}} &middot;</li>
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
                        <ProjectImage :src="`${project.imageScreen.url}`" />
                    </aside>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
import projectsQuery from '~/graphql/projects.gql'
export default {

    data() {
        return {
            projects: []
        }
    },
    apollo: {
        projects: {
            prefetch: true,
            query: projectsQuery
        }
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