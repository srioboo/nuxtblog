<script setup>
import { transformImg, formatDate } from '@/utils/helper';
const { path } = useRoute();

const { data: article, error } = await useAsyncData(`blog-post-${path}`, () =>
  queryContent(path).findOne()
);

await useHead({
  title: article.title,
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
    },
    {
      name: 'description',
      content: article.description,
    },
    {
      property: 'og:url',
      content: useRuntimeConfig().public.SITE_URL + path,
    },
    {
      property: 'og:image',
      content: transformImg(article.img),
    },
  ],
  bodyAttrs: {
    // class: 'base',
  },
  htmlAttrs: {
    lang: 'es',
  },
});
</script>

<template>
  <SectionsHeader />
  <main>
    <article
      class="article text-gray-700 bg-gray-100 w-screen flex flex-col overflow-hidden"
    >
      <div class="article__content flex justify-center relative">
        {{ article.alt }}
        <img
          :src="transformImg(article.img)"
          :alt="article.alt ? article.alt : 'glacier'"
          :title="article.title"
          class="article__img absolute h-full w-full object-cover"
          loading="lazy"
        />
        <div class="overlay" />
        <div class="nav__wrapper">
          <nav class="nav">
            <div v-for="tag in article.tags" :key="tag" class="nav__tag">
              {{ tag }}
            </div>
            <br />
          </nav>
        </div>
      </div>
      <div class="article__wrapper relative overflow-y-scroll p-5">
        <h1 class="font-bold mb-2">
          {{ article.title }}
        </h1>
        <p class="article__date mt-0 mb-3 text-xs">
          {{ formatDate(article.year) }}<br />
          <span class="article__date">
            Actualizado: {{ formatDate(article.updatedAt) }}
          </span>
        </p>
        <ContentDoc :path="article._path" />
      </div>
    </article>
  </main>
  <SectionsFooter />
</template>

<style lang="scss">
nav {
  ul {
    color: #2b5866;
  }
  .tag {
    border: 1px solid white;
    border-radius: 99999px;
    margin: 5px 5px;
    padding: 2px 10px;
    color: white;
    width: 50%;
  }
}

article {
  h1 {
    font-weight: bold;
    margin: 0 0 10px 0;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    margin: 20px 0 10px 0;
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

  .article__content {
    .nav__wrapper {
      position: absolute; // absolute
      // text-menu
      top: 8rem; // top-30
      left: 8rem; // left-30
      --tw-bg-opacity: 1;
      background-color: rgba(156, 163, 175, var(--tw-bg-opacity));

      & {
        margin: 0.5rem; // m-2
        border-radius: 0.5rem;
      }

      .nav {
        margin-top: 1.25rem;

        .nav__tag {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
      }
    }
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
  background-color: #e4dbc7;
}
</style>
