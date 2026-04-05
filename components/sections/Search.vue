<template>
  <div id="search" class="relative">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar Artículos"
    >
    <ul v-if="filteredArticles.length">
      <li v-for="article of filteredArticles" :key="article.path">
        <NuxtLink :to="article.path">
          <span class="block font-bold">{{ article.title }}</span>
          <span v-if="article.description" class="block text-xs text-gray-600">
            {{ article.description }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type SearchArticle = {
  path: string;
  title?: string;
  description?: string;
  tags?: string[];
};

const searchQuery = ref('');

const { data: articles } = await useAsyncData('sections-search', () =>
  queryCollection('content')
    .select('title', 'description', 'tags')
    .all()
);

const filteredArticles = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return [] as SearchArticle[];
  }

  return (
    (articles.value as SearchArticle[] | null | undefined) || []
  ).filter((article) => {
    const haystack = [
      article.title,
      article.description,
      ...(article.tags || []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  }).slice(0, 6);
});
</script>

<style lang="scss" scoped>
#search {
  input {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    border: 1px solid black;
    border-radius: 50px;
  }

  ul {
    position: absolute;
    padding: 5px;
    border: 1px solid black;
    background-color: white;
    z-index: 2;
    li {
      list-style: none;
      border-bottom: 1px solid grey;
      margin-bottom: 7px;
    }
  }
}
</style>
