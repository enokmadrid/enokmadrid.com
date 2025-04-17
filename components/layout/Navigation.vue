<template>
    <nav class="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out delay-250" 
        :class="[
            'navbar-base',
            {'navbar-scroll': isScrolled},
            {'navbar-offset': isOffset}
        ]">
        <div class="container mx-auto px-8">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div>
                    <img src="/avatar.png" alt="Enok Madrid" class="w-12 h-12 rounded-full" />
                </div>
                
                <!-- Navigation Menu (Desktop) -->
                <div class="hidden md:flex items-center space-x-8">
                    <ul class="flex space-x-6">
                        <li v-for="(item, index) in navItems" :key="index">
                            <NuxtLink :to="item.path" :exact="item.exact"
                                class="text-white font-medium hover:border-b-2 hover:border-white transition-all"
                                :class="{'border-b-2 border-white': $route.path === item.path}">
                                {{ item.text }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                
                <!-- Mobile Menu Button (only visible on mobile) -->
                <button 
                    class="md:hidden p-2 text-white focus:outline-none"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!isMenuOpen">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-else>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <!-- Right Side - Theme Toggle & CTA (Desktop) -->
                <div class="hidden md:flex items-center space-x-4">
                    <!-- Theme Toggle (Dark/Light mode) -->
                    <div class="flex items-center space-x-2">
                        <button class="p-2 bg-gray-800 bg-opacity-30 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </button>
                    </div>
                    
                    <!-- CTA Button -->
                    <NuxtLink to="/contact" class="px-6 py-3 bg-white rounded-full text-[#171332] font-medium hover:bg-opacity-90 transition-all">
                        Hire Me
                    </NuxtLink>
                </div>
            </div>
        </div>
        
        <!-- Mobile Navigation Menu (only visible when menu is open) -->
        <div 
            v-if="isMenuOpen" 
            class="md:hidden absolute left-0 right-0 top-full bg-[#171332] bg-opacity-95 py-4 z-10"
        >
            <div class="container mx-auto px-8">
                <div class="flex flex-col space-y-4">
                    <NuxtLink v-for="(item, index) in navItems" 
                        :key="index" 
                        :to="item.path" 
                        class="text-white font-medium py-2 border-b border-gray-700"
                        @click="isMenuOpen = false">
                        {{ item.text }}
                    </NuxtLink>
                    
                    <!-- Mobile CTA -->
                    <NuxtLink to="/contact" class="mt-4 px-6 py-3 bg-white rounded-full text-[#171332] font-medium hover:bg-opacity-90 transition-all self-start">
                        Hire Me
                    </NuxtLink>
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
            isMenuOpen: false,
            scrollPos: 0,
            navItems: [
                { path: '/', text: 'Home', exact: true },
                { path: '/about', text: 'About', exact: false },
                { path: '/work', text: 'Work', exact: false },
                { path: '/case-studies', text: 'Case Studies', exact: false },
                { path: '/learn', text: 'Learn', exact: false },
                { path: '/resume', text: 'Resume', exact: false }
            ]
        }
    },
    mounted() {
        this.initNavbar();
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
            this.isOffset = currentScrollPos > this.scrollPos && currentScrollPos > height;
            
            // Update scroll position
            this.scrollPos = currentScrollPos;

            // Close mobile menu on scroll
            if (this.isMenuOpen && currentScrollPos > 10) {
                this.isMenuOpen = false;
            }

            // Update navbar theme based on scroll
            this.updateNavbarState();
        },
        updateNavbarState() {
            // No store needed
        }
    },
    watch: {
        '$route'() {
            this.updateNavbarState();
            
            // Close mobile menu on route change
            this.isMenuOpen = false;
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
    background: linear-gradient(to bottom, rgba(23, 19, 50, 0.9), rgba(73, 41, 156, 0.8));
    backdrop-filter: blur(10px);
}
.navbar-scroll {
    @apply backdrop-blur-lg shadow-md;
    background: rgba(23, 19, 50, 0.95);
}
.navbar-offset {
    @apply -translate-y-[74px];
}
</style>