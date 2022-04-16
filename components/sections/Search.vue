<template>
  <div id="search">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar Artículos"
    />
    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/css/_base.scss';

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
    li {
      list-style: none;
      border-bottom: 1px solid grey;
      margin-bottom: 7px;
    }
  }
}
</style>
