<script setup lang="ts">
import { seoData } from '@/data';
const { data } = await useAsyncData(() =>
  queryCollection('content').path('/').all())


console.log("hi", data.value);

const formattedData = computed(() => {
  return (
    data.value?.map((articles) => {
      return {
        id: articles.id,
        path: articles.path,
        title: articles.title || 'no-title available',
        description: articles.description || 'no-description available',
        // image: articles.img,
        // alt: articles.alt || 'no alter data available',
        // ogImage: articles.ogImage || '/glacier.jpg',
        // date: articles.date || 'not-date-available',
        // tags: articles.tags || [],
        // published: articles.published || false,
      };
    }) || []
  );
});

useHead({
  htmlAttrs: {
    lang: 'es',
  },
  bodyAttrs: {
    // class: 'dark',
  },
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
          v-for="post in formattedData"
          :key="post.path"
          class="article-card py-0 px-2 sm:w-1/2 mb-6 sm:mb-12"
        >
        {{ post }}
         <!-- <SectionsBlogCard
            :id="post.id"
            :path="post.path"
            :title="post.title"
            :date="post.date"
            :description="post.description"
            :image="post.image"
            :alt="post.alt"
            :og-image="post.ogImage"
            :tags="post.tags"
            :published="post.published"
          /> -->
        </li>
      </ul>
    </div>
    <SectionsFooter />
    <!-- /index -->
  </div>
</template>

<style lang="scss" scoped>
// @import '~/assets/css/_base.scss';

.main {
  // margin: 2rem;
}

.h1 {
  // color: $grey-dark;
  // border-color: $grey-light;
  // font-weight: bold;
  // margin: 1.25rem 0;
}

.container {
  // display: flex;
  // flex-wrap: wrap;
  // list-style: none;

  .article-card {
    // padding: 0 0.5rem;

    // @include sm {
    //   width: 100%;
    //   margin-bottom: 1.5rem;
    // }

    // @include md {
    //   width: 50%;
    //   margin-bottom: 3rem;
    // }
  }
}
</style>
