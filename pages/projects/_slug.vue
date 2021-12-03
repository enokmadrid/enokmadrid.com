<template>
    <main>
        <div class="jumbotron jumbotron-fluid dark shift-up has-overlay" :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${project.imageHero.url});`">
            <div class="container text-center">
                <h1 class="display-3">{{project.title}}</h1>
                <ProjectImage :src="`${project.imageScreen.url}`" class="img-fluid featured-image"/>
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
                                <div class="col-md-6 col-lg-12 mb-4">
                                    <span class="content--step-subtext">My Roles</span>
                                    <ul class="content--tools project-tags">
                                        <li v-for="role in project.roles" :key="role.title">{{role.id}}{{role.title}}</li>
                                    </ul>
                                </div>
                                <div class="col-md-6 col-lg-12">
                                    <span class="content--step-subtext">Technologies</span>
                                    <ul class="content--tools project-tags">
                                        <li v-for="tool in project.tools" :key="tool.title">{{tool.title}}</li>
                                    </ul>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <a :href="`${project.url}`" target="_blank" class="btn btn-sm btn-primary rounded-pill btn-space">
                                        Launch Project
                                    </a>
                                    <!-- <br>
                                    <a href="#" class="btn btn-sm btn-primary-outline rounded-pill">
                                        <i class="fa fa-share-alt"></i>
                                        Share this project
                                    </a> -->
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
                        {{project.content2}}
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
import projectQuery from '~/graphql/project.gql'
export default {
    data() {
        return {
            project: {},
            slugPath: this.$route.params.slug
        }
    },
    apollo: {
        project: {
            prefetch: true,
            query: projectQuery,
            variables (){
                return {
                    slug: this.slugPath
                }
            }
        }
    }
}
</script>
