<template>
    <div class="jumbotron jumbotron-fluid shift-up hero fullscreen">
        <div class="container position-relative z-5">
            <div class="d-flex">
                <div class="copy-hero">
                    <span class="display-1 mb-4  text-decoration">Hi, I'm Enok!</span>
                    <h1 class="display-2 text-hero-title">UX Designer + <br> UI Engineer</h1>
                    <p class="mt-4 text-hero-description">I <a href="https://www.youtube.com/enokmadrid" target="blank">create UX content</a> and help tech startups make profits by leading them into delighting their customers.</p>
                </div>
                <span class="align-self-center gravatar large"></span>
            </div>

            <div class="mt-4 mb-1">
                <a href="#what-i-do" class="btn btn-lg btn-primary brand-gradient rounded-pill" role="button">Learn How I Can Help</a>
                <a href="#featured-work" class="btn btn-lg btn-light rounded-pill" role="button">View My Portfolio</a>
            </div>
        </div>
        <div class="overflow-hidden d-none d-lg-block">
            <div class="angle-split">
                <div class="pattern-bg"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
@include breakpoint(lg-up) {
    .text-hero-description {
        padding-right: 30%;
    }
}
</style>