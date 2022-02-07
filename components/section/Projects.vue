<template>
    <section v-if="!loading" id="projects" class="projects">
        <div class="grid container">
            <div class="item-first">Animation</div>
            <project-card 
                v-for="(project, index) in projects"
                :index="index"
                :image-url="project.imageScreen.url"
                :title="project.title"
                :description="project.clientDescription"
                :key="project.id"
                :project-url="`/projects/${project.slug}`"
                :color="project.color.hex"
                >
            </project-card>
            <div class="item-last">Last Item</div>
        </div>
        <!-- <section v-for="project in projects" 
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
                        <NuxtLink 
                            :to="`/projects/${project.slug}`"
                            :key="project.slug"
                            class="btn btn-lg btn-light rounded-pill" 
                            target="blank"
                            >
                            View Case Study
                        </NuxtLink>
                    </header>
                    <aside class="col-lg-8 col-lg-push-1 no-gutter project--image">
                        <ProjectImage :src="`${project.imageScreen.url}`" class="img-fluid" />
                    </aside>
                </div>
            </article>
        </section> -->
    </section>
</template>

<script>
import projectsQuery from '~/graphql/projects.gql'
export default {

    data: () => ({
        loading: 0,
        projects: []
    }),
    apollo: {
        $loadingKey: 'loading',
        projects: {
            prefetch: true,
            query: projectsQuery,
            variables() {
             return { slug: this.$route.params.slug }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.projects {
    background-color: $gray-lightest;
}
.grid {
    display: grid;
    @media screen and (max-width: 991px ){
        grid-template-columns: 1fr;
    }

    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 0.6fr 1fr 0.6fr 0.6fr 1fr 0.6fr 0.6fr 1fr 0.6fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "item-first item-1"
        "item-2     item-1"
        "item-2          ."
        ".          item-3"
        "item-4     item-3"
        "item-4          ."
        ".          item-5"
        "item-last  item-5"; 

    .item-first { grid-area: item-first; }
    .item-1 { grid-area: item-1; }
    .item-2 { grid-area: item-2; }
    .item-3 { grid-area: item-3; }
    .item-4 { grid-area: item-4; }
    .item-5 { grid-area: item-5; }
    .item-last { grid-area: item-last; }
}
.project--image {
    img {
        @media screen and (max-width: 991px ){
            margin-top: $space-semi;
            padding: {
                left: $space-standard;
                right: $space-standard;
            }
        }
    }
}
</style>