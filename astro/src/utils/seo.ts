// src/utils/seo.ts
import { seoData, site } from '../data/site';

export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface BuildMetaOptions {
  title?: string;
  description?: string;
  ogImage?: string;
  canonicalPath?: string;
}

// Ports the flat `siteMetaData` array from the old Nuxt `data/index.ts`
// (msapplication tiles, theme-color, robots, OG, Twitter) into a per-page
// builder, since Astro has no equivalent of Nuxt's global `useHead({ meta })`.
export function buildMeta({
  title,
  description,
  ogImage,
  canonicalPath = '/',
}: BuildMetaOptions = {}): MetaTag[] {
  const resolvedDescription = description ?? seoData.description;
  const resolvedOgImage = ogImage ?? seoData.image;
  const canonical = `${site.siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  return [
    { name: 'description', content: resolvedDescription },
    { name: 'msapplication-TileColor', content: '#ffffff' },
    { name: 'theme-color', content: '#c1c1c1' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:site_name', content: site.siteName },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonical },
    { property: 'og:title', content: title ?? seoData.ogTitle },
    { property: 'og:description', content: resolvedDescription },
    { property: 'og:image', content: resolvedOgImage },
    { name: 'twitter:site', content: seoData.twitterHandle },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
}
