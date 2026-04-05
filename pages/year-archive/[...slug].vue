<script setup lang="ts">
type YearArchiveArticle = {
  path: string;
  title?: string;
  description?: string;
  date?: string | Date;
  year?: string | number | Date | null;
};

type NormalizedArticle = YearArchiveArticle & {
  normalizedYear: number;
};

const { data: articles } = await useAsyncData('year-archive', () =>
  queryCollection('content')
    .select('title', 'description', 'path', 'date', 'year')
    .all()
);

const normalizeYear = (value: YearArchiveArticle['year']) => {
  if (value instanceof Date) {
    return value.getFullYear();
  }

  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string' && value.trim()) {
    const numericYear = Number(value);
    if (!Number.isNaN(numericYear)) {
      return numericYear;
    }

    const parsedDate = new Date(value);
    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate.getFullYear();
    }
  }

  return null;
};

const formatDate = (date?: string | Date) => {
  if (!date) {
    return '';
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Date(date).toLocaleDateString('es', options);
};

const groupedArticles = computed(() => {
  const normalizedArticles = ((articles.value || []) as YearArchiveArticle[])
    .map((article) => ({
      ...article,
      normalizedYear: normalizeYear(article.year),
    }))
    .filter((article): article is NormalizedArticle => article.normalizedYear !== null)
    .sort((a, b) => {
      if (b.normalizedYear !== a.normalizedYear) {
        return b.normalizedYear - a.normalizedYear;
      }

      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;

      return dateB - dateA;
    });

  const groups = new Map<number, NormalizedArticle[]>();

  for (const article of normalizedArticles) {
    const year = article.normalizedYear;
    const current = groups.get(year) || [];
    current.push(article);
    groups.set(year, current);
  }

  return [...groups.entries()].map(([year, items]) => ({
    year,
    articles: items,
  }));
});
</script>

<template>
  <div>
    <SectionsHeader />
    <main class="m-8">
      <h1 class="my-5 border-b border-gray-300 font-bold text-gray-600">
        Post por año
      </h1>

      <section
        v-for="group in groupedArticles"
        :key="group.year"
        class="mb-10"
      >
        <h2 class="mb-5 text-lg font-bold text-gray-700">
          {{ group.year }}
        </h2>

        <ul class="flex flex-wrap list-none gap-y-6">
          <li
            v-for="article in group.articles"
            :key="article.path"
            class="w-full px-2"
          >
            <NuxtLink
              :to="article.path"
              class="flex flex-col p-4 shadow-sm transition-shadow duration-150 ease-in-out hover:shadow-md"
            >
              <h3 class="font-bold">
                {{ article.title }}
              </h3>
              <p class="text-xs">
                {{ formatDate(article.date) }}
              </p>
              <p class="text-sm font-bold text-gray-600">
                {{ article.description }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </main>

    <SectionsFooter />
  </div>
</template>

