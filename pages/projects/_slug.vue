<template>
    <div v-if="loading" class="loader-wrapper">
        <span class="loader"><span></span><span></span></span>
        <b>Loading...</b>
    </div>
    <main v-else>
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
                                        <li v-for="role in project.roles" :key="role.id">{{role.title}}</li>
                                    </ul>
                                </div>
                                <div class="col-md-6 col-lg-12">
                                    <span class="content--step-subtext">Technologies</span>
                                    <ul class="content--tools project-tags">
                                        <li v-for="tool in project.tools" :key="tool.id">{{tool.title}}</li>
                                    </ul>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <a :href="`${project.url}`" target="_blank" class="btn btn-sm btn-primary rounded-pill btn-space">
                                        Launch Project
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
                    <div class="col-12" v-html="$md.render(project.content)"></div>
                </div>
            </div>
        </section>
        <SectionPrevNext/>
    </main>
</template>

<script>
import projectQuery from '~/graphql/project.gql'
export default {
    data: () => ({
        loading: 0,
        project: {},
        slug: '',
        projectPrevious: '',
        projectNext: '',
    }),
    apollo: {
        $loadingKey: 'loading',
        project: {
            prefetch: true,
            query: projectQuery,
            variables() {
                return {
                    slug: this.$route.params.slug
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.loader-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: radial-gradient(darken($brand-text, 20%), darken($brand-text, 30%));
    height: 100vh;
    b {
        color: lighten($brand-text, 10%);
        text-transform: uppercase;
        letter-spacing: 0.2rem;
    }
}

.loader {
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  
    > span {
        position: absolute;
        border: 4px solid $brand-action-primary;
        opacity: 1;
        border-radius: 50%;
        animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        &:nth-child(2) {
            animation-delay: -0.5s;
        }
    }
}

@keyframes ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>