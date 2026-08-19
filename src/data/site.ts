// src/data/site.ts
const rawSiteUrl = import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321';

function normalizeUrl(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export const site = {
  siteUrl: normalizeUrl(rawSiteUrl),
  siteName: import.meta.env.PUBLIC_SITE_NAME || 'Blog',
  googleSiteVerification: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || '',
};

export const seoData = {
  title: `Salrion Blog | Salrion's Blog`,
  ogTitle: `Salrion's Blog: mi blog personal | Salrion's Blog`,
  description: `Listado de post sobre informática, programación, apuntes, docker, kubernetes, estilo de vida y otras cosas de interés personal - Salrion Blog | Salrion's Blog`,
  image:
    'https://res.cloudinary.com/salrion/image/upload/w_810,q_90,f_auto/salrionblog/glacier.jpg',
  twitterHandle: import.meta.env.PUBLIC_TWITTER_HANDLE || '@salrio74',
};

// Real favicon assets are limited to favicon.ico for now (see docs-migration
// backlog) — the full apple-touch/android-chrome set from the old site was
// broken (referenced files that never existed in public/favicons/).
export const iconsLinks = [
  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
];
