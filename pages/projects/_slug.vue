<template>
    <main>
        <div class="jumbotron jumbotron-fluid dark shift-up has-overlay" :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(/images/projectCovers/${project.imageHero});`">
            <div class="container text-center">
                <h1 class="display-3">{{project.title}}</h1>
                <ProjectImage :src="`${project.imageScreen}`" class="img-fluid featured-image"/>
            </div>
        </div>

        <section class="container-fluid bg--gray">
            <p class="container introduction hidden-md-down">{{project.description}}</p>
        </section>

        <section class="container-fluid">
                <div class="container">
                    <div class="row content--container">
                        <div class="col-md-4 content--summary">
                            <div class="row">
                                <div class="col-md-6 col-lg-12">
                                    <span class="content--step-subtext">My Roles</span>
                                    <div class="content--tools m-b-lg">
                                        <ul class="project-tags mb-2">
                                            <li v-for="role in project.roles" :key="role.slug + role">{{role}}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-12">
                                    <span class="content--step-subtext">Technologies</span>
                                    <div class="content--tools">
                                        <ul class="project-tags mb-2">
                                            <li v-for="tool in project.tools" :key="tool.slug + tool">{{tool}}</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <a :href="`${project.url}`" target="_blank" class="btn btn-sm btn-primary rounded-pill btn-space">
                                        Launch Project
                                    </a>
                                    <br>
                                    <a href="#" class="btn btn-sm btn-primary-outline rounded-pill">
                                        <i class="fa fa-share-alt"></i>
                                        Share this project
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 content--about">
                            <h5 class="content--title">The Challenge</h5>
                            <p>{{project.challenge}}</p>
                            <h5 class="content--title">Getting To Work</h5>
                            <p>{{project.solution}}</p>
                        </div>
                    </div>
                </div>
        </section>

        <section class="container-fluid cms-editable format-paragraph">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nuxt-content :document="{ body: project.body }" />
                    </div>
                </div>
            </div>
        </section>

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
        project: {}
    }),
    async created() {
        this.project = await this.$content(`projects/${this.$route.params.slug}`).fetch();
    }
}
</script>
