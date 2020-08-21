<template>
  <article
    class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >
    <div
      class="relative xs:w-full xs:h-84 lg:w-1/4 lg:h-full post-left flex justify-center"
    >
      <!-- <p>{{ article.description }}</p> -->
      <img
        v-if="article.img"
        :src="article.img"
        :alt="article.alt"
        class="absolute h-full w-full object-cover"
      />
      <div class="overlay"></div>
      <div
        class="absolute text-menu top-30 left-30 xs:w-full lg:w-5/6 bg-gray-400 bg-opacity-75 m-2 rounded-lg"
      >
        <nav
          class="mt-5 lg:relative xs:absolute xs:top-0 xs:left-0 lg:top-100 lg:left-10"
        >
          <div class="text-xs p-2 font-bold">
            <span
              ><a href="/" class="underline font-bold"
                >Todos los artículos</a
              ></span
            ><br />
            <span>Actualizado el: {{ formatDate(article.updatedAt) }}</span>
            <span>Actualizado el: {{ formatDate(article.year) }}</span>
          </div>
          <!-- <p class="bg-blue-300 font-bolder p-2">Secciones</p> -->
          <ul class="font-bold text-xs leading-9 list-none p-2">
            <li v-for="link of article.toc" :key="link.id">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      class="relative lg:w-3/4 lg:h-full xs:w-full xs:h-full overflow-y-scroll p-5"
    >
      <h1 class="">{{ article.title }}</h1>
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script>
// import Header from '~/components/sections/Header.vue';
export default {
  components: {
    // Header,
  },
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
@import '~/assets/css/_colors.scss';

text-menu {
  color: $grey;
}

nav {
  ul {
    color: $font-color-nav-menu;
  }
}

article {
  color: $font-color;
  background-color: $grey-light;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 1.3em;
  }
  h2 {
    font-size: 1.2em;
  }
  h3 {
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
