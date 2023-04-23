<script setup>
const control = '';

// articles
const { data: articles } = await useAsyncData('home', () =>
  queryContent('/')
    .sort({ year: 1 })
    .only(['title', 'description', 'id', 'date', 'year'])
    .find()
);

useHead({
  title: 'Salrion, post ordenados por año de creación',
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
    },
    {
      name: 'description',
      content:
        'Todos los artículos ordenados por la fecha en las que fueron creados, una forma fácil de tener un historial de tus artículos favoritos',
    },
  ],
  bodyAttrs: {
    // class: 'base',
  },
  htmlAttrs: {
    lang: 'es',
  },
});

function transformImg(img) {
  return img.replace('{{trans}}', imgsmall);
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('es', options);
}
</script>

<template>
  <div>
    <SectionsHeader />
    <div class="container">
      <h1 class="container__header">Post por año</h1>
      <div
        v-for="article of articles"
        :key="article.slug"
        :set="(actualYear = article.year)"
      >
        <h2 v-if="actualYear != control">{{ actualYear }}</h2>
        <ul class="container__list" :set="(control = article.year)">
          <!-- <li v-if="article.year == year.year" class="container__item"> -->
          <li class="container__item">
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.id } }"
              class="container__link"
            >
              <h3 class="link__title">
                {{ article.title }}
              </h3>
              <p class="link__year">
                {{ formatDate(article.date) }}
              </p>
              <p class="link__description">
                {{ article.description }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!-- </div> -->
    </div>

    <SectionsFooter />
  </div>
</template>

<style lang="scss">
@import '~/assets/css/_colors.scss';
@import '~/assets/css/_breakpoints.scss';
h2 {
  margin: 1em 0 1em;
  font-size: 1em;
  color: $grey-semi;
  border-bottom: 1px solid $grey-light;
}

.container {
  margin: 2rem;

  .container__header {
    font-weight: bold;
    color: $grey-dark;
    border-bottom-width: 1px;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .container__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    .container__item {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      @include sm {
        width: 100%;
        margin-bottom: 1.25rem;
      }
      @include md {
        width: 100%;
        margin-bottom: 1.25rem;
      }

      .container__link {
        display: flex;
        flex-direction: column;
        transition-property: box-shadow;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        &:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .link__title {
          font-weight: bold;
        }
        .link__year {
          // font-size: 12px;
          font-size: 0.75rem;
          line-height: 1rem;
        }
        .link__description {
          font-weight: bold;
          color: $grey-dark;
          // font-size: 14px;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
  }
}
</style>
