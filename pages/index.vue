<template>
  <div>
    <Header />
    <div class="m-8">
      <h1 class="text-gray-800 border-b border-gray-300 my-5 font-bold">
        Entradas recientes
      </h1>
      <ul class="flex flex-wrap">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
        >
          <BlogCard :article="article" />
        </li>
      </ul>
    </div>

    <Footer />
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue';
import BlogCard from '~/components/sections/BlogCard';
import Header from '~/components/sections/Header.vue';
import Footer from '~/components/sections/Footer.vue';

export default {
  components: {
    // Logo,
    BlogCard,
    Header,
    Footer,
  },
  async asyncData({ $content, params, error }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'alt', 'year', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found' });
        console.error(err);
      });

    return {
      articles,
    };
  },
  head() {
    return {
      title: 'Salrion Blog, blog personal, con apuntes personales',
    };
  },
};
</script>
