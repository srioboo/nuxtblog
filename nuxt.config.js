import getRoutes from './utils/getRoutes';

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  // target: 'static',
  target: 'server',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/mstile-144x144.png',
      },
      { name: 'theme-color', content: '#c1c1c1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@salrio74' },
      { property: 'og:type', content: 'profile' },
      // { property: 'og:updated_time', content: builtAt },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-96x96.png',
        sizes: '96x96',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-57x57.png',
        sizes: '57x57',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-60x60.png',
        sizes: '60x60',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-72x72.png',
        sizes: '72x72',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-76x76.png',
        sizes: '76x76',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-114x114.png',
        sizes: '114x114',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-120x120.png',
        sizes: '120x120',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-144x144.png',
        sizes: '144x144',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-152x152.png',
        sizes: '152x152',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-180x180.png',
        sizes: '180x180',
      },
      {
        rel: 'mask-icon',
        type: 'image/png',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#c1c1c1',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/prism-material-light.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_UA || '',
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // With options
    [
      'nuxt-trailingslash-module',
      {
        /* module options */
        methods: ['GET', 'HEAD'],
      },
    ],
    '@nuxtjs/sitemap',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  /* content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
    nestedProperties: ['author.name'],
  }, */
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.URL,
    cacheTime: 1000 * 60 * 15,
    // generate: true,
    routes() {
      return getRoutes();
    },
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    /* defaults: {
      lastmod: getDate(),
      changefreq: 'monthly',
      priority: 1,
    }, */
    gzip: true,
    etag: true,
  },
  router: {
    /**
     * Include trailingSlash to avoid redirection 302 from no slash to slash
     */
    // trailingSlash: true,
  },
};
