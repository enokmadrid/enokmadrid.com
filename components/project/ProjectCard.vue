<template>
    <a class="project-card" :style="cssVars" :href="projectUrl">
        <div class="project-card-background absolute"></div>
        <div class="card-body relative">
            <img class="card-img-top" :src="imageUrl" alt="Card image cap">
            <h3 class="project-title h1 mb-4 font-weight-bold">{{title}}</h3>
            <p>{{description}}</p>
        </div>
        
    </a>
</template>

<script>
export default {
    props: [
        'projectUrl',
        'imageUrl',
        'title',
        'description',
        'color',
    ],
    computed: {
        cssVars() {
            return {
                '--card-color': this.color
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';


.project-card, .card-body {
    position: relative;
}
.project-card > .project-card-background {
    background-color: var(--card-color);
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0.1;
}
.project-card {
    color: $brand-text;
    padding: $space-large;
    &:hover {
        text-decoration: none;
    }
    margin-bottom: 20px;
    &:nth-child(odd) {
        margin-right: 20px;
    }
    @media screen and (max-width: 991px ){
        margin: unset;
        &:nth-child(odd) { 
            margin: unset;
        }
    }
}
.card-img-top {
    margin-bottom: $space-large;
}
.project--image {
    img {
        @media screen and (max-width: 991px ){
        }
    }
}
</style>