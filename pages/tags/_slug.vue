<script setup lang="ts">
const articles = ref<any[]>([]);
const tags = ref<string[]>([]);

// Cargar datos (puedes adaptar esto según tu API)
try {
  const data = await queryCollection('content')
    //.select('title', 'description', 'img', 'alt', 'year', 'slug', 'author', 'tags')
    .select('title', 'description', 'tags')
    .all();

  articles.value = data || [];

  // Extraer tags únicos
  const allTags = new Set();
  articles.value.forEach((article) => {
    if (article.tags) {
      article.tags.forEach((tag: unknown) => allTags.add(tag));
    }
  });
  tags.value = Array.from(allTags).sort() as string[];
} catch (error) {
  console.error('Error loading articles:', error);
}

useHead({
  title: 'Salrion, post ordenados por tags',
  meta: [
    {
      name: 'description',
      content:
        'Todos los articulos ordenados por tags o temática, una forma fácil de ver artículos de tus temas preferidos. Elije un tema y comienza a leer.',
    },
  ],
});
</script>

<template>
  <div>
    <Header />
    <div class="m-8">
      <h1 class="text-gray-600 border-b border-gray-300 my-5 font-bold">
        Post por tags
      </h1>

      <div v-for="tag of tags" :key="tag.tags" :set="(tempTag = tag.tags)">
        <h2 class="">{{ tag }}</h2>

        <ul
          v-for="article of articles"
          :key="article.slug"
          class="flex flex-wrap"
          :set="(articleTag = article.tags)"
        >
          <li
            v-if="articleTag.includes(tag)"
            class="xs:w-full md:w-full px-2 xs:mb-6 md:mb-6 article-card"
          >
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
            >
              <h3 class="font-bold">
                {{ article.title }}
                <span class="text-xs">{{ article.tags }}</span>
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

<style lang="scss">
h2 {
  margin: 1em 0 1em;
  font-size: 1em;
  // color: $grey-semi;
  // border-bottom: 1px solid $grey-light;
}
</style>
