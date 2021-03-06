<template>
  <div>
    <Header />
    <div class="m-8">
      <h1 class="text-gray-600 border-b border-gray-300 my-5 font-bold">
        Post por año
      </h1>
      <div
        v-for="year of years"
        :key="year.slug"
        :set="(tempYear = getYear(year.year))"
      >
        <h2>{{ tempYear }}</h2>

        <ul
          v-for="article of articles"
          :key="article.slug"
          class="flex flex-wrap"
          :set="(articleYear = getYear(article.year))"
        >
          <li
            v-if="articleYear == tempYear"
            class="xs:w-full md:w-full px-2 xs:mb-6 md:mb-6 article-card"
          >
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
            >
              <h3 class="font-bold">
                {{ article.title }}
              </h3>
              <p class="text-xs">{{ formatDate(article.year) }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ article.description }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

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

    const years = await $content('articles', params.year)
      .only(['year'])
      .without(['path', 'extension'])
      .sortBy('year', 'asc')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found' });
        console.error(err);
      });

    return {
      articles,
      years,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es', options);
    },
    getYear(date) {
      const options = { year: 'numeric' };
      return new Date(date).toLocaleDateString('es', options);
    },
  },
  head() {
    return {
      title: 'Salrion, post ordenados por año de creación',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Todos los articulos ordenados por la fecha en las que fueron creados, una forma fácil de tener un historial de tus artículos favoritos',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '~/assets/css/_colors.scss';
h2 {
  margin: 1em 0 1em;
  font-size: 1em;
  color: $grey-semi;
  border-bottom: 1px solid $grey-light;
}
</style>
