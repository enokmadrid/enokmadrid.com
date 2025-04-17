// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Enok Madrid | UI/UX Design Engineer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'alternative icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#FF1A55' },
        { rel: 'stylesheet', href: 'https://use.typekit.net/qnk6szk.css' }
      ],
      script: [
        { src: 'https://use.typekit.net/llv3zsc.js', defer: true }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  // Equivalent to mode: 'spa' in Nuxt 2
  ssr: false,

  css: ['~/assets/css/tailwind.css'],

  // Auto import components
  components: true,

  // Modules
  modules: [
    // Temporarily disable Apollo until endpoint is fixed
    // '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  // PostCSS Configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Apollo configuration - temporarily disabled
  /*
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHCMS_ENDPOINT ?? '',
        inMemoryCacheOptions: {},
        httpLinkOptions: {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        },
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'cache-and-network',
          },
        },
      }
    }
  },
  */

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      graphcmsEndpoint: process.env.GRAPHCMS_ENDPOINT
    }
  },

  // Content configuration
  content: {
    // Content module configuration
  },

  compatibilityDate: '2025-03-15'
})