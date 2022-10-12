<script setup>
const { data: articles } = await useAsyncData('equal', () =>
  queryContent('articles')
    //.where({ layout: { $eq: 'post' } })
    .find()
);
</script>

<template>
  <div>
    <SectionsHeader />
    <ul class="container">
      <li v-for="article of articles" :key="article.id" class="article-card">
        <SectionsBlogCard :article="article" />
      </li>
    </ul>

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
