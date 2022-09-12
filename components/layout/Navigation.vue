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
                    <NuxtLink to="/learn" class="nav-link">Learn</NuxtLink>
                </li>
            </ul>
            
            <div class="my-2 my-md-0">
                <Button href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" target="_blank" class="btn btn-primary rounded-pill btn-sm">
                  <fa :icon="['fas', 'phone']"/> Contact me
                </Button>
            </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    mounted() {
        let nav = document.querySelector('.navbar.fixed-top');
        this.navToggle(nav);
    },
    created() {
        this.$store.commit('set_currentPage', this.$route.path);
        this.$store.dispatch('changeNavClass');
    },
    methods: {
        navToggle (nav) {
            let scrollPos = 0;
            const height = nav.clientHeight;
            
            // Switch between dark and light navbar on scroll
            if (nav.classList.contains("navbar-split")) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > height) {
                        nav.classList.remove("navbar-split");
                        nav.classList.add("navbar-scroll-down-revealed");
                    }
                    else {
                        nav.classList.remove("navbar-scroll-down-revealed", "navbar-dark", "navbar-transparent");
                        nav.classList.add("navbar-split");
                    }
                    offsetNav((document.body.getBoundingClientRect()).top);
                    scrollPos = (document.body.getBoundingClientRect()).top;
                });
            } 
            else if (nav.classList.contains("navbar-transparent")) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > height) {
                        nav.classList.remove("navbar-transparent");
                        nav.classList.add("navbar-scroll-down-revealed");
                    }
                    else {
                        nav.classList.remove("navbar-scroll-down-revealed", "navbar-split", "navbar-dark");
                        nav.classList.add("navbar-transparent");
                    }
                    offsetNav((document.body.getBoundingClientRect()).top);
                    scrollPos = (document.body.getBoundingClientRect()).top;
                });
            }
            else if (nav.classList.contains("navbar-dark")) {  
                window.addEventListener('scroll', () => {
                    if (window.scrollY > height) {
                        nav.classList.remove("navbar-dark");
                        nav.classList.add("navbar-scroll-down-revealed");
                    }
                    else {
                        nav.classList.remove("navbar-scroll-down-revealed", "navbar-split", "navbar-transparent");
                        nav.classList.add("navbar-dark");
                    }
                    offsetNav((document.body.getBoundingClientRect()).top);
                    scrollPos = (document.body.getBoundingClientRect()).top;
                });
            }
            // hide and show navbar on scroll
            function offsetNav(currentScrollPos) {
                (currentScrollPos > scrollPos) ? nav.classList.remove("offset") : nav.classList.add("offset");
            }
        }
    },
    watch: {
        '$route' () {
            this.$store.commit('set_currentPage', this.$route.path);
            this.$store.dispatch('changeNavClass');
            let nav = document.querySelector('.navbar.fixed-top');
            this.navToggle(nav);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.flexbox-container {
	// Theme for Dark Backgrounds
	&.dark {
		.logo a {
			color: #FFFFFF;
		}

		.navigation a {
			color: #FFFFFF;
			&:hover {
				color: $brand-primary;
			}
		}
	}
}

// Navbar
.navbar {
    .nav-link {
        font-family: "proxima-nova";
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: color 250ms ease-in-out;
    }
    .nav-link {
        color: $brand-text-light;
        &:hover, 
        &:focus,
        &.nuxt-link-active,
		&.nuxt-link-exact-active { 
            color: $brand-text;
        }
    }
    .navbar-brand {
        color: $brand-text;
        &:hover, &:focus {
            color: $brand-text;
        }
    }
	transition: all 350ms ease-in-out;
	transition-delay: 250ms;
	transition-property: transform;
}
.navbar-split {
    .nav-link {
        color: rgba(white, 0.8);
		&:hover, 
        &:focus,
        &.nuxt-link-active,
		&.nuxt-link-exact-active { 
			color: white; 
		}
	}
}
.navbar-dark {
	.nav-link {
        color: rgba(white, 0.8);
        &:hover, 
        &:focus,
        &.nuxt-link-active,
		&.nuxt-link-exact-active { 
            color: white;
        }
    }
    .navbar-brand {
        color: white;
        &:hover, &:focus {
            color: white;
        }
    }
}

.navbar-scroll-down-revealed {
	background: rgba(255,255,255, 0.85);
    backdrop-filter: blur(8px);
    box-shadow: $shadow-medium;
    @extend %transition-fade-in;
}

.offset {
  	transform: translateY(-74px);
}



// LOGO CONTAINER
.navbar-brand {
	font-weight: 600;
	font-family: trumpgothicpro, sans-serif;
	&:hover, &:focus, &:active {
		text-decoration: none;
	}
	.logo {
		width: 30px;
		margin-right: 5px;
	}
}

</style>