<template>
  <div>
    <Header />
    <div class="tags">
      Próximamente .......
    </div>

    <!--
    <div class="m-8">
      <h1 class="text-gray-600 border-b border-gray-300 my-5 font-bold">
        Post por año
      </h1>
      <ul class="flex flex-wrap">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="xs:w-full md:w-full px-2 xs:mb-6 md:mb-12 article-card"
        >
          <div>{{ article.title }}</div>
          <div>{{ article.year }}</div>
        </li>
      </ul>
    </div>
-->
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/sections/Header.vue';
import Footer from '~/components/sections/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
  async asyncData({ $content, params, error }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'alt', 'year', 'slug', 'author'])
      .sortBy('year', 'asc')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found' });
        console.error(err);
      });

    return {
      articles,
    };
  },
};
</script>

<style lang="scss">
@import '~/assets/css/_colors.scss';

.tags {
  min-height: calc(100vh - 112px);
}
</style>
