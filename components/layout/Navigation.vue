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
    mounted: () => {
        let scrollPos = 0;
        const nav = document.querySelector('.navbar.fixed-top');
        
        // Switch between dark and light navbar on scroll
        if (nav.classList.contains("navbar-dark")) {
            const height = nav.clientHeight;
            window.addEventListener('scroll', () => {
                if (window.scrollY > height) {
                    nav.classList.remove("navbar-dark");
                    nav.classList.add("navbar-light");
                }
                else {
                    nav.classList.remove("navbar-light");
                    nav.classList.add("navbar-dark");
                }
                offsetNav((document.body.getBoundingClientRect()).top);
                scrollPos = (document.body.getBoundingClientRect()).top;
            });
        } else if (nav.classList.contains("navbar-light")) {
            window.addEventListener('scroll', () => {
                offsetNav((document.body.getBoundingClientRect()).top);
                scrollPos = (document.body.getBoundingClientRect()).top;
            });
        }
        // hide and show navbar on scroll
        function offsetNav(currentScrollPos) {
            (currentScrollPos > scrollPos) ? nav.classList.remove("offset") : nav.classList.add("offset");
        }
    },
    created() {
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

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
/*
*** NAVIGATION FLEXBOX ***
*/
@include breakpoint(xs) {
  
}

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
.navbar-transparent {
  background-color: transparent !important;
}
.navbar-light {
  background: white;
  box-shadow: $shadow-medium;
}
.navbar {
  transition: all 350ms ease-in-out;
  transition-delay: 250ms;
  transition-property: transform;
}
.offset {
  transform: translateY(-74px);
}

.navbar-dark {
  .nav-link {
    &.nuxt-link-active,
    &.nuxt-link-exact-active { 
      color: white; 
    }
  }
  
}

// LOGO CONTAINER
.navbar-split .navbar-brand {
  &:hover,
  &:focus {
    color: $brand-text;
  }
  color: $brand-text;
}
.navbar-brand {
  color: $brand-text;
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

.nav-link {
  font-family: "proxima-nova";
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 250ms ease-in-out;
}
</style>