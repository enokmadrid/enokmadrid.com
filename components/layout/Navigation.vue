<template>
    <nav class="fixed top-0 w-full z-10 py-3 transition-all duration-300 ease-in-out delay-250" 
        :class="[
            navClass,
            'navbar-base',
            {'navbar-split': isSplit},
            {'navbar-dark': isDark},
            {'navbar-scroll': isScrolled},
            {'navbar-offset': isOffset}
        ]">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between">
                <NuxtLink class="flex items-center text-lg font-bold uppercase font-['trumpgothicpro'] hover:no-underline" 
                    :class="[
                        {'text-gray-900': !isDark && !isSplit}, 
                        {'text-white': isDark || isSplit}
                    ]" 
                    to="/">
                    <img class="h-[30px] w-auto mr-[5px]" src="~/assets/images/enok-logo.svg" alt="Enok Madrid Logo">
                    Enok Madrid
                </NuxtLink>

                <div class="hidden lg:flex items-center space-x-8">
                    <ul class="flex space-x-6">
                        <li v-for="(item, index) in navItems" :key="index">
                            <NuxtLink :to="item.path" :exact="item.exact"
                                class="font-['proxima-nova'] text-xs font-semibold uppercase tracking-wider transition-colors duration-250"
                                :class="[
                                    {'text-gray-600 hover:text-gray-900': !isDark && !isSplit},
                                    {'text-white/80 hover:text-white': isDark || isSplit},
                                    {'text-gray-900': !isDark && !isSplit && $route.path === item.path},
                                    {'text-white': (isDark || isSplit) && $route.path === item.path}
                                ]">
                                {{ item.text }}
                            </NuxtLink>
                        </li>
                    </ul>
                    
                    <div>
                        <Button href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" target="_blank" 
                            class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-colors">
                            <fa :icon="['fas', 'phone']" class="mr-2"/> Contact me
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            isScrolled: false,
            isOffset: false,
            isSplit: false,
            isDark: false,
            scrollPos: 0,
            navItems: [
                { path: '/', text: 'Work', exact: true },
                { path: '/about', text: 'About', exact: false },
                { path: '/process', text: 'Process', exact: false },
                { path: '/learn', text: 'Learn', exact: false }
            ]
        }
    },
    computed: {
        navClass() {
            return this.$store?.getters?.getNavClass || '';
        }
    },
    mounted() {
        this.initNavbar();
    },
    created() {
        if (this.$store) {
            this.$store.commit('set_currentPage', this.$route.path);
            this.$store.dispatch('changeNavClass');
        }
        this.updateNavbarState();
    },
    methods: {
        initNavbar() {
            window.addEventListener('scroll', this.handleScroll);
            this.updateNavbarState();
        },
        handleScroll() {
            const currentScrollPos = window.scrollY;
            const height = 74; // Navbar height

            // Update scroll state
            this.isScrolled = currentScrollPos > height;
            
            // Update offset state for hide/show on scroll
            this.isOffset = currentScrollPos > this.scrollPos;
            
            // Update scroll position
            this.scrollPos = currentScrollPos;

            // Update navbar theme based on scroll
            this.updateNavbarState();
        },
        updateNavbarState() {
            if (!this.$store?.getters?.getNavClass) return;
            
            const navClass = this.$store.getters.getNavClass;
            this.isSplit = navClass.includes('navbar-split');
            this.isDark = navClass.includes('navbar-dark');

            if (this.isScrolled) {
                this.isSplit = false;
                this.isDark = false;
            }
        }
    },
    watch: {
        '$route'() {
            if (this.$store) {
                this.$store.commit('set_currentPage', this.$route.path);
                this.$store.dispatch('changeNavClass');
            }
            this.updateNavbarState();
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style>
.navbar-base {
    @apply transition-all duration-300 ease-in-out;
}
.navbar-scroll {
    @apply bg-white/85 backdrop-blur-lg shadow-md;
}
.navbar-offset {
    @apply -translate-y-[74px];
}
</style>