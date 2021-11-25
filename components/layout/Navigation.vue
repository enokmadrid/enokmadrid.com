<template>
    <nav class="navbar navbar-expand-lg py-3 z-10 fixed-top" 
        :class="[
            isLight ? 'navbar-light' : 'navbar-dark',
            isSplit ? 'navbar-split' : ''
        ]">
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
                    <i class="fa fa-phone text-sm-center"></i> Contact me
                </a>
            </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data: () => ({
        isLight: false,
        isSplit: true
    }),
    mounted: () => {
        console.log("Hello! from Nav");
        let scrollPos = 0;
        let nav = document.querySelector('.navbar.fixed-top');
        

        if (nav.classList.contains("navbar-dark")) {
            let height = nav.clientHeight;
            window.addEventListener('scroll', () => { 
                console.log(height);
                if (window.scrollY > height) {
                    nav.classList.remove("navbar-dark");
                    nav.classList.add("navbar-light");
                } 
                if (window.scrollY < height)  {
                    nav.classList.remove("navbar-light");
                    nav.classList.add("navbar-dark");
                }
        //         if ((document.body.getBoundingClientRect()).top > scrollPos)
        //             nav.classList.remove("navbar-offset");
        //         else
        //             nav.classList.add("navbar-offset");
        //     scrollPos = (document.body.getBoundingClientRect()).top
            });
        }
    },
    watch: {
        '$route' () {
            if (this.$route.path === '/') {
                this. isLight = false;
                this. isSplit = true;
            } else if (this.$route.path === '/about'){
                this. isLight = true;
                this. isSplit = false;
            } else {
                this. isLight = false;
                this. isSplit = false;
            }
        }
    }
}
</script>
