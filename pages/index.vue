<template>
  <div>
    <Header />
    <BlogSection :blogs="blogs" />
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
    <div class="container">
      <!-- <logo />
      <h1 class="title">
        nuxt-test
      </h1>
      <h2 class="subtitle">
        My best Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>  -->
    </div>
    <Footer />
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue';
import BlogSection from '~/components/sections/BlogSection';
import Header from '~/components/sections/Header.vue';
import Footer from '~/components/sections/Footer.vue';

// import blogsEn from '~/contents/en/blogsEn.js';
// import blogsEs from '~/content/es/blogsEs.js';

export default {
  components: {
    // Logo,
    BlogSection,
    Header,
    Footer,
  },
  async asyncData({ $content, params, error }) {
    // const slug = params.slug || 'blog-using-vue-nuxt-markdown';
    // const slug = blogsEs[0] || 'index';
    // const blogs = blogsEs;

    // const page = await $content('en/blog', slug)
    const page = await $content('articles')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found' });
        console.error(err);
      });

    const blogs = await $content('articles')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found' });
        console.error(err);
      });

    return {
      page,
      blogs,
    };
  },
  /* asyncData({ app }) {
    // const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs;
    const blogs = blogsEs;

    async function asyncImport(blogName) {
      const wholeMD = await import(
        // `~/contents/${app.i18n.locale}/blog/${blogName}.md`
        `~/content/es/blog/${blogName}.md`
      );
      return wholeMD.attributes;
    }

    return Promise.all(blogs.map(blog => asyncImport(blog))).then(res => {
      return {
        blogs: res,
      };
    });
  }, */
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/*.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}*/
</style>
