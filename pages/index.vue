<script lang="ts" setup>
import { seoData } from '@/data';

const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('content').order('date', 'DESC').all();
});

useHead({
  htmlAttrs: {
    lang: 'es',
  },
  // Note: Dark mode is controlled via Tailwind's 'dark' class on the html element
  // at the app.vue level. No bodyAttrs needed here.
  title: seoData.title,
  meta: [
    {
      name: 'description',
      content: seoData.description,
    },
  ],
});
</script>

<template>
  <div>
    <!-- index -->
    <SectionsHeader />
    <div class="main m-9">
      <h1 class="h1 my-8 mx-0 text-gray-900 border-gray-200 font-bold">
        Entradas recientes
      </h1>
      <ul class="container flex flex-wrap list-none">
        <li
          v-for="post in posts"
          :key="post.path"
          class="article-card py-0 px-2 sm:w-1/2 mb-6 sm:mb-12"
        >
          <SectionsBlogCard
            :id="post.id"
            :path="post.path"
            :title="post.title"
            :date="post.date"
            :description="post.description"
            :image="post.image"
            :alt="post.alt"
            :og-image="post.ogImage"
            :tags="post.tags"
          />
        </li>
      </ul>
    </div>
    <SectionsFooter />
    <!-- /index -->
  </div>
</template>

