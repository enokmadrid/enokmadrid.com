<template>
    <nav class="sticky-header fixed-bottom">
        <div class="flexbox-container flex-menu d-flex d-lg-none">
            <NuxtLink to="/" exact class="flex-link">
                <i class="icon icon-toolbox">
                    <span>Work</span>
                </i>
            </NuxtLink>
            <NuxtLink to="/about" class="flex-link">
                <i class="icon icon-person">
                    <span>About</span>
                </i>
            </NuxtLink>
            <NuxtLink to="/process" class="flex-link">
                <i class="icon icon-process">
                    <span>Process</span>
                </i>
            </NuxtLink>
            <a href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" target="_blank" class="flex-link">
                <i class="icon icon-email-send-1">
                    <span>Contact</span>
                </i>
            </a>
        </div>
    </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
.flex-menu {
    height: 150px;

    &.process {
        overflow: auto;
        justify-content: space-between;
        width:100%;

        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;

        .flex-link {
        padding: 0 5px;

        i {
            padding:0 25px;
            white-space: nowrap;
        }
        }
    }

    .flex-link {
        background: $brand-black-light;
        color: #8787A0;
        height: inherit;

        &:hover {
        background: $brand-black;
        text-decoration: none;

        i {
            color: $secondary;
        }
        }

        &.nuxt-link-active {
        background: $brand-black;
        border-bottom: solid 6px $secondary;
        color: $secondary;
        }
    }

    i {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        font-size: 28px;

        span {
        display: block;
        font-family: $font-family-sans-serif;
        font-size: 12px;
        font-weight: 600;
        padding-top: 13px;
        color: #fff;
        }
    }
}

</style>