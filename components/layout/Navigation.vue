<template>
    <nav class="navbar navbar-expand-lg py-3 z-10 fixed-top" 
        :class="`${this.$store.getters.getNavClass}`">
        <div class="container">
            <NuxtLink class="navbar-brand text-uppercase" to="/">
                <img class="logo" src="~/assets/images/enok-logo.svg" alt="Enok Madrid Logo">
                Enok Madrid
            </NuxtLink>

            <div class="navbar-collapse collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <NuxtLink to="/" exact class="nav-link">Work</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/process" class="nav-link">Process</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/learn" class="nav-link">Training</NuxtLink>
                </li>
            </ul>
            
            <div class="my-2 my-md-0">
                <a href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" target="_blank" class="btn btn-primary rounded-pill btn-sm">
                    <fa :icon="['fas', 'phone']"/> Contact me
                </a>
            </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    mounted: () => {
        let scrollPos = 0;
        let nav = document.querySelector('.navbar.fixed-top');
        
        // Switch between dark and light navbar on scroll
        if (nav.classList.contains("navbar-dark")) {
            let height = nav.clientHeight;
            window.addEventListener('scroll', () => {
                if (window.scrollY > height) {
                    nav.classList.remove("navbar-dark");
                    nav.classList.add("navbar-light");
                } 
                if (window.scrollY < height)  {
                    nav.classList.remove("navbar-light");
                    nav.classList.add("navbar-dark");
                }
                // hide and show navbar on scroll
                if ((document.body.getBoundingClientRect()).top > scrollPos) {
                    nav.classList.remove("navbar-offset");
                } else {
                    nav.classList.add("navbar-offset");
                }
                scrollPos = (document.body.getBoundingClientRect()).top
            });
        } else if (nav.classList.contains("navbar-light")) {
            // hide and show navbar on scroll
            window.addEventListener('scroll', () => {
                if ((document.body.getBoundingClientRect()).top > scrollPos) {
                    nav.classList.remove("navbar-offset");
                } else {
                    nav.classList.add("navbar-offset");
                }
                scrollPos = (document.body.getBoundingClientRect()).top
            });
        }
    },
    created () {
        this.$store.commit('set_currentPage', this.$route.path);
        this.$store.dispatch('changeNavClass');
    },
    watch: {
        '$route' () {
            this.$store.commit('set_currentPage', this.$route.path);
            this.$store.dispatch('changeNavClass');
        }
    }
}
</script>
