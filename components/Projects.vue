<template>
    <section v-if="!loading" id="projects" class="section-space mb-5">
        <div class="grid container">
            <div class="item-first">
                <span class="text-left display-1 text-decoration d-block">Recent Work</span>
                <img src="~/assets/images/svg/robot-animated.svg" width="360" height="281" alt="robot-animation" class="float-right d-none d-md-block">
            </div>
            <project-card
                v-for="(project, index) in projects"
                :index="index"
                :key="project.id"
                :image-url="project.imageCard.url"
                :hero-url="project.imageHero.url"
                :title="project.title"
                :description="project.clientDescription"
                :roles="project.roles"
                :project-url="`/projects/${project.slug}`"
                :color="project.color.hex"
                data-aos="zoom-in-up" 
                data-aos-duration="500"
                data-aos-easing="ease-in-out-cubic"
                >
            </project-card>
            <div class="item-last">
                <span class="text-left display-1 text-decoration">Enjoying These?</span>
                <Button class="btn btn-primary btn-lg rounded-pill brand-gradient has-arrow __right" to="/projects">See All my Projects</Button>
            </div>
        </div>
    </section>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {

    data: () => ({
        loading: 0,
        projectNext: '',
        projectPrevious: ''
    }),
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
    mixins: [aosMixin]
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';

.grid {
    @include breakpoint(sm-down) {
        display: flex;
        flex-direction: column;
    }


    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(22, 1fr); 
    gap: 0 $space-standard; 
    grid-template-areas: 
    "item-1 ."
    "item-1 item-first"
    "item-1 item-first"
    "item-1 item-first"
    "item-1 item-2"
    "item-1 item-2"
    ". item-2"
    ". item-2"
    "item-3 item-2"
    "item-3 item-2"
    "item-3 ."
    "item-3 ."
    "item-3 item-4"
    "item-3 item-4"
    ". item-4"
    ". item-4"
    "item-5 item-4"
    "item-5 item-4"
    "item-5 ."
    "item-5 ."
    "item-5 item-last"
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