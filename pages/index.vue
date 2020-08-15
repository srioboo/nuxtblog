<template>
  <div>
    <Header />
    <BlogSection :blogs="blogs" />
    <!-- <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
    <nuxt-content :document="articles" /> -->

    <div class="m-8">
      <h1 class="text-gray-600 border-b border-gray-300 my-5">
        Entradas recientes
      </h1>
      <ul class="flex flex-wrap">
        <li
          v-for="article of articles"
          :key="article.slug"
          class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
        >
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
          >
            <img
              v-if="article.img"
              :src="article.img"
              :alt="article.alt"
              class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            />
            <img
              v-else
              src="https://via.placeholder.com/150/ffffff/ffffff"
              alt="no image"
              class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            />
            <div
              class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
            >
              <h2 class="font-bold">{{ article.title }}</h2>
              <p>by {{ article.author.name }} {{ article.year }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ article.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <Footer />
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue';
// import BlogSection from '~/components/sections/BlogSection';
import Header from '~/components/sections/Header.vue';
import Footer from '~/components/sections/Footer.vue';

export default {
  components: {
    // Logo,
    // BlogSection,
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

.article-card {
  border-radius: 8px;
  a {
    background-color: $white;
    border-radius: 8px;
  }
  img div {
    border-radius: 8px 0 0 8px;
  }
}

.object-cover {
  -o-object-fit: cover;
  object-fit: cover;
}

/* Sample `apply` at-rules with Tailwind CSS */
/*.container {
  @apply min-h-screen;
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply text-center;
  @apply mx-auto;
}*/

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
}
</style>
