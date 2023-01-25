<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const query: QueryBuilderParams = {
  path: '/blog',
  // where: { layout: 'post' },
  //limit: 5,
  // sort: { date: -1 },
};
</script>

<template>
  <div>
    <SectionsHeader />
    <div class="main">
      <h1 class="h1">Entradas recientes</h1>
      <ul class="container">
        <ContentList v-slot="{ list }" :query="query">
          <li v-for="article in list" :key="article._path" class="article-card">
            <SectionsBlogCard :article="article" />
          </li>
        </ContentList>
      </ul>
    </div>

    <SectionsFooter />
  </div>
</template>

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
