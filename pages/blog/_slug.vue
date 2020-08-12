<template>
  <article
    class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >
    <div class="lg:w-1/4 lg:h-full xs:w-full xs:h-84 p-2">
      <a href="/">volver</a>
      <h1 class="">{{ article.title }}</h1>
      <!-- <p>{{ article.description }}</p> -->
      <img v-if="article.img" :src="article.img" :alt="article.alt" />
      <p class="text-xs">Actualizado el: {{ formatDate(article.updatedAt) }}</p>
      <nav class="mt-5">
        <p class="bg-blue-300 font-bolder p-2">Secciones</p>
        <ul class="bg-green-400 text-white font-bold list-disc p-2">
          <li v-for="link of article.toc" :key="link.id" class="mb-5">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="lg:w-3/4 lg:h-full xs:w-full xs:h-84 overflow-y-scroll p-5">
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es', options);
    },
  },
};
</script>

<style lang="scss">
article {
  h1 {
    font-weight: bold;
    font-size: 1.3em;
  }
}
.nuxt-content {
  h1 {
    font-weight: bold;
    font-size: 1.3em;
  }
  h2 {
    font-weight: bold;
    font-size: 1.2em;
  }
  h3 {
    font-weight: bold;
    font-size: 1.1em;
  }
  p {
    margin-bottom: 20px;
  }
}

table {
  width: 100%;
  td,
  th {
    border: 1px solid grey;
    padding: 5px;
  }
}
</style>
