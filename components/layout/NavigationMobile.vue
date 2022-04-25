<template>
    <nav class="sticky-header fixed-bottom">
        <div class="flexbox-container flex-menu d-flex d-lg-none">
            <NuxtLink to="/" exact class="flex-link">
                <fa :icon="['fas', 'suitcase']" class="icon"/>
                <span>Work</span>
            </NuxtLink>
            <NuxtLink to="/about" class="flex-link">
                <fa :icon="['fas', 'user']" class="icon"/>
                <span>About</span>
            </NuxtLink>
            <NuxtLink to="/process" class="flex-link">
                <fa :icon="['fas', 'sitemap']" class="icon"/>
                <span>Process</span>
            </NuxtLink>
            <NuxtLink to="/learn" class="flex-link">
                <fa :icon="['fas', 'backpack']" class="icon"/>
                <span>Training</span>
            </NuxtLink>
            <a href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" target="_blank" class="flex-link">
                <fa :icon="['fas', 'paper-plane']" class="icon"/>
                <span>Contact</span>
            </a>
        </div>
    </nav>
</template>

<script></script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.flex-menu {
    background: $brand-black-light;
    height: 60px;
    .flex-link {
        color: #8787A0;
        height: inherit;
        flex-direction: column;

        &.nuxt-link-active {
            background: rgba(0,0,0,0.2);
            border-bottom: solid 4px $secondary;
            color: $secondary;
            @extend %transition-fade-in;
            .icon {
                margin-top: 4px;
                @extend %transition-fade-in;
            }
            span {
                opacity: 1;
            }
        }
    }
    
    span {
        display: block;
        font-family: $font-family-sans-serif;
        font-size: 11px;
        font-weight: 600;
        padding-top: 2px;
        color: white;
        opacity: 0.6;
    }
}

</style>