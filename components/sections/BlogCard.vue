<script lang="ts" setup>
import { transformImg, formatDate } from '@/utils/helper';
interface Props {
  id?: string;
  path?: string;
  title?: string;
  date?: string;
  description?: string;
  image?: string;
  alt?: string;
  ogImage?: string;
  tags?: Array<string>;
  published?: boolean;
}

withDefaults(defineProps<Props>(), {
  id: 'no-id',
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: undefined,
  alt: 'no-alt',
  ogImage: undefined,
  tags: () => [],
  published: false,
});
</script>

<template>
  <div class="blog">
    <NuxtLink
      :to="path"
      class="blog__link flex flex-col 2xl:flex-col no-underline"
    >
      <img
        :src="transformImg(image)"
        alt="no image"
        class="h-48 w-1/2 object-cover max-w-full min-w-full"
        loading="lazy"
      />
      <div class="blog__content p-6 flex flex-col justify-between w-full">
        <h2 class="blog__title font-bold">
          {{ title }}
        </h2>
        <p class="blog__content__year text-xs">
          {{ formatDate(date) }}
        </p>
        <p
          class="blog__content__description text-sm font-bold text-gray-600 w-full"
        >
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
// @import '~/assets/css/_base.scss';

/* .blog {
  a {
    text-decoration: none;
  }
}*/

.blog__link {
  // display: flex;
  // flex-direction: column;
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

  /*@include xxl {
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
  }*/
}

.blog__content {
  // padding: 1.5rem;
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // width: 100%;
  // @include xxl {
  //   width: 50%;
  // }

  // .blog__title {
  //   font-weight: bold;
  // }

  // .blog__content__year {
  //   font-size: 0.75rem;
  //   line-height: 1rem;
  // }
  // .blog__content__description {
  //   font-weight: bold;
  //   color: $grey-dark;
  //   font-size: 0.875rem;
  //   line-height: 1.25rem;
  // }
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
