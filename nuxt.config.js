export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'enokmadrid.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/qnk6szk.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' }
    ],
    script: [
      { hid: 'typekit', src:'https://use.typekit.net/llv3zsc.js', defer: true },
      { hid: 'fontawesome', src:'https://kit.fontawesome.com/52c8510a26.js', crossorigin:'anonymous', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/font-icons.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/content',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit'
  ],
  // Apollo Options: 
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHCMS_ENDPOINT
      }
    }
  },
  // Markdownit Options: https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    runtime: true,
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },

  // Nuxt Content: https://content.nuxtjs.org
  content: [
    // Nuxt Content Options
  ],

  styleResources: {
    scss: [
      'assets/scss/_custom.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
