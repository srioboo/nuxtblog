<template>
  <div class="blog">
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
    >
      <img
        v-if="article.img"
        :src="article.img + imgsmall"
        :alt="article.alt"
        class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
        loading="lazy"
      />
      <img
        v-else
        :src="noimage + imgsmall"
        alt="no image"
        class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
        loading="lazy"
      />
      <div class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full">
        <h2 class="font-bold">{{ article.title }}</h2>
        <p class="text-xs">
          <!-- por {{ article.author.name }} -->
          {{ formatDate(article.year) }}
        </p>
        <p class="font-bold text-gray-700 text-sm">
          {{ article.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<!-- <script lang="js">
// import Vlazyimage from 'v-lazy-image';

export default {
  components:{
  //  Vlazyimage,
  },
  props: {
    blog: {
      type: Object,
      default: () => {},
    }
  }
}
</script> -->

<script>
// import Logo from '~/components/Logo.vue';

export default {
  components: {
    // Logo,
  },
  props: {
    article: {
      type: Object,
      default() {},
    },
  },
  data() {
    return {
      imgsmall: '&w=310&q=80&auto=format',
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
  /* async asyncData({ $content, params, error }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'alt', 'year', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found' });
        console.error(err);
      });

    return {
      articles,
    };
  }, */
};
</script>

<style lang="scss">
@import '~/assets/css/_colors.scss';

/*.image-wrap {
  min-height: 100%;
  width: 100%;
}*/

// lazy image inicio
.v-lazy-image {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  min-height: 351px;
  min-width: 575px;
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
// lazy image fin

/*.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy='loaded'] {
    opacity: 1;
  }
}*/
/*.blog {
  margin-bottom: 2em;
  width: 45vw;
  margin: 10px;

  @media (min-width: $screen-sm) {
    padding-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &:hover {
    .blog__title {
      color: $grey-dark;
    }
  }

  &__title {
    font-family: 'Tiempos Headline', Arial, sans-serif;
    color: $primary;
    padding-top: 1rem;
    font-size: 1.1rem;
    transition: color 0.3s;
  }

  &__description {
    margin: 0;
    color: $grey-semi-dark;
  }
}*/
</style>
