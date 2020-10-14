export default async () => {
  const { $content } = require('@nuxt/content');
  const files = await $content({ deep: true })
    .only(['slug', 'updatedAt'])
    .fetch();

  return files.map(file => {
    const url = file.path === '/index' ? '/' : 'blog/' + file.slug;
    const updated = file.updatedAt;

    return {
      url,
      // changefreq: 'weekly',
      // priority: 1,
      lastmodISO: updated,
    };
  });
};
