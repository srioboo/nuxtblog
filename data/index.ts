export const seoData = {
  title: `Salrion Blog | Salrion's Blog`,
  ogTitle: `Salrion's Blog: mi blog personal | Salrion's Blog`,
  description: `Listado de post sobre informática, programación, apuntes, docker, kubernetes, estilo de vida y otras cosas de interés personal - Salrion Blog | Salrion's Blog`,
  // twitterDescription: `Listado de post sobre informática, programación, apuntes, docker, kubernetes, estilo de vida y otras cosas de interés personal - Salrion Blog | Salrion's Blog`,
  // image:
  //  'https://res.cloudinary.com/salrion/image/upload/w_810,q_90,f_auto/salrionblog/glacier.jpg',
  mySite: 'https://salrion.vercel.app',
  twitterHandle: '@salrio74',
  // mailAddress: 'some_email@some_mail_provider.com',
};

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },

  { name: 'msapplication-TileColor', content: '#ffffff' },
  {
    name: 'msapplication-TileImage',
    content: '/favicons/mstile-144x144.png',
  },
  { name: 'theme-color', content: '#c1c1c1' },
  { name: 'robots', content: 'index, follow' },

  {
    name: 'google-site-verification',
    content: process.env.GOOGLE_SITE_VERIFICATION,
  },

  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  // {
  //  property: 'og:image',
  //  content: seoData.image,
  //},
  // { property: 'og:updated_time', content: builtAt },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  // {
  //  name: 'twitter:url',
  //  content: seoData.mySite,
  // },
  // {
  //  name: 'twitter:title',
  //  content: seoData.ogTitle,
  // },
  // {
  //  name: 'twitter:description',
  //  content: seoData.twitterDescription,
  // },
  // {
  //  name: 'twitter:image',
  //  content: seoData.image,
  // },
];

export const iconsLinks = [
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
];
