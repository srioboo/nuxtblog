<template>
  <div class="blog">
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: article.slug } }"
      class="blog__link"
    >
      <img
        v-if="article.img"
        :src="article.img + imgsmall"
        :alt="article.alt"
        class="blog__img"
        loading="lazy"
      />
      <img
        v-else
        :src="noimage + imgsmall"
        alt="no image"
        class="blog__img"
        loading="lazy"
      />
      <div class="blog__content">
        <h2 class="blog__title">
          {{ article.title }}
        </h2>
        <p class="blog__content__year">
          <!-- por {{ article.author.name }} -->
          {{ formatDate(article.year) }}
        </p>
        <p class="blog__content__description">
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
@import '~/assets/css/_base.scss';

.blog {
  a {
    text-decoration: none;
  }
}

.blog__link {
  display: flex;
  flex-direction: column;
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  &:hover {
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  @include xxl {
    flex-direction: column;
  }

  /*transition-shadow
        duration-150
        ease-in-out
        shadow-sm
        hover:shadow-md
        xxlmax:flex-col*/

  .blog__img {
    /*h-48 xxlmin:w-1/2 xxlmax:w-full object-cover*/
    height: 12rem;
    width: 100%;
    object-fit: cover;
    max-width: 100%;
    @include xxl {
      min-width: 50%;
      max-width: 100%;
      object-fit: cover;
    }
  }
}

.blog__content {
  //p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @include xxl {
    width: 50%;
  }

  .blog__title {
    font-weight: bold;
  }

  .blog__content__year {
    //text-xs
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .blog__content__description {
    //font-bold text-gray-700 text-sm
    font-weight: bold;
    color: $grey-dark;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

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
</style>
