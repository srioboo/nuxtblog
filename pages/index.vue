<template>
  <div>
    <Header />
    <!-- <BlogSection :blogs="blogs" /> -->
    <!-- <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
    <nuxt-content :document="articles" /> -->

    <div class="m-8">
      <h1 class="text-gray-600 border-b border-gray-300 my-5 font-bold">
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
};
</script>

<style lang="scss">
@import '~/assets/css/_colors.scss';

/*.article-card {
  border-radius: 8px;
  a {
    background-color: $white;
    border-radius: 8px;
  }
  img div {
    border-radius: 8px 0 0 8px;
  }
}*/

/*.object-cover {
  -o-object-fit: cover;
  object-fit: cover;
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
