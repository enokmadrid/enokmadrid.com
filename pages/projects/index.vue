<template>
    <section>
        <section v-for="project in projects" :key="project.id" class="container-fluid dark project--fullwidth" :style="{ 'background-image': 'url(_nuxt/' + project.imageHero + ')' }">
            <article class="container">
                <div class="row">
                    <header class="col-lg-4 project--description">
                        <ul class="project-tags mb-2">
                            <li v-for="role in project.roles" :key="role.slug + role">{{role}}</li>
                        </ul>
                        <h3 class="project-title h1 mb-4">{{project.title}}</h3>
                        <p class="project-text">
                            {{project.clientDescription}}
                        </p>
                        <a :href="project.url" class="btn btn-lg btn-light rounded-pill" target="blank"> View Case Study</a>
                    </header>
                    <aside class="col-lg-8 col-lg-push-1 no-gutter project--image">
                        <img :src="'_nuxt/' + project.imageScreen" alt="" class="img-fluid">
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
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';

</style>