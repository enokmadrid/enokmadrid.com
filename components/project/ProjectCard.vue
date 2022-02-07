<template>
    <a :class="['project-card', 'd-flex', 'align-items-end', setGridClass]" :href="projectUrl">
        <span class="project-card-background absolute" :style="`background-image: url(${heroUrl})`"></span>
        <div class="project-details d-flex justify-content-between">
            <h3 class="project-title h1 mb-4 font-weight-bold">{{title}}</h3>
            <ul class="project-tags mb-2">
                <li>Design &middot;</li>
                <li>Front-End &middot;</li>
                <li>UI/UX &middot;</li>
                <li>More &middot;</li>
            </ul>
        </div>
    </a>
</template>

<script>
export default {
    props: [
        "projectUrl",
        "imageUrl",
        "heroUrl",
        "title",
        "description",
        "color",
        "index"
    ],
    computed: {
        setGridClass() {
            return `item-${this.index + 1}`
        },
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
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    height: 86%;
    width: 100%;
    opacity: 1;
    z-index: -1;
}
.project-card {
    color: $brand-text;
    
    &:hover {
        text-decoration: none;
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
.project-details {
    width: 100%;
}

.project-tags {
    display: block;
    justify-content: flex-end;
    list-style: none;
    padding-left: auto;

    li {
        display: inline;
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
        opacity: 0.7;
        &:not(:first-child) {
        padding-left: 4px;
            &::before {
                padding-right: 8px;
            }
        }
    }
}
</style>