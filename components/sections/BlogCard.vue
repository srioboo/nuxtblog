<script setup>
const blog = defineProps(['article']);

const imgsmall = 'w_810,q_90,f_auto';
const noimage =
  'https://res.cloudinary.com/salrion/image/upload/{{trans}}/salrionblog/glacier.jpg';

function transformImg(img) {
  const timg = img.replace('{{trans}}', imgsmall);
  return timg;
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('es', options);
}
</script>

<template>
  <div class="blog">
    {{ blog.article.imgsmall }}
    <NuxtLink
      :to="{ name: 'blog-slug', params: { slug: blog.article.id } }"
      class="blog__link"
    >
      <img
        v-if="blog.article.img"
        :src="transformImg(blog.article.img)"
        :alt="blog.article.alt"
        class="blog__img"
        loading="lazy"
      />
      <img
        v-else
        :src="transformImg(noimage)"
        alt="no image"
        class="blog__img"
        loading="lazy"
      />
      <div class="blog__content">
        <h2 class="blog__title">
          {{ blog.article.title }}
        </h2>
        <p class="blog__content__year">
          {{ formatDate(article.year) }}
        </p>
        <p class="blog__content__description">
          {{ blog.article.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

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

  .blog__img {
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
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .blog__content__description {
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
