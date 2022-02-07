<template>
    <a :class="['project-card', 'd-flex', 'align-items-end', setGridClass]" :href="projectUrl">
        <span class="project-card-background absolute" :style="`background-image: url(${heroUrl})`"></span>
        <div class="project-details d-flex justify-content-between">
            <h3 class="project-title font-weight-bold">{{title}}</h3>
            <ul class="project-tags mb-2">
                <li v-for="role in roles" :key="role.id" class="tag">{{role.title}}</li>
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
        "index",
        "roles"
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
    height: 800px;
    width: 100%;
    opacity: 1;
    z-index: -1;
}
.project-card {
    color: $brand-text;
    height: 864px;
    
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
    text-align: right;

    .tag {
        display: inline;
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
        opacity: 0.7;
        &:not(:first-child) {
        padding-left: $space-micro;
            &::before {
                padding-right: $space-micro;
                content: "\00B7"
            }
        }
    }
}
</style>