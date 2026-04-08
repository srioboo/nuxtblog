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
