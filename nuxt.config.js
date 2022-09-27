export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portfolio of Enok Madrid | UX Designer & UI Engineer',
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
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternative icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#FF1A55' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/qnk6szk.css' }
    ],
    script: [
      { hid: 'typekit', src:'https://use.typekit.net/llv3zsc.js', defer: true }
    ]
  },

  target: 'static',

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
    '@nuxtjs/style-resources',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      proIcons: {
        solid: ['faHeart', 'faPhone', 'faArrowRight', 'faUser', 'faSuitcase', 'faSitemap', 'faPaperPlane', 'faBackpack', 'faChalkboardTeacher'],
        regular: ['faHeart', 'faPhone', 'faArrowRight', 'faUser', 'faSuitcase', 'faSitemap', 'faPaperPlane', 'faBackpack', 'faChalkboardTeacher']
      },
      icons: {
        brands: ['faGithub', 'faInstagram', 'faTwitter', 'faLinkedin', 'faDribbble']
      }
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/content',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    '@nuxtjs/dayjs'
  ],

  // Dayjs Options:
  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ]
  },

  // Apollo Options: 
  apollo: {
    tokenName: "nuxt-apollo",
    cookieAttributes: {
      expires: 7
    },
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
      'assets/scss/_custom.scss',
      '@fortawesome/fontawesome-svg-core/styles.css'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Loader bar per page transition
  loading: {
    color: '#8984FA',
    height: '4px',
    throttle: 0
  },
  loadingIndicator: '~/components/Loader.vue'
}
