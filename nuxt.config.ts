import { seoData, siteMetaData, iconsLinks } from './data';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-30',
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
  ],

  runtimeConfig: {
    public: {
      SITE_URL: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },

  robots: {
    credits: false,
  },

  sitemap: {
    xsl: false,
    xslTips: false,
    exclude: ['/politica-privacidad/**', 'tags/*'],
    strictNuxtContentPaths: true,
  },

  content: {
    // documentDriven: true,
    highlight: {
      preload: ['html', 'shell'],
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
      title: seoData.title,
      meta: siteMetaData,
      link: iconsLinks,
    },
  },
});
