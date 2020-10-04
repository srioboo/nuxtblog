<template>
  <div>
    <Header />
    <article
      class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
    >
      <div
        class="relative xs:w-full xs:h-84 lg:w-1/4 lg:h-full post-left flex justify-center"
      >
        <!-- <p>{{ article.description }}</p> -->
        <img
          v-if="article.img"
          :src="article.img + imgfull"
          :alt="article.alt"
          :title="article.title"
          class="absolute h-full w-full object-cover"
          loading="lazy"
        />
        <img
          v-else
          :src="noimage + imgfull"
          alt="no image"
          class="absolute h-full w-full object-cover"
          loading="lazy"
        />
        <div class="overlay"></div>
        <div
          class="absolute text-menu top-30 left-30 xs:w-full lg:w-5/6 bg-gray-400 bg-opacity-95 m-2 rounded-lg"
        >
          <nav
            class="mt-5 lg:relative xs:absolute xs:top-0 xs:left-0 lg:top-100 lg:left-10"
          >
            <div class="text-xs p-2 font-bold mb-10">
              <!-- <span
                ><a href="/" class="underline font-bold"
                  >Todos los artículos</a
                ></span
              > -->
              <div class="text-xl">{{ article.title }}</div>
              <p class="m-0">{{ formatDate(article.year) }}</p>
              <p class="m-0">
                Actualizado: {{ formatDate(article.updatedAt) }}
              </p>
            </div>
            <!-- <p class="bg-blue-300 font-bolder p-2">Secciones</p> -->
            <!-- TODO: mejorar y comentar la lista de contenidos Esto es la lista de contenidos
          <ul class="font-bold text-xs leading-9 list-none p-2">
            <li v-for="link of article.toc" :key="link.id">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul> -->
            <!-- <div class="text-xs ml-2">tags:</div> -->
            <div v-for="tag in article.tags" :key="tag" class="tag text-xs">
              {{ tag }}
            </div>
            <br />
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
  </div>
</template>

<script>
import Header from '~/components/sections/Header.vue';
export default {
  components: {
    Header,
  },
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch();

    return { article };
  },
  data() {
    return {
      imgfull: '&w=1000&q=80&auto=format',
      noimage:
        'https://images.unsplash.com/photo-1582720937167-fd278a12a193?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9',
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es', options);
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '~/assets/css/_colors.scss';

.bg-opacity-95 {
  --bg-opacity: 0.95;
}

text-menu {
  color: $grey;
}

nav {
  ul {
    color: $font-color-nav-menu;
  }
  .tag {
    border: 1px solid $white;
    border-radius: 99999px;
    margin: 5px 5px;
    padding: 2px 10px;
    color: $white;
    width: 50%;
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

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background-color: $cream;
}
</style>
