<template>
  <div id="search" class="relative">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar Artículos"
      class="px-[10px] py-[2px] border border-black rounded-full"
    >
    <ul
      v-if="filteredArticles.length"
      class="absolute left-0 top-full z-[2] p-[5px] border border-black bg-white"
    >
      <li
        v-for="article of filteredArticles"
        :key="article.path"
        class="list-none border-b border-gray-400 mb-[7px] last:border-b-0 last:mb-0"
      >
        <a :href="article.path">
          <span class="block font-bold">{{ article.title }}</span>
          <span v-if="article.description" class="block text-xs text-gray-600">
            {{ article.description }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

type SearchArticle = {
  path: string;
  title: string;
  description: string;
  tags: string[];
};

const searchQuery = ref('');
const articles = ref<SearchArticle[]>([]);

onMounted(async () => {
  const response = await fetch('/search-index.json');
  articles.value = await response.json();
});

const filteredArticles = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return [] as SearchArticle[];
  }

  return articles.value.filter((article) => {
    const haystack = [article.title, article.description, ...(article.tags || [])]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  }).slice(0, 6);
});
</script>
