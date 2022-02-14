<template>
    <section v-if="!loading" id="projects" class="section-space">
        <div class="grid container">
            <div class="item-first">
                <span class="text-left display-1 text-decoration d-block">Recent Work</span>
                <img src="~/assets/images/svg/robot-animated.svg" width="360" alt="robot-animation" class="float-right d-block">
            </div>
            <project-card
                v-for="(project, index) in projects"
                :index="index"
                :key="project.id"
                :image-url="project.imageScreen.url"
                :hero-url="project.imageHero.url"
                :title="project.title"
                :description="project.clientDescription"
                :roles="project.roles"
                :project-url="`/projects/${project.slug}`"
                :color="project.color.hex"
                >
            </project-card>
            <div class="item-last">
                <span class="text-left display-1 text-decoration">Enjoying These?</span>
                <NuxtLink to="/process" class="btn btn-primary btn-lg rounded-pill brand-gradient hasArrow __right">See All my Projects</NuxtLink>
            </div>
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

.grid {
    @include breakpoint(md-down) {
        display: flex;
        flex-direction: column;
    }

    $area: 1fr;
    $gap: 0.7fr;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: $gap $area $gap $gap $area $gap $gap $area $gap; 
    gap: 0 $space-standard; 
    grid-template-areas: 
        "item-1 item-first"
        "item-1     item-2"
        ". item-2"
        "item-3 ."
        "item-3 item-4"
        ". item-4"
        "item-5 ."
        "item-5 item-last"; 

    .item-first { 
        grid-area: item-first;
        span {
            margin-top: 2rem;
        }
        img {
            margin-top: -7rem;
        }
    }
    .item-1 { grid-area: item-1; }
    .item-2 { grid-area: item-2; }
    .item-3 { grid-area: item-3; }
    .item-4 { grid-area: item-4; }
    .item-5 { grid-area: item-5; }
    .item-last { grid-area: item-last; }
    
}
.project--image {
    img {
        @include breakpoint(md-down) {
            margin-top: $space-semi;
            padding: {
                left: $space-standard;
                right: $space-standard;
            }
        }
    }
}
</style>