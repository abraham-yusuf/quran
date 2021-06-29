export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Al-Quran Online - Pon-Pes Al-Madani",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Al-Quran Online - Pon-Pes Al-Madani' },
      { hid: 'author', name: 'author', content: 'Abraham Yusuf' },
      { hid: 'og:title', property: 'og:title', content: "Qur'an Al-Madani" },
      { hid: 'og:description', property: 'og:description', content: "Al-Qur'an Online - Pon-Pes Al-Madani" },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ponpes-almadani.my.id/al-quran' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  loading: {
    color: '#90a0fa',
    height: '5px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    "@nuxtjs/color-mode",
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
  ],

  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  },
  
  purgeCSS: {
    whitelist: ["dark-mode"]
  },

  pwa: {
    icon: {
      source: 'static/icon.png'
    },
    manifest: {
      name: "Qur'an Al-Madani",
      short_name: "Qur'an Al-Madani",
      description: "Al-Qur'an Online - Pon-Pes Al-Madani",
      lang: 'id',
    }
  },

  generate: {
    fallback: true
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
