<template>
  <div>
    <Header />
    <div class="main">
      <h1 class="h1">Entradas recientes</h1>
      <ul class="container">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="article-card"
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
      // eslint-disable-next-line prettier/prettier
      .catch((err) => {
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
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/css/_base.scss';
.main {
  margin: 2rem;
}

.h1 {
  color: $grey-dark;
  border-color: $grey-light;
  font-weight: bold;
  margin: 1.25rem 0;
}

.container {
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  .article-card {
    padding: 0 0.5rem;

    @include sm {
      width: 100%;
      margin-bottom: 1.5rem;
    }

    @include md {
      width: 50%;
      margin-bottom: 3rem;
    }
  }
}
</style>
