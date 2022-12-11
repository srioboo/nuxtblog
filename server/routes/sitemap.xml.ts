import { serverQueryContent } from '#content/server';
import { SitemapStream, streamToPromise } from 'sitemap';

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: 'https://salrion.netlify.app/',
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
      lastmod: doc.updatedAt,
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
